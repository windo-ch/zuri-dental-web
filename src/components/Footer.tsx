
import { useLanguage } from '../hooks/useLanguage';
import { ArrowUpRight, Globe, Heart, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'it', label: 'Italiano' },
    { code: 'ru', label: 'Русский' }
  ];

  return (
    <footer className="bg-dental-800 text-white pt-16 pb-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/796794fe-b808-4402-b097-f7a6b0da65d8.png" 
                alt="Pietrobon & Michel Logo" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-dental-100 mb-6">
              Excellence in dental artistry since 1995. Premium dental technology services in Zurich, Switzerland.
            </p>
            
            <div className="flex space-x-4 mt-6">
              {/* Social media placeholder icons */}
              {['#', '#', '#'].map((_, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-dental-700 hover:bg-dental-500 transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-6">{t('navigation.contact')}</h3>
            <div className="space-y-4">
              <Link to="/location" className="flex items-start space-x-3 group">
                <MapPin className="text-dental-400 shrink-0 mt-1 group-hover:text-dental-300 transition-colors" size={18} />
                <span className="text-dental-100 group-hover:text-white transition-colors">
                  {t('location.address')}
                </span>
              </Link>
              <a href="tel:+41442220565" className="flex items-start space-x-3 group">
                <Phone className="text-dental-400 shrink-0 mt-1 group-hover:text-dental-300 transition-colors" size={18} />
                <span className="text-dental-100 group-hover:text-white transition-colors">
                  {t('contact.phoneNumber')}
                </span>
              </a>
              <a href="https://pietrobonundmichel.ch" className="flex items-start space-x-3 group" target="_blank" rel="noopener noreferrer">
                <Globe className="text-dental-400 shrink-0 mt-1 group-hover:text-dental-300 transition-colors" size={18} />
                <span className="text-dental-100 group-hover:text-white transition-colors flex items-center">
                  www.pietrobonundmichel.ch
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
                </span>
              </a>
              <div className="pt-4">
                <p className="text-sm text-dental-300 mb-2">Select Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map(lang => (
                    <button 
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as 'en' | 'de' | 'it' | 'ru')}
                      className={`px-2 py-1 text-xs rounded transition-colors ${
                        language === lang.code 
                          ? 'bg-dental-500 text-white' 
                          : 'bg-dental-700 text-dental-200 hover:bg-dental-600'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-6">{t('navigation.home')}</h3>
            <div className="space-y-2">
              <Link 
                to="/about"
                className="block text-dental-200 hover:text-white transition-colors hover:translate-x-1 flex items-center"
              >
                <span className="text-dental-400 mr-2">›</span> Pietrobon & Michel
              </Link>
              <Link
                to="/nicola-pietrobon"
                className="block text-dental-200 hover:text-white transition-colors hover:translate-x-1 flex items-center"
              >
                <span className="text-dental-400 mr-2">›</span> Nicola Pietrobon
              </Link>
              <Link
                to="/reto-michel"
                className="block text-dental-200 hover:text-white transition-colors hover:translate-x-1 flex items-center"
              >
                <span className="text-dental-400 mr-2">›</span> Reto Michel
              </Link>
              <Link
                to="/for-dentists"
                className="block text-dental-200 hover:text-white transition-colors hover:translate-x-1 flex items-center"
              >
                <span className="text-dental-400 mr-2">›</span> {t('navigation.dentists')}
              </Link>
              <Link
                to="/location"
                className="block text-dental-200 hover:text-white transition-colors hover:translate-x-1 flex items-center"
              >
                <span className="text-dental-400 mr-2">›</span> {t('navigation.patients')}
              </Link>
              <Link
                to="/contact"
                className="block text-dental-200 hover:text-white transition-colors hover:translate-x-1 flex items-center"
              >
                <span className="text-dental-400 mr-2">›</span> {t('navigation.contact')}
              </Link>
            </div>
            
            <div className="mt-8 pt-6 border-t border-dental-700">
              <p className="text-dental-300 text-sm">
                <span className="block mb-2">Business Hours:</span>
                Monday - Friday: 8:00 - 18:00<br />
                Saturday: By appointment only<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-dental-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dental-300 text-sm mb-4 md:mb-0 flex items-center">
            {t('footer.rights')} <Heart className="inline-block h-3 w-3 mx-1 text-red-400" /> 
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-dental-300 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-dental-300 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
