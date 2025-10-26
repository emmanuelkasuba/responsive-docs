import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Target, Globe, Users, GraduationCap, Building, Heart, ArrowRight, Shield, Lock, Code } from 'lucide-react';

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

  const popularCourses = [
    {
      icon: Shield,
      title: "Cybersecurity Fundamentals",
      description: "Learn the basics of digital security and threat protection"
    },
    {
      icon: Lock,
      title: "Network Security",
      description: "Master network defense strategies and protocols"
    },
    {
      icon: Code,
      title: "Secure Coding Practices",
      description: "Develop applications with security-first approach"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200 text-sm mb-8">
              <Shield className="h-4 w-4" />
              Trusted Cybersecurity Education
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              CYBER ED INC.
            </h1>
            <p className="text-2xl font-semibold text-blue-100 mb-4">
              MAKING CYBERSECURITY
            </p>
            <p className="text-2xl font-semibold text-white mb-8">
              SIMPLE & ACCESSIBLE
            </p>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Secure Your Future, Understand Your Digital World
            </p>
            <Button 
              onClick={handleExplorePrograms}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
            >
              EXPLORE COURSES
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section - Improved Layout */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR MISSION</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-blue-50/30">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To demystify Cybersecurity by providing structured, hands-on education that equips learners 
                    of all backgrounds with the skills to navigate and secure the digital age. We believe in 
                    making cyber awareness accessible to everyone, transforming complex concepts into practical 
                    knowledge that empowers individuals and protects communities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Courses Section - New */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">POPULAR COURSES</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your cybersecurity journey with our most sought-after programs
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:translate-y-[-8px]">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <course.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    {course.description}
                  </p>
                  <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Who We Serve */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our programs are designed for diverse learners across different stages of their cybersecurity journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white text-center group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <GraduationCap className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg">Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Secondary & tertiary level students beginning their cybersecurity journey
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white text-center group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Users className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg">Educators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Club leaders looking to integrate cybersecurity into their lessons
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white text-center group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Building className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg">Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Learning professionals seeking to build cybersecurity expertise on campus
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white text-center group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Heart className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg">Communities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Community organizations promoting digital literacy and safety
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Digital Future?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of learners who have transformed their cybersecurity knowledge with our accessible programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleExplorePrograms}
              size="lg" 
              className="bg-white text-slate-900 hover:bg-blue-50 px-8 font-semibold"
            >
              Explore All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleGetInTouch}
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8"
            >
              Contact Our Team
            </Button>
          </div>
          <p className="text-blue-200 mt-6 text-sm">
            Have questions? Email us directly at <span className="text-white font-medium">kasubaemmanuel@gmail.com</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;