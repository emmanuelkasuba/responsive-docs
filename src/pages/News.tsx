import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  ArrowRight,
  Wifi,
  WifiOff
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
  const [isLive, setIsLive] = useState(false);

  // Enhanced mock data with more cybersecurity topics
  const mockArticles: NewsArticle[] = [
    {
      title: "Critical Zero-Day Vulnerability Discovered in Apache Web Server",
      description: "Security researchers have identified a critical zero-day vulnerability affecting Apache HTTP Server versions 2.4.49-2.4.58. Immediate patching is recommended.",
      url: "#",
      urlToImage: "/api/placeholder/400/200?text=Web+Security",
      publishedAt: new Date().toISOString(),
      source: { name: "Security Bulletin" },
      author: "Apache Security Team"
    },
    {
      title: "Global Ransomware Attack Targets Healthcare Institutions",
      description: "A coordinated ransomware campaign has impacted hospitals worldwide, highlighting the urgent need for robust cybersecurity in critical healthcare infrastructure.",
      url: "#",
      urlToImage: "/api/placeholder/400/200?text=Healthcare+Security",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: { name: "Health Tech Security" },
      author: "Medical Security Watch"
    },
    {
      title: "AI-Powered Phishing Attacks Increase by 300% This Quarter",
      description: "Cybercriminals are leveraging advanced AI to create highly convincing phishing emails that bypass traditional security filters and target employees.",
      url: "#",
      urlToImage: "/api/placeholder/400/200?text=AI+Security",
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      source: { name: "AI Security Digest" },
      author: "Dr. Sarah Chen"
    },
    {
      title: "New GDPR Compliance Regulations Take Effect Globally",
      description: "Updated data protection standards require organizations worldwide to implement stronger security measures for customer data handling and privacy.",
      url: "#",
      urlToImage: "/api/placeholder/400/200?text=Data+Privacy",
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      source: { name: "Privacy Today" },
      author: "Global Compliance Watch"
    },
    {
      title: "Supply Chain Attack Compromises Popular NPM Packages",
      description: "Multiple widely-used NPM packages were found to contain malicious code, affecting thousands of applications and websites globally.",
      url: "#",
      urlToImage: "/api/placeholder/400/200?text=Supply+Chain",
      publishedAt: new Date(Date.now() - 345600000).toISOString(),
      source: { name: "Open Source Security" },
      author: "Package Security Team"
    },
    {
      title: "Zero-Trust Architecture Becomes Industry Standard",
      description: "Major tech companies are adopting zero-trust security models as industry best practice for modern enterprise security frameworks.",
      url: "#",
      urlToImage: "/api/placeholder/400/200?text=Zero+Trust",
      publishedAt: new Date(Date.now() - 432000000).toISOString(),
      source: { name: "Enterprise Security" },
      author: "Security Architecture Board"
    }
  ];

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Try to fetch from our Vercel serverless function
      const response = await fetch('/api/fetch-news');
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.articles && data.articles.length > 0) {
        setArticles(data.articles);
        setIsLive(true);
      } else {
        throw new Error('No articles received from API');
      }
      
    } catch (err) {
      console.log('Using mock data:', err);
      // Fallback to mock data with simulated delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setArticles(mockArticles);
      setIsLive(false);
      setError('Live news feed temporarily unavailable. Showing curated cybersecurity content.');
    } finally {
      setLoading(false);
    }
  };

  // Function to generate fallback images
  const getFallbackImage = (title: string) => {
    const cyberImages = [
      '/api/placeholder/400/200?text=Cyber+Threat',
      '/api/placeholder/400/200?text=Security+Alert',
      '/api/placeholder/400/200?text=Data+Breach',
      '/api/placeholder/400/200?text=Network+Security'
    ];
    
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-6 border border-blue-200 dark:border-blue-700">
              {isLive ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
              <span className="text-sm font-medium">
                {isLive ? 'Live Updates' : 'Curated Content'}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl mb-6">
              Cybersecurity News
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest cybersecurity threats, vulnerabilities, and industry developments from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header with Status */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Latest Threats & Updates
                </h2>
                <Badge 
                  variant={isLive ? "default" : "secondary"} 
                  className={isLive ? "bg-green-100 text-green-700 border-green-200" : ""}
                >
                  {isLive ? 'Live Feed' : 'Sample Data'}
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {isLive 
                  ? 'Real-time cybersecurity news and threat intelligence' 
                  : 'Curated cybersecurity insights and best practices'
                }
              </p>
            </div>
            <Button 
              onClick={fetchNews}
              disabled={loading}
              variant="outline"
              className="flex items-center gap-2 border-gray-300 dark:border-gray-600"
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
            <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 mb-8">
              <CardContent className="p-4 flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-blue-800 dark:text-blue-200 font-medium">{error}</p>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    {isLive 
                      ? 'Powered by real-time news API' 
                      : 'Using curated cybersecurity content for demonstration'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800 animate-pulse">
                  <CardHeader className="pb-4">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                    <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                    <div className="flex justify-between">
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/4"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/4"></div>
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
                  className="border-0 shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 group hover:scale-105"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge 
                        variant="secondary" 
                        className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                      >
                        {article.source.name}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3" />
                        {getTimeAgo(article.publishedAt)}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <img 
                        src={article.urlToImage} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = getFallbackImage(article.title);
                        }}
                      />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {article.description || 'No description available.'}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <User className="h-3 w-3" />
                        <span className="line-clamp-1">
                          {article.author || article.source.name}
                        </span>
                      </div>
                      <Button 
                        asChild 
                        variant="ghost" 
                        size="sm"
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30"
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

          {/* Empty State */}
          {!loading && articles.length === 0 && (
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 text-center py-16">
              <CardContent>
                <Newspaper className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No News Available</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                  Unable to fetch cybersecurity news at the moment. Please check your connection and try again.
                </p>
                <Button onClick={fetchNews} variant="outline" className="border-gray-300 dark:border-gray-600">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Cybersecurity Tips Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Essential Cybersecurity Tips</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay protected with these fundamental cybersecurity practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Strong Passwords",
                description: "Use complex, unique passwords and a password manager"
              },
              {
                icon: AlertTriangle,
                title: "Enable 2FA",
                description: "Add an extra security layer with two-factor authentication"
              },
              {
                icon: RefreshCw,
                title: "Regular Updates",
                description: "Keep all software and systems up to date"
              },
              {
                icon: User,
                title: "Stay Vigilant",
                description: "Verify links and attachments before clicking"
              }
            ].map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800 text-center group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900 dark:text-white">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Informed, Stay Protected</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Cybersecurity threats evolve rapidly. Stay updated with the latest developments to protect your digital life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold"
              onClick={fetchNews}
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Refresh News
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 font-semibold"
              asChild
            >
              <a href="/learn">
                Learn Cybersecurity
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;