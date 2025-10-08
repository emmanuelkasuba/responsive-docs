import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, BookOpen, Target, ArrowRight, Lock, Globe, Zap } from 'lucide-react';
import logo from '@/assets/logo.png';

const Home = () => {
  const navigate = useNavigate();

  const handleExplorePrograms = () => {
    navigate('/services');
  };

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleViewAllPrograms = () => {
    navigate('/services');
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,100,255,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-fade-in">
                  Making Cybersecurity{' '}
                  <span className="text-brand-yellow drop-shadow-glow">Simple & Accessible</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  We translate technical complexity into clear, practical learning experiences for The lovely public.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleExplorePrograms}
                  size="lg" 
                  variant="flashy"
                >
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={handleGetStarted}
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-blue-dark"
                >
                  Contact us
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow to-brand-blue rounded-full blur-3xl opacity-40 animate-pulse" />
                <img 
                  src={logo} 
                  alt="Group 7 Cyber Ed Inc." 
                  className="relative w-80 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="mx-auto w-16 h-16 bg-gradient-blue-yellow rounded-full flex items-center justify-center mb-4 shadow-glow">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Individuals</h3>
              <p className="text-muted-foreground">Each individual of group 7 has held there responsibity well.</p>
            </div>
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="mx-auto w-16 h-16 bg-gradient-blue-yellow rounded-full flex items-center justify-center mb-4 shadow-glow">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Participation </h3>
              <p className="text-muted-foreground">Practipation has been execelent, each group member contributes there ideas well.</p>
            </div>
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="mx-auto w-16 h-16 bg-gradient-blue-yellow rounded-full flex items-center justify-center mb-4 shadow-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Enthusiasim </h3>
              <p className="text-muted-foreground">Each memeber has an interest in Cybersecurity and the group projects </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-2 border-brand-blue/20 shadow-cyber bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-gradient-blue-yellow rounded-lg flex items-center justify-center mb-4 shadow-glow">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-brand-blue-dark">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To Ensure that everyone, regardless of background or technical skill, has access to high-quality cybersecurity education that empowers them to navigate the digital world safely and confidently.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-yellow/20 shadow-yellow bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-gradient-yellow rounded-lg flex items-center justify-center mb-4 shadow-yellow">
                  <Globe className="h-6 w-6 text-brand-blue-dark" />
                </div>
                <CardTitle className="text-2xl text-brand-blue-dark">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A society where Cyber literacy is universal, and every individual has the confidence to safeguard information, protect communities, and responsibly engage with technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Offerings</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity education programs tailored to different learning needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-brand-blue/20 shadow-cyber hover:shadow-glow transition-all duration-300 bg-gradient-card group hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-blue-yellow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-glow">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark">Cyber Literacy</CardTitle>
                <CardDescription>
                  Beginner-friendly lessons covering the foundations of cybersecurity
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-brand-yellow/20 shadow-yellow hover:shadow-glow transition-all duration-300 bg-gradient-card group hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-yellow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-yellow">
                  <Lock className="h-6 w-6 text-brand-blue-dark" />
                </div>
                <CardTitle className="text-brand-blue-dark">Digital Ethics & Privacy</CardTitle>
                <CardDescription>
                  Building awareness on online behavior, personal data protection, and surveillance ethics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-brand-blue/20 shadow-cyber hover:shadow-glow transition-all duration-300 bg-gradient-card group hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-blue-yellow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-glow">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-brand-blue-dark">Club Partnerships</CardTitle>
                <CardDescription>
                  Customized learning modules for academic coding clubs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleViewAllPrograms}
              size="lg" 
              variant="flashy"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Cyber Education Matters</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-xl leading-relaxed">
              In a time where digital threats evolve daily, understanding cybersecurity is as essential as reading and writing. 
              Group 7 Cyber Ed Inc. is committed to building strong foundations—ensuring that the next generation is not just 
              technology users but responsible digital citizens and protectors of cyberspace.
            </p>
          </div>
          <div className="mt-8">
            <Button 
              onClick={handleLearnMore}
              size="lg" 
              variant="outline"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;