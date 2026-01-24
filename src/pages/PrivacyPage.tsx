import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FloatingBackButton from '../components/FloatingBackButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SlideNavBarBottom from '../components/slides/SlideNavBar';
import { Shield, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SEO } from '@/components/SEO';

const PrivacyPage = () => {
  const { t } = useTranslation();
  
  // Create refs for different sections to animate them when they come into view
  const { ref: contentRef, inView: contentInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
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
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
      <SEO 
        title={t('seo.privacy.title')}
        description={t('seo.privacy.description')}
      />
      <FloatingBackButton />
      
      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <motion.div 
          className="bg-gradient-to-b from-dental-50 to-white py-16 md:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto max-w-4xl px-4">
            <motion.div 
              className="flex flex-col items-center text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="p-3 bg-dental-100 rounded-full mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Shield className="h-8 w-8 text-dental-600" />
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-display font-bold mb-6 text-dental-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t('footer.privacy')}
              </motion.h1>
              <motion.div 
                className="h-1 w-24 bg-dental-500 mb-6"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              <motion.p 
                className="text-lg text-dental-600 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {t('privacy.lastUpdated')}
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex justify-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link to="/" className="flex items-center text-dental-600 hover:text-dental-800 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span>{t('navigation.backToHome')}</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Content Section */}
        <motion.div 
          ref={contentRef}
          className="container mx-auto max-w-4xl px-4 py-12 md:py-16"
          variants={fadeIn}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          <Card className="border-none shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="prose prose-dental max-w-none">
                <motion.p 
                  className="text-lg text-dental-700 mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {t('privacy.intro')}
                </motion.p>
                
                <div className="space-y-12">
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('privacy.section1.title')}</h2>
                    <div className="bg-dental-50 p-6 rounded-lg">
                      <p className="text-dental-700">{t('privacy.section1.content')}</p>
                    </div>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('privacy.section2.title')}</h2>
                    <p className="text-dental-700 mb-4">{t('privacy.section2.intro')}</p>
                    
                    <ul className="list-disc pl-6 space-y-2 text-dental-700">
                      <li>{t('privacy.section2.identity')}</li>
                      <li>{t('privacy.section2.contact')}</li>
                      <li>{t('privacy.section2.technical')}</li>
                      <li>{t('privacy.section2.usage')}</li>
                      <li>{t('privacy.section2.marketing')}</li>
                    </ul>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('privacy.section3.title')}</h2>
                    <p className="text-dental-700 mb-4">{t('privacy.section3.intro')}</p>
                    
                    <ul className="list-disc pl-6 space-y-2 text-dental-700">
                      <li>{t('privacy.section3.item1')}</li>
                      <li>{t('privacy.section3.item2')}</li>
                      <li>{t('privacy.section3.item3')}</li>
                    </ul>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('privacy.section4.title')}</h2>
                    <div className="bg-dental-50 p-6 rounded-lg">
                      <p className="text-dental-700">{t('privacy.section4.content')}</p>
                    </div>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('privacy.section5.title')}</h2>
                    <p className="text-dental-700">{t('privacy.section5.content')}</p>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('privacy.section6.title')}</h2>
                    <p className="text-dental-700 mb-4">{t('privacy.section6.intro')}</p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {(t('privacy.section6.rights', { returnObjects: true }) as string[]).map((right, index) => (
                        <motion.li 
                          key={index} 
                          className="bg-white shadow-sm p-4 rounded-lg border border-dental-100 flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.7 + (0.1 * index) }}
                        >
                          <span className="h-6 w-6 rounded-full bg-dental-100 text-dental-600 flex items-center justify-center text-sm mr-3">
                            {index + 1}
                          </span>
                          <span className="text-dental-800">{right}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('privacy.section7.title')}</h2>
                    <p className="text-dental-700 mb-4">{t('privacy.section7.intro')}</p>
                    
                    <div className="bg-white shadow-sm p-6 rounded-lg border border-dental-100">
                      <address className="not-italic text-dental-700">
                        <p className="font-medium text-dental-800 mb-2">{t('privacy.section7.company')}</p>
                        {t('privacy.section7.address')}<br />
                        {t('privacy.section7.city')}<br />
                        {t('contactPage.phone')}: <a href={`tel:${t('privacy.section7.phone')}`} className="text-dental-500 hover:text-dental-600">{t('privacy.section7.phone')}</a><br />
                        Email: <a href={`mailto:${t('privacy.section7.email')}`} className="text-dental-500 hover:text-dental-600">{t('privacy.section7.email')}</a>
                      </address>
                    </div>
                  </motion.section>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      
      <SlideNavBarBottom />
      <ScrollToTopButton />
    </div>
  );
};

export default PrivacyPage;
