const NOTION_API = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

const IMPACT_MAP: Record<number, string> = {
  1: '1- 🚨Critical: 100% blocking for implementation / Churn risk',
  2: '2- 🟥 High: parcial blocker / severely affects a key module',
  3: '3- 🟧 Important: not blocking but it has high impact on the customer experience',
  4: '4- 🟩 Necessary: middle impact / has workaround',
  5: '5- 🟢 Improvement: nice-to-have / optimization',
};

const DIFFICULTY_MAP: Record<string, string> = {
  'Muy bajo': 'Muy bajo (duplicar una query o proceso existente)',
  Bajo: 'Bajo (tomo medio día o menos)',
  Medio: 'Medio (más de medio día/casi un día)',
  Alto: 'Alto (toma más de un día y retrabajo)',
  'Muy alto': 'Muy alto (toma días repreguntas y retrabajo)',
};

type CardData = {
  name: string;
  request_description: string;
  instance_id: string;
  nombre_comunidad?: string;
  miniapps?: string[];
  type_of_solution: string;
  difficulty: string;
  impact: number;
  churn_flag?: boolean;
  desired_eta?: string;
  proposed_solution: string;
  featuring_team?: string;
  selected_variables?: Record<string, unknown>;
  conversation?: string;
  file_urls?: string[];
  images_count?: number;
  similar_cards?: { name: string; url: string }[];
};

function notionText(content: string) {
  return [{ type: 'text', text: { content: content.slice(0, 2000) } }];
}

function buildProposedSolution(card: CardData): string {
  const parts: string[] = [];

  if (card.featuring_team) {
    parts.push(`Featuring: ${card.featuring_team}`);
  }

  if (card.selected_variables && Object.keys(card.selected_variables).length > 0) {
    const labels = Object.entries(card.selected_variables)
      .filter(([k]) => k.endsWith('_label'))
      .map(([k, v]) => `${k.replace('_label', '').replace(/_/g, ' ')}: ${v}`)
      .join(', ');
    if (labels) parts.push(`Variables: ${labels}`);
  }

  if (parts.length > 0) parts.push('');
  parts.push(card.proposed_solution);
  return parts.join('\n');
}

function buildRequestDescription(card: CardData): string {
  const parts: string[] = [card.request_description];
  if (card.images_count) {
    parts.push(`\n\n[${card.images_count} imagen${card.images_count > 1 ? 'es' : ''} adjuntada${card.images_count > 1 ? 's' : ''} en el chat]`);
  }
  if (card.conversation) {
    parts.push('\n\n--- Conversación completa ---\n');
    parts.push(card.conversation);
  }
  return parts.join('');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleSimilar(req: any, res: any) {
  const miniapps: string[] = req.body?.miniapps ?? [];
  if (!miniapps.length) return res.json([]);

  try {
    const miniappsFilter = miniapps.map((name) => ({
      property: 'Miniapps related',
      multi_select: { contains: name },
    }));

    const body: Record<string, unknown> = {
      filter: miniappsFilter.length === 1 ? miniappsFilter[0] : { or: miniappsFilter },
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
      page_size: 2,
    };

    const notionRes = await fetch(`${NOTION_API}/databases/${process.env.NOTION_BOARD_DB_ID!}/query`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY!}`,
        'Notion-Version': NOTION_VERSION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!notionRes.ok) return res.json([]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = (await notionRes.json()) as { results: any[] };
    const cards = data.results.map((page) => ({
      id: page.id,
      url: page.url,
      name: page.properties?.Name?.title?.[0]?.plain_text ?? '(sin título)',
      type_of_solution: page.properties?.['Type of solution']?.select?.name ?? '',
      miniapps: (page.properties?.['Miniapps related']?.multi_select ?? []).map((s: { name: string }) => s.name),
    }));

    return res.json(cards);
  } catch {
    return res.json([]);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const segments = (req.query.path ?? req.query['...path']) as string | string[] | undefined;
  const path = Array.isArray(segments) ? segments.join('/') : (segments ?? '');

  if (path === 'similar') {
    return handleSimilar(req, res);
  }

  if (path !== 'cards') {
    return res.status(404).json({ error: 'Not found' });
  }

  try {
    const card = req.body as CardData;

    const impactLabel = IMPACT_MAP[card.impact] ?? IMPACT_MAP[4];
    const difficultyLabel = DIFFICULTY_MAP[card.difficulty] ?? card.difficulty;

    const properties: Record<string, unknown> = {
      Name: { title: notionText(card.name) },
      'Request description': { rich_text: notionText(buildRequestDescription(card)) },
      instanceID: { rich_text: notionText(card.instance_id) },
      Impact: { select: { name: impactLabel } },
      'Type of solution': { select: { name: card.type_of_solution } },
      Difficulty: { select: { name: difficultyLabel } },
      'Proposed solution': { rich_text: notionText(buildProposedSolution(card)) },
      'Churn Flag': { checkbox: !!card.churn_flag },
    };

    if (card.nombre_comunidad) {
      properties['Nombre Comunidad'] = { rich_text: notionText(card.nombre_comunidad) };
    }

    if (card.miniapps?.length) {
      properties['Miniapps related'] = {
        multi_select: card.miniapps.map((name) => ({ name })),
      };
    }

    if (card.desired_eta) {
      properties['Desired ETA'] = { date: { start: card.desired_eta } };
    }

    if (card.file_urls?.length) {
      // Text property — user changed field type to Text in Notion
      properties['Archivos y multimedia'] = {
        rich_text: notionText(card.file_urls.join('\n')),
      };
    }

    if (card.similar_cards?.length) {
      properties['Casos similares'] = {
        rich_text: notionText(card.similar_cards.map((sc) => `${sc.name} ${sc.url}`).join('\n')),
      };
    }

    const makeRequest = async (props: Record<string, unknown>) => {
      return fetch(`${NOTION_API}/pages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY!}`,
          'Notion-Version': NOTION_VERSION,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ parent: { database_id: process.env.NOTION_BOARD_DB_ID! }, properties: props }),
      });
    };

    let notionRes = await makeRequest(properties);

    if (!notionRes.ok) {
      const errorText = await notionRes.text();
      console.error('[notion/cards] Notion API error:', errorText);

      // Retry without optional properties that may not exist in the database schema
      const safeProps = { ...properties };
      delete safeProps['Archivos y multimedia'];
      delete safeProps['Casos similares'];
      notionRes = await makeRequest(safeProps);

      if (!notionRes.ok) {
        const error2 = await notionRes.text();
        console.error('[notion/cards] Notion API error (retry):', error2);
        return res.status(500).json({ error: 'Error al crear la card en Notion' });
      }
    }

    const page = (await notionRes.json()) as { id: string; url: string };
    return res.json({ id: page.id, url: page.url });
  } catch (err) {
    console.error('[notion/cards]', err);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
