import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Home, Users, BookOpen } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleExploreServices = () => {
    navigate('/services');
  };

  const handleMeetTeam = () => {
    navigate('/team');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted/30 p-4">
      <div className="text-center max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-brand-blue to-cyber-accent bg-clip-text text-transparent mb-4">
            Welcome to Group 7 Cyber Ed Inc.
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your gateway to accessible cybersecurity education and innovative learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div 
            className="p-6 rounded-lg border border-border hover:border-brand-blue/50 transition-all duration-300 hover:scale-105 cursor-pointer bg-card"
            onClick={handleExploreServices}
          >
            <BookOpen className="h-12 w-12 text-brand-blue mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Our Services</h3>
            <p className="text-sm text-muted-foreground">
              Explore our comprehensive cybersecurity education programs
            </p>
          </div>

          <div 
            className="p-6 rounded-lg border border-border hover:border-cyber-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer bg-card"
            onClick={handleMeetTeam}
          >
            <Users className="h-12 w-12 text-cyber-accent mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Meet the Team</h3>
            <p className="text-sm text-muted-foreground">
              Get to know the passionate educators behind our mission
            </p>
          </div>

          <div 
            className="p-6 rounded-lg border border-border hover:border-brand-blue/50 transition-all duration-300 hover:scale-105 cursor-pointer bg-card"
            onClick={handleLearnMore}
          >
            <Home className="h-12 w-12 text-brand-blue mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Learn about our mission, vision, and educational philosophy
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={handleGoHome}
            size="lg" 
            variant="flashy" 
            className="min-w-[200px]"
          >
            Go to Homepage
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Start exploring our cybersecurity education platform
          </p>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Making cybersecurity simple, accessible, and impactful for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;