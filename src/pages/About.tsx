import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Target, Globe, Users, GraduationCap, Building, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const handleExplorePrograms = () => {
    navigate('/services');
  };

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  const handleEmailUs = () => {
    window.location.href = 'mailto:kasubaemmanuel@gmail.com?subject=Inquiry About Group 7 Cyber Ed Inc.&body=Hello, I would like to learn more about your programs.';
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              About Group 7 Cyber Ed Inc.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              An educational initiative dedicated to making cybersecurity simple, accessible, and impactful. 
              We believe cyber awareness is a necessity—not a luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl mb-4">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To demystify Cybersecurity by providing structured, hands-on education that equips learners of all backgrounds 
                  with the skills to navigate and secure the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl mb-4">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A society where Cyber literacy is universal, and every individual has the confidence to safeguard information, 
                  protect communities, and responsibly engage with technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our programs are designed for diverse learners across different stages of their cybersecurity journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-card hover:shadow-cyber transition-all duration-300 bg-gradient-card group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Students</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Secondary & tertiary level students beginning their cybersecurity journey
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-cyber transition-all duration-300 bg-gradient-card group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Educators</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  club leaders looking to integrate cybersecurity into their Club lessons
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-cyber transition-all duration-300 bg-gradient-card group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Professionals</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  learning professionals seeking to build cybersecurity expertise on compus
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-cyber transition-all duration-300 bg-gradient-card group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Communities</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Community organizations promoting digital literacy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters - Expanded */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Cybersecurity Education Matters</h2>
          </div>
          
          <Card className="border-0 shadow-card bg-gradient-card">
            <CardContent className="p-8">
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  In a time where digital threats evolve daily, understanding cybersecurity is as essential as reading and writing. 
                  The digital landscape is constantly changing, and with it comes new challenges and vulnerabilities that affect 
                  individuals, businesses, and entire communities.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Group 7 Cyber Ed Inc. is committed to building strong foundations—ensuring that the next generation is not just 
                  technology users but responsible digital citizens and protectors of cyberspace. We believe that education is the 
                  first line of defense against cyber threats.
                </p>
                
                <p className="text-lg leading-relaxed">
                  By making cybersecurity education accessible and practical, we're empowering individuals to not only protect 
                  themselves but also contribute to a safer digital environment for everyone. Every person who understands 
                  cybersecurity principles becomes a guardian of digital safety in their community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-cyber-accent text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            if you're a student, we'd love to work with you to build a more cyber-secure future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleExplorePrograms}
              size="lg" 
              variant="secondary" 
              className="bg-white text-brand-blue-dark hover:bg-blue-50"
            >
              Explore
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleGetInTouch}
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;