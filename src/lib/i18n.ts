import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import existing translations (we'll migrate to JSON files later)
import { translations } from '../data/translations';

// Supported language codes
const supportedLngs = ['en', 'de', 'it', 'ru'];

// Language mapping to handle region codes (e.g., en-US → en)
const languageMapping: Record<string, string> = {
  'en-US': 'en',
  'en-GB': 'en',
  'de-DE': 'de',
  'de-CH': 'de',
  'de-AT': 'de',
  'it-IT': 'it',
  'it-CH': 'it',
  'ru-RU': 'ru',
};

i18n
  // Load translations from server
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize configuration
  .init({
    // Use our existing translations for now
    resources: {
      en: { translation: translations.en },
      de: { translation: translations.de },
      it: { translation: translations.it },
      ru: { translation: translations.ru }
    },
    fallbackLng: 'en',
    supportedLngs,
    load: 'languageOnly', // will strip region code, e.g. en-US -> en
    debug: process.env.NODE_ENV === 'development',
    
    // Have a common namespace used around the app
    ns: ['translation'],
    defaultNS: 'translation',
    
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    
    react: {
      useSuspense: true,
    },
  });

export default i18n; 