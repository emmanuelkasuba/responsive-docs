import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Users, 
  GraduationCap, 
  Building, 
  Heart,
  Send,
  MessageCircle,
  Target,
  Zap,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firestore
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new'
      });

      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: '',
        type: 'general'
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message and we\'ll respond within 24 hours',
      details: 'kasubaemmanuel@gmail.com',
      action: () => window.location.href = 'mailto:kasubaemmanuel@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our education specialists',
      details: '+260 972 354 969',
      action: () => window.location.href = 'tel:+260972354969',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Schedule an in-person meeting at our office',
      details: 'ZUT Campus in Ndola',
      action: null,
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      description: 'We\'re available to help during business hours',
      details: 'Mon, Wed, Tue: After the last class',
      action: null,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const partnerships = [
    {
      icon: GraduationCap,
      title: 'Schools & Universities',
      description: 'Curriculum integration and teacher training programs',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Coding Clubs',
      description: 'Cybersecurity workshops and competition preparation',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Building,
      title: 'Organizations',
      description: 'Custom training programs for your team',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Heart,
      title: 'NGOs & Communities',
      description: 'Digital literacy and awareness programs',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  const faqs = [
    {
      question: 'How do you customize programs for different organizations?',
      answer: 'We work closely with each partner to understand their specific needs, audience, and goals. Our programs can be adapted for different age groups, technical levels, time constraints, and learning objectives.'
    },
    {
      question: 'What is the typical duration of your programs?',
      answer: 'Program duration varies based on your needs. We offer everything from single-session workshops to multi-week bootcamps and ongoing partnership programs. We\'ll work with your schedule and objectives to design the right format.'
    },
    {
      question: 'Do you provide materials and resources?',
      answer: 'Yes! We provide comprehensive learning materials, including guides, exercises, presentation slides, and access to our virtual lab environments. For ongoing partnerships, we can also help develop custom resources specific to your organization.'
    }
  ];

  return (
    <div className="flex flex-col">
      <Toaster position="top-right" />
      
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200 text-sm mb-8">
              <MessageCircle className="h-4 w-4" />
              Get In Touch
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Contact & Collaboration
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We partner with schools, clubs, NGOs, and tech communities to design programs tailored to their needs. 
              Let's work together to build a more cyber-secure future.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Have questions about cybersecurity education? Interested in partnering with us? 
                  We'd love to hear from you and discuss how we can work together.
                </p>
              </div>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-blue-50/30">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-gray-700 font-medium">Organization</Label>
                      <Input 
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="School, company, or organization name"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type" className="text-gray-700 font-medium">Inquiry Type</Label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="workshop">Workshop Request</option>
                        <option value="career">Career Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What would you like to discuss?"
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your cybersecurity education goals, the audience you serve, and how we might collaborate..."
                        className="min-h-[140px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Whether you're interested in our programs, want to partner with us, or just have questions 
                  about cybersecurity education, we'd love to hear from you.
                </p>
                <div className="w-24 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card 
                      key={info.title} 
                      className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:translate-y-[-4px] ${
                        info.action ? 'hover:border-blue-200' : ''
                      }`}
                      onClick={info.action || undefined}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-900 mb-2">
                              {info.title}
                            </h3>
                            <p className="text-gray-600 mb-3 leading-relaxed">
                              {info.description}
                            </p>
                            <p className="font-semibold text-gray-900 text-lg">{info.details}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Enhanced Partnership Types */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Target className="h-6 w-6 text-blue-600" />
                    Partnership Opportunities
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    We collaborate with various organizations to spread cybersecurity awareness
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {partnerships.map((partnership) => {
                      const IconComponent = partnership.icon;
                      return (
                        <div key={partnership.title} className="flex items-center gap-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-blue-200 transition-colors duration-200">
                          <div className={`w-12 h-12 ${partnership.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{partnership.title}</h4>
                            <p className="text-gray-600 text-sm">{partnership.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-700 text-sm mb-6">
              <Zap className="h-4 w-4" />
              Quick Answers
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our programs and partnerships
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-3 text-gray-900">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm mb-6">
            <Sparkles className="h-4 w-4" />
            Ready to Collaborate?
          </div>
          <h2 className="text-4xl font-bold mb-6">Start Your Cybersecurity Journey Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact our team today to discuss how we can create a customized cybersecurity education 
            program that meets your organization's unique needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.location.href = 'mailto:kasubaemmanuel@gmail.com'}
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 font-semibold shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us Now
            </Button>
            <Button 
              onClick={() => window.location.href = 'tel:+260972354969'}
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
          <p className="text-blue-200 mt-8 text-sm">
            We typically respond within 2-4 hours during business hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;