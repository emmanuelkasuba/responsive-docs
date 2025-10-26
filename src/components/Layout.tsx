import { ReactNode, useState, useEffect } from 'react';
import { Shield, Zap, AlertTriangle, MessageCircle, ChevronUp, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isCyberSafeVisible, setIsCyberSafeVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll handling for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show cyber safe button after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCyberSafeVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCyberSafeClick = () => {
    window.open('/services#cyber-safety', '_self');
  };

  const handleCloseCyberSafe = () => {
    setIsCyberSafeVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickContact = () => {
    window.location.href = 'mailto:kasubaemmanuel@gmail.com?subject=Quick Inquiry - Cyber Ed Inc.&body=Hello, I would like to learn more about your cybersecurity programs.';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main content - NavBar is now separate */}
      <main className="relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.05)_1px,transparent_0)] bg-[length:32px_32px]" />
        
        {/* Content starts below fixed navbar (h-16) */}
        <div className="pt-16">
          {children}
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-3 rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

      {/* Cyber Safety Floating Button */}
      {isCyberSafeVisible && (
        <div className="fixed bottom-6 right-6 z-40 animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            
            {/* Main button */}
            <Button
              onClick={handleCyberSafeClick}
              className="relative bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105 border-2 border-white/20 group/cyber"
              size="lg"
            >
              <Shield className="h-5 w-5 mr-2 transition-transform group-hover/cyber:scale-110" />
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

            {/* Enhanced Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block animate-in fade-in-50 zoom-in-95 duration-200">
              <div className="bg-gray-900 text-white text-sm rounded-xl py-3 px-4 shadow-2xl max-w-xs border border-gray-700 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                  <span className="font-semibold text-yellow-400">Stay Protected!</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Learn essential cybersecurity tips to protect yourself from online threats and build digital confidence.
                </p>
                <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Contact Floating Button for Mobile */}
      <div className="fixed bottom-6 left-6 z-40 lg:hidden">
        <Button
          onClick={handleQuickContact}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105"
          size="icon"
          aria-label="Quick contact"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
      </div>

      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 border-t-2 border-yellow-400/40">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Enhanced Logo in Footer */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-white rounded-lg blur-md opacity-50" />
                <img 
                  src={logo} 
                  alt="Group 7 Cyber Ed Inc." 
                  className="relative h-14 w-auto drop-shadow-2xl" 
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-2xl text-white drop-shadow-glow">
                  Group 7
                </span>
                <span className="text-sm text-blue-100 -mt-1">Cyber Ed Inc.</span>
              </div>
            </div>

            {/* Mission Statement */}
            <p className="text-blue-100 font-medium text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              Making cybersecurity simple, accessible, and impactful for everyone through innovative education.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a href="/" className="text-blue-100 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 transform hover:underline">
                Home
              </a>
              <a href="/about" className="text-blue-100 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 transform hover:underline">
                About
              </a>
              <a href="/services" className="text-blue-100 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 transform hover:underline">
                Services
              </a>
              <a href="/approach" className="text-blue-100 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 transform hover:underline">
                Approach
              </a>
              <a href="/team" className="text-blue-100 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 transform hover:underline">
                Team
              </a>
              <a href="/contact" className="text-blue-100 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 transform hover:underline">
                Contact
              </a>
              <a href="/assignedwork" className="text-blue-100 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 transform hover:underline">
                Assigned Work
              </a>
              <a href="/register" className="text-blue-100 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-105 transform hover:underline">
                Meeting Register
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-blue-100 text-sm mb-8">
              <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
                <Mail className="h-4 w-4" />
                <a href="mailto:kasubaemmanuel@gmail.com" className="hover:underline">
                  kasubaemmanuel@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>Building Cyber Literacy Since 2024</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-6">
              <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-white/10 rounded-full">
                <span className="sr-only">LinkedIn</span>
                {/* Replace with actual LinkedIn icon */}
                <div className="w-5 h-5 bg-current rounded-sm"></div>
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-white/10 rounded-full">
                <span className="sr-only">GitHub</span>
                {/* Replace with actual GitHub icon */}
                <div className="w-5 h-5 bg-current rounded-full"></div>
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-white/10 rounded-full">
                <span className="sr-only">Twitter</span>
                {/* Replace with actual Twitter icon */}
                <div className="w-5 h-5 bg-current rounded-sm"></div>
              </Button>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-blue-400/30">
              <p className="text-sm text-yellow-300 font-medium">
                © 2024 Group 7 Cyber Ed Inc. All rights reserved.
              </p>
              <p className="text-xs text-blue-200/70 mt-2">
                Empowering the next generation of cyber defenders through accessible education.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;