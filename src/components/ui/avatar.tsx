import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { User, Shield, Crown, Star, Check, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

// Avatar variants for different sizes and shapes
const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden transition-all duration-300",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-8 w-8 text-sm",
        md: "h-10 w-10 text-base",
        lg: "h-12 w-12 text-lg",
        xl: "h-16 w-16 text-xl",
        "2xl": "h-20 w-20 text-2xl",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
        rounded: "rounded-lg",
      },
      border: {
        none: "",
        default: "ring-2 ring-background",
        primary: "ring-2 ring-primary",
        destructive: "ring-2 ring-destructive",
        success: "ring-2 ring-green-500",
        premium: "ring-2 ring-purple-500",
      },
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      }
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
      border: "none",
      shadow: "none",
    },
  }
);

// Status indicator variants
const statusVariants = cva(
  "absolute rounded-full border-2 border-background transition-all duration-300",
  {
    variants: {
      status: {
        online: "bg-green-500",
        offline: "bg-gray-400",
        away: "bg-yellow-500",
        busy: "bg-red-500",
        streaming: "bg-purple-500",
        loading: "bg-blue-500 animate-pulse",
      },
      size: {
        xs: "h-1.5 w-1.5 bottom-0 right-0",
        sm: "h-2 w-2 bottom-0 right-0",
        md: "h-2.5 w-2.5 bottom-0 right-0",
        lg: "h-3 w-3 bottom-0 right-0",
        xl: "h-4 w-4 bottom-1 right-1",
        "2xl": "h-5 w-5 bottom-1 right-1",
      },
    },
    defaultVariants: {
      status: "online",
      size: "md",
    },
  }
);

// Badge variants for special indicators
const badgeVariants = cva(
  "absolute flex items-center justify-center rounded-full border-2 border-background text-white transition-all duration-300",
  {
    variants: {
      badge: {
        premium: "bg-gradient-to-r from-yellow-500 to-orange-500",
        verified: "bg-blue-500",
        admin: "bg-red-500",
        moderator: "bg-green-500",
        pro: "bg-purple-500",
        new: "bg-green-500",
      },
      size: {
        xs: "h-2 w-2 -top-0.5 -right-0.5 text-[6px]",
        sm: "h-2.5 w-2.5 -top-0.5 -right-0.5 text-[8px]",
        md: "h-3 w-3 -top-0.5 -right-0.5 text-[10px]",
        lg: "h-4 w-4 -top-1 -right-1 text-xs",
        xl: "h-5 w-5 -top-1 -right-1 text-sm",
        "2xl": "h-6 w-6 -top-1 -right-1 text-base",
      },
    },
    defaultVariants: {
      badge: "premium",
      size: "md",
    },
  }
);

// Enhanced Avatar props
interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  status?: "online" | "offline" | "away" | "busy" | "streaming" | "loading";
  badge?: "premium" | "verified" | "admin" | "moderator" | "pro" | "new";
  showStatus?: boolean;
  showBadge?: boolean;
  isClickable?: boolean;
  isLoading?: boolean;
  onAvatarClick?: () => void;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({
  className,
  size,
  shape,
  border,
  shadow,
  status = "online",
  badge,
  showStatus = true,
  showBadge = false,
  isClickable = false,
  isLoading = false,
  onAvatarClick,
  ...props
}, ref) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isClickable && onAvatarClick) {
      e.preventDefault();
      onAvatarClick();
    }
  };

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        avatarVariants({ size, shape, border, shadow }),
        isClickable && "cursor-pointer hover:scale-105 active:scale-95",
        isLoading && "animate-pulse",
        className
      )}
      onClick={handleClick}
      {...props}
    />
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

