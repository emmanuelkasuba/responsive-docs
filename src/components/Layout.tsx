// Fixed Layout.tsx - Added Cyber Safety Floating Button
import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Menu, X, Users, Zap, Heart, BookOpen, Target, Mail, FileText, Calendar, AlertTriangle } from 'lucide-react';
import logo from '@/assets/logo.png';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCyberSafeVisible, setIsCyberSafeVisible] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Shield },
    { name: 'About', href: '/about', icon: Heart },
    { name: 'Services', href: '/services', icon: BookOpen },
    { name: 'Our Approach', href: '/approach', icon: Target },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Assigned Work', href: '/AssignedWork', icon: FileText },
    { name: 'Meeting Register', href: '/Register', icon: Calendar },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Show cyber safe button after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCyberSafeVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCyberSafeClick = () => {
    // You can customize this action - for example, show a modal, navigate to a page, etc.
    window.open('/services#cyber-safety', '_blank');
  };

  const handleCloseCyberSafe = () => {
    setIsCyberSafeVisible(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-cyber">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group flex-shrink-0 mr-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={logo} 
                  alt="Group 7 Cyber Ed Inc." 
                  className="relative h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 drop-shadow-glow" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg bg-gradient-to-r from-brand-blue to-cyber-accent bg-clip-text text-transparent">
                  Group 7
                </span>
                <span className="text-xs text-muted-foreground -mt-1">Cyber Ed Inc.</span>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation - Improved spacing */}
            <div className="hidden lg:flex items-center justify-center flex-1 max-w-4xl mx-8">
              <div className="flex items-center flex-wrap gap-1 justify-center">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-brand-blue to-cyber-accent text-white shadow-glow scale-105'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/50 hover:scale-105 hover:shadow-cyber'
                      }`}
                    >
                      <IconComponent className={`h-4 w-4 ${isActive(item.href) ? 'text-white' : ''}`} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Button 
                asChild 
                variant="flashy" 
                size="sm" 
                className="ml-4 hover:scale-105 transition-transform duration-300 whitespace-nowrap"
              >
                <Link to="/contact">
                  <Zap className="h-4 w-4 mr-2" />
                  Get Started
                </Link>
              </Button>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="hover:bg-accent/50 hover:scale-105 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-brand-blue" />
                ) : (
                  <Menu className="h-5 w-5 text-brand-blue" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-in fade-in-50 slide-in-from-top-5 duration-300">
            <div className="px-4 pt-2 pb-4 space-y-2 bg-background/95 backdrop-blur-xl border-t border-border/60">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-brand-blue to-cyber-accent text-white shadow-glow'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className={`h-5 w-5 ${isActive(item.href) ? 'text-white' : ''}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-border/40">
                <Button 
                  asChild 
                  variant="flashy" 
                  className="w-full hover:scale-105 transition-transform duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/contact" className="flex items-center justify-center">
                    <Zap className="h-4 w-4 mr-2" />
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main content with enhanced spacing */}
      <main className="relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] bg-[length:32px_32px]" />
        <div className="pt-16"> {/* Added padding to account for fixed navbar */}
          {children}
        </div>
      </main>

      {/* Cyber Safety Floating Button */}
      {isCyberSafeVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            
            {/* Main button */}
            <Button
              onClick={handleCyberSafeClick}
              className="relative bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105 border-2 border-white/20"
              size="lg"
            >
              <Shield className="h-5 w-5 mr-2" />
              Be Cyber Safe
            </Button>

            {/* Close button */}
            <button
              onClick={handleCloseCyberSafe}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-110 shadow-lg"
              aria-label="Close cyber safety reminder"
            >
              ×
            </button>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block animate-in fade-in-50 duration-200">
              <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-3 shadow-xl max-w-xs border border-gray-700">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-4 w-4 text-yellow-400" />
                  <span className="font-semibold">Stay Protected!</span>
                </div>
                <p className="text-gray-300">Learn essential cybersecurity tips to keep yourself safe online</p>
                <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-br from-brand-blue-dark via-brand-blue to-cyber-accent border-t-2 border-brand-yellow/40">
        {/* Simplified background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Enhanced Logo in Footer */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow to-white rounded-lg blur-md opacity-50" />
                <img 
                  src={logo} 
                  alt="Group 7 Cyber Ed Inc." 
                  className="relative h-12 w-auto drop-shadow-2xl" 
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-xl text-white drop-shadow-glow">
                  Group 7
                </span>
                <span className="text-sm text-blue-100 -mt-1">Cyber Ed Inc.</span>
              </div>
            </div>

            {/* Mission Statement */}
            <p className="text-blue-100 font-medium text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
              Making cybersecurity simple, accessible, and impactful for everyone.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-blue-100 hover:text-white transition-colors duration-300 text-sm font-medium hover:scale-105 transform"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-blue-100 text-sm mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@group7cybered.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Building Cyber Literacy Since 2024</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-blue-400/30">
              <p className="text-sm text-brand-yellow-dim font-medium">
                © 2024 Group 7 Cyber Ed Inc. All rights reserved.
              </p>
              <p className="text-xs text-blue-200/70 mt-1">
                Empowering the next generation of cyber defenders.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;