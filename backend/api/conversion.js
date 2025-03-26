export default async function handler(req, res) {
    // Permitir qualquer origem — ou especifique sua origem se quiser mais segurança
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    // Responder rapidamente se for uma requisição OPTIONS (preflight)
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método não permitido' });
    }
  
    const token = process.env.FB_ACCESS_TOKEN;
    const pixelId = process.env.FB_PIXEL_ID;
  
    const body = {
      event_name: 'PageView',
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: req.headers.referer || '',
      user_data: {}
    };
  
    try {
      const fbRes = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [body] }),
      });
  
      const data = await fbRes.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao enviar evento', details: err.message });
    }
  }
  