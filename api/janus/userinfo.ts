// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authHeader = req.headers.authorization as string | undefined;
  if (!authHeader) return res.status(401).json({ error: 'No token' });

  const janusUrl = process.env.JANUS_URL!;

  try {
    const janusRes = await fetch(`${janusUrl}/oauth2/userinfo`, {
      headers: { Authorization: authHeader },
    });
    const data = await janusRes.json();
    if (!janusRes.ok) return res.status(janusRes.status).json(data);
    return res.json(data);
  } catch (err) {
    console.error('[janus/userinfo]', err);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
