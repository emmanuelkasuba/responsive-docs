// This file has been removed as part of news API deletion.
// The original content of the file was as follows:

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const API_KEY = process.env.NEWS_API_KEY;
    
    if (!API_KEY) {
      return res.status(500).json({ 
        error: 'News API key not configured',
        articles: []
      });
    }

    const query = 'cybersecurity OR "cyber security" OR hacking OR ransomware OR phishing OR malware OR "data breach"';
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&pageSize=12&apiKey=${API_KEY}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status}`);
    }

    const data = await response.json();
    
    // Filter out articles without titles
    const validArticles = data.articles
      .filter(article => article.title && article.title !== '[Removed]')
      .map(article => ({
        ...article,
        urlToImage: article.urlToImage || getFallbackImage(article.title)
      }));

    res.status(200).json({
      articles: validArticles,
      totalResults: validArticles.length
    });

  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ 
      error: 'Failed to fetch news from API',
      articles: []
    });
  }
}

function getFallbackImage(title) {
  const cyberImages = [
    '/images/news/cyber-threat.jpg',
    '/images/news/ransomware.jpg',
    '/images/news/phishing.jpg',
    '/images/news/data-protection.jpg'
  ];
  
  const hash = title.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  return cyberImages[Math.abs(hash) % cyberImages.length];
}

// api/news.js
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const API_KEY = process.env.NEWS_API_KEY;
    
    if (!API_KEY) {
      return res.status(500).json({ 
        error: 'News API key not configured',
        articles: []
      });
    }

    const query = 'cybersecurity OR "cyber security" OR hacking OR ransomware OR phishing OR malware OR "data breach"';
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&pageSize=12&apiKey=${API_KEY}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status}`);
    }

    const data = await response.json();
    
    // Filter out articles without titles
    const validArticles = data.articles
      .filter(article => article.title && article.title !== '[Removed]')
      .map(article => ({
        ...article,
        urlToImage: article.urlToImage || getFallbackImage(article.title)
      }));

    res.status(200).json({
      articles: validArticles,
      totalResults: validArticles.length
    });

  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ 
      error: 'Failed to fetch news from API',
      articles: []
    });
  }
}

function getFallbackImage(title) {
  const cyberImages = [
    '/images/news/cyber-threat.jpg',
    '/images/news/ransomware.jpg',
    '/images/news/phishing.jpg',
    '/images/news/data-protection.jpg'
  ];
  
  const hash = title.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  return cyberImages[Math.abs(hash) % cyberImages.length];
}
