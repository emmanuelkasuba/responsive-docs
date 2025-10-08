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
  Send
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

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      
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
      action: () => window.location.href = 'mailto:kasubaemmanuel@gmail.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our education specialists',
      details: '+260 972 354 969',
      action: () => window.location.href = 'tel:+260972354969'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Schedule an in-person meeting at our office',
      details: 'ZUT Campus in Ndola',
      action: null
    },
    {
      icon: Clock,
      title: 'Office Hours',
      description: 'We\'re available to help during business hours',
      details: 'Mon, Wed, Tue: After the last class',
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
      <Toaster position="top-right" />
      
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

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-card bg-background">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <CardDescription>
                      We'll get back to you within 24 hours
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input 
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="School, company, or organization name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Inquiry Type</Label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="workshop">Workshop Request</option>
                      <option value="career">Career Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your cybersecurity education goals, the audience you serve, and how we might collaborate..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-blue to-cyber-accent text-white hover:shadow-cyber disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're interested in our programs, want to partner with us, or just have questions about cybersecurity education, we'd love to hear from you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <Card 
                      key={info.title} 
                      className="border-0 shadow-card bg-gradient-card hover:shadow-cyber transition-all duration-300 cursor-pointer"
                      onClick={info.action || undefined}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-foreground mb-2">
                              {info.title}
                            </h3>
                            <p className="text-muted-foreground mb-2">
                              {info.description}
                            </p>
                            <p className="font-medium text-foreground">{info.details}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Partnership Types */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Partnership Opportunities</h3>
                <div className="grid gap-4">
                  {partnerships.map((partnership) => {
                    const IconComponent = partnership.icon;
                    return (
                      <div key={partnership.title} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                        <IconComponent className="h-5 w-5 text-brand-blue" />
                        <div>
                          <h4 className="font-semibold text-foreground">{partnership.title}</h4>
                          <p className="text-sm text-muted-foreground">{partnership.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
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
              onClick={() => window.location.href = 'mailto:kasubaemmanuel@gmail.com'}
              size="lg" 
              variant="secondary" 
              className="bg-white text-brand-blue-dark hover:bg-blue-50"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us Now
            </Button>
            <Button 
              onClick={() => window.location.href = 'tel:+260972354969'}
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