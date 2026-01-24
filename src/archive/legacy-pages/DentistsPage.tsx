import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DentistsPage = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Create refs for different sections to animate them when they come into view
  const { ref: servicesRef, inView: servicesInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className={cn("transition-opacity duration-700 ease-in-out pt-24", isLoaded ? "opacity-100" : "opacity-0")}>
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('dentistsPage.title')}
          </motion.h1>

          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.p 
              className="text-xl text-dental-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('dentistsPage.intro')}
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              {/* Services */}
              <motion.div 
                ref={servicesRef}
                className="bg-white rounded-lg shadow-lg p-8 border border-dental-100"
                variants={fadeIn}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl font-display font-semibold text-dental-700 mb-6">
                  {t('dentistsPage.services.title')}
                </h2>
                
                <ul className="space-y-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Check className="text-dental-500 h-5 w-5 mr-3 mt-1 shrink-0" />
                      <span>{t(`dentistsPage.services.items.${index}`)}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Benefits */}
              <motion.div 
                ref={benefitsRef}
                className="bg-white rounded-lg shadow-lg p-8 border border-dental-100"
                variants={fadeIn}
                initial="hidden"
                animate={benefitsInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl font-display font-semibold text-dental-700 mb-6">
                  {t('dentistsPage.benefits.title')}
                </h2>
                
                <ul className="space-y-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Check className="text-dental-500 h-5 w-5 mr-3 mt-1 shrink-0" />
                      <span>{t(`dentistsPage.benefits.items.${index}`)}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <motion.h2 
              className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t('dentistsPage.partnership.title')}
            </motion.h2>
            <motion.p 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {t('dentistsPage.partnership.content')}
            </motion.p>
            
            <motion.div 
              className="bg-dental-50 p-8 rounded-lg border border-dental-100 my-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-2xl font-display font-bold text-dental-700 mb-4">
                {t('dentistsPage.referral.title')}
              </h3>
              <p className="mb-6">
                {t('dentistsPage.referral.content')}
              </p>
              <a 
                href="#contact" 
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }} 
                className="inline-block bg-dental-600 hover:bg-dental-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                {t('dentistsPage.referral.cta')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </div>
  );
};

export default DentistsPage;