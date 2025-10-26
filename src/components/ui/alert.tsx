import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  XCircle, 
  X,
  Loader2,
  Bell,
  Shield
} from "lucide-react";

import { cn } from "@/lib/utils";

// Enhanced alert variants with more options
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border/50",
        destructive: 
          "border-destructive/50 bg-destructive/10 text-destructive dark:border-destructive [&>svg]:text-destructive",
        warning:
          "border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-300 [&>svg]:text-amber-500",
        success:
          "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300 [&>svg]:text-green-500",
        info:
          "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300 [&>svg]:text-blue-500",
        loading:
          "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300 [&>svg]:text-blue-500",
        premium:
          "border-purple-500/50 bg-gradient-to-r from-purple-500/5 to-pink-500/5 text-purple-700 dark:text-purple-300 [&>svg]:text-purple-500 border-l-4 border-l-purple-500",
      },
      size: {
        sm: "p-3 text-sm",
        md: "p-4 text-base",
        lg: "p-6 text-lg",
      },
      elevation: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-lg",
        lg: "rounded-xl",
        full: "rounded-full",
      }
    },
    compoundVariants: [
      {
        variant: "premium",
        elevation: "lg",
        className: "shadow-purple-500/10"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      elevation: "none",
      rounded: "md",
    },
  }
);

// Icon mapping for different alert variants
const alertIcons = {
  default: Info,
  destructive: XCircle,
  warning: AlertTriangle,
  success: CheckCircle2,
  info: Info,
  loading: Loader2,
  premium: Shield,
};

// Enhanced Alert Props
interface AlertProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: React.ReactNode;
  title?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    className, 
    variant, 
    size,
    elevation,
    rounded,
    showIcon = true,
    dismissible = false,
    onDismiss,
    action,
    title,
    icon,
    children, 
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);
    
    const handleDismiss = () => {
      setIsVisible(false);
      onDismiss?.();
    };

    // Don't render if dismissed
    if (!isVisible) return null;

    const IconComponent = variant && icon ? undefined : alertIcons[variant || "default"];
    const hasIcon = showIcon && (IconComponent || icon);

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          alertVariants({ variant, size, elevation, rounded }),
          "group/alert",
          "animate-in fade-in-0 duration-300",
          className
        )}
        {...props}
      >
        <div className={cn(
          "flex items-start gap-3",
          action && "justify-between"
        )}>
          {/* Icon and Content */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {hasIcon && (
              <div className={cn(
                "flex-shrink-0 mt-0.5",
                variant === "loading" && "animate-spin"
              )}>
                {icon || (IconComponent && <IconComponent className="w-4 h-4" />)}
              </div>
            )}
            
            <div className={cn(
              "flex-1 min-w-0",
              !hasIcon && "[&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px]",
              hasIcon && "[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground"
            )}>
              {title && (
                <AlertTitle className="mb-1.5">
                  {title}
                </AlertTitle>
              )}
              {children}
            </div>
          </div>

          {/* Action and Dismiss Button */}
          <div className="flex items-start gap-2 flex-shrink-0">
            {action && (
              <div className="flex-shrink-0">
                {action}
              </div>
            )}
            
            {dismissible && (
              <button
                onClick={handleDismiss}
                className={cn(
                  "opacity-0 group-hover/alert:opacity-100 transition-all duration-200",
                  "rounded-sm p-1 hover:bg-black/5 dark:hover:bg-white/5",
                  "focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 focus:ring-offset-background",
                  "flex-shrink-0 mt-0.5"
                )}
                aria-label="Dismiss alert"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

// Enhanced AlertTitle with variant support
interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, as: Comp = "h5", ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(
        "font-semibold leading-none tracking-tight",
        "flex items-center gap-2",
        className
      )}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

// Enhanced AlertDescription with better typography
const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm leading-relaxed [&_p]:leading-relaxed",
      "prose prose-sm max-w-none prose-p:my-1.5",
      "prose-ul:my-1.5 prose-ol:my-1.5 prose-li:my-0.5",
      "prose-strong:font-semibold prose-a:text-current prose-a:underline",
      className
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

// Alert Action component for inline actions
interface AlertActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md";
}

const AlertAction = React.forwardRef<HTMLButtonElement, AlertActionProps>(
  ({ className, variant = "outline", size = "sm", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-transparent border border-current text-current hover:bg-current/10": variant === "outline",
            "bg-current text-white hover:opacity-90": variant === "default",
            "hover:bg-current/10": variant === "ghost",
          },
          {
            "h-7 px-2 text-xs": size === "sm",
            "h-8 px-3": size === "md",
          },
          className
        )}
        {...props}
      />
    );
  }
);
AlertAction.displayName = "AlertAction";

// Enhanced Alert component with composition
interface EnhancedAlertProps extends AlertProps {
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

const EnhancedAlert = React.forwardRef<HTMLDivElement, EnhancedAlertProps>(
  ({ children, ...props }, ref) => {
    return (
      <Alert ref={ref} {...props}>
        {children}
      </Alert>
    );
  }
);
EnhancedAlert.displayName = "EnhancedAlert";

// Usage examples component
const AlertExample = () => {
  const [showAlert, setShowAlert] = React.useState(true);

  return (
    <div className="space-y-4 max-w-2xl mx-auto p-4">
      {/* Default Alert */}
      <Alert>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert with an informational message.
        </AlertDescription>
      </Alert>

      {/* Destructive Alert */}
      <Alert variant="destructive" dismissible onDismiss={() => console.log('Dismissed')}>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          There was a problem with your request. Please try again.
        </AlertDescription>
      </Alert>

      {/* Success Alert */}
      <Alert variant="success">
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>

      {/* Warning Alert with Action */}
      <Alert 
        variant="warning" 
        action={
          <AlertAction onClick={() => alert('Action clicked!')}>
            Action
          </AlertAction>
        }
      >
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          This action cannot be undone. Please proceed with caution.
        </AlertDescription>
      </Alert>

      {/* Loading Alert */}
      <Alert variant="loading">
        <AlertTitle>Processing</AlertTitle>
        <AlertDescription>
          Please wait while we complete your request.
        </AlertDescription>
      </Alert>

      {/* Premium Alert */}
      <Alert variant="premium" icon={<Shield className="w-4 h-4" />}>
        <AlertTitle>Premium Feature</AlertTitle>
        <AlertDescription>
          This feature is available for premium users. <a href="#" className="underline">Upgrade now</a> to access all features.
        </AlertDescription>
      </Alert>

      {/* Custom Icon Alert */}
      <Alert 
        variant="info" 
        icon={<Bell className="w-4 h-4" />}
        dismissible
      >
        <AlertTitle>Notification</AlertTitle>
        <AlertDescription>
          You have 3 new messages in your inbox.
        </AlertDescription>
      </Alert>

      {/* Controlled Alert */}
      {showAlert && (
        <Alert 
          variant="success" 
          dismissible 
          onDismiss={() => setShowAlert(false)}
          action={
            <AlertAction onClick={() => setShowAlert(false)}>
              Undo
            </AlertAction>
          }
        >
          <AlertTitle>Controlled Alert</AlertTitle>
          <AlertDescription>
            This alert can be controlled programmatically.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export { 
  Alert, 
  AlertTitle, 
  AlertDescription, 
  AlertAction,
  EnhancedAlert,
  AlertExample,
  alertVariants 
};

export type { AlertProps, AlertTitleProps, AlertActionProps };