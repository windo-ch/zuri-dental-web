import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LocationMap = () => {
  const { t } = useTranslation();
  
  // Create ref for map animation
  const { ref: mapRef, inView: mapInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  // Create ref for info animation
  const { ref: infoRef, inView: infoInView } = useInView({ 
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
  
  return (
    <section className="py-24 bg-dental-50">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('contactPage.findUs')}
        </motion.h2>
        
        {/* Address and Directions Card */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-semibold text-dental-700 mb-2 md:mb-0">
                {t('contactPage.visitUs', 'Visit Us')}
              </h3>
              <p className="text-xl text-dental-600 leading-relaxed">
                {t('location.address', 'Bahnhofstrasse 35, 8001 Zürich, Schweiz')}
              </p>
            </div>
            <a
              href="https://goo.gl/maps/R52xzNPHbZ9sJJzx9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-dental-500"
            >
              {t('location.directions', 'Get directions')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          ref={mapRef}
          className="rounded-xl overflow-hidden shadow-lg h-[500px]"
          variants={fadeIn}
          initial="hidden"
          animate={mapInView ? "visible" : "hidden"}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.2639208169655!2d8.536501276526575!3d47.3715045711734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa7fe0f11cf91%3A0xebf6aa8e5c2d6b1c!2sBahnhofstrasse%2035%2C%208001%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1715847138215!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Pietrobon & Michel Location"
          />
        </motion.div>
        
        <motion.div 
          ref={infoRef}
          className="mt-16 max-w-3xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          animate={infoInView ? "visible" : "hidden"}
        >
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <motion.h3 
              className="text-2xl font-display font-semibold text-dental-700 mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: infoInView ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {t('contactPage.transportation')}
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: infoInView ? 1 : 0, x: infoInView ? 0 : -20 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-dental-800 mb-3">
                  {t('contactPage.publicTransport')}
                </h4>
                <p className="text-xl text-dental-600 leading-relaxed">
                  {t('location.publicTransport')}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: infoInView ? 1 : 0, x: infoInView ? 0 : 20 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold text-dental-800 mb-3">
                  {t('contactPage.parking')}
                </h4>
                <p className="text-xl text-dental-600 leading-relaxed">
                  {t('location.parkingInfo')}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;
