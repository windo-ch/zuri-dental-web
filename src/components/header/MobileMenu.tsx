
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const { t } = useLanguage();

  return (
    <div className={cn(
      'md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden',
      isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
    )}>
      <nav className="container px-4">
        <ul className="space-y-3">
          <li>
            <Link 
              to="/about" 
              className="w-full block text-left py-2 font-medium hover:text-dental-500 transition-colors"
            >
              {t('navigation.about')}
            </Link>
          </li>
          <li>
            <Link 
              to="/nicola-pietrobon" 
              className="w-full block text-left py-2 font-medium hover:text-dental-500 transition-colors"
            >
              Nicola Pietrobon
            </Link>
          </li>
          <li>
            <Link 
              to="/reto-michel" 
              className="w-full block text-left py-2 font-medium hover:text-dental-500 transition-colors"
            >
              Reto Michel
            </Link>
          </li>
          <li>
            <Link 
              to="/for-dentists" 
              className="w-full block text-left py-2 font-medium hover:text-dental-500 transition-colors"
            >
              {t('navigation.partner')}
            </Link>
          </li>
          <li>
            <Link 
              to="/location" 
              className="w-full block text-left py-2 font-medium hover:text-dental-500 transition-colors"
            >
              {t('navigation.patients')}
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="w-full block text-left py-2 font-medium hover:text-dental-500 transition-colors"
            >
              {t('navigation.contact')}
            </Link>
          </li>
        </ul>

        <LanguageSwitcher isMobile={true} />
      </nav>
    </div>
  );
};

export default MobileMenu;
