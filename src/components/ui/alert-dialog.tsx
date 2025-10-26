import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangle, Info, CheckCircle, X, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// Types for better TypeScript support
type AlertDialogIconType = "warning" | "info" | "success" | "error" | "loading" | "none";
type AlertDialogSize = "sm" | "md" | "lg" | "xl";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

// Enhanced overlay with backdrop effects
interface AlertDialogOverlayProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> {
  blur?: boolean;
  gradient?: boolean;
}

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  AlertDialogOverlayProps
>(({ className, blur = true, gradient = false, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 transition-all duration-300",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      blur && "backdrop-blur-sm",
      gradient && "bg-gradient-to-br from-black/40 via-purple-900/20 to-black/40",
      !gradient && "bg-black/80",
      className
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

// Icon component for different alert types
interface AlertDialogIconProps {
  type: AlertDialogIconType;
  className?: string;
}

const AlertDialogIcon = ({ type, className }: AlertDialogIconProps) => {
  const iconConfig = {
    warning: { icon: AlertTriangle, className: "text-amber-500" },
    error: { icon: AlertTriangle, className: "text-red-500" },
    success: { icon: CheckCircle, className: "text-green-500" },
    info: { icon: Info, className: "text-blue-500" },
    loading: { icon: Loader2, className: "text-blue-500 animate-spin" },
    none: { icon: null, className: "" },
  };

  const config = iconConfig[type];
  if (!config.icon) return null;

  const IconComponent = config.icon;
  return (
    <div className={cn(
      "flex items-center justify-center w-12 h-12 rounded-full bg-background/80 border mb-4",
      config.className,
      className
    )}>
      <IconComponent className="w-6 h-6" />
    </div>
  );
};

// Enhanced content with variants
interface AlertDialogContentProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> {
  size?: AlertDialogSize;
  showCloseButton?: boolean;
  icon?: AlertDialogIconType;
  overlayProps?: AlertDialogOverlayProps;
}

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContentProps
>(({ 
  className, 
  size = "md", 
  showCloseButton = true,
  icon = "none",
  overlayProps,
  children, 
  ...props 
}, ref) => {
  const sizeStyles = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay {...overlayProps} />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-300",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          "sm:rounded-xl backdrop-blur-sm bg-background/95 border-border/50",
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {showCloseButton && (
          <AlertDialogPrimitive.Cancel className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </AlertDialogPrimitive.Cancel>
        )}
        
        {icon !== "none" && <AlertDialogIcon type={icon} />}
        
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
  );
});
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

// Enhanced header with icon support
interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
}

const AlertDialogHeader = ({ 
  className, 
  centered = false, 
  ...props 
}: AlertDialogHeaderProps) => (
  <div 
    className={cn(
      "flex flex-col space-y-2",
      centered ? "text-center" : "text-left sm:text-left",
      className
    )} 
    {...props} 
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

// Enhanced footer with flexible layout
interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  layout?: "default" | "centered" | "reverse";
}

const AlertDialogFooter = ({ 
  className, 
  layout = "default", 
  ...props 
}: AlertDialogFooterProps) => {
  const layoutStyles = {
    default: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
    centered: "flex flex-col-reverse sm:flex-row sm:justify-center sm:space-x-4",
    reverse: "flex flex-col sm:flex-row sm:justify-start sm:space-x-2",
  };

  return (
    <div 
      className={cn(layoutStyles[layout], className)} 
      {...props} 
    />
  );
};
AlertDialogFooter.displayName = "AlertDialogFooter";

// Enhanced title with alert type support
interface AlertDialogTitleProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> {
  variant?: "default" | "destructive";
}

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitleProps
>(({ className, variant = "default", ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-6",
      variant === "destructive" && "text-destructive",
      className
    )}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

// Enhanced description with better typography
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn(
      "text-sm text-muted-foreground leading-relaxed",
      "prose prose-sm max-w-none prose-p:my-2 prose-ul:my-2 prose-ol:my-2",
      className
    )}
    {...props}
  />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

// Enhanced action button with variants
interface AlertDialogActionProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(({ className, variant = "default", size = "default", isLoading = false, children, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(
      buttonVariants({ variant, size }),
      "relative",
      isLoading && "pointer-events-none",
      className
    )}
    disabled={isLoading}
    {...props}
  >
    {isLoading && (
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    )}
    {children}
  </AlertDialogPrimitive.Action>
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

// Enhanced cancel button
interface AlertDialogCancelProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>,
    VariantProps<typeof buttonVariants> {}

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  AlertDialogCancelProps
>(({ className, variant = "outline", size = "default", ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant, size }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// Enhanced AlertDialog component with preset configurations
interface EnhancedAlertDialogProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialog> {
  icon?: AlertDialogIconType;
  size?: AlertDialogSize;
  overlayProps?: AlertDialogOverlayProps;
}

const EnhancedAlertDialog: React.FC<EnhancedAlertDialogProps> & {
  Trigger: typeof AlertDialogTrigger;
  Content: typeof AlertDialogContent;
  Header: typeof AlertDialogHeader;
  Footer: typeof AlertDialogFooter;
  Title: typeof AlertDialogTitle;
  Description: typeof AlertDialogDescription;
  Action: typeof AlertDialogAction;
  Cancel: typeof AlertDialogCancel;
} = ({ children, icon = "none", size = "md", overlayProps, ...props }) => {
  return (
    <AlertDialog {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === AlertDialogContent) {
          return React.cloneElement(child, { 
            icon,
            size,
            overlayProps,
            ...child.props 
          });
        }
        return child;
      })}
    </AlertDialog>
  );
};

// Assign subcomponents
EnhancedAlertDialog.Trigger = AlertDialogTrigger;
EnhancedAlertDialog.Content = AlertDialogContent;
EnhancedAlertDialog.Header = AlertDialogHeader;
EnhancedAlertDialog.Footer = AlertDialogFooter;
EnhancedAlertDialog.Title = AlertDialogTitle;
EnhancedAlertDialog.Description = AlertDialogDescription;
EnhancedAlertDialog.Action = AlertDialogAction;
EnhancedAlertDialog.Cancel = AlertDialogCancel;

// Usage examples
const AlertDialogExample = () => {
  return (
    <div className="space-y-4 p-4">
      {/* Default Dialog */}
      <EnhancedAlertDialog>
        <EnhancedAlertDialog.Trigger asChild>
          <button className={buttonVariants()}>Open Default Dialog</button>
        </EnhancedAlertDialog.Trigger>
        <EnhancedAlertDialog.Content>
          <EnhancedAlertDialog.Header>
            <EnhancedAlertDialog.Title>Default Dialog</EnhancedAlertDialog.Title>
            <EnhancedAlertDialog.Description>
              This is a standard alert dialog with default settings.
            </EnhancedAlertDialog.Description>
          </EnhancedAlertDialog.Header>
          <EnhancedAlertDialog.Footer>
            <EnhancedAlertDialog.Cancel>Cancel</EnhancedAlertDialog.Cancel>
            <EnhancedAlertDialog.Action>Continue</EnhancedAlertDialog.Action>
          </EnhancedAlertDialog.Footer>
        </EnhancedAlertDialog.Content>
      </EnhancedAlertDialog>

      {/* Warning Dialog */}
      <EnhancedAlertDialog icon="warning">
        <EnhancedAlertDialog.Trigger asChild>
          <button className={buttonVariants({ variant: "outline" })}>Open Warning</button>
        </EnhancedAlertDialog.Trigger>
        <EnhancedAlertDialog.Content>
          <EnhancedAlertDialog.Header>
            <EnhancedAlertDialog.Title variant="destructive">
              Delete Account
            </EnhancedAlertDialog.Title>
            <EnhancedAlertDialog.Description>
              Are you sure you want to delete your account? This action cannot be undone.
            </EnhancedAlertDialog.Description>
          </EnhancedAlertDialog.Header>
          <EnhancedAlertDialog.Footer>
            <EnhancedAlertDialog.Cancel>Cancel</EnhancedAlertDialog.Cancel>
            <EnhancedAlertDialog.Action variant="destructive">
              Delete Account
            </EnhancedAlertDialog.Action>
          </EnhancedAlertDialog.Footer>
        </EnhancedAlertDialog.Content>
      </EnhancedAlertDialog>

      {/* Success Dialog */}
      <EnhancedAlertDialog icon="success">
        <EnhancedAlertDialog.Trigger asChild>
          <button className={buttonVariants({ variant: "secondary" })}>Open Success</button>
        </EnhancedAlertDialog.Trigger>
        <EnhancedAlertDialog.Content size="sm">
          <EnhancedAlertDialog.Header centered>
            <EnhancedAlertDialog.Title>Success!</EnhancedAlertDialog.Title>
            <EnhancedAlertDialog.Description>
              Your changes have been saved successfully.
            </EnhancedAlertDialog.Description>
          </EnhancedAlertDialog.Header>
          <EnhancedAlertDialog.Footer layout="centered">
            <EnhancedAlertDialog.Action>Continue</EnhancedAlertDialog.Action>
          </EnhancedAlertDialog.Footer>
        </EnhancedAlertDialog.Content>
      </EnhancedAlertDialog>
    </div>
  );
};

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  EnhancedAlertDialog,
  AlertDialogExample,
  type AlertDialogIconType,
  type AlertDialogSize,
};