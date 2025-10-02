import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Users, 
  GraduationCap, 
  Building, 
  Heart
} from 'lucide-react';

const Contact = () => {
  const handleEmailUs = () => {
    window.location.href = 'mailto:kasubaemmanuel@gmail.com?subject=Inquiry About Group 7 Cyber Ed Inc.&body=Hello, I would like to learn more about your programs and partnership opportunities.';
  };

  const handleScheduleCall = () => {
    window.location.href = 'tel:+260972354969';
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message and we\'ll respond within 24 hours',
      details: 'kasubaemmanuel@gmail.com',
      action: handleEmailUs
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our education specialists',
      details: '+260 972 354 969',
      action: handleScheduleCall
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Schedule an in-person meeting at our office',
      details: 'zut campus in ndola',
      action: null
    },
    {
      icon: Clock,
      title: 'Office Hours',
      description: 'We\'re available to help during business hours',
      details: 'Mon,wed,tue: every after the last class of these days',
      action: null
    }
  ];

  const partnerships = [
    {
      icon: GraduationCap,
      title: 'Schools & Universities',
      description: 'Curriculum integration and teacher training programs'
    },
    {
      icon: Users,
      title: 'Coding Clubs',
      description: 'Cybersecurity workshops and competition preparation'
    },
    {
      icon: Building,
      title: 'Organizations',
      description: 'Custom training programs for your team'
    },
    {
      icon: Heart,
      title: 'NGOs & Communities',
      description: 'Digital literacy and awareness programs'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Contact & Collaboration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We partner with schools, clubs, NGOs, and tech communities to design programs tailored to their needs. 
              Let's work together to build a more cyber-secure future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={info.title} 
                  className="border-0 shadow-card hover:shadow-cyber transition-all duration-300 bg-gradient-card group text-center cursor-pointer"
                  onClick={info.action || undefined}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {info.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-foreground">{info.details}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether it's a curriculum add-on, a public workshop, or a mentorship program, 
              Group 7 Cyber Ed Inc. is ready to collaborate with diverse organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((partnership) => {
              const IconComponent = partnership.icon;
              return (
                <Card key={partnership.title} className="border-0 shadow-card bg-gradient-card hover:shadow-cyber transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">
                          {partnership.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {partnership.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our programs and partnerships
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">How do you customize programs for different organizations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We work closely with each partner to understand their specific needs, audience, and goals. 
                  Our programs can be adapted for different age groups, technical levels, time constraints, 
                  and learning objectives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">What is the typical duration of your programs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Program duration varies based on your needs. We offer everything from single-session workshops 
                  to multi-week bootcamps and ongoing partnership programs. We'll work with your schedule 
                  and objectives to design the right format.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg">Do you provide materials and resources?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We provide comprehensive learning materials, including guides, exercises, presentation slides, 
                  and access to our virtual lab environments. For ongoing partnerships, we can also help develop 
                  custom resources specific to your organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-cyber-accent text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Collaborating?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team member today to discuss how we can create a customized cybersecurity education 
            program that meets your organization's unique needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleEmailUs}
              size="lg" 
              variant="secondary" 
              className="bg-white text-brand-blue-dark hover:bg-blue-50"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us Now
            </Button>
            <Button 
              onClick={handleScheduleCall}
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;