import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactInfo = () => {
  const { t } = useTranslation();
  
  // Create ref for section animation
  const { ref, inView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-16" ref={ref}>
      <motion.div 
        className="container max-w-6xl mx-auto px-4 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-12 text-center">
          {t('contactPage.getInTouch', 'Get in Touch')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Visit Us */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}  // Used for staggered animations
          >
            <motion.div 
              className="w-14 h-14 bg-dental-100 rounded-full flex items-center justify-center mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <MapPin className="text-dental-500" size={28} />
            </motion.div>
            <motion.h3 
              className="text-2xl font-display font-semibold text-dental-700 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {t('contactPage.visitUs')}
            </motion.h3>
            <motion.p 
              className="text-xl text-dental-600 leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {t('location.address')}
            </motion.p>
            <motion.a 
              href="https://goo.gl/maps/R52xzNPHbZ9sJJzx9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-dental-500 hover:text-dental-600 font-medium transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ x: 5 }}
            >
              {t('location.directions')}
              <ArrowRight className="ml-1 h-4 w-4" />
            </motion.a>
          </motion.div>
          
          {/* Call Us */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}  // Used for staggered animations
          >
            <motion.div 
              className="w-14 h-14 bg-dental-100 rounded-full flex items-center justify-center mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Phone className="text-dental-500" size={28} />
            </motion.div>
            <motion.h3 
              className="text-2xl font-display font-semibold text-dental-700 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {t('contactPage.callUs')}
            </motion.h3>
            <motion.p 
              className="text-xl text-dental-600 leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              {t('contactPage.phoneDesc')}
            </motion.p>
            <motion.a 
              href="tel:+41442220565"
              className="inline-flex items-center text-dental-500 hover:text-dental-600 font-medium transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ x: 5 }}
            >
              +41 44 222 05 65
              <ArrowRight className="ml-1 h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
