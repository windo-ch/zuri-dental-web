
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { translations } from '../data/translations';

type LanguageType = 'en' | 'de' | 'it' | 'ru';

type LanguageContextType = {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => any; // Changed return type to any to accommodate arrays and objects
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>('en');

  useEffect(() => {
    // Try to get language preference from localStorage
    const savedLanguage = localStorage.getItem('language') as LanguageType;
    
    if (savedLanguage && ['en', 'de', 'it', 'ru'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      
      if (['en', 'de', 'it', 'ru'].includes(browserLang as LanguageType)) {
        setLanguage(browserLang as LanguageType);
      } else {
        // Default to English if not detected
        setLanguage('en');
      }
    }
  }, []);

  const changeLanguage = (lang: LanguageType) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };
  
  // Translation function that can return any type (string, array, or object)
  const t = (key: string): any => {
    const keys = key.split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key} in language: ${language}`);
        return key;
      }
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
