import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { cn } from '@/lib/utils';
import { MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RetoPage = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Create ref for bio section to animate it when it comes into view
  const { ref: bioRef, inView: bioInView } = useInView({ 
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
      
      <main className={cn(
        "transition-opacity duration-700 ease-in-out pt-24",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div 
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-32">
                <div className="bg-dental-50 p-6 rounded-lg border border-dental-100 mb-8">
                  <motion.img 
                    src="/assets/images/core/about-reto.jpg" 
                    alt="Reto Michel"
                    className="w-full h-auto rounded-lg shadow-md mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x500?text=Reto+Michel';
                    }}
                  />
                  <motion.h2 
                    className="text-2xl font-display font-bold text-dental-800 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    Reto Michel
                  </motion.h2>
                  <motion.p 
                    className="text-dental-600 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    {t('retoPage.position')}
                  </motion.p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              ref={bioRef}
              className="w-full lg:w-2/3 prose prose-lg max-w-none"
              variants={fadeIn}
              initial="hidden"
              animate={bioInView ? "visible" : "hidden"}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t('retoPage.title')}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-dental-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                In 1990, Reto Michel completed his professional training with excellence in Baden, Kanton Aargau. In the following years he acquired a wide range of practical experience in different areas of dental technology.
              </motion.p>
              
              <motion.h2 
                className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {t('retoPage.expertise.title')}
              </motion.h2>
              <motion.ul 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  {t('retoPage.expertise.item1')}
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  {t('retoPage.expertise.item2')}
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  {t('retoPage.expertise.item3')}
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  {t('retoPage.expertise.item4')}
                </motion.li>
              </motion.ul>
              
              <motion.h2 
                className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Professional Experience
              </motion.h2>
              <motion.p 
                className="text-dental-700 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                First, he devoted his time to the areas of detachable Total-Prosthodontics/Perio-Overdenture and Michigan splint in the Department of Temporomandibular Disorders and Orofacial Pain under the supervision of Professor Palla, University of Zurich.
              </motion.p>
              <motion.p 
                className="text-dental-700 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Subsequently, between 1993 and 1995, Reto Michel was in the Dental Laboratory Schönenberger in Glattbrugg, where his focus lied on fixed dentures.
              </motion.p>
              
              <motion.h2 
                className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Advanced Education
              </motion.h2>
              <motion.p 
                className="text-dental-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                From 1996 to 1998 he attended the continuing education courses Advanced Dental Technology at the University of Zurich under the guidance of Prof. Dr. Peter Schärer, M.S.
              </motion.p>
              <motion.p 
                className="text-dental-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                In 1998 Reto Michel opened a private dental laboratory in the heart of Zurich with Nicola Pietrobon. The emphasis of the laboratory lies on esthetic restorations in the realm of dental implants.
              </motion.p>
              
              <motion.div 
                className="bg-dental-50 p-8 rounded-lg border border-dental-100 my-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <blockquote className="italic text-xl text-dental-800 relative">
                  <span className="text-5xl text-dental-300 absolute -top-6 -left-2">"</span>
                  {t('retoPage.quote')}
                  <span className="text-5xl text-dental-300 absolute -bottom-10 right-0">"</span>
                </blockquote>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </div>
  );
};

export default RetoPage;
