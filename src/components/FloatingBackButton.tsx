import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface FloatingBackButtonProps {
  backTo?: string;
  className?: string;
}

const FloatingBackButton: React.FC<FloatingBackButtonProps> = ({
  backTo = '/',
  className = ''
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const handleBack = () => {
    // Check if we came from a slide page (has fromSlide in state)
    let fromSlide = (location.state as { fromSlide?: number })?.fromSlide;
    
    // Fallback: check sessionStorage if state is not available
    if (fromSlide === undefined || fromSlide === null) {
      const storedSlide = sessionStorage.getItem('lastSlide');
      if (storedSlide) {
        fromSlide = parseInt(storedSlide, 10);
      }
    }
    
    if (fromSlide !== undefined && fromSlide !== null && !isNaN(fromSlide)) {
      // Navigate back to the slide page with the correct slide number
      // Navigate to path with hash - React Router should preserve it
      sessionStorage.removeItem('lastSlide'); // Clean up after use
      navigate(`/#slide=${fromSlide}`, { replace: false });
    } else if (window.history.length > 1) {
      // Use browser history if available
      navigate(-1);
    } else {
      // Fallback to backTo prop
      navigate(backTo);
    }
  };

  return (
    <motion.div
      className={`fixed top-6 left-6 z-50 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <motion.button
        onClick={handleBack}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center bg-white/95 backdrop-blur-md hover:bg-white shadow-lg hover:shadow-xl border border-dental-200/50 rounded-full transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          paddingLeft: isHovered ? '16px' : '12px',
          paddingRight: isHovered ? '20px' : '12px',
          paddingTop: '12px',
          paddingBottom: '12px'
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <ArrowLeft className="w-5 h-5 text-dental-600 flex-shrink-0" />
        
        <AnimatePresence>
          {isHovered && (
            <motion.span
              className="ml-2 text-sm font-medium text-dental-700 whitespace-nowrap"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              Back
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

export default FloatingBackButton;
