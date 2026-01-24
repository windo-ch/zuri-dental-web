import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cookie, 
  Settings, 
  Shield, 
  BarChart3, 
  Target, 
  Check, 
  X, 
  ChevronRight,
  Info
} from 'lucide-react';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

type CookieConsentStep = 'initial' | 'details' | 'preferences';

const CookieConsentAdvanced: React.FC = () => {
  const { t } = useTranslation();
  const [showConsent, setShowConsent] = useState(false);
  const [currentStep, setCurrentStep] = useState<CookieConsentStep>('initial');
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      // Elegant delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      try {
        const savedPreferences = JSON.parse(cookieConsent);
        setPreferences({ ...preferences, ...savedPreferences });
      } catch (e) {
        // Silent fail
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
    closeConsent();
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allRejected));
    setPreferences(allRejected);
    closeConsent();
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    closeConsent();
  };

  const closeConsent = () => {
    setShowConsent(false);
    setCurrentStep('initial');
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showConsent) return null;

  const containerVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        type: 'spring',
        damping: 25,
        stiffness: 400,
        duration: 0.6
      }
    },
    exit: { 
      y: 100, 
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, delay: 0.1 }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.3 }
    }
  };

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookiePreferences,
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic site functionality and security',
      required: true,
      color: 'text-green-600'
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our site',
      required: false,
      color: 'text-blue-600'
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      icon: Target,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaigns',
      required: false,
      color: 'text-purple-600'
    }
  ];

  const renderInitialStep = () => (
    <motion.div
      key="initial"
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex items-start space-x-4 mb-6">
        <div className="p-3 bg-dental-100 rounded-xl">
          <Cookie className="w-6 h-6 text-dental-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-display font-bold text-dental-800 mb-2">
            Cookie Preferences
          </h3>
          <p className="text-dental-600 text-sm leading-relaxed">
            We use cookies to enhance your experience, analyze site usage, and assist in marketing efforts. 
            You can customize your preferences or accept all to continue.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-end">
        <motion.button
          onClick={handleRejectAll}
          className="px-4 py-2 text-dental-600 hover:text-dental-800 font-medium text-sm transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Reject All
        </motion.button>
        
        <motion.button
          onClick={() => setCurrentStep('details')}
          className="px-4 py-2 text-dental-600 hover:text-dental-800 font-medium text-sm transition-colors flex items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Settings className="w-4 h-4 mr-2" />
          Customize
        </motion.button>
        
        <motion.button
          onClick={handleAcceptAll}
          className="px-6 py-2 bg-dental-600 hover:bg-dental-700 text-white font-medium text-sm rounded-lg transition-colors shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          Accept All
        </motion.button>
      </div>
    </motion.div>
  );

  const renderDetailsStep = () => (
    <motion.div
      key="details"
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-display font-bold text-dental-800">
          Cookie Details
        </h3>
        <motion.button
          onClick={() => setCurrentStep('initial')}
          className="p-2 text-dental-400 hover:text-dental-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {cookieTypes.map((cookie, index) => (
          <motion.div
            key={cookie.key}
            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
              preferences[cookie.key] 
                ? 'bg-dental-50 border-dental-200' 
                : 'bg-white border-gray-200 hover:border-dental-100'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <cookie.icon className={`w-5 h-5 mt-0.5 ${cookie.color}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-dental-800 text-sm">
                      {cookie.title}
                    </h4>
                    {cookie.required && (
                      <span className="text-xs bg-dental-100 text-dental-700 px-2 py-1 rounded-full">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-dental-600 text-xs mt-1 leading-relaxed">
                    {cookie.description}
                  </p>
                </div>
              </div>
              
              {!cookie.required && (
                <motion.button
                  onClick={() => togglePreference(cookie.key)}
                  className={`ml-4 w-12 h-6 rounded-full relative transition-colors ${
                    preferences[cookie.key] ? 'bg-dental-500' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm"
                    animate={{
                      x: preferences[cookie.key] ? 26 : 2
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <motion.button
          onClick={() => setCurrentStep('initial')}
          className="text-dental-600 hover:text-dental-800 font-medium text-sm transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ← Back
        </motion.button>
        
        <motion.button
          onClick={handleSavePreferences}
          className="px-6 py-2 bg-dental-600 hover:bg-dental-700 text-white font-medium text-sm rounded-lg transition-colors shadow-lg flex items-center"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Check className="w-4 h-4 mr-2" />
          Save Preferences
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {showConsent && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeConsent}
          />
          
          {/* Cookie Consent Modal */}
          <motion.div 
            className="fixed inset-x-4 bottom-4 md:bottom-8 md:right-8 md:left-auto md:w-96 bg-white rounded-2xl shadow-2xl border border-dental-100 z-50 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Glass morphism effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl" />
            
            {/* Content */}
            <div className="relative p-6">
              <AnimatePresence mode="wait">
                {currentStep === 'initial' && renderInitialStep()}
                {currentStep === 'details' && renderDetailsStep()}
              </AnimatePresence>
            </div>
            
            {/* Subtle accent border */}
            <div className="h-1 bg-gradient-to-r from-dental-500 via-dental-600 to-dental-500" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentAdvanced;
