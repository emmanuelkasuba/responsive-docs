import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Search, Mail, Shield, Globe, Users, BookOpen, Zap } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleContactSupport = () => {
    window.location.href = 'mailto:kasubaemmanuel@gmail.com?subject=404 Error - Page Not Found&body=I encountered a 404 error when trying to access: ' + location.pathname;
  };

  const handleExploreServices = () => {
    navigate('/services');
  };

  const quickLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Users },
    { path: '/services', label: 'Services', icon: Shield },
    { path: '/team', label: 'Our Team', icon: Users },
    { path: '/contact', label: 'Contact', icon: Mail },
    { path: '/approach', label: 'Our Approach', icon: BookOpen }
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4">
      <div className="text-center max-w-2xl mx-auto space-y-8">
        {/* Enhanced 404 Graphic */}
        <div className="relative mb-8">
          <div className="relative inline-block">
            <div className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
              404
            </div>
            <div className="absolute inset-0 text-8xl sm:text-9xl font-bold text-white/10 blur-sm z-0">
              404
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl z-0"></div>
          </div>
          <div className="mt-4">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4"></div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Page Not Found</h1>
            <p className="text-blue-200 text-lg leading-relaxed max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </div>
        </div>

        {/* Error Details Card */}
        <Card className="border-0 shadow-lg bg-white/10 backdrop-blur-sm text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Search className="h-5 w-5 text-blue-300" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white">Requested URL</h3>
                <code className="text-blue-200 text-sm break-all">
                  {location.pathname}
                </code>
              </div>
            </div>
            <p className="text-blue-200 text-sm">
              This error has been logged and our team has been notified.
            </p>
          </CardContent>
        </Card>

        {/* Main Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGoHome}
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 font-semibold shadow-lg flex-1 min-w-[160px]"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
            <Button 
              onClick={handleGoBack}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold flex-1 min-w-[160px]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleExploreServices}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg flex-1 min-w-[160px]"
            >
              <Shield className="mr-2 h-5 w-5" />
              Explore Services
            </Button>
            <Button 
              onClick={handleContactSupport}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold flex-1 min-w-[160px]"
            >
              <Mail className="mr-2 h-5 w-5" />
              Report Issue
            </Button>
          </div>
        </div>

        {/* Quick Navigation */}
        <Card className="border-0 shadow-lg bg-white/10 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-white mb-4 text-center">Quick Navigation</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={link.path}
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate(link.path)}
                    className="justify-start text-white hover:bg-white/10 h-auto py-3 px-4"
                  >
                    <IconComponent className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{link.label}</span>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Support Information */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-blue-300" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-white mb-2">Need Immediate Help?</h4>
                <p className="text-blue-200 text-sm mb-3">
                  Our support team is here to help you get back on track quickly.
                </p>
                <Button 
                  onClick={handleContactSupport}
                  variant="outline" 
                  size="sm"
                  className="border-blue-300 text-blue-300 hover:bg-blue-500/20"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cybersecurity Tip */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-green-400" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-white text-sm">Cybersecurity Tip</h4>
              <p className="text-blue-200 text-xs">
                Always verify URLs before entering sensitive information. Look for HTTPS and legitimate domain names.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-blue-300 text-sm">
            Cyber Ed Inc. • Making Cybersecurity Simple & Accessible
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;