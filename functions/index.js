const functions = require('firebase-functions');
const fetch = require('node-fetch');

// Replace with your News API key
const NEWS_API_KEY = functions.config().newsapi.key;
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?category=technology&q=cybersecurity&language=en&pageSize=12&apiKey=${NEWS_API_KEY}`;

exports.getNews = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }
  try {
    const response = await fetch(NEWS_API_URL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});
