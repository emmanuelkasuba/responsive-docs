import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X, Check, Star, Crown, Shield, Zap, Loader2, AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

// Enhanced badge variants with more options
const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        success: "border-transparent bg-green-500 text-white hover:bg-green-600",
        warning: "border-transparent bg-amber-500 text-white hover:bg-amber-600",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
        premium: "border-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600",
        outline: "text-foreground bg-transparent hover:bg-accent",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-accent",
      },
      size: {
        xs: "px-1.5 py-0.5 text-xs h-5",
        sm: "px-2 py-0.5 text-xs h-6",
        md: "px-2.5 py-0.5 text-sm h-7",
        lg: "px-3 py-1 text-base h-8",
        xl: "px-4 py-1.5 text-lg h-10",
      },
      rounded: {
        full: "rounded-full",
        lg: "rounded-lg",
        md: "rounded-md",
        sm: "rounded-sm",
        none: "rounded-none",
      },
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        inner: "shadow-inner",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        ping: "animate-ping",
        spin: "animate-spin",
      }
    },
    compoundVariants: [
      {
        variant: "premium",
        shadow: "lg",
        className: "shadow-purple-500/25"
      },
      {
        variant: "success",
        animation: "pulse",
        className: "bg-green-500"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "full",
      shadow: "none",
      animation: "none",
    },
  }
);

// Icon variants for different badge types
const badgeIconVariants = cva(
  "flex-shrink-0",
  {
    variants: {
      size: {
        xs: "h-2.5 w-2.5",
        sm: "h-3 w-3",
        md: "h-3.5 w-3.5",
        lg: "h-4 w-4",
        xl: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

// Default icons for different variants
const variantIcons = {
  success: Check,
  warning: AlertCircle,
  premium: Crown,
  destructive: X,
  info: Star,
  default: Zap,
};

// Enhanced Badge Props
export interface BadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>, 
    VariantProps<typeof badgeVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  isLoading?: boolean;
  maxWidth?: number | string;
  title?: string;
  interactive?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ 
    className, 
    variant, 
    size, 
    rounded,
    shadow,
    animation,
    leftIcon,
    rightIcon,
    icon,
    showIcon = false,
    dismissible = false,
    onDismiss,
    isLoading = false,
    maxWidth,
    title,
    interactive = false,
    children,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);
    
    const handleDismiss = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsVisible(false);
      onDismiss?.();
    };

    // Don't render if dismissed
    if (!isVisible) return null;

    // Determine which icon to show
    const IconComponent = variant && variantIcons[variant];
    const shouldShowIcon = showIcon && (icon || IconComponent);
    const displayLeftIcon = leftIcon || (shouldShowIcon && !rightIcon && icon);
    const displayRightIcon = rightIcon || (shouldShowIcon && !leftIcon && icon);

    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({ variant, size, rounded, shadow, animation }),
          interactive && "cursor-pointer hover:scale-105 active:scale-95 transition-transform",
          "group/badge",
          className
        )}
        style={maxWidth ? { maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth } : undefined}
        title={title}
        {...props}
      >
        {/* Loading state */}
        {isLoading && (
          <Loader2 className={cn(
            badgeIconVariants({ size }),
            "animate-spin mr-1"
          )} />
        )}

        {/* Left icon */}
        {!isLoading && displayLeftIcon && (
          <span className={cn(
            "mr-1.5 flex-shrink-0",
            badgeIconVariants({ size })
          )}>
            {displayLeftIcon}
          </span>
        )}

        {/* Left icon from variant */}
        {!isLoading && showIcon && !leftIcon && !rightIcon && IconComponent && (
          <IconComponent className={cn(
            badgeIconVariants({ size }),
            "mr-1.5"
          )} />
        )}

        {/* Badge content */}
        <span className={cn(
          "truncate",
          (displayLeftIcon || isLoading) && "ml-0",
          displayRightIcon && "mr-0"
        )}>
          {children}
        </span>

        {/* Right icon */}
        {!isLoading && displayRightIcon && (
          <span className={cn(
            "ml-1.5 flex-shrink-0",
            badgeIconVariants({ size })
          )}>
            {displayRightIcon}
          </span>
        )}

        {/* Dismiss button */}
        {dismissible && (
          <button
            onClick={handleDismiss}
            className={cn(
              "ml-1.5 flex-shrink-0 rounded-full p-0.5 transition-all duration-200",
              "hover:bg-black/10 dark:hover:bg-white/10",
              "focus:outline-none focus:ring-1 focus:ring-current",
              "opacity-60 hover:opacity-100",
              badgeIconVariants({ size })
            )}
            aria-label="Dismiss badge"
          >
            <X className="h-full w-full" />
          </button>
        )}
      </div>
    );
  }
);
Badge.displayName = "Badge";

