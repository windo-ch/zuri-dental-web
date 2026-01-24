import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import CookieConsent from './CookieConsent';
import { SEO } from './SEO';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  canonical?: string;
  structuredData?: any;
}

const Layout = ({ 
  children, 
  title, 
  description, 
  image, 
  article, 
  canonical, 
  structuredData 
}: LayoutProps) => {
  const { t } = useTranslation();
  
  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Add SEO component with props */}
      <SEO 
        title={title} 
        description={description}
        image={image}
        article={article}
        canonical={canonical}
        structuredData={structuredData}
      />
      
      <Header />
      
      <motion.main 
        className="flex-grow pt-24"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.main>

      <ScrollToTopButton />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
