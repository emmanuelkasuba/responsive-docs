// Enhanced Navbar.tsx
import { useState } from "react";
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
import { Menu, X, Users, Shield, BookOpen, Target, Heart, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      title: "Home",
      href: "/",
      icon: Shield,
    },
    {
      title: "About",
      href: "/about",
      icon: Heart,
    },
    {
      title: "Services",
      href: "/services",
      icon: BookOpen,
    },
    {
      title: "Approach",
      href: "/approach",
      icon: Target,
    },
    {
      title: "Team",
      href: "/MeetTheTeam",
      icon: Users,
    },
    {
      title: "Contact",
      href: "/contact",
      icon: Zap,
    },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-brand-blue to-cyber-accent bg-clip-text text-transparent">
              Group 7
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <NavigationMenuItem key={item.title}>
                      {item.title === "Services" ? (
                        <>
                          <NavigationMenuTrigger 
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50",
                              isActivePath(item.href) && "bg-accent/50 text-brand-blue"
                            )}
                          >
                            <IconComponent className="h-4 w-4 mr-2" />
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/services#bootcamps"
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="flex items-center space-x-2">
                                    <Zap className="h-4 w-4 text-cyber-accent" />
                                    <div className="text-sm font-medium leading-none">Cyber Literacy Bootcamps</div>
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Beginner-friendly crash courses covering cybersecurity foundations
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/services#workshops"
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="flex items-center space-x-2">
                                    <Shield className="h-4 w-4 text-brand-blue" />
                                    <div className="text-sm font-medium leading-none">Privacy Workshops</div>
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Digital ethics and personal data protection awareness
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/services#partnerships"
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="flex items-center space-x-2">
                                    <Users className="h-4 w-4 text-cyber-accent" />
                                    <div className="text-sm font-medium leading-none">School Partnerships</div>
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Customized learning modules for academic institutions
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "bg-transparent hover:bg-accent/50 flex items-center space-x-2",
                              isActivePath(item.href) && "bg-accent/50 text-brand-blue"
                            )}
                          >
                            <IconComponent className="h-4 w-4" />
                            <span>{item.title}</span>
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild variant="flashy" size="sm" className="ml-4">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.title}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200",
                          isActivePath(item.href)
                            ? "bg-gradient-to-r from-brand-blue/10 to-cyber-accent/10 text-brand-blue border-l-4 border-brand-blue"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        )}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                  <div className="pt-4 border-t border-border">
                    <Button asChild variant="flashy" className="w-full" onClick={() => setIsOpen(false)}>
                      <Link to="/contact">Get Started</Link>
                    </Button>
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

export default Navbar;