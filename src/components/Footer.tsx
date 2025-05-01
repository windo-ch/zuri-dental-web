
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Phone, Globe } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dental-800 text-white pt-16 pb-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-display text-2xl mb-6">
              Pietrobon <span className="text-dental-400">&</span> Michel
            </h3>
            <p className="text-dental-100 mb-6">
              Excellence in dental artistry since 1995. Premium dental technology services in Zurich, Switzerland.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-6">{t('navigation.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-dental-400 shrink-0 mt-1" size={18} />
                <span className="text-dental-100">
                  {t('location.address')}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-dental-400 shrink-0 mt-1" size={18} />
                <span className="text-dental-100">
                  {t('contact.phoneNumber')}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="text-dental-400 shrink-0 mt-1" size={18} />
                <span className="text-dental-100">
                  www.pietrobonundmichel.ch
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-6">{t('navigation.home')}</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-dental-200 hover:text-white transition-colors"
              >
                {t('navigation.about')}
              </button>
              <button 
                onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-dental-200 hover:text-white transition-colors"
              >
                {t('navigation.location')}
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-dental-200 hover:text-white transition-colors"
              >
                {t('navigation.contact')}
              </button>
              <button 
                onClick={() => document.getElementById('credo')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-dental-200 hover:text-white transition-colors"
              >
                {t('navigation.credo')}
              </button>
              <button 
                onClick={() => document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-dental-200 hover:text-white transition-colors"
              >
                {t('navigation.partner')}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-dental-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dental-300 text-sm mb-4 md:mb-0">
            {t('footer.rights')}
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
