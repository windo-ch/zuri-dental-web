
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { cn } from '@/lib/utils';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <h2 className="font-display text-2xl font-medium text-dental-800">
            Pietrobon <span className="text-dental-500">&</span> Michel
          </h2>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="font-medium text-sm hover:text-dental-500 transition-colors"
              >
                {t('navigation.about')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('location')} 
                className="font-medium text-sm hover:text-dental-500 transition-colors"
              >
                {t('navigation.location')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="font-medium text-sm hover:text-dental-500 transition-colors"
              >
                {t('navigation.contact')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('credo')} 
                className="font-medium text-sm hover:text-dental-500 transition-colors"
              >
                {t('navigation.credo')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('partners')} 
                className="font-medium text-sm hover:text-dental-500 transition-colors"
              >
                {t('navigation.partner')}
              </button>
            </li>
          </ul>

          <div className="flex items-center border-l pl-4 border-gray-200">
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
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dental-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden',
        mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
      )}>
        <nav className="container px-4">
          <ul className="space-y-3">
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="w-full text-left py-2 font-medium hover:text-dental-500 transition-colors"
              >
                {t('navigation.about')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('location')} 
                className="w-full text-left py-2 font-medium hover:text-dental-500 transition-colors"
              >
                {t('navigation.location')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full text-left py-2 font-medium hover:text-dental-500 transition-colors"
              >
                {t('navigation.contact')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('credo')} 
                className="w-full text-left py-2 font-medium hover:text-dental-500 transition-colors"
              >
                {t('navigation.credo')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('partners')} 
                className="w-full text-left py-2 font-medium hover:text-dental-500 transition-colors"
              >
                {t('navigation.partner')}
              </button>
            </li>
          </ul>

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
        </nav>
      </div>
    </header>
  );
};

export default Header;
