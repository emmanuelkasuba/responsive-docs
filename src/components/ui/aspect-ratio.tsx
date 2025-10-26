import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Aspect ratio variants for common use cases
const aspectRatioVariants = cva(
  "overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        rounded: "rounded-lg",
        circle: "rounded-full",
        card: "rounded-xl shadow-sm",
        hero: "rounded-none sm:rounded-2xl",
      },
      objectFit: {
        cover: "object-cover",
        contain: "object-contain",
        fill: "object-fill",
        none: "object-none",
      },
      responsive: {
        true: "w-full",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      objectFit: "cover",
      responsive: true,
    },
  }
);

// Common aspect ratios as constants
export const ASPECT_RATIOS = {
  square: 1 / 1,
  video: 16 / 9,
  cinematic: 21 / 9,
  portrait: 9 / 16,
  photo: 4 / 3,
  banner: 4 / 1,
  story: 9 / 16,
  card: 3 / 2,
  wide: 2 / 1,
  ultra: 32 / 9,
} as const;

// Enhanced AspectRatio props
interface AspectRatioProps
  extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>,
    VariantProps<typeof aspectRatioVariants> {
  ratio?: number | keyof typeof ASPECT_RATIOS;
  children?: React.ReactNode;
  fallback?: React.ReactNode;
  onLoadingStatusChange?: (status: 'loading' | 'loaded' | 'error') => void;
  loading?: "eager" | "lazy";
}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({
  className,
  ratio = 16 / 9,
  variant,
  objectFit,
  responsive,
  fallback,
  onLoadingStatusChange,
  loading = "lazy",
  children,
  ...props
}, ref) => {
  const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');
  
  // Calculate the actual ratio value
  const computedRatio = typeof ratio === 'string' ? ASPECT_RATIOS[ratio] : ratio;

  // Handle loading status changes
  React.useEffect(() => {
    onLoadingStatusChange?.(status);
  }, [status, onLoadingStatusChange]);

  // Enhanced children with loading states
  const enhancedChildren = React.useMemo(() => {
    if (!React.Children.count(children)) {
      return fallback || (
        <div className="flex items-center justify-center bg-muted text-muted-foreground w-full h-full">
          <span className="text-sm">No content</span>
        </div>
      );
    }

    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // Handle img elements specifically
        if (child.type === 'img') {
          return React.cloneElement(child as React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>, {
            loading,
            onLoad: (e) => {
              setStatus('loaded');
              child.props.onLoad?.(e);
            },
            onError: (e) => {
              setStatus('error');
              child.props.onError?.(e);
            },
            className: cn(
              "h-full w-full transition-opacity duration-300",
              objectFit === 'cover' && 'object-cover',
              objectFit === 'contain' && 'object-contain',
              objectFit === 'fill' && 'object-fill',
              objectFit === 'none' && 'object-none',
              status === 'loading' && 'opacity-0',
              status === 'loaded' && 'opacity-100',
              status === 'error' && 'opacity-0',
              child.props.className
            ),
          });
        }

        // Handle video elements
        if (child.type === 'video') {
          return React.cloneElement(child as React.ReactElement<React.VideoHTMLAttributes<HTMLVideoElement>>, {
            className: cn(
              "h-full w-full object-cover",
              child.props.className
            ),
          });
        }

        // Handle iframe elements (embeds)
        if (child.type === 'iframe') {
          return React.cloneElement(child as React.ReactElement<React.IframeHTMLAttributes<HTMLIFrameElement>>, {
            className: cn(
              "h-full w-full",
              child.props.className
            ),
            loading,
          });
        }
      }

      return child;
    });
  }, [children, fallback, objectFit, status, loading]);

  return (
    <AspectRatioPrimitive.Root
      ref={ref}
      ratio={computedRatio}
      className={cn(
        aspectRatioVariants({ variant, objectFit, responsive }),
        className
      )}
      {...props}
    >
      {/* Loading indicator */}
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="animate-pulse flex space-x-2">
            <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      )}

      {/* Error fallback */}
      {status === 'error' && fallback && (
        <div className="absolute inset-0">
          {fallback}
        </div>
      )}

      {/* Main content */}
      <div className={cn(
        "w-full h-full",
        status === 'error' && fallback && 'hidden'
      )}>
        {enhancedChildren}
      </div>
    </AspectRatioPrimitive.Root>
  );
});

