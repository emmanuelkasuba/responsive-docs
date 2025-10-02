import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Lightbulb, 
  Target, 
  ArrowRight, 
  CheckCircle,
  Brain,
  Handshake,
  Microscope
} from 'lucide-react';

const Approach = () => {
  const navigate = useNavigate();

  const handleViewPrograms = () => {
    navigate('/services');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  const methodologies = [
    {
      icon: BookOpen,
      title: 'Traditional Teaching Methods',
      description: 'Structured lectures, workshops, and comprehensive guides',
      details: [
        'Expert-led lectures and presentations',
        'Interactive workshops and seminars',
        'Comprehensive learning guides and materials',
        'Structured curriculum progression'
      ]
    },
    {
      icon: Microscope,
      title: 'Practical Experiences',
      description: 'Hands-on labs, simulations, and real-world case studies',
      details: [
        'Virtual cybersecurity labs and environments',
        'Realistic threat simulations',
        'Analysis of current security incidents',
        'Practical tool demonstrations'
      ]
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Team projects and problem-solving challenges',
      details: [
        'Group cybersecurity projects',
        'Peer-to-peer learning sessions',
        'Collaborative problem-solving exercises',
        'Community-driven knowledge sharing'
      ]
    }
  ];

  const principles = [
    {
      icon: Target,
      title: 'Clarity First',
      description: 'We prioritize clear communication over technical complexity, making cybersecurity accessible to everyone.'
    },
    {
      icon: Brain,
      title: 'Critical Thinking',
      description: 'Students learn to analyze, evaluate, and solve cybersecurity challenges independently.'
    },
    {
      icon: Handshake,
      title: 'Real-World Confidence',
      description: 'Our graduates gain practical skills they can immediately apply in their personal and professional lives.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Our Teaching Approach
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Group 7 Cyber Ed Inc., clarity is our priority. Instead of overwhelming learners with jargon, 
              we blend proven methodologies to create an effective and engaging learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These foundational beliefs guide every aspect of our educational programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <Card key={principle.title} className="border-0 shadow-card hover:shadow-cyber transition-all duration-300 bg-gradient-card group text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teaching Methodologies */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Balanced Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine three complementary approaches to ensure comprehensive learning
            </p>
          </div>

          <div className="space-y-12">
            {methodologies.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={method.title} className={`border-0 shadow-card overflow-hidden ${
                  index % 2 === 0 ? 'bg-gradient-card' : 'bg-background'
                }`}>
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <CardHeader className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-3">{method.title}</CardTitle>
                          <CardDescription className="text-lg leading-relaxed">
                            {method.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <h4 className="font-semibold text-lg mb-4 text-foreground">Key Components:</h4>
                      <ul className="space-y-3">
                        {method.details.map((detail) => (
                          <li key={detail} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{detail}</span>
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why This Approach Works</h2>
          </div>
          
          <Card className="border-0 shadow-card bg-gradient-card">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-lg text-muted-foreground leading-relaxed">
                  <p className="mb-6">
                    This balanced approach ensures learners don't just memorize concepts but gain real-world confidence 
                    and critical thinking skills. By combining different learning modalities, we accommodate various 
                    learning styles and preferences.
                  </p>
                  
                  <p className="mb-6">
                    Traditional methods provide the structured foundation needed for complex cybersecurity concepts. 
                    Practical experiences allow students to apply what they've learned in realistic scenarios. 
                    Collaborative learning builds communication skills and exposes students to diverse perspectives.
                  </p>
                  
                  <p>
                    The result is a comprehensive educational experience that prepares students not just to understand 
                    cybersecurity, but to think like cybersecurity professionals and become advocates for digital safety 
                    in their communities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Learning Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What students achieve through our comprehensive approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Deep understanding of cybersecurity fundamentals',
              'Practical skills in threat identification and response',
              'Critical thinking and problem-solving abilities',
              'Confidence in digital security practices',
              'Ability to communicate security concepts clearly',
              'Real-world application of security principles'
            ].map((outcome) => (
              <div key={outcome} className="flex items-start space-x-3 p-4 rounded-lg bg-background shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-cyber-accent text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Approach</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to see how our unique teaching methodology can benefit your cybersecurity education goals?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleViewPrograms}
              size="lg" 
              variant="secondary" 
              className="bg-white text-brand-blue-dark hover:bg-blue-50"
            >
              View Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleContactUs}
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;