import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import SlideNavBar from './SlideNavBar';

interface SlideContainerProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showNavigation?: boolean;
}

const SlideContainer: React.FC<SlideContainerProps> = ({
  children,
  autoPlay = false,
  autoPlayInterval = 5000,
  showNavigation = true
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const totalSlides = React.Children.count(children);
  
  // Initialize slide from URL hash or default to 0
  const getInitialSlide = useCallback(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const slideMatch = hash.match(/slide=(\d+)/);
      if (slideMatch) {
        const slideIndex = parseInt(slideMatch[1], 10);
        if (slideIndex >= 0 && slideIndex < totalSlides) {
          return slideIndex;
        }
      }
    }
    return 0;
  }, [totalSlides]);

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide);
  const lastHashRef = React.useRef<string>('');

  // Update URL hash when slide changes internally (keyboard, mouse, etc.)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newHash = `#slide=${currentSlide}`;
      const currentHash = window.location.hash;
      if (currentHash !== newHash) {
        lastHashRef.current = newHash;
        window.history.replaceState(null, '', `${window.location.pathname}${newHash}`);
      }
    }
  }, [currentSlide]);

  // Watch for external hash changes (e.g., when navigating back with a hash from React Router)
  // Only update slide if hash changed externally (different from what we last synced)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = location.hash || window.location.hash;
      
      // Only update if this is an external change (hash differs from what we last set)
      if (hash !== lastHashRef.current) {
        const slideMatch = hash.match(/slide=(\d+)/);
        if (slideMatch) {
          const slideIndex = parseInt(slideMatch[1], 10);
          if (slideIndex >= 0 && slideIndex < totalSlides) {
            lastHashRef.current = hash;
            setCurrentSlide(slideIndex);
          }
        } else if (hash === '' && lastHashRef.current !== '') {
          // If hash is cleared externally, reset to 0
          lastHashRef.current = '';
          setCurrentSlide(0);
        }
      }
    }
  }, [location.hash, totalSlides]); // Removed currentSlide to prevent loops

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ': // Space bar
          event.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          previousSlide();
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        default:
          // Number keys for direct slide access
          const slideNumber = parseInt(event.key);
          if (slideNumber >= 1 && slideNumber <= totalSlides) {
            event.preventDefault();
            goToSlide(slideNumber - 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, previousSlide, goToSlide, totalSlides]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide]);

  // Mouse wheel navigation with improved handling
  useEffect(() => {
    let isThrottled = false;
    let wheelTimeout: NodeJS.Timeout;

    const handleWheel = (event: WheelEvent) => {
      // Prevent default scroll behavior
      event.preventDefault();
      
      if (isThrottled) return;

      // Only trigger on significant scroll delta
      const scrollThreshold = 30;
      if (Math.abs(event.deltaY) < scrollThreshold) return;

      isThrottled = true;
      
      // Clear any pending timeout
      if (wheelTimeout) clearTimeout(wheelTimeout);
      
      // Change slide based on scroll direction
      if (event.deltaY > 0) {
        nextSlide();
      } else if (event.deltaY < 0) {
        previousSlide();
      }
      
      // Throttle for 800ms to prevent rapid slide changes
      wheelTimeout = setTimeout(() => {
        isThrottled = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [nextSlide, previousSlide]);

  // Disable body scrolling when slides are active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;
    const originalHeight = document.body.style.height;
    
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    
    // Reset scroll position to top
    window.scrollTo(0, 0);
    
    return () => {
      // Restore original styles
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
      document.body.style.height = originalHeight;
    };
  }, []);

  // Touch navigation for mobile
  useEffect(() => {
    let startY = 0;
    let startX = 0;
    let startTime = 0;

    const handleTouchStart = (event: TouchEvent) => {
      startY = event.touches[0].clientY;
      startX = event.touches[0].clientX;
      startTime = Date.now();
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!startY || !startX) return;

      const endY = event.changedTouches[0].clientY;
      const endX = event.changedTouches[0].clientX;
      const endTime = Date.now();
      
      const diffY = startY - endY;
      const diffX = startX - endX;
      const timeDiff = endTime - startTime;
      
      // Require minimum swipe distance and maximum time for gesture
      const minSwipeDistance = 75; // Increased threshold for better detection
      const maxSwipeTime = 500; // Maximum time for a swipe gesture
      
      if (timeDiff > maxSwipeTime) {
        startY = 0;
        startX = 0;
        return;
      }
      
      // Determine if this is more of a vertical or horizontal swipe
      if (Math.abs(diffY) > Math.abs(diffX)) {
        // Vertical swipe
        if (Math.abs(diffY) > minSwipeDistance) {
          if (diffY > 0) {
            nextSlide(); // Swipe up
          } else {
            previousSlide(); // Swipe down
          }
        }
      } else {
        // Horizontal swipe
        if (Math.abs(diffX) > minSwipeDistance) {
          if (diffX > 0) {
            nextSlide(); // Swipe left
          } else {
            previousSlide(); // Swipe right
          }
        }
      }

      startY = 0;
      startX = 0;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, previousSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Screen reader announcement for slide changes */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {t('navigation.tooltips.entry')} {currentSlide + 1} {t('navigation.tooltips.closing')} {totalSlides}
      </div>
      
      <AnimatePresence mode="wait" initial={false}>
        {React.Children.toArray(children).map((child, index) => 
          index === currentSlide ? (
            <div key={index} style={{ willChange: 'transform, opacity' }}>
              {child}
            </div>
          ) : null
        )}
      </AnimatePresence>

      {showNavigation && totalSlides && (
        <SlideNavBar
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onGoToSlide={goToSlide}
        />
      )}
    </div>
  );
};

export default SlideContainer;
