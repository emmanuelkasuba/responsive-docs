import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Zap, Lock, Users, BookOpen, Target, CheckCircle, ArrowRight, Shield, Sparkles, GraduationCap, Globe } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  const handleLearnOurApproach = () => {
    navigate('/approach');
  };

  const services = [
    {
      icon: Zap,
      title: 'Cyber Literacy',
      description: 'Beginner-friendly fundamentals of cybersecurity for all ages',
      features: [
        'Introduction to cybersecurity concepts',
        'Common threats and vulnerabilities',
        'Basic protection strategies',
        'Safe online practices',
        'Certificate of completion'
      ],
      duration: '1hr 30 min',
      level: 'Beginner',
      format: 'Interactive workshops',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lock,
      title: 'Digital Ethics',
      description: 'Exploring the ethical implications of technology use',
      features: [
        'Understanding digital privacy rights',
        'Data protection best practices',
        'Social media security',
        'Recognizing misinformation and scams',
        'Ethical decision-making in digital spaces'
      ],
      duration: '1hr 30 min',
      level: 'All levels',
      format: 'Discussion-based sessions',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Students and Clubs',
      description: 'Customized learning for students and coding clubs',
      features: [
        'Hands-on coding challenges',
        'Interactive discussions on cybersecurity topics',
        'Student competition exercises',
        'Taking ideas from student projects',
        'Short quizzes and assessments'
      ],
      duration: '1hr 30 min',
      level: 'Students of all courses and clubs',
      format: 'Flexible delivery',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Practical Learning',
      description: 'Hands-on workshop-like discussions, simulations, and case studies that build confidence and skills',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Team projects and problem-solving challenges that mirror real cybersecurity environments',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Target,
      title: 'Clear Communication',
      description: 'Complex concepts explained in simple terms, avoiding overwhelming technical jargon',
      color: 'bg-purple-100 text-purple-600'
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
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200 text-sm mb-8">
              <Shield className="h-4 w-4" />
              Comprehensive Cybersecurity Education
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Core Offerings
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cybersecurity education programs designed to meet students where they are 
              and guide them towards digital security expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-gray-600">Core Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1.5h</div>
              <div className="text-gray-600">Session Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Practical Focus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">All</div>
              <div className="text-gray-600">Skill Levels</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored cybersecurity education designed for different learning needs and backgrounds
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="border-0 shadow-xl bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Service Header & Info */}
                    <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-start gap-6 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-gray-900 mb-3">{service.title}</CardTitle>
                          <CardDescription className="text-gray-600 text-lg leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                          {service.duration}
                        </Badge>
                        <Badge className="bg-green-50 text-green-700 border-green-200 font-medium">
                          {service.level}
                        </Badge>
                        <Badge className="bg-purple-50 text-purple-700 border-purple-200 font-medium">
                          {service.format}
                        </Badge>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-4">What's Included:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div className={`bg-gradient-to-br ${service.color} text-white p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Ready to Learn?</h3>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                          Join our next session and start your cybersecurity journey today.
                        </p>
                        <Button 
                          onClick={handleGetInTouch}
                          className="bg-white text-gray-900 hover:bg-gray-100 font-semibold"
                        >
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Programs?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our unique approach combines traditional teaching with modern, practical applications. 
              Language is not a barrier to learning cybersecurity with us.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title} className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-blue-50/30 hover:shadow-xl transition-all duration-300 group hover:translate-y-[-8px] text-center">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What You'll Achieve</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
                  <GraduationCap className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Foundational Knowledge</h3>
                    <p className="text-gray-600">Solid understanding of cybersecurity principles and practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
                  <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Practical Skills</h3>
                    <p className="text-gray-600">Hands-on experience with real-world security scenarios</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
                  <Globe className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Digital Confidence</h3>
                    <p className="text-gray-600">Increased confidence in navigating the digital world safely</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Start Your Journey</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Join hundreds of students who have transformed their digital safety knowledge with our accessible programs.
                </p>
                <div className="space-y-3">
                  <Button 
                    onClick={handleGetInTouch}
                    className="w-full bg-white text-blue-700 hover:bg-blue-50 font-semibold"
                  >
                    Get Started Today
                  </Button>
                  <Button 
                    onClick={handleLearnOurApproach}
                    variant="outline" 
                    className="w-full border-white/30 text-white hover:bg-white/10"
                  >
                    Learn Our Approach
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm mb-6">
            <Target className="h-4 w-4" />
            Ready to Begin?
          </div>
          <h2 className="text-4xl font-bold mb-6">Start Your Cybersecurity Journey</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us to discuss how we can customize our programs to meet your specific needs and goals. 
            Let's build a more secure digital future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleGetInTouch}
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 font-semibold shadow-lg"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleLearnOurApproach}
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold"
            >
              Our Teaching Approach
            </Button>
          </div>
          <p className="text-blue-200 mt-8 text-sm">
            We offer flexible scheduling and customized program options
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;