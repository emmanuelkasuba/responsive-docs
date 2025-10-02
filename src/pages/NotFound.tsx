import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted/30 p-4">
      <div className="text-center max-w-md mx-auto space-y-8">
        {/* Animated 404 Graphic */}
        <div className="relative">
          <div className="text-9xl font-bold bg-gradient-to-r from-brand-blue to-cyber-accent bg-clip-text text-transparent">
            404
          </div>
          <div className="absolute inset-0 text-9xl font-bold text-foreground/5 blur-sm">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <code className="text-sm text-muted-foreground break-all">
              Requested URL: {location.pathname}
            </code>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={handleGoHome}
              size="lg"
              className="flex-1 min-w-[140px]"
            >
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
            <Button 
              onClick={handleGoBack}
              size="lg"
              variant="outline"
              className="flex-1 min-w-[140px]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={handleExploreServices}
              size="lg"
              variant="secondary"
              className="flex-1 min-w-[140px]"
            >
              <Search className="mr-2 h-4 w-4" />
              Explore Services
            </Button>
            <Button 
              onClick={handleContactSupport}
              size="lg"
              variant="outline"
              className="flex-1 min-w-[140px]"
            >
              <Mail className="mr-2 h-4 w-4" />
              Report Issue
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">Popular Pages:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/about')}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/services')}
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/team')}
            >
              Team
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/contact')}
            >
              Contact
            </Button>
          </div>
        </div>

        {/* Support Information */}
        <div className="bg-muted/30 p-4 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            If you believe this is an error, please contact our support team at{' '}
            <button 
              onClick={handleContactSupport}
              className="text-brand-blue hover:underline"
            >
              kasubaemmanuel@gmail.com
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;