// Badge Group Component
interface BadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spacing?: "none" | "tight" | "normal" | "loose";
  wrap?: boolean;
  maxItems?: number;
  overflowLabel?: string;
}

const BadgeGroup = React.forwardRef<HTMLDivElement, BadgeGroupProps>(
  ({ 
    className, 
    children, 
    spacing = "normal", 
    wrap = true,
    maxItems,
    overflowLabel,
    ...props 
  }, ref) => {
    const spacingStyles = {
      none: "gap-0",
      tight: "gap-1",
      normal: "gap-2",
      loose: "gap-3",
    };

    const childrenArray = React.Children.toArray(children);
    const displayedItems = maxItems ? childrenArray.slice(0, maxItems) : childrenArray;
    const overflowCount = maxItems ? childrenArray.length - maxItems : 0;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center",
          wrap && "flex-wrap",
          spacingStyles[spacing],
          className
        )}
        {...props}
      >
        {displayedItems}
        {overflowCount > 0 && (
          <Badge
            variant="outline"
            size="sm"
            title={`${overflowCount} more items`}
          >
            {overflowLabel || `+${overflowCount}`}
          </Badge>
        )}
      </div>
    );
  }
);
BadgeGroup.displayName = "BadgeGroup";

// Badge Count Component
interface BadgeCountProps extends Omit<BadgeProps, 'children'> {
  count: number;
  maxCount?: number;
  showZero?: boolean;
}

const BadgeCount = React.forwardRef<HTMLDivElement, BadgeCountProps>(
  ({ 
    count, 
    maxCount = 99, 
    showZero = false,
    variant = "destructive",
    size = "sm",
    ...props 
  }, ref) => {
    if (count === 0 && !showZero) return null;

    const displayCount = count > maxCount ? `${maxCount}+` : count;

    return (
      <Badge
        ref={ref}
        variant={variant}
        size={size}
        animation={count > 0 ? "pulse" : "none"}
        {...props}
      >
        {displayCount}
      </Badge>
    );
  }
);
BadgeCount.displayName = "BadgeCount";

// Status Badge Component
interface StatusBadgeProps extends Omit<BadgeProps, 'children' | 'variant'> {
  status: "online" | "offline" | "away" | "busy" | "loading";
  label?: string;
  showLabel?: boolean;
}

const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ 
    status, 
    label,
    showLabel = false,
    size = "sm",
    ...props 
  }, ref) => {
    const statusConfig = {
      online: { variant: "success" as const, icon: <div className="rounded-full bg-current w-1.5 h-1.5" />, label: "Online" },
      offline: { variant: "outline" as const, icon: <div className="rounded-full bg-current w-1.5 h-1.5" />, label: "Offline" },
      away: { variant: "warning" as const, icon: <div className="rounded-full bg-current w-1.5 h-1.5" />, label: "Away" },
      busy: { variant: "destructive" as const, icon: <div className="rounded-full bg-current w-1.5 h-1.5" />, label: "Busy" },
      loading: { variant: "secondary" as const, icon: <Loader2 className="h-2.5 w-2.5 animate-spin" />, label: "Loading" },
    };

    const config = statusConfig[status];

    return (
      <Badge
        ref={ref}
        variant={config.variant}
        size={size}
        leftIcon={config.icon}
        {...props}
      >
        {showLabel ? (label || config.label) : null}
      </Badge>
    );
  }
);
StatusBadge.displayName = "StatusBadge";

// Enhanced Badge Component with composition
interface EnhancedBadgeProps extends BadgeProps {
  count?: number;
  status?: "online" | "offline" | "away" | "busy" | "loading";
  showStatus?: boolean;
}