AspectRatio.displayName = "AspectRatio";

// Standalone AspectRatioItem for direct usage
interface AspectRatioItemProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number | keyof typeof ASPECT_RATIOS;
  content?: React.ReactNode;
}

const AspectRatioItem = React.forwardRef<HTMLDivElement, AspectRatioItemProps>(
  ({ className, ratio = 16 / 9, content, children, ...props }, ref) => {
    const computedRatio = typeof ratio === 'string' ? ASPECT_RATIOS[ratio] : ratio;

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          className
        )}
        style={{
          aspectRatio: computedRatio,
        }}
        {...props}
      >
        {content || children}
      </div>
    );
  }
);

AspectRatioItem.displayName = "AspectRatioItem";

// Responsive aspect ratio grid
interface AspectRatioGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const AspectRatioGrid = React.forwardRef<HTMLDivElement, AspectRatioGridProps>(
  ({ className, columns = 3, gap = 'md', children, ...props }, ref) => {
    const gapStyles = {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
    };

    const columnStyles = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
      6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6',
    };

    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          columnStyles[columns],
          gapStyles[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AspectRatioGrid.displayName = "AspectRatioGrid";

// Usage examples component
const AspectRatioExample = () => {
  return (
    <div className="space-y-8 p-4">
      {/* Common Aspect Ratios */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Common Aspect Ratios</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AspectRatio ratio="square" variant="rounded" className="border">
            <div className="flex items-center justify-center bg-blue-100 text-blue-800 w-full h-full">
              Square (1:1)
            </div>
          </AspectRatio>
          
          <AspectRatio ratio="video" variant="rounded" className="border">
            <div className="flex items-center justify-center bg-green-100 text-green-800 w-full h-full">
              Video (16:9)
            </div>
          </AspectRatio>
          
          <AspectRatio ratio="portrait" variant="rounded" className="border">
            <div className="flex items-center justify-center bg-purple-100 text-purple-800 w-full h-full">
              Portrait (9:16)
            </div>
          </AspectRatio>
          
          <AspectRatio ratio="photo" variant="rounded" className="border">
            <div className="flex items-center justify-center bg-orange-100 text-orange-800 w-full h-full">
              Photo (4:3)
            </div>
          </AspectRatio>
        </div>
      </div>

      {/* Image with Loading States */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Image with Loading State</h3>
        <AspectRatio 
          ratio="video" 
          variant="card"
          fallback={
            <div className="flex items-center justify-center bg-gray-100 text-gray-600 w-full h-full">
              Failed to load image
            </div>
          }
        >
          <img
            src="/api/placeholder/800/450"
            alt="Example image"
            className="object-cover"
          />
        </AspectRatio>
      </div>

      {/* Aspect Ratio Grid */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Aspect Ratio Grid</h3>
        <AspectRatioGrid columns={4} gap="md">
          {Array.from({ length: 8 }).map((_, i) => (
            <AspectRatioItem
              key={i}
              ratio="square"
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold"
              content={`Item ${i + 1}`}
            />
          ))}
        </AspectRatioGrid>
      </div>

      {/* Video Embed */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Video Embed</h3>
        <AspectRatio ratio="cinematic" variant="hero">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export { 
  AspectRatio, 
  AspectRatioItem, 
  AspectRatioGrid,
  AspectRatioExample,
  ASPECT_RATIOS,
  aspectRatioVariants 
};

export type { AspectRatioProps, AspectRatioGridProps };