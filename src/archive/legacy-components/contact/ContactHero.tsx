import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ContactHero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-dental-50 via-white to-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 py-24 md:py-32">
        <div className="relative">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-dental-200 rounded-full opacity-10" />
          
          <motion.div
            className="relative max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dental-800 mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('contact.title')}
            </motion.h1>
            <motion.p 
              className="text-xl text-dental-700 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('contact.subtitle')}
            </motion.p>
            
            <motion.div 
              className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-2xl mx-auto transform md:-translate-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center">
                <motion.h2 
                  className="font-display text-2xl md:text-3xl text-dental-700 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {t('contactPage.callUsTitle')}
                </motion.h2>
                <motion.a 
                  href="tel:+41442220565"
                  className="font-display text-3xl md:text-4xl text-dental-500 hover:text-dental-600 transition-colors block mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  +41 44 222 05 65
                </motion.a>
                <motion.p 
                  className="text-dental-600 font-medium text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {t('location.appointmentOnly')}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Gradient fade out */}
      <div className="h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
};

export default ContactHero;
