import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SlideNavBarProps {
  showBackButton?: boolean;
  backTo?: string;
  title?: string;
  className?: string;
  minimal?: boolean; // New prop for minimal navigation
}

const SlideNavBar: React.FC<SlideNavBarProps> = ({
  showBackButton = true,
  backTo = '/',
  title,
  className = '',
  minimal = false
}) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'de', name: 'DE', flag: '🇩🇪' },
    { code: 'it', name: 'IT', flag: '🇮🇹' },
    { code: 'ru', name: 'RU', flag: '🇷🇺' },
  ];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-dental-200/50 shadow-lg ${className}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Back Button & Title */}
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <motion.button
                onClick={() => navigate(backTo)}
                className="inline-flex items-center px-4 py-2 text-dental-600 hover:text-dental-700 bg-dental-50 hover:bg-dental-100 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-medium text-sm">Back</span>
              </motion.button>
            )}
            {title && !minimal && (
              <h1 className="text-xl font-display font-semibold text-dental-800">
                {title}
              </h1>
            )}
          </div>

          {/* Center: Circular P&M Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              className="w-12 h-12 bg-gradient-to-br from-dental-600 to-dental-800 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate('/')}
            >
              <span className="text-white font-display font-bold text-sm">
                P&M
              </span>
            </div>
          </motion.div>

          {/* Right: Contact & Language (only if not minimal) */}
          <div className="flex items-center space-x-4">
            {!minimal && (
              <>
                {/* Quick Contact */}
                <div className="hidden md:flex items-center space-x-3">
                  <motion.a
                    href="tel:+41442220565"
                    className="flex items-center text-dental-600 hover:text-dental-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">+41 44 222 05 65</span>
                  </motion.a>
                </div>

                {/* Language Switcher */}
                <div className="flex space-x-1 bg-dental-50 rounded-full p-1">
                  {languages.map((language) => (
                    <motion.button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`px-3 py-1.5 text-xs rounded-full transition-all duration-200 ${
                        i18n.language === language.code
                          ? 'bg-dental-600 text-white shadow-sm'
                          : 'text-dental-600 hover:bg-dental-100'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {language.flag} <span className="hidden sm:inline">{language.name}</span>
                    </motion.button>
                  ))}
                </div>
              </>
            )}
            {/* For minimal mode, add spacing to keep the logo centered */}
            {minimal && <div className="w-24"></div>}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default SlideNavBar;
