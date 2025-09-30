import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Users, BookOpen, Target, ArrowRight, Lock, Globe, Zap } from 'lucide-react';
import logo from '@/assets/logo.png';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-dark via-brand-blue to-cyber-accent text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Making Cybersecurity{' '}
                  <span className="text-cyan-300">Simple & Accessible</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  We translate technical complexity into clear, practical learning experiences for students, educators, and professionals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="bg-white text-brand-blue-dark hover:bg-blue-50">
                  <Link to="/services">
                    Explore Our Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse" />
                <img 
                  src={logo} 
                  alt="Group 7 Cyber Ed Inc." 
                  className="relative w-80 h-auto drop-shadow-2xl"
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
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Students First</h3>
              <p className="text-muted-foreground">Educational programs designed for learners of all backgrounds</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Hands-On Learning</h3>
              <p className="text-muted-foreground">Practical experiences through labs, simulations, and case studies</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Cyber Literacy</h3>
              <p className="text-muted-foreground">Building universal understanding of digital security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To demystify Cybersecurity by providing structured, hands-on education that equips learners of all backgrounds with the skills to navigate and secure the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
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
            <Card className="border-0 shadow-card hover:shadow-cyber transition-all duration-300 bg-gradient-card group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Cyber Literacy Bootcamps</CardTitle>
                <CardDescription>
                  Beginner-friendly crash courses covering the foundations of cybersecurity
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-cyber transition-all duration-300 bg-gradient-card group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Digital Ethics & Privacy</CardTitle>
                <CardDescription>
                  Building awareness on online behavior, personal data protection, and surveillance ethics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-cyber transition-all duration-300 bg-gradient-card group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>School & Club Partnerships</CardTitle>
                <CardDescription>
                  Customized learning modules for academic institutions and coding clubs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-blue to-cyber-accent text-white hover:shadow-cyber">
              <Link to="/services">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;