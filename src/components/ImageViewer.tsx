import { useEffect } from 'react';
import LazyImage from './LazyImage';

interface ImageViewerProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  projectName: string;
}

const ImageViewer = ({ images, currentIndex, onClose, onNext, onPrevious, projectName }: ImageViewerProps) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  // Prevent body scroll when viewer is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-gray-300 transition-colors z-50 cursor-pointer"
        aria-label="Close viewer"
      >
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white font-serif text-sm sm:text-base">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous button */}
      {currentIndex > 0 && (
        <button
          onClick={onPrevious}
          className="absolute left-2 sm:left-4 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
          aria-label="Previous image"
        >
          <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
          aria-label="Next image"
        >
          <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Main image */}
      <div className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center p-4 sm:p-12">
        <LazyImage
          src={images[currentIndex]}
          alt={`${projectName} ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain animate-fadeIn"
          onClick={() => {}}
        />
      </div>

      {/* Background overlay - click to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-label="Close viewer"
      />

      {/* Image caption */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white font-serif text-sm sm:text-base text-center px-4">
        {projectName}
      </div>
    </div>
  );
};

export default ImageViewer;
