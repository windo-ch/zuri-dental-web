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

const NicolaPage = () => {
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
                    src="/assets/images/core/about-nic.jpg" 
                    alt="Nicola Pietrobon"
                    className="w-full h-auto rounded-lg shadow-md mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x500?text=Nicola+Pietrobon';
                    }}
                  />
                  <motion.h2 
                    className="text-2xl font-display font-bold text-dental-800 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    Nicola Pietrobon
                  </motion.h2>
                  <motion.p 
                    className="text-dental-600 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    {t('nicolaPage.position')}
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
                {t('nicolaPage.title')}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-dental-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Upon completion of his professional training in 1985, Nicola Pietrobon worked in various laboratories as a dental technician. Between 1988 and 1990 he attended continuing education courses in Advanced Dental-Technology at the University of Zürich, Switzerland under the guidance of Prof. P. Schärer M.S.
              </motion.p>
              
              <motion.p 
                className="text-xl text-dental-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Between 1990 and 1993, he worked at the private clinic of Prof. Dr. K. Malament and Prof. Dr. D. Nathanson, in Boston, MA, USA. In 1991 Nicola Pietrobon received the "Young Speaker of the Year Award" of the International Society for Dental Ceramics (ISDC), New Orleans, LA, USA.
              </motion.p>
              
              <motion.h2 
                className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {t('nicolaPage.expertise.title')}
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
                  {t('nicolaPage.expertise.item1')}
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  {t('nicolaPage.expertise.item2')}
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  {t('nicolaPage.expertise.item3')}
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  {t('nicolaPage.expertise.item4')}
                </motion.li>
              </motion.ul>
              
              <motion.h2 
                className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Career Highlights
              </motion.h2>
              <motion.p 
                className="text-dental-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Between 1993 and 2000, he worked as the head of the Dental Technology Laboratory, Department of Removable Prosthodontics and Dental Materials, at the University of Zürich (Director Prof. Dr. P. Schärer, after September 2000, Prof. Dr. Ch. Hämmerle).
              </motion.p>
              <motion.p 
                className="text-dental-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                In 1998 he joined forces with Reto Michel to open a private dental laboratory in the heart of Zürich, becoming fully established there in the spring of 2001; the laboratory specialises in aesthetic dentistry and implantological restorations.
              </motion.p>
              
              <motion.h2 
                className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Professional Affiliations
              </motion.h2>
              <motion.ul 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                >
                  Active member of the European Academy of Esthetic Dentistry
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                >
                  Associate Editor of the International Journal of Esthetic Dentistry
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                >
                  Member of the editorial staff of Quintessenz der Zahntechnik
                </motion.li>
              </motion.ul>
              
              <motion.p 
                className="text-dental-700 mb-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                He is an internationally renowned and appreciated author and presenter in the fields of aesthetic prosthodontics, dental teamwork and oral implantology.
              </motion.p>
              
              <motion.div 
                className="bg-dental-50 p-8 rounded-lg border border-dental-100 my-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <blockquote className="italic text-xl text-dental-800 relative">
                  <span className="text-5xl text-dental-300 absolute -top-6 -left-2">"</span>
                  {t('nicolaPage.quote')}
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

export default NicolaPage;
