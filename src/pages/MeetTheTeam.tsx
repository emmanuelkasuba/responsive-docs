import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Heart, 
  Zap, 
  Mail, 
  Linkedin, 
  Github, 
  ArrowRight,
  Shield,
  Globe,
  BookOpen,
  Sparkles,
  Phone
} from 'lucide-react';

// Import team member images with correct syntax
import mukukaImage from './imges/mukuka.jpeg';
import emmanuelImage from './imges/emmanuel.jpg';
import francisImage from './imges/francis.jpeg';
import amosImage from './imges/amos.jpeg';
import charityImage from './imges/charity.jpeg';
import paulImage from './imges/paul.jpeg'; 
import malamaImage from './imges/malama.jpeg';
import kondwaniImage from './imges/kondwani.jpeg';
import jessicaImage from './imges/jessica.jpeg';
import donaldImage from './imges/donald.jpeg';
import placeholderImage from './imges/placeholder-avatar.jpg';

const MeetTheTeam = () => {
  const navigate = useNavigate();

  const handleExploreOpportunities = () => {
    navigate('/contact');
  };

  const handleSendCV = () => {
    window.location.href = 'mailto:kasubaemmanuel@gmail.com?subject=CV Submission - Group 7 Cyber Ed Inc.&body=Hello, I would like to submit my CV for consideration. Attached is my resume.';
  };

  const handleContactTeamMember = (email: string, name: string) => {
    if (email) {
      window.location.href = `mailto:${email}?subject=Inquiry for ${name}&body=Hello ${name}, I would like to get in touch with you regarding...`;
    }
  };

  const teamMembers = [
    {
      name: 'Emmanuel Kasuba',
      role: 'CEO & Group leader',
      image: emmanuelImage,
      bio: 'Group leader and Idealist, sparked insight in fellow group members and took leader position to ensure idea actualisation',
      expertise: ['Tech support', 'Lead web UI designer', 'Group member engagement', 'React dev'],
      social: {
        linkedin: 'https://www.linkedin.com/in/emmanuel-kasuba-706949353',
        github: 'https://github.com/emmanuelkasuba',
        email: 'kasubaemmanuel@gmail.com'
      }
    },
    {
      name: 'Francis Mwamba',
      role: 'Project Manager (PR)',
      image: francisImage,
      bio: 'I am a highly organised and communicative individual with a passion for ensuring projects are completed efficiently and effectively.',
      expertise: ['Organisation', 'Communication', 'Effective project follow'],
      social: {
        linkedin: 'https://www.linkedin.com/in/francismwamba',
        email: 'mwambafrancis975@gmail.com'
      }
    },
    {
      name: 'Amos Zulu',
      role: 'Workshop Coordinator',
      image: amosImage,
      bio: 'I am passionate about cybersecurity education and dedicated to creating engaging, hands-on learning experiences that empower individuals to protect themselves online.',
      expertise: ['Venue & location placement', 'Event Coordination', 'Public Speaking'],
      social: {
        email: 'amoszuluamos@gmail.com',
        phone: '+260761751967',
      }
    },
    {
      name: 'Charity Mwansa Kunda',
      role: 'Researcher & Ethics Advisor',
      image: charityImage,
      bio: 'I am dedicated to ensuring our educational initiatives uphold the highest standards of digital ethics and privacy, fostering trust and integrity in all our endeavors.',
      expertise: ['Public Ethics Advocate', 'Language variation', 'Research'],
      social: {
        email: 'charitykundamwansa@gmail.com',
        phone: '+260770219766',
      }
    },
    {
      name: 'Paul Kashiba',
      role: 'Registrar',
      image: paulImage,
      bio: 'I am a very organised person and I like to keep things in order',
      expertise: ['Organisation', 'Communication', 'Time management'],
      social: {
        linkedin: 'https://www.linkedin.com/in/paul-kashiba-5b2b99210',
        email: 'paul@example.com',
      }
    },
    {
      name: 'Jessica Sumaili',
      role: 'Company Online Voice',
      image: jessicaImage,
      bio: 'Social media manager and content creator. Passionate about digital ethics and privacy advocacy.',
      expertise: ['Influencer/Content Creator', 'Ethics', 'Communication'],
      social: {
        email: 'jessicasumaili213@gmail.com',
        phone: '0764372062',
      }
    },
    {
      name: 'Malama David',
      role: 'Meeting Scheduler',
      image: malamaImage,
      bio: 'I decide the meeting schedules and keep track of them',
      expertise: ['Organisation', 'Communication', 'Time management'],
      social: {
        email: 'davidmalam548@gmail.com',
        phone: '0762432406',
      }
    },
    {
      name:'Kondwani Mumba',
      role:'Peer Educator',
      image: kondwaniImage,
      bio:'I am passionate about educating different individuals on the importance of cybersecurity and how to protect themselves online.',
      expertise:['stakeholder engagement','public relations','communication'],
      social:{
        email:'mumbakondwani000@gmail.com',
        phone:'0762102403'
      }
    }, 
    {
      name: 'Donald Chanda',
      role: 'Peer Educator',
      image: donaldImage,
      bio: 'I am passionate about educating my peers on the importance of cybersecurity and how to protect themselves online.',
      expertise: ['Technical Troubleshooting', 'Customer Support', 'IT Solutions'],
      social: {
        email: 'kaomadonald0@gmail.com',
        phone: '+260 777350433',
      }
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We practice what we teach, ensuring all our methods and materials meet the highest security standards.'
    },
    {
      icon: Heart,
      title: 'Student Centered',
      description: 'Every decision we make prioritizes the learning experience and success of our students.'
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'We continuously evolve our teaching methods to stay ahead of emerging cyber threats.'
    },
    {
      icon: Globe,
      title: 'Accessibility Focused',
      description: 'We break down barriers to make cybersecurity education available to everyone.'
    }
  ];

  // Function to handle social media clicks
  const handleSocialClick = (type: string, value: string, memberName: string) => {
    if (!value) return;
    
    switch (type) {
      case 'email':
        window.location.href = `mailto:${value}?subject=Inquiry for ${memberName}&body=Hello ${memberName}, I would like to get in touch with you regarding...`;
        break;
      case 'linkedin':
        window.open(value, '_blank');
        break;
      case 'github':
        window.open(value, '_blank');
        break;
      case 'phone':
        window.location.href = `tel:${value}`;
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted/50 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full mb-6 border border-brand-blue/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Meet the Minds Behind the Mission</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              The Team Building Cyber Literacy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate educators, security experts, and innovators united by a common goal: making cybersecurity 
              education accessible, engaging, and impactful for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diverse backgrounds, shared commitment to cybersecurity education excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card 
                key={member.name} 
                className="border-0 shadow-card bg-gradient-card hover:shadow-cyber transition-all duration-500 group hover:scale-105 cursor-pointer"
                onClick={() => handleContactTeamMember(member.social.email, member.name)}
              >
                <CardHeader className="pb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg group-hover:border-brand-blue/20 transition-colors duration-300 object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = placeholderImage;
                        e.currentTarget.onerror = null; // Prevent infinite loop
                      }}
                    />
                  </div>
                  <CardTitle className="text-xl text-center text-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-center text-cyber-accent font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center gap-3 pt-2">
                    {member.social.email && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-muted-foreground hover:text-brand-blue hover:bg-brand-blue/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSocialClick('email', member.social.email, member.name);
                        }}
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.linkedin && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-muted-foreground hover:text-brand-blue hover:bg-brand-blue/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSocialClick('linkedin', member.social.linkedin, member.name);
                        }}
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.github && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-muted-foreground hover:text-brand-blue hover:bg-brand-blue/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSocialClick('github', member.social.github, member.name);
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.phone && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-muted-foreground hover:text-brand-blue hover:bg-brand-blue/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSocialClick('phone', member.social.phone, member.name);
                        }}
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Guiding Principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The values that shape everything we do at Group 7 Cyber Ed Inc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className="border-0 shadow-card bg-gradient-card hover:shadow-cyber transition-all duration-300 group text-center"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Educational Philosophy</h2>
          </div>
          
          <Card className="border-0 shadow-card bg-gradient-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Mission-Driven Education</h3>
                      <p className="text-muted-foreground">
                        Every team member is united by our core mission: making cybersecurity accessible to all. 
                        We believe that cyber literacy is a fundamental skill for the digital age.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Continuous Innovation</h3>
                      <p className="text-muted-foreground">
                        We constantly evolve our teaching methods and materials to stay ahead of emerging threats 
                        and incorporate the latest educational research and technologies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Collaborative Excellence</h3>
                      <p className="text-muted-foreground">
                        Our strength comes from our diversity—different backgrounds, expertise, and perspectives 
                        coming together to create exceptional learning experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <div className="relative h-64 lg:h-full min-h-[300px] bg-gradient-to-br from-brand-blue/20 to-cyber-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Join Our Mission</h3>
                  <p className="text-muted-foreground">
                    We're always looking for passionate educators and security professionals to join our cause.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Join the Mission */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-cyber-accent text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate educators, security experts, and innovators who share our vision 
            for universal cyber literacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleExploreOpportunities}
              size="lg" 
              variant="secondary" 
              className="bg-white text-brand-blue-dark hover:bg-blue-50"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleSendCV}
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
            >
              Send Your CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeam;