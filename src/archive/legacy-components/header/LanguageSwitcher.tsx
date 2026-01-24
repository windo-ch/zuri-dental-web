import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

const languages = [
  { code: 'en', name: 'English', shortName: 'EN', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', shortName: 'DE', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', shortName: 'IT', flag: '🇮🇹' },
  { code: 'ru', name: 'Русский', shortName: 'RU', flag: '🇷🇺' },
];

const LanguageSwitcher = ({ isMobile = false }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => i18n.changeLanguage(language.code)}
              className={cn(
                'flex items-center text-sm font-medium px-3 py-1.5 rounded-md transition-colors',
                i18n.language === language.code 
                  ? 'bg-dental-100 text-dental-800' 
                  : 'hover:bg-gray-100'
              )}
            >
              <span className="mr-1.5">{language.flag}</span> {language.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 text-sm py-1 px-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4 opacity-70" />
        <span>{currentLanguage.shortName}</span>
        <ChevronDown className="h-3 w-3 opacity-70" />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for closing the dropdown when clicking outside */}
            <motion.div 
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              className="absolute right-0 mt-1 w-40 rounded-md bg-white border shadow-lg z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((language) => (
                <div
                  key={language.code}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm cursor-pointer hover:bg-gray-50",
                    i18n.language === language.code && "bg-gray-50 font-medium"
                  )}
                  onClick={() => changeLanguage(language.code)}
                >
                  <span className="mr-2">{language.flag}</span>
                  <span className="flex-1">{language.name}</span>
                  {i18n.language === language.code && (
                    <Check className="h-4 w-4 text-dental-600 ml-2" />
                  )}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
