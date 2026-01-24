import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FloatingBackButton from '../components/FloatingBackButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SlideNavBarBottom from '../components/slides/SlideNavBar';
import { FileText, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SEO } from '@/components/SEO';

const TermsPage = () => {
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
        title={t('seo.terms.title')}
        description={t('seo.terms.description')}
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
                <FileText className="h-8 w-8 text-dental-600" />
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-display font-bold mb-6 text-dental-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t('footer.terms')}
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
                {t('terms.lastUpdated')}
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
                  {t('terms.intro')}
                </motion.p>
                
                <div className="space-y-12">
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('terms.section1.title')}</h2>
                    <div className="bg-dental-50 p-6 rounded-lg mb-6">
                      <p className="text-dental-700">{t('terms.section1.content')}</p>
                    </div>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('terms.section2.title')}</h2>
                    <p className="text-dental-700 mb-4">{t('terms.section2.intro')}</p>
                    
                    <ul className="list-disc pl-6 space-y-2 text-dental-700 mb-6">
                      {(t('terms.section2.items', { returnObjects: true }) as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    
                    <p className="text-dental-700">{t('terms.section2.closing')}</p>
                  </motion.section>
                  
                  <Separator className="my-8" />
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('terms.section3.title')}</h2>
                    <div className="bg-white shadow-sm p-6 rounded-lg border border-dental-100 mb-6">
                      <p className="text-dental-700 mb-4">{t('terms.section3.content1')}</p>
                      <p className="text-dental-700">{t('terms.section3.content2')}</p>
                    </div>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('terms.section4.title')}</h2>
                    <p className="text-dental-700">{t('terms.section4.content')}</p>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('terms.section5.title')}</h2>
                    <p className="text-dental-700">{t('terms.section5.content')}</p>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('terms.section6.title')}</h2>
                    <p className="text-dental-700 mb-4">{t('terms.section6.intro')}</p>
                    <div className="bg-dental-50 p-6 rounded-lg">
                      <h3 className="font-medium text-lg text-dental-800 mb-2">{t('terms.section6.noticeTitle')}</h3>
                      <p className="text-dental-700">{t('terms.section6.noticeContent')}</p>
                    </div>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('terms.section7.title')}</h2>
                    <p className="text-dental-700">{t('terms.section7.content')}</p>
                  </motion.section>
                  
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">{t('terms.section8.title')}</h2>
                    <p className="text-dental-700 mb-4">{t('terms.section8.intro')}</p>
                    
                    <div className="bg-white shadow-sm p-6 rounded-lg border border-dental-100">
                      <address className="not-italic text-dental-700">
                        <p className="font-medium text-dental-800 mb-2">{t('terms.section8.company')}</p>
                        {t('terms.section8.address')}<br />
                        {t('terms.section8.city')}<br />
                        {t('contactPage.phone')}: <a href={`tel:${t('terms.section8.phone')}`} className="text-dental-500 hover:text-dental-600">{t('terms.section8.phone')}</a><br />
                        Email: <a href={`mailto:${t('terms.section8.email')}`} className="text-dental-500 hover:text-dental-600">{t('terms.section8.email')}</a>
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

export default TermsPage;
