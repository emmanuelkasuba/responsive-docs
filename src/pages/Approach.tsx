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
  Microscope,
  Shield,
  GraduationCap,
  Zap
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
      ],
      color: 'from-blue-500 to-blue-600'
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
      ],
      color: 'from-green-500 to-green-600'
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
      ],
      color: 'from-purple-500 to-purple-600'
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

  const outcomes = [
    'Deep understanding of cybersecurity fundamentals',
    'Practical skills in threat identification and response',
    'Critical thinking and problem-solving abilities',
    'Confidence in digital security practices',
    'Ability to communicate security concepts clearly',
    'Real-world application of security principles'
  ];

  return (
    <div className="flex flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200 text-sm mb-8">
              <GraduationCap className="h-4 w-4" />
              Proven Teaching Methodology
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Teaching Approach
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              At Group 7 Cyber Ed Inc., clarity is our priority. Instead of overwhelming learners with jargon, 
              we blend proven methodologies to create an effective and engaging learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles - Enhanced */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Principles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These foundational beliefs guide every aspect of our educational programs
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card key={principle.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-blue-50/30 group hover:translate-y-[-8px]">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-center">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Teaching Methodologies */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Balanced Methodology</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine three complementary approaches to ensure comprehensive learning
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="space-y-12">
            {methodologies.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={method.title} className="border-0 shadow-lg overflow-hidden bg-white">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image/Icon Side */}
                    <div className={`p-12 bg-gradient-to-br ${method.color} text-white flex items-center justify-center ${
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}>
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
                        <p className="text-blue-100 text-lg leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <h4 className="font-semibold text-xl text-gray-900">Key Components</h4>
                      </div>
                      <ul className="space-y-4">
                        {method.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why This Approach Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive learning that builds real-world cybersecurity skills
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50/30">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-gray-700 leading-relaxed text-lg">
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
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-2xl border border-green-100">
                <Zap className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Adaptive Learning Paths</h4>
                  <p className="text-gray-600">Customized approaches that adapt to individual learning styles and paces</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-violet-50/50 rounded-2xl border border-purple-100">
                <Shield className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Industry-Aligned Curriculum</h4>
                  <p className="text-gray-600">Content regularly updated to reflect current cybersecurity threats and trends</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-2xl border border-orange-100">
                <Users className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Mentorship & Support</h4>
                  <p className="text-gray-600">Ongoing guidance from experienced cybersecurity professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Outcomes Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Learning Outcomes</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              What students achieve through our comprehensive approach
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div 
                key={outcome} 
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <span className="text-blue-50 font-medium leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm mb-6">
            <GraduationCap className="h-4 w-4" />
            Start Your Cybersecurity Journey
          </div>
          <h2 className="text-4xl font-bold mb-6">Experience Our Approach</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to see how our unique teaching methodology can benefit your cybersecurity education goals?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleViewPrograms}
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 font-semibold shadow-lg"
            >
              View Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleContactUs}
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold"
            >
              Contact Our Team
            </Button>
          </div>
          <p className="text-blue-200 mt-8 text-sm">
            Have questions about our teaching methods? We're here to help you succeed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Approach;