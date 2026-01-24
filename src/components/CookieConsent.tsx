import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, Check } from 'lucide-react';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CookieConsent = () => {
  const { t } = useTranslation();
  const [showConsent, setShowConsent] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false
  });
  
  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      // Delay showing the banner for a smoother UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      try {
        // If preferences were saved, load them
        const savedPreferences = JSON.parse(cookieConsent);
        if (typeof savedPreferences === 'object') {
          setPreferences({
            ...preferences,
            ...savedPreferences
          });
        }
      } catch (e) {
        // If parsing fails, do nothing
      }
    }
  }, []);
  
  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowConsent(false);
  };
  
  const handleRejectAll = () => {
    const allRejected = {
      necessary: true, // Always necessary
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allRejected));
    setPreferences(allRejected);
    setShowConsent(false);
  };
  
  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowConsent(false);
  };
  
  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Can't toggle necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  if (!showConsent) return null;

  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: { 
      y: 100, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const customizeVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 'auto', 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      height: 0, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-white z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-200"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="container max-w-6xl mx-auto px-4 py-4 md:py-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-medium text-lg">{t('cookies.title')}</h3>
              <button 
                onClick={() => setShowConsent(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <X size={20} />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              {t('cookies.description')}
            </p>
            
            <AnimatePresence>
              {customizing && (
                <motion.div
                  variants={customizeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mb-6 overflow-hidden"
                >
                  <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                    {/* Necessary cookies - always enabled */}
                    <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
                      <div>
                        <p className="font-medium">{t('cookies.necessary.title')}</p>
                        <p className="text-sm text-gray-500">{t('cookies.necessary.description')}</p>
                      </div>
                      <div className="bg-dental-100 text-dental-800 px-2 py-1 rounded text-xs font-medium">
                        {t('cookies.necessary.required', 'Required')}
                      </div>
                    </div>
                    
                    {/* Analytics cookies */}
                    <div 
                      className={cn(
                        "flex justify-between items-center p-3 rounded border cursor-pointer",
                        preferences.analytics ? "bg-dental-50 border-dental-200" : "bg-white border-gray-200"
                      )}
                      onClick={() => togglePreference('analytics')}
                    >
                      <div>
                        <p className="font-medium">{t('cookies.analytics.title')}</p>
                        <p className="text-sm text-gray-500">{t('cookies.analytics.description')}</p>
                      </div>
                      <div className={cn(
                        "w-10 h-6 rounded-full relative flex items-center transition-colors",
                        preferences.analytics ? "bg-dental-500" : "bg-gray-300"
                      )}>
                        <span className={cn(
                          "absolute w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform",
                          preferences.analytics ? "translate-x-5" : "translate-x-1"
                        )} />
                      </div>
                    </div>
                    
                    {/* Marketing cookies */}
                    <div 
                      className={cn(
                        "flex justify-between items-center p-3 rounded border cursor-pointer",
                        preferences.marketing ? "bg-dental-50 border-dental-200" : "bg-white border-gray-200"
                      )}
                      onClick={() => togglePreference('marketing')}
                    >
                      <div>
                        <p className="font-medium">{t('cookies.marketing.title')}</p>
                        <p className="text-sm text-gray-500">{t('cookies.marketing.description')}</p>
                      </div>
                      <div className={cn(
                        "w-10 h-6 rounded-full relative flex items-center transition-colors",
                        preferences.marketing ? "bg-dental-500" : "bg-gray-300"
                      )}>
                        <span className={cn(
                          "absolute w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform",
                          preferences.marketing ? "translate-x-5" : "translate-x-1"
                        )} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="flex flex-wrap gap-3 justify-end">
              <Button
                variant="outline"
                onClick={handleRejectAll}
                size="sm"
              >
                {t('cookies.reject')}
              </Button>
              
              <Button
                variant="outline"
                onClick={() => setCustomizing(!customizing)}
                size="sm"
                className="flex items-center"
              >
                {t('cookies.customize')}
                {customizing ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </Button>
              
              {customizing ? (
                <Button
                  onClick={handleSavePreferences}
                  size="sm"
                  className="bg-dental-600 hover:bg-dental-700 text-white"
                >
                  {t('cookies.save')}
                </Button>
              ) : (
                <Button
                  onClick={handleAcceptAll}
                  size="sm"
                  className="bg-dental-600 hover:bg-dental-700 text-white"
                >
                  {t('cookies.accept')}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
