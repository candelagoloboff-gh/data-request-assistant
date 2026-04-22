// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const janusUrl = process.env.JANUS_URL!;

  try {
    const janusRes = await fetch(`${janusUrl}/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(req.body as Record<string, string>).toString(),
    });

    const data = await janusRes.json();

    if (!janusRes.ok) {
      return res.status(janusRes.status).json(data);
    }

    return res.json(data);
  } catch (err) {
    console.error('[janus/token]', err);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
