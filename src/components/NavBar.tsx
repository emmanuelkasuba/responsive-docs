// Enhanced Standalone NavBar.tsx with improved features
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, X, Users, Shield, BookOpen, Target, Heart, 
  Zap, FileText, Calendar, Mail, Home, ChevronDown 
} from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: "Home",
      href: "/",
      icon: Home,
      description: "Welcome to Cyber Ed Inc."
    },
    {
      title: "About",
      href: "/about",
      icon: Heart,
      description: "Our mission and vision"
    },
    {
      title: "Services",
      href: "/services",
      icon: BookOpen,
      description: "Our programs and offerings",
      hasDropdown: true
    },
    {
      title: "Approach",
      href: "/approach",
      icon: Target,
      description: "Our teaching methodology"
    },
    {
      title: "Team",
      href: "/team",
      icon: Users,
      description: "Meet our team"
    },
    {
      title: "Contact",
      href: "/contact",
      icon: Mail,
      description: "Get in touch with us"
    },
    {
      title: "Assigned Work",
      href: "/AssignedWork",
      icon: FileText,
      description: "Project assignments and progress"
    },
    {
      title: "Meeting Register",
      href: "/Register",
      icon: Calendar,
      description: "Meeting records and gallery"
    },
  ];

  const servicesItems = [
    {
      title: "Cyber Literacy",
      href: "/services#cyber-literacy",
      icon: Shield,
      description: "Beginner-friendly cybersecurity fundamentals"
    },
    {
      title: "Digital Ethics",
      href: "/services#digital-ethics",
      icon: Users,
      description: "Privacy and ethical technology use"
    },
    {
      title: "Student Programs",
      href: "/services#student-programs",
      icon: BookOpen,
      description: "Customized learning for students and clubs"
    },
    {
      title: "All Services",
      href: "/services",
      icon: Zap,
      description: "View all our cybersecurity programs"
    }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const handleQuickContact = () => {
    window.location.href = 'mailto:kasubaemmanuel@gmail.com?subject=Quick Inquiry - Cyber Ed Inc.&body=Hello, I would like to learn more about your cybersecurity programs.';
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-background/95 backdrop-blur-xl border-border/80 shadow-cyber" 
        : "bg-background/80 backdrop-blur-md border-border/40"
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group flex-shrink-0 mr-4"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Group 7
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Cyber Ed Inc.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-4xl mx-8">
            <NavigationMenu>
              <NavigationMenuList className="flex-wrap justify-center gap-1">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  
                  if (item.hasDropdown) {
                    return (
                      <NavigationMenuItem key={item.title} className="flex-shrink-0">
                        <NavigationMenuTrigger 
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50 whitespace-nowrap gap-2 pr-2",
                            isActivePath(item.href) && "bg-accent/50 text-blue-600"
                          )}
                        >
                          <IconComponent className="h-4 w-4" />
                          {item.title}
                          <ChevronDown className="h-3 w-3 transition-transform duration-200" />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {servicesItems.map((service) => {
                              const ServiceIcon = service.icon;
                              return (
                                <NavigationMenuLink asChild key={service.title}>
                                  <Link
                                    to={service.href}
                                    className="flex select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:scale-105 group/service"
                                  >
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-3 group-hover/service:scale-110 transition-transform duration-200">
                                      <ServiceIcon className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-sm font-medium leading-none text-foreground">
                                        {service.title}
                                      </div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                        {service.description}
                                      </p>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              );
                            })}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  return (
                    <NavigationMenuItem key={item.title} className="flex-shrink-0">
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent hover:bg-accent/50 flex items-center space-x-2 whitespace-nowrap group/nav",
                            isActivePath(item.href) && "bg-accent/50 text-blue-600"
                          )}
                        >
                          <IconComponent className="h-4 w-4 transition-transform duration-200 group-hover/nav:scale-110" />
                          <span>{item.title}</span>
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleQuickContact}
              className="hover:scale-105 transition-all duration-300 whitespace-nowrap border-blue-600/30 text-blue-600 hover:bg-blue-600/10"
            >
              <Mail className="h-4 w-4 mr-2" />
              Quick Contact
            </Button>
            <Button 
              asChild 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
              size="sm"
            >
              <Link to="/contact">
                <Zap className="h-4 w-4 mr-2" />
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-accent/50 hover:scale-105 transition-all duration-300 relative"
                >
                  {isOpen ? (
                    <X className="h-6 w-6 text-blue-600" />
                  ) : (
                    <Menu className="h-6 w-6 text-blue-600" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[350px] overflow-y-auto border-l border-border/60">
                <div className="flex flex-col space-y-1 mt-8">
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.title}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 group/mobile",
                          isActivePath(item.href)
                            ? "bg-gradient-to-r from-blue-600/10 to-cyan-500/10 text-blue-600 border-l-4 border-blue-600"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        )}
                      >
                        <IconComponent className="h-5 w-5 transition-transform duration-200 group-hover/mobile:scale-110" />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                  
                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 border-t border-border/40 space-y-3 mt-4">
                    <Button 
                      variant="outline" 
                      className="w-full hover:scale-105 transition-transform duration-300 border-blue-600/30 text-blue-600 hover:bg-blue-600/10"
                      onClick={() => {
                        setIsOpen(false);
                        handleQuickContact();
                      }}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Quick Contact
                    </Button>
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white hover:scale-105 transition-transform duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to="/contact" className="flex items-center justify-center">
                        <Zap className="h-4 w-4 mr-2" />
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Mobile Services Submenu */}
                <div className="pt-6 border-t border-border/40 mt-4">
                  <h3 className="px-4 text-sm font-semibold text-muted-foreground mb-3">Our Services</h3>
                  <div className="space-y-1">
                    {servicesItems.map((service) => {
                      const ServiceIcon = service.icon;
                      return (
                        <Link
                          key={service.title}
                          to={service.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                        >
                          <ServiceIcon className="h-4 w-4" />
                          <span>{service.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;