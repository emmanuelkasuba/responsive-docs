
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const NEWS_API_KEY = process.env.NEWSAPI_KEY;
  const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?category=technology&q=cybersecurity&language=en&pageSize=12&apiKey=${NEWS_API_KEY}`;

  try {
    const response = await fetch(NEWS_API_URL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
