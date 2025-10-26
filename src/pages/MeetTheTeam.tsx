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
  Phone,
  UserCheck,
  GraduationCap,
  MessageCircle
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
      role: 'CEO & Group Leader',
      image: emmanuelImage,
      bio: 'Group leader and Idealist, sparked insight in fellow group members and took leader position to ensure idea actualisation',
      expertise: ['Tech Support', 'Lead Web UI Designer', 'Group Member Engagement', 'React Dev'],
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
      expertise: ['Organisation', 'Communication', 'Effective Project Follow-up'],
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
      expertise: ['Venue & Location Placement', 'Event Coordination', 'Public Speaking'],
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
      expertise: ['Public Ethics Advocate', 'Language Variation', 'Research'],
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
      expertise: ['Organisation', 'Communication', 'Time Management'],
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
      expertise: ['Organisation', 'Communication', 'Time Management'],
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
      expertise:['Stakeholder Engagement', 'Public Relations', 'Communication'],
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
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200 text-sm mb-8">
              <UserCheck className="h-4 w-4" />
              Meet the Minds Behind the Mission
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              The Team Building Cyber Literacy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Passionate educators, security experts, and innovators united by a common goal: making cybersecurity 
              education accessible, engaging, and impactful for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{teamMembers.length}+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-gray-600">Specialized Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Dedication</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Collaboration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diverse backgrounds, shared commitment to cybersecurity education excellence
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card 
                key={member.name} 
                className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group hover:translate-y-[-8px] cursor-pointer"
                onClick={() => handleContactTeamMember(member.social.email, member.name)}
              >
                <CardHeader className="pb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg group-hover:border-blue-200 transition-colors duration-300 object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = placeholderImage;
                        e.currentTarget.onerror = null; // Prevent infinite loop
                      }}
                    />
                  </div>
                  <CardTitle className="text-xl text-center text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-center text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-blue-50 text-blue-700 border-blue-200 text-xs"
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
                        className="h-8 w-8 text-gray-500 hover:text-blue-600 hover:bg-blue-50"
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
                        className="h-8 w-8 text-gray-500 hover:text-blue-600 hover:bg-blue-50"
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
                        className="h-8 w-8 text-gray-500 hover:text-blue-600 hover:bg-blue-50"
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
                        className="h-8 w-8 text-gray-500 hover:text-blue-600 hover:bg-blue-50"
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

      {/* Enhanced Our Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Guiding Principles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The values that shape everything we do at Group 7 Cyber Ed Inc.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-blue-50/30 hover:shadow-xl transition-all duration-300 group text-center hover:translate-y-[-4px]"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Team Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Educational Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our approach to cybersecurity education
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Mission-Driven Education</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every team member is united by our core mission: making cybersecurity accessible to all. 
                    We believe that cyber literacy is a fundamental skill for the digital age.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Continuous Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We constantly evolve our teaching methods and materials to stay ahead of emerging threats 
                    and incorporate the latest educational research and technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Collaborative Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our strength comes from our diversity—different backgrounds, expertise, and perspectives 
                    coming together to create exceptional learning experiences.
                  </p>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  We're always looking for passionate educators and security professionals who share our vision 
                  for universal cyber literacy.
                </p>
                <div className="space-y-3">
                  <Button 
                    onClick={handleExploreOpportunities}
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                  >
                    Explore Opportunities
                  </Button>
                  <Button 
                    onClick={handleSendCV}
                    variant="outline" 
                    className="w-full border-white/30 text-white hover:bg-white/10"
                  >
                    Send Your CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Join the Mission */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm mb-6">
            <MessageCircle className="h-4 w-4" />
            Join Our Growing Team
          </div>
          <h2 className="text-4xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're always looking for passionate educators, security experts, and innovators who share our vision 
            for universal cyber literacy. Join us in making cybersecurity education accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleExploreOpportunities}
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 font-semibold shadow-lg"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleSendCV}
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold"
            >
              Send Your CV
            </Button>
          </div>
          <p className="text-blue-200 mt-8 text-sm">
            We review applications on a rolling basis and respond within 2-3 business days
          </p>
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeam;