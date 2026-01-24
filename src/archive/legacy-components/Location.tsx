import { useTranslation } from 'react-i18next';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Location = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });
  
  return (
    <section id="location" ref={ref} className="py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('location.title')}
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.4905924539946!2d8.536495215810678!3d47.37293087917104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a08e3a703a3%3A0x52457861d39563c5!2sBahnhofstrasse%2035%2C%208001%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1622726605857!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Pietrobon & Michel location"
            ></iframe>
          </motion.div>
          
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <MapPin className="h-6 w-6 text-dental-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('location.address')}</h3>
                  <p className="text-gray-600 mb-2">Bahnhofstrasse 35, 8001 Zürich, Schweiz</p>
                  <p className="text-sm text-gray-500 italic">{t('location.appointmentOnly')}</p>
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <Phone className="h-6 w-6 text-dental-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact.phoneNumber')}</h3>
                  <p className="text-gray-600">
                    <a href="tel:+41442220565" className="hover:text-dental-600 transition-colors">
                      +41 44 222 05 65
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button className={cn(
                  "w-full flex items-center justify-center gap-2 bg-dental-500 hover:bg-dental-600"
                )}>
                  {t('location.directions')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p>{t('location.parkingInfo')}</p>
                  <p>{t('location.publicTransport')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;