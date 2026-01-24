import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowDown, MousePointer2 } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';

// Import optimized images
const heroImages = {
  small: '/assets/images/hero-sm.svg',
  medium: '/assets/images/hero-md.svg',
  large: '/assets/images/hero-lg.svg'
};

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleFindLab = () => {
    navigate('/for-patients');
    // Add a small delay to ensure the page loads before scrolling to the anchor
    setTimeout(() => {
      const findUsSection = document.getElementById('find-us');
      if (findUsSection) {
        findUsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  // Set isLoaded to true after a small delay to trigger animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Preload the hero image
    const img = new Image();
    img.src = heroImages.medium; // Load medium size by default
    img.onload = () => setImageLoaded(true);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Use Framer Motion's scroll utilities for parallax
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityTransform = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };
  
  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/zurich-pundm.webm"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/images/hero-lg.svg"
        aria-label="Zurich Pietrobon & Michel Laboratory Introduction Video"
        title="Zurich Pietrobon & Michel Laboratory Introduction Video"
      >
        <source src="/assets/zurich-pundm.webm" type="video/webm" />
        <img src="/assets/images/hero-lg.svg" alt="Pietrobon & Michel" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-800/80 to-dental-900/80 z-10 pointer-events-none" />
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-dental-500/10 rounded-full blur-3xl z-10"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-dental-200/10 rounded-full blur-3xl z-10"
      />
      
      {/* Content */}
      <motion.div 
        className="container max-w-6xl mx-auto px-4 relative z-20 text-white pt-4"
        style={{ opacity: opacityTransform }}
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="max-w-2xl">
          <motion.h1 
            className="font-display text-5xl md:text-7xl font-bold mb-4"
            variants={itemVariants}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-3xl font-light mb-6"
            variants={itemVariants}
          >
            {t('hero.subtitle')}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90 whitespace-pre-line"
            variants={itemVariants}
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-4">
            <Link
              to="/for-dentists"
              className={cn(
                "group inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-medium h-11",
                "transition-all duration-300 hover:bg-dental-700 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              )}
            >
              {t('hero.cta')}
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Button
              onClick={handleFindLab}
              className="inline-flex items-center px-6 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-dental-800 rounded-lg font-medium h-11 transition-all duration-300"
            >
              Find our Lab
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Overlay gradient at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      
    </section>
  );
};

export default Hero;
