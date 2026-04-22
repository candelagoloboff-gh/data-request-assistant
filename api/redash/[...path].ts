async function runRedashQuery(
  queryId: number,
  params: Record<string, unknown>,
): Promise<Record<string, unknown>[]> {
  const apiKey = process.env.REDASH_API_KEY!;
  const baseUrl = process.env.REDASH_BASE_URL!;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);

  try {
    const res = await fetch(`${baseUrl}/api/queries/${queryId}/results`, {
      method: 'POST',
      headers: {
        Authorization: `Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ parameters: params, max_age: 300 }),
      signal: controller.signal,
    });

    const data = (await res.json()) as {
      query_result?: { data: { rows: Record<string, unknown>[] } };
      job?: { id: string };
    };

    if (data.query_result) {
      return data.query_result.data.rows;
    }

    if (data.job) {
      for (let i = 0; i < 30; i++) {
        await new Promise((r) => setTimeout(r, 800));
        const jobRes = await fetch(`${baseUrl}/api/jobs/${data.job.id}`, {
          headers: { Authorization: `Key ${apiKey}` },
          signal: controller.signal,
        });
        const jobData = (await jobRes.json()) as {
          job: { status: number; query_result_id?: number };
        };
        if (jobData.job.status === 3 && jobData.job.query_result_id) {
          const resultRes = await fetch(
            `${baseUrl}/api/query_results/${jobData.job.query_result_id}`,
            { headers: { Authorization: `Key ${apiKey}` }, signal: controller.signal },
          );
          const result = (await resultRes.json()) as {
            query_result: { data: { rows: Record<string, unknown>[] } };
          };
          return result.query_result.data.rows;
        }
        if (jobData.job.status === 4) throw new Error('Query failed');
      }
    }
  } finally {
    clearTimeout(timeout);
  }
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const segments = (req.query.path ?? req.query['...path']) as string | string[] | undefined;
  const path = Array.isArray(segments) ? segments.join('/') : (segments ?? '');

  if (path !== 'variables') {
    return res.status(404).json({ error: 'Not found' });
  }

  const { instanceId, type, searchTerm } = req.query as Record<string, string>;

  if (!type) {
    return res.status(400).json({ error: 'type is required' });
  }

  const QUERY_IDS: Record<string, number> = {
    pr_cycles: 37586,
    goals_cycles: 37587,
    search_instance: 37588,
    segmentation: 37101,
  };

  const queryId = QUERY_IDS[type];
  if (!queryId) {
    return res.status(400).json({ error: `Unknown type: ${type}` });
  }

  try {
    let params: Record<string, unknown> = {};

    if (type === 'search_instance') {
      params = { search: searchTerm ?? '' };
    } else {
      params = { instance_id: Number(instanceId) };
    }

    const rows = await runRedashQuery(queryId, params);
    return res.json(rows);
  } catch (err) {
    console.error('[redash/variables]', err);
    return res.status(500).json({ error: 'Error al consultar Redash' });
  }
}
