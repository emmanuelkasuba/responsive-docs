import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, BookOpen, Target, ArrowRight, Lock, Globe, Zap, Sparkles, TrendingUp, Award } from 'lucide-react';
import logo from '@/assets/logo.png';

const Index = () => {
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

  return (
    <div className="flex flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200 text-sm">
                  <Sparkles className="h-4 w-4" />
                  Welcome to Cyber Ed Inc.
                </div>
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Making Cybersecurity{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Simple & Accessible
                  </span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
                  Transforming complex cybersecurity concepts into clear, practical learning experiences for everyone.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleExplorePrograms}
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 font-semibold shadow-lg"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={handleGetStarted}
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <img 
                    src={logo} 
                    alt="Cyber Ed Inc." 
                    className="w-80 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">9+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Cyber Ed Inc.?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make cybersecurity education accessible, practical, and engaging for everyone
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Simple Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  We break down complex cybersecurity concepts into easy-to-understand lessons
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Practical Skills</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Hands-on experience with real-world cybersecurity scenarios and tools
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Community Focus</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Building a community of cybersecurity-aware individuals and organizations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Platform</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover everything we have to offer for your cybersecurity education journey
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50/30 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => navigate('/about')}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">About Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about our mission, vision, and teaching approach
                </p>
                <Button variant="link" className="text-blue-600 p-0 h-auto">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50/30 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => navigate('/services')}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Our Programs</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore our comprehensive cybersecurity education programs
                </p>
                <Button variant="link" className="text-green-600 p-0 h-auto">
                  View Programs <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50/30 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => navigate('/contact')}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Get Started</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Contact us to start your cybersecurity education journey
                </p>
                <Button variant="link" className="text-purple-600 p-0 h-auto">
                  Contact Us <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm mb-6">
            <Award className="h-4 w-4" />
            Start Your Journey Today
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Digital Future?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us in our mission to make cybersecurity education accessible to everyone. 
            Start your learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleExplorePrograms}
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 font-semibold shadow-lg"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleLearnMore}
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold"
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;