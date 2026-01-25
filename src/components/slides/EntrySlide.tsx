import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import Slide from './Slide';
import { cn } from '@/lib/utils';

const EntrySlide: React.FC = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '/assets/images/flags/uk.svg' },
    { code: 'de', name: 'Deutsch', flag: '/assets/images/flags/switzerland.svg' },
    { code: 'it', name: 'Italiano', flag: '/assets/images/flags/italy.svg' },
    { code: 'ru', name: 'русские', flag: '/assets/images/flags/russia.svg' },
  ];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  return (
    <Slide background="gradient" className="relative">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        poster="/assets/images/video-posters/zurich-pundm-poster.jpg"
        preload="metadata"
        onError={(e) => {
          console.error('Video error:', e);
          // Hide video on error to prevent crashes
          (e.target as HTMLVideoElement).style.display = 'none';
        }}
      >
        <source src="/assets/zurich-pundm.webm" type="video/webm" />
      </video>
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-lg mx-auto px-4 md:max-w-xl h-full flex items-start md:items-center justify-center pt-[70px] md:pt-0 md:mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Card Container */}
        <div className="w-full relative">
          {/* Logo Card */}
          <motion.div
            className="bg-pietrobon-blue rounded-2xl shadow-2xl p-6 md:p-10 text-center relative z-20"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 20px 40px -12px rgba(28, 76, 132, 0.3)"
            }}
            transition={{ duration: 0.2 }}
          >
          {/* Logo */}
          <div className="mb-2 md:mb-3 w-full text-center">
            <img
              src="/assets/images/pietobon-michel-logo2025-w-v2.png"
              alt="Pietrobon & Michel"
              className="w-3/4 h-auto mx-auto"
              draggable={false}
            />
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-sm text-white/90 mb-3 md:mb-4 font-medium"
            variants={itemVariants}
          >
            {t('slides.entry.subtitle')}
          </motion.p>

          {/* Address - Centered */}
          <motion.div
            className="text-center mb-3 md:mb-4 text-white/90"
            variants={itemVariants}
          >
            <div className="text-sm">
              <div>Bahnhofstrasse 35</div>
              <div>8001 Zürich</div>
              <div>Schweiz</div>
            </div>
          </motion.div>

                    {/* Appointment Only */}
                    <motion.div
                      className="text-center mb-3 md:mb-4"
                      variants={itemVariants}
                    >
                      <p className="text-white/90 text-sm italic">
                        {t('slides.entry.appointmentOnly')}
                      </p>
                    </motion.div>

          {/* Contact Buttons */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-4 md:mb-6"
            variants={itemVariants}
          >
            {/* Email Button - Icon Only */}
            <motion.a
              href="mailto:lab@pietrobonandmichel.ch"
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={t('slides.entry.sendEmail')}
              aria-label={t('slides.entry.sendEmail')}
            >
              <Mail className="w-4 h-4 text-white" />
            </motion.a>

            {/* Phone Button - Extended with Number */}
            <motion.a
              href="tel:+41442220565"
              className="bg-white/20 hover:bg-white/30 rounded-full px-4 py-2 flex items-center gap-2 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={t('slides.entry.callPhone')}
            >
              <Phone className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">+41 44 222 05 65</span>
            </motion.a>
          </motion.div>

          {/* Language Selection */}
          <motion.div
            className="space-y-3"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 gap-2">
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={cn(
                    'flex items-center justify-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                    i18n.language === language.code
                      ? 'bg-white text-pietrobon-blue shadow-md'
                      : 'bg-white/20 text-white hover:bg-white/30 hover:text-white'
                  )}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <img 
                    src={language.flag} 
                    alt={`${language.name} flag`} 
                    className="w-4 h-3 mr-2" 
                  />
                  {language.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* laborblock.ch Tag - Emerging from card */}
        <div className="flex justify-center -mt-1 relative z-10">
          <motion.a
            href="https://laborblock.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/90 py-2 px-4 text-xs font-medium transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '0 0 16px 16px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderTop: 'none',
            }}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              background: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 6px 40px rgba(0, 0, 0, 0.15)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>laborblock.ch</span>
            <ExternalLink className="w-3 h-3" />
          </motion.a>
        </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default EntrySlide;
