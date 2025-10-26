import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const LazyImage = ({ src, alt, className = '', onClick }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasTimedOut, setHasTimedOut] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle timeout for image loading
  useEffect(() => {
    if (isInView && !isLoaded && !hasError) {
      const timer = setTimeout(() => {
        setHasTimedOut(true);
      }, 10000); // 10 second timeout

      return () => clearTimeout(timer);
    }
  }, [isInView, isLoaded, hasError]);

  const handleError = () => {
    setHasError(true);
  };

  const handleRetry = () => {
    setHasError(false);
    setHasTimedOut(false);
    setIsLoaded(false);
  };

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Elegant placeholder while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 overflow-hidden">
          {/* Subtle animated shimmer effect */}
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Blueprint-inspired grid overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="loading-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.1)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#loading-grid)" />
          </svg>

          {/* Center loading indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            {hasTimedOut ? (
              <div className="text-center">
                <p className="text-gray-500 mb-2">Taking longer than expected</p>
                <button 
                  onClick={handleRetry}
                  className="px-3 py-1 bg-gray-800 text-white text-sm rounded hover:bg-black transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <div className="w-8 h-8 border-2 border-black/10 border-t-black/30 rounded-full animate-spin" />
            )}
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 overflow-hidden flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-gray-600 mb-2">Failed to load image</p>
            <button 
              onClick={handleRetry}
              className="px-3 py-1 bg-gray-800 text-white text-sm rounded hover:bg-black transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Actual image - only loads when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          onClick={onClick}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;
