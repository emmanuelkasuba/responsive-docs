import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
import { 
  Newspaper, 
  ExternalLink, 
  Calendar,
  User,
  Shield,
  AlertTriangle,
  RefreshCw,
  ArrowRight
} from 'lucide-react';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
  author: string;
}

const News = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for fallback
  const mockArticles: NewsArticle[] = [
    {
      title: "New Zero-Day Vulnerability Discovered in Popular Web Framework",
      description: "Security researchers have identified a critical zero-day vulnerability affecting millions of websites. Immediate patching is recommended.",
      url: "#",
      urlToImage: "/images/news/cyber-threat.jpg",
      publishedAt: new Date().toISOString(),
      source: { name: "Cyber Security News" },
      author: "Security Research Team"
    },
    {
      title: "Global Ransomware Attack Targets Healthcare Institutions",
      description: "A coordinated ransomware campaign has impacted hospitals worldwide, highlighting the need for robust cybersecurity in critical infrastructure.",
      url: "#",
      urlToImage: "/images/news/ransomware.jpg",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: { name: "Health Tech Security" },
      author: "Medical Security Watch"
    },
    {
      title: "AI-Powered Phishing Attacks Increase by 300% in Q4 2024",
      description: "Cybercriminals are leveraging artificial intelligence to create highly convincing phishing emails that bypass traditional security filters.",
      url: "#",
      urlToImage: "/images/news/phishing.jpg",
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      source: { name: "AI Security Digest" },
      author: "Dr. Sarah Chen"
    },
    {
      title: "New Data Protection Regulations Come Into Effect",
      description: "Updated global data protection standards require organizations to implement stronger security measures for customer data handling.",
      url: "#",
      urlToImage: "/images/news/data-protection.jpg",
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      source: { name: "Privacy Today" },
      author: "Legal Tech Review"
    }
  ];

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    
    try {
  // Use Vercel API route
  const apiUrl = '/api/news';
  const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.articles && data.articles.length > 0) {
        const validArticles = data.articles
          .filter((article: NewsArticle) => article.title && article.title !== '[Removed]')
          .map((article: NewsArticle) => ({
            ...article,
            urlToImage: article.urlToImage || getFallbackImage(article.title)
          }));
        
        if (validArticles.length > 0) {
          setArticles(validArticles);
          return;
        }
      }
      
      // If no valid articles, fall back to mock data
      throw new Error('No valid articles found');
      
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load live news. Showing cybersecurity insights.');
      setArticles(mockArticles);
    } finally {
      setLoading(false);
    }
  };

  // Function to generate fallback images based on article content
  const getFallbackImage = (title: string) => {
    const cyberImages = [
      '/images/news/cyber-threat.jpg',
      '/images/news/ransomware.jpg',
      '/images/news/phishing.jpg',
      '/images/news/data-protection.jpg'
    ];
    
    // Simple hash based on title to pick consistent image
    const hash = title.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    return cyberImages[Math.abs(hash) % cyberImages.length];
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return formatDate(dateString);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted/50 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full mb-6 border border-brand-blue/20">
              <Newspaper className="h-4 w-4" />
              <span className="text-sm font-medium">Cybersecurity Insights</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Cybersecurity News
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest cybersecurity threats, vulnerabilities, and industry developments.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header with Refresh Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Latest Threats & Updates</h2>
              <p className="text-muted-foreground">
                Cybersecurity news and threat intelligence
              </p>
            </div>
            <Button 
              onClick={fetchNews}
              disabled={loading}
              variant="outline"
              className="flex items-center gap-2"
            >
              {loading ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
              {loading ? 'Refreshing...' : 'Refresh News'}
            </Button>
          </div>

          {/* Status Message */}
          {error && (
            <Card className="border-blue-200 bg-blue-50 mb-8">
              <CardContent className="p-4 flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-blue-800 font-medium">{error}</p>
                  <p className="text-blue-700 text-sm">
                    Using curated cybersecurity content
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="border-0 shadow-card bg-gradient-card animate-pulse">
                  <CardHeader className="pb-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-20 bg-gray-200 rounded mb-4"></div>
                    <div className="flex justify-between">
                      <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* News Grid */}
          {!loading && articles.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-card bg-gradient-card hover:shadow-cyber transition-all duration-300 group hover:scale-105"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20">
                        {article.source.name}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {getTimeAgo(article.publishedAt)}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-brand-blue transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={article.urlToImage} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = getFallbackImage(article.title);
                        }}
                      />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {article.description || 'No description available.'}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span className="line-clamp-1">
                          {article.author || article.source.name}
                        </span>
                      </div>
                      <Button 
                        asChild 
                        variant="ghost" 
                        size="sm"
                        className="text-brand-blue hover:text-brand-blue-dark hover:bg-brand-blue/10"
                      >
                        <a 
                          href={article.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          Read More
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Rest of your component remains the same */}
      {/* Cybersecurity Tips and CTA sections */}
    </div>
  );
};

export default News;