// Enhanced AvatarImage with error handling
interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  showLoadingState?: boolean;
  onLoadingStatusChange?: (status: 'loading' | 'loaded' | 'error') => void;
}

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, onLoadingStatusChange, showLoadingState = true, ...props }, ref) => {
  const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setStatus('loaded');
    onLoadingStatusChange?.('loaded');
    props.onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setStatus('error');
    onLoadingStatusChange?.('error');
    props.onError?.(e);
  };

  return (
    <>
      {showLoadingState && status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        </div>
      )}
      <AvatarPrimitive.Image
        ref={ref}
        className={cn(
          "aspect-square h-full w-full object-cover transition-opacity duration-300",
          status === 'loading' && 'opacity-0',
          status === 'loaded' && 'opacity-100',
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </>
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// Enhanced AvatarFallback with more options
interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  icon?: React.ReactNode;
  showIcon?: boolean;
  type?: "user" | "initials" | "icon" | "custom";
  initials?: string;
  maxInitials?: number;
}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({
  className,
  icon,
  showIcon = true,
  type = "user",
  initials,
  maxInitials = 2,
  children,
  ...props
}, ref) => {
  const getFallbackContent = () => {
    if (children) return children;
    
    if (type === "initials" && initials) {
      return initials.slice(0, maxInitials).toUpperCase();
    }
    
    if (type === "icon" && icon) {
      return icon;
    }
    
    if (showIcon) {
      return <User className="h-1/2 w-1/2" />;
    }
    
    return null;
  };

  const getIconForBadge = (badge: string) => {
    switch (badge) {
      case 'premium': return <Crown className="h-2 w-2" />;
      case 'verified': return <Check className="h-2 w-2" />;
      case 'admin': return <Shield className="h-2 w-2" />;
      case 'moderator': return <Star className="h-2 w-2" />;
      default: return null;
    }
  };

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted font-semibold transition-colors duration-300",
        className
      )}
      {...props}
    >
      {getFallbackContent()}
    </AvatarPrimitive.Fallback>
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// Status indicator component
interface AvatarStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: "online" | "offline" | "away" | "busy" | "streaming" | "loading";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  pulse?: boolean;
}

const AvatarStatus = React.forwardRef<HTMLDivElement, AvatarStatusProps>(
  ({ className, status = "online", size = "md", pulse = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        statusVariants({ status, size }),
        pulse && status === "online" && "animate-pulse",
        className
      )}
      {...props}
    />
  )
);
AvatarStatus.displayName = "AvatarStatus";

// Badge indicator component
interface AvatarBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: "premium" | "verified" | "admin" | "moderator" | "pro" | "new";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  icon?: React.ReactNode;
}

const AvatarBadge = React.forwardRef<HTMLDivElement, AvatarBadgeProps>(
  ({ className, badge = "premium", size = "md", icon, ...props }, ref) => {
    const getBadgeContent = () => {
      if (icon) return icon;
      
      switch (badge) {
        case 'premium': return <Crown className="h-2 w-2" />;
        case 'verified': return <Check className="h-2 w-2" />;
        case 'admin': return <Shield className="h-2 w-2" />;
        case 'moderator': return <Star className="h-2 w-2" />;
        case 'new': return "!";
        default: return null;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({ badge, size }),
          "flex items-center justify-center",
          className
        )}
        {...props}
      >
        {getBadgeContent()}
      </div>
    );
  }
);
AvatarBadge.displayName = "AvatarBadge";

