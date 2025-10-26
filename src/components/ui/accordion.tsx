import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

// Types for better TypeScript support
interface AccordionContextType {
  variant: "default" | "bordered" | "shadow" | "minimal";
  size: "sm" | "md" | "lg";
  iconType: "plus-minus" | "chevron";
}

const AccordionContext = React.createContext<AccordionContextType>({
  variant: "default",
  size: "md",
  iconType: "plus-minus",
});

// Main Accordion Components
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b border-border/60 last:border-b-0 transition-all duration-200",
      "hover:border-brand-blue/30 focus-within:border-brand-blue/50",
      "data-[state=open]:border-brand-blue/40",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  iconType?: "plus-minus" | "chevron";
  showBackground?: boolean;
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ 
  className, 
  children, 
  iconType = "plus-minus",
  showBackground = true,
  ...props 
}, ref) => {
  const context = React.useContext(AccordionContext);

  const currentIconType = iconType || context.iconType;

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          // Base styles
          "group flex flex-1 items-center justify-between py-6 text-left font-semibold",
          "transition-all duration-300 ease-out",
          "text-foreground hover:text-brand-blue",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
          "focus-visible:ring-offset-2 focus-visible:rounded-lg",
          
          // Hover effects
          "hover:bg-accent/50 hover:scale-[1.02] hover:shadow-cyber rounded-lg px-4 -mx-4",
          
          // Open state styles
          "data-[state=open]:text-brand-blue data-[state=open]:bg-accent/30",
          "data-[state=open]:rounded-b-none data-[state=open]:border-b-2",
          "data-[state=open]:border-brand-blue",
          
          // Size variants
          {
            "py-4 text-sm": context.size === "sm",
            "py-6 text-base": context.size === "md",
            "py-8 text-lg": context.size === "lg",
          },
          className
        )}
        {...props}
      >
        <span className="flex-1 pr-4">{children}</span>
        
        <div className="relative flex-shrink-0">
          {/* Animated background circle */}
          {showBackground && (
            <div 
              className={cn(
                "absolute inset-0 rounded-full transition-all duration-300",
                "bg-gradient-to-br from-brand-blue to-cyber-accent",
                "scale-0 group-hover:scale-100 group-data-[state=open]:scale-100",
                "opacity-10 group-hover:opacity-20 group-data-[state=open]:opacity-20"
              )} 
            />
          )}
          
          {/* Icon container */}
          <div className="relative flex items-center justify-center w-6 h-6 transition-transform duration-300 group-hover:scale-110">
            {currentIconType === "plus-minus" ? (
              <>
                <Plus className="h-4 w-4 text-muted-foreground group-hover:text-brand-blue group-data-[state=open]:scale-0 group-data-[state=open]:opacity-0 transition-all duration-300" />
                <Minus className="absolute h-4 w-4 text-brand-blue scale-0 opacity-0 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100 transition-all duration-300" />
              </>
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-brand-blue group-data-[state=open]:text-brand-blue transition-all duration-300 group-data-[state=open]:rotate-180" />
            )}
          </div>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  animate?: boolean;
}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, animate = true, ...props }, ref) => {
  const context = React.useContext(AccordionContext);

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        animate && "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
      )}
      {...props}
    >
      <div 
        className={cn(
          // Base styles
          "pb-6 pt-2 px-4 -mx-4 bg-accent/20 rounded-b-lg border-l-2 border-brand-blue/30",
          "prose prose-sm max-w-none prose-headings:font-semibold prose-p:leading-relaxed",
          "prose-ul:list-disc prose-ul:ml-4 prose-li:marker:text-brand-blue",
          
          // Size variants
          {
            "pb-4 pt-1 text-sm": context.size === "sm",
            "pb-6 pt-2 text-base": context.size === "md",
            "pb-8 pt-3 text-lg": context.size === "lg",
          },
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = "AccordionContent";

// Enhanced Accordion with context
interface EnhancedAccordionProps 
  extends React.ComponentPropsWithoutRef<typeof Accordion> {
  variant?: "default" | "bordered" | "shadow" | "minimal";
  size?: "sm" | "md" | "lg";
  iconType?: "plus-minus" | "chevron";
}

const EnhancedAccordion = React.forwardRef<
  React.ElementRef<typeof Accordion>,
  EnhancedAccordionProps
>(({ 
  variant = "default", 
  size = "md", 
  iconType = "plus-minus",
  className, 
  ...props 
}, ref) => {
  const variantStyles = {
    default: "space-y-2",
    bordered: "space-y-4 border border-border rounded-lg p-4 bg-card/50",
    shadow: "space-y-4 rounded-lg p-6 bg-card shadow-cyber border border-border/50",
    minimal: "space-y-1"
  };

  const sizeStyles = {
    sm: "text-sm",
    md: "text-base", 
    lg: "text-lg"
  };

  return (
    <AccordionContext.Provider value={{ variant, size, iconType }}>
      <Accordion
        ref={ref}
        className={cn(
          variantStyles[variant],
          sizeStyles[size],
          "transition-all duration-200",
          className
        )}
        {...props}
      />
    </AccordionContext.Provider>
  );
});
EnhancedAccordion.displayName = "EnhancedAccordion";

// Standalone item component with context support
interface EnhancedAccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionItem> {
  variant?: "default" | "bordered" | "shadow" | "minimal";
}

const EnhancedAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionItem>,
  EnhancedAccordionItemProps
>(({ variant = "default", className, ...props }, ref) => {
  const itemStyles = {
    default: "border-border/60",
    bordered: "border-border/40 rounded-lg px-3 hover:border-brand-blue/40",
    shadow: "border-border/30 rounded-lg px-3 shadow-sm hover:shadow-md transition-shadow",
    minimal: "border-transparent"
  };

  return (
    <AccordionItem
      ref={ref}
      className={cn(itemStyles[variant], className)}
      {...props}
    />
  );
});
EnhancedAccordionItem.displayName = "EnhancedAccordionItem";

// Usage examples
const AccordionExample = () => {
  const faqItems = [
    {
      id: "1",
      question: "What is cybersecurity education?",
      answer: "Cybersecurity education involves teaching individuals and organizations how to protect digital systems, networks, and data from cyber threats through practical skills and awareness."
    },
    {
      id: "2", 
      question: "Who can benefit from your programs?",
      answer: "Our programs are designed for everyone - from students and educators to professionals and community organizations. We tailor our approach to different skill levels and backgrounds."
    },
    {
      id: "3",
      question: "How do you make cybersecurity accessible?",
      answer: "We break down complex concepts into simple, practical lessons using real-world examples and hands-on activities, ensuring language is never a barrier to learning."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Default Example */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Accordion</h3>
        <EnhancedAccordion type="single" collapsible>
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </EnhancedAccordion>
      </div>

      {/* Shadow Variant with Chevron */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Shadow Variant with Chevron</h3>
        <EnhancedAccordion 
          type="single" 
          collapsible 
          variant="shadow" 
          iconType="chevron"
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </EnhancedAccordion>
      </div>

      {/* Minimal Variant */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Minimal Variant</h3>
        <EnhancedAccordion 
          type="single" 
          collapsible 
          variant="minimal" 
          size="sm"
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger showBackground={false}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </EnhancedAccordion>
      </div>
    </div>
  );
};

// Add these CSS animations to your global CSS
const slideDownStyles = `
@keyframes slideDown {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
}

.animate-slideDown {
  animation: slideDown 300ms ease-out;
}

.animate-slideUp {
  animation: slideUp 300ms ease-out;
}
`;

export { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent,
  EnhancedAccordion,
  EnhancedAccordionItem,
  AccordionExample,
  slideDownStyles
};