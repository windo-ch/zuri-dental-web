
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

const LanguageSwitcher = ({ isMobile = false }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  return isMobile ? (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <div className="flex space-x-3">
        <button 
          onClick={() => setLanguage('en')} 
          className={cn(
            'text-xs font-medium px-3 py-1 rounded transition-colors',
            language === 'en' ? 'bg-dental-100 text-dental-800' : 'hover:bg-gray-100'
          )}
        >
          English
        </button>
        <button 
          onClick={() => setLanguage('de')} 
          className={cn(
            'text-xs font-medium px-3 py-1 rounded transition-colors',
            language === 'de' ? 'bg-dental-100 text-dental-800' : 'hover:bg-gray-100'
          )}
        >
          Deutsch
        </button>
        <button 
          onClick={() => setLanguage('it')} 
          className={cn(
            'text-xs font-medium px-3 py-1 rounded transition-colors',
            language === 'it' ? 'bg-dental-100 text-dental-800' : 'hover:bg-gray-100'
          )}
        >
          Italiano
        </button>
        <button 
          onClick={() => setLanguage('ru')} 
          className={cn(
            'text-xs font-medium px-3 py-1 rounded transition-colors',
            language === 'ru' ? 'bg-dental-100 text-dental-800' : 'hover:bg-gray-100'
          )}
        >
          Русский
        </button>
      </div>
    </div>
  ) : (
    <div className="flex space-x-2">
      <button 
        onClick={() => setLanguage('en')} 
        className={cn(
          'text-xs font-medium px-2 py-1 rounded transition-colors',
          language === 'en' ? 'bg-dental-100 text-dental-800' : 'hover:bg-gray-100'
        )}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('de')} 
        className={cn(
          'text-xs font-medium px-2 py-1 rounded transition-colors',
          language === 'de' ? 'bg-dental-100 text-dental-800' : 'hover:bg-gray-100'
        )}
      >
        DE
      </button>
      <button 
        onClick={() => setLanguage('it')} 
        className={cn(
          'text-xs font-medium px-2 py-1 rounded transition-colors',
          language === 'it' ? 'bg-dental-100 text-dental-800' : 'hover:bg-gray-100'
        )}
      >
        IT
      </button>
      <button 
        onClick={() => setLanguage('ru')} 
        className={cn(
          'text-xs font-medium px-2 py-1 rounded transition-colors',
          language === 'ru' ? 'bg-dental-100 text-dental-800' : 'hover:bg-gray-100'
        )}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
