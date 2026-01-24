import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Slide from './Slide';

const ClosingSlide: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Slide background="gradient" className="relative" id="closing">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        poster="/assets/images/video-posters/zurich-pundm-poster.jpg"
        preload="metadata"
      >
        <source src="/assets/zurich-pundm.webm" type="video/webm" />
      </video>
      
      {/* Overlay for better readability - same as entry slide */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />

      <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center text-white h-full flex items-center justify-center py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
          style={{ willChange: 'transform, opacity' }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
            {t('slides.closing.title')}
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">
            {t('slides.closing.description')}
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="tel:+41442220565"
              className="bg-white text-dental-800 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-dental-50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={t('slides.closing.callButton')}
            >
              {t('slides.closing.callButton')}
            </motion.a>
            <motion.button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('slides.closing.contactButton')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default ClosingSlide;
