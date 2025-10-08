import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Zap, Lock, Users, BookOpen, Target, CheckCircle, ArrowRight } from 'lucide-react';

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
      format: 'Interactive workshops'
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
      duration: '1hrs 30 min',
      level: 'All levels',
      format: 'Discussion-based sessions'
    },
    {
      icon: Users,
      title: 'Students and club',
      description: 'Customized learning for students and coding clubs',
      features: [
        'Hands-on coding challenges',
        'Interactive discussions on cybersecurity topics',
        'Student competition exercises',
        'Taking ideas from students projects',
        'short quizzes and assessments'
      ],
      duration: '1hr 30min',
      level: 'student of all courses and clubs',
      format: 'Flexible delivery'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Core Offerings
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive cybersecurity education programs designed to meet cyber ilitrate students where they are 
              and guide them towards digital security expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className={`border-0 shadow-card overflow-hidden ${
                  index % 2 === 0 ? 'bg-gradient-card' : 'bg-muted/30'
                }`}>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <CardHeader className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                          <CardDescription className="text-lg leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-6">
                        <Badge variant="secondary" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20">
                          {service.duration}
                        </Badge>
                        <Badge variant="secondary" className="bg-cyber-accent/10 text-cyber-accent border-cyber-accent/20">
                          {service.level}
                        </Badge>
                        <Badge variant="secondary" className="bg-muted text-muted-foreground">
                          {service.format}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="p-8">
                      <h4 className="font-semibold text-lg mb-4 text-foreground">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Programs?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our unique approach combines traditional teaching with modern, practical applications, AT cyber ed language is not a barrier to learning cybersecurity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card bg-gradient-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Practical Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hands-on workshop like discussions, simulations, and case studies that build confidence and skills
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Collaborative Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Team projects and problem-solving challenges that mirror real cybersecurity environments
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Clear Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complex concepts explained in simple terms, avoiding overwhelming technical jargon
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-cyber-accent text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how we can customize our programs to meet your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGetInTouch}
              size="lg" 
              variant="secondary" 
              className="bg-white text-brand-blue-dark hover:bg-blue-50"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleLearnOurApproach}
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
            >
              Learn Our Approach
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;