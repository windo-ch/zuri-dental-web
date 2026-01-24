import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  background?: 'gradient' | 'white' | 'dental-light' | 'custom';
  id?: string;
}

const Slide: React.FC<SlideProps> = ({ 
  children, 
  className, 
  background = 'white',
  id 
}) => {
  const getBackgroundClass = () => {
    switch (background) {
      case 'gradient':
        return 'bg-gradient-to-br from-dental-600 via-dental-700 to-dental-800';
      case 'dental-light':
        return 'bg-dental-50';
      case 'white':
        return 'bg-white';
      case 'custom':
        return '';
      default:
        return 'bg-white';
    }
  };

  return (
    <motion.section
      id={id}
      className={cn(
        'h-screen w-full flex items-center justify-center relative overflow-hidden',
        getBackgroundClass(),
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1]
      }}
      style={{ willChange: 'opacity' }}
    >
      {children}
    </motion.section>
  );
};

export default Slide;
