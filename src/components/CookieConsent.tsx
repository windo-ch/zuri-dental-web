
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { cn } from '@/lib/utils';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [showConsent, setShowConsent] = useState(false);
  
  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      // Delay showing the banner for a smoother UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };
  
  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };
  
  if (!showConsent) return null;

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 bg-white z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]",
      "transition-all duration-500 transform",
      showConsent ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="container max-w-6xl mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="md:max-w-2xl">
            <h3 className="font-medium text-lg mb-2">{t('cookies.title')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('cookies.description')}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              {t('cookies.decline')}
            </button>
            
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-dental-600 text-white rounded-md text-sm font-medium hover:bg-dental-700 transition-colors"
            >
              {t('cookies.accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
