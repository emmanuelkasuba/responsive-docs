import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, BookOpen, Target, ArrowRight, Lock, Globe, Zap, Sparkles, TrendingUp, Award } from 'lucide-react';
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

  const stats = [
    {
      icon: Users,
      value: '9+',
      label: 'Dedicated Team Members',
      description: 'Each individual of group 7 has held their responsibility well'
    },
    {
      icon: BookOpen,
      value: '100%',
      label: 'Active Participation',
      description: 'Excellent participation with every member contributing ideas'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Enthusiasm & Commitment',
      description: 'Every member shows strong interest in cybersecurity and group projects'
    }
  ];

  const services = [
    {
      icon: Zap,
      title: 'Cyber Literacy',
      description: 'Beginner-friendly lessons covering the foundations of cybersecurity',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lock,
      title: 'Digital Ethics & Privacy',
      description: 'Building awareness on online behavior, personal data protection, and surveillance ethics',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Club Partnerships',
      description: 'Customized learning modules for academic coding clubs',
      color: 'from-purple-500 to-purple-600'
    }
  ];

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
                  Cybersecurity Education Initiative
                </div>
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Making Cybersecurity{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Simple & Accessible
                  </span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
                  We translate technical complexity into clear, practical learning experiences for everyone.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleExplorePrograms}
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 font-semibold shadow-lg"
                >
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={handleGetStarted}
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <img 
                    src={logo} 
                    alt="Group 7 Cyber Ed Inc." 
                    className="w-80 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team Excellence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated cybersecurity educators committed to making digital safety accessible to all
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-blue-50/30 text-center hover:shadow-xl transition-all duration-300 group hover:translate-y-[-8px]">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="space-y-3">
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <h3 className="text-xl font-semibold text-gray-800">{stat.label}</h3>
                      <p className="text-gray-600 leading-relaxed">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Driving cybersecurity education forward with clear mission and vision
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50/30 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To ensure that everyone, regardless of background or technical skill, has access to 
                  high-quality cybersecurity education that empowers them to navigate the digital world 
                  safely and confidently.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50/30 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  A society where cyber literacy is universal, and every individual has the confidence 
                  to safeguard information, protect communities, and responsibly engage with technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Offerings</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity education programs tailored to different learning needs
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:translate-y-[-8px]">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleViewAllPrograms}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 font-semibold shadow-lg"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Why It Matters Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200 text-sm mb-8">
            <Award className="h-4 w-4" />
            Essential Digital Skills
          </div>
          <h2 className="text-4xl font-bold mb-8">Why Cyber Education Matters</h2>
          <div className="space-y-6">
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              In a time where digital threats evolve daily, understanding cybersecurity is as essential as reading and writing. 
            </p>
            <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Group 7 Cyber Ed Inc. is committed to building strong foundations—ensuring that the next generation is not just 
              technology users but responsible digital citizens and protectors of cyberspace.
            </p>
          </div>
          <div className="mt-8">
            <Button 
              onClick={handleLearnMore}
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Impact Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Building a Cyber-Secure Future</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Practical Skills</h3>
                    <p className="text-gray-600">Hands-on learning that prepares students for real-world challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Community Focus</h3>
                    <p className="text-gray-600">Empowering individuals to protect themselves and their communities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Collaborative Approach</h3>
                    <p className="text-gray-600">Working together to create comprehensive cybersecurity solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-2xl p-8 border border-blue-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Join us in our mission to make cybersecurity education accessible to everyone.
                </p>
                <Button 
                  onClick={handleGetStarted}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Contact Us Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;