// Avatar Group component
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  max?: number;
  spacing?: "none" | "tight" | "normal" | "loose";
  direction?: "horizontal" | "vertical";
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, max, spacing = "normal", direction = "horizontal", ...props }, ref) => {
    const spacingStyles = {
      none: "gap-0",
      tight: direction === "horizontal" ? "-space-x-2" : "-space-y-2",
      normal: direction === "horizontal" ? "-space-x-3" : "-space-y-3",
      loose: direction === "horizontal" ? "-space-x-4" : "-space-y-4",
    };

    const childrenArray = React.Children.toArray(children);
    const displayedAvatars = max ? childrenArray.slice(0, max) : childrenArray;
    const excess = max ? childrenArray.length - max : 0;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center",
          direction === "horizontal" ? "flex-row" : "flex-col",
          spacingStyles[spacing],
          className
        )}
        {...props}
      >
        {displayedAvatars}
        {excess > 0 && (
          <Avatar className="ring-2 ring-background">
            <AvatarFallback className="bg-muted-foreground text-muted">
              +{excess}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

// Enhanced Avatar component with composition
interface EnhancedAvatarProps extends AvatarProps {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  status?: "online" | "offline" | "away" | "busy" | "streaming" | "loading";
  badge?: "premium" | "verified" | "admin" | "moderator" | "pro" | "new";
  showStatus?: boolean;
  showBadge?: boolean;
  initials?: string;
}

const EnhancedAvatar = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  EnhancedAvatarProps
>(({
  src,
  alt,
  fallback,
  status = "online",
  badge,
  showStatus = true,
  showBadge = false,
  initials,
  size = "md",
  ...props
}, ref) => {
  return (
    <Avatar ref={ref} size={size} status={status} badge={badge} {...props}>
      {src && <AvatarImage src={src} alt={alt} />}
      <AvatarFallback type={initials ? "initials" : "user"} initials={initials}>
        {fallback}
      </AvatarFallback>
      
      {showStatus && status && (
        <AvatarStatus status={status} size={size} />
      )}
      
      {showBadge && badge && (
        <AvatarBadge badge={badge} size={size} />
      )}
    </Avatar>
  );
});
EnhancedAvatar.displayName = "EnhancedAvatar";

// Usage examples component
const AvatarExample = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Different Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar Sizes</h3>
        <div className="flex items-center gap-4">
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
            <EnhancedAvatar
              key={size}
              size={size}
              src="/api/placeholder/64/64"
              alt={`Avatar ${size}`}
              initials="JD"
            />
          ))}
        </div>
      </div>

      {/* Different Shapes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar Shapes</h3>
        <div className="flex items-center gap-4">
          <EnhancedAvatar shape="circle" initials="CI" />
          <EnhancedAvatar shape="square" initials="SQ" />
          <EnhancedAvatar shape="rounded" initials="RD" />
        </div>
      </div>

      {/* Status Indicators */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Status Indicators</h3>
        <div className="flex items-center gap-4">
          {(["online", "offline", "away", "busy", "streaming"] as const).map((status) => (
            <EnhancedAvatar
              key={status}
              status={status}
              initials="US"
              showStatus
            />
          ))}
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Badges</h3>
        <div className="flex items-center gap-4">
          {(["premium", "verified", "admin", "moderator", "pro"] as const).map((badge) => (
            <EnhancedAvatar
              key={badge}
              badge={badge}
              initials="BD"
              showBadge
            />
          ))}
        </div>
      </div>

      {/* Avatar Group */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar Groups</h3>
        <div className="space-y-4">
          <AvatarGroup max={4} spacing="normal">
            {Array.from({ length: 6 }).map((_, i) => (
              <EnhancedAvatar
                key={i}
                src={`/api/placeholder/64/64?${i}`}
                alt={`User ${i + 1}`}
                initials={`U${i + 1}`}
              />
            ))}
          </AvatarGroup>
          
          <AvatarGroup max={3} spacing="tight">
            {Array.from({ length: 5 }).map((_, i) => (
              <EnhancedAvatar
                key={i}
                src={`/api/placeholder/64/64?${i}`}
                alt={`User ${i + 1}`}
                initials={`U${i + 1}`}
              />
            ))}
          </AvatarGroup>
        </div>
      </div>

      {/* Interactive Avatars */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Interactive Avatars</h3>
        <div className="flex items-center gap-4">
          <EnhancedAvatar
            isClickable
            onAvatarClick={() => alert('Avatar clicked!')}
            initials="CL"
            border="primary"
          />
          <EnhancedAvatar
            isClickable
            onAvatarClick={() => console.log('Avatar clicked')}
            src="/api/placeholder/64/64"
            alt="Clickable avatar"
            shadow="md"
          />
        </div>
      </div>
    </div>
  );
};

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarStatus,
  AvatarBadge,
  AvatarGroup,
  EnhancedAvatar,
  AvatarExample,
  avatarVariants,
  statusVariants,
  badgeVariants,
};

export type {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
  AvatarStatusProps,
  AvatarBadgeProps,
  AvatarGroupProps,
  EnhancedAvatarProps,
};