const EnhancedBadge = React.forwardRef<HTMLDivElement, EnhancedBadgeProps>(
  ({ 
    count,
    status,
    showStatus = false,
    children,
    ...props 
  }, ref) => {
    if (count !== undefined) {
      return (
        <BadgeCount
          ref={ref}
          count={count}
          {...props}
        />
      );
    }

    if (showStatus && status) {
      return (
        <StatusBadge
          ref={ref}
          status={status}
          showLabel={!!children}
          {...props}
        >
          {children}
        </StatusBadge>
      );
    }

    return (
      <Badge ref={ref} {...props}>
        {children}
      </Badge>
    );
  }
);
EnhancedBadge.displayName = "EnhancedBadge";

// Usage examples component
const BadgeExample = () => {
  const [badges, setBadges] = React.useState(['React', 'TypeScript', 'Tailwind CSS', 'Next.js']);

  const removeBadge = (badgeToRemove: string) => {
    setBadges(badges.filter(badge => badge !== badgeToRemove));
  };

  return (
    <div className="space-y-8 p-6">
      {/* Variant Examples */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Badge Variants</h3>
        <div className="flex flex-wrap gap-2">
          {([
            'default', 'secondary', 'destructive', 'success', 
            'warning', 'info', 'premium', 'outline', 'ghost'
          ] as const).map((variant) => (
            <Badge key={variant} variant={variant}>
              {variant}
            </Badge>
          ))}
        </div>
      </div>

      {/* Size Examples */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Badge Sizes</h3>
        <div className="flex flex-wrap items-center gap-2">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <Badge key={size} size={size} variant="secondary">
              Size {size}
            </Badge>
          ))}
        </div>
      </div>

      {/* Icon Examples */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Badge with Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Badge leftIcon={<Star className="h-3 w-3" />} variant="warning">
            Featured
          </Badge>
          <Badge rightIcon={<Check className="h-3 w-3" />} variant="success">
            Verified
          </Badge>
          <Badge showIcon variant="premium">
            Premium
          </Badge>
          <Badge leftIcon={<Shield className="h-3 w-3" />} variant="info">
            Protected
          </Badge>
        </div>
      </div>

      {/* Interactive Examples */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Interactive Badges</h3>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge
              key={badge}
              variant="outline"
              dismissible
              onDismiss={() => removeBadge(badge)}
              interactive
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>

      {/* Badge Group Example */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Badge Groups</h3>
        <BadgeGroup spacing="normal" maxItems={3} overflowLabel="+2 more">
          <Badge variant="secondary">JavaScript</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Node.js</Badge>
          <Badge variant="secondary">CSS</Badge>
        </BadgeGroup>
      </div>

      {/* Status Badges */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Status Badges</h3>
        <div className="flex flex-wrap gap-2">
          <StatusBadge status="online" showLabel />
          <StatusBadge status="offline" showLabel />
          <StatusBadge status="away" showLabel />
          <StatusBadge status="busy" showLabel />
          <StatusBadge status="loading" showLabel />
        </div>
      </div>

      {/* Count Badges */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Count Badges</h3>
        <div className="flex flex-wrap gap-2">
          <BadgeCount count={5} />
          <BadgeCount count={0} showZero />
          <BadgeCount count={150} maxCount={99} />
          <BadgeCount count={3} variant="success" />
        </div>
      </div>

      {/* Animation Examples */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Animated Badges</h3>
        <div className="flex flex-wrap gap-2">
          <Badge animation="pulse" variant="destructive">
            Alert
          </Badge>
          <Badge animation="ping" variant="success">
            Live
          </Badge>
          <Badge leftIcon={<Loader2 className="h-3 w-3 animate-spin" />}>
            Loading
          </Badge>
        </div>
      </div>
    </div>
  );
};

export { 
  Badge, 
  BadgeGroup, 
  BadgeCount, 
  StatusBadge,
  EnhancedBadge,
  BadgeExample,
  badgeVariants,
  badgeIconVariants 
};

export type { 
  BadgeProps, 
  BadgeGroupProps, 
  BadgeCountProps, 
  StatusBadgeProps,
  EnhancedBadgeProps 
};