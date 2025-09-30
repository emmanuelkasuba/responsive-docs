import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Zap, Lock, Users, BookOpen, Target, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Cyber Literacy Bootcamps',
      description: 'Beginner-friendly crash courses covering the foundations of cybersecurity',
      features: [
        'Introduction to cybersecurity concepts',
        'Common threats and vulnerabilities',
        'Basic protection strategies',
        'Hands-on exercises and labs',
        'Certificate of completion'
      ],
      duration: '2-4 weeks',
      level: 'Beginner',
      format: 'Interactive workshops'
    },
    {
      icon: Lock,
      title: 'Digital Ethics & Privacy Workshops',
      description: 'Building awareness on online behavior, personal data protection, and surveillance ethics',
      features: [
        'Understanding digital privacy rights',
        'Data protection best practices',
        'Social media security',
        'Online surveillance awareness',
        'Ethical decision-making in digital spaces'
      ],
      duration: '1-2 weeks',
      level: 'All levels',
      format: 'Discussion-based sessions'
    },
    {
      icon: Users,
      title: 'School & Club Partnerships',
      description: 'Customized learning modules for academic institutions and coding clubs',
      features: [
        'Curriculum integration support',
        'Teacher training programs',
        'Student competition preparation',
        'Resource development',
        'Long-term educational partnerships'
      ],
      duration: 'Ongoing',
      level: 'Customized',
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
              Our Core Offerings
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive cybersecurity education programs designed to meet learners where they are 
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
              Our unique approach combines traditional teaching with modern, practical applications
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
                  Hands-on labs, simulations, and real-world case studies that build confidence and skills
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
            <Button asChild size="lg" variant="secondary" className="bg-white text-brand-blue-dark hover:bg-blue-50">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link to="/approach">Learn Our Approach</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;