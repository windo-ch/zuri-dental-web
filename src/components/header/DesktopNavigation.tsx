
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

const DesktopNavigation = () => {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <ul className="flex space-x-6">
        <li>
          <Link 
            to="/about" 
            className={cn(
              "font-medium text-sm transition-colors",
              location.pathname === '/about' 
                ? 'text-dental-500' 
                : 'hover:text-dental-500'
            )}
          >
            {t('navigation.about')}
          </Link>
        </li>
        <li>
          <Link 
            to="/nicola-pietrobon" 
            className={cn(
              "font-medium text-sm transition-colors",
              location.pathname === '/nicola-pietrobon' 
                ? 'text-dental-500' 
                : 'hover:text-dental-500'
            )}
          >
            Nicola Pietrobon
          </Link>
        </li>
        <li>
          <Link 
            to="/reto-michel" 
            className={cn(
              "font-medium text-sm transition-colors",
              location.pathname === '/reto-michel' 
                ? 'text-dental-500' 
                : 'hover:text-dental-500'
            )}
          >
            Reto Michel
          </Link>
        </li>
        <li>
          <Link 
            to="/for-dentists" 
            className={cn(
              "font-medium text-sm transition-colors",
              location.pathname === '/for-dentists' 
                ? 'text-dental-500' 
                : 'hover:text-dental-500'
            )}
          >
            {t('navigation.partner')}
          </Link>
        </li>
        <li>
          <Link 
            to="/location" 
            className={cn(
              "font-medium text-sm transition-colors",
              location.pathname === '/location' 
                ? 'text-dental-500' 
                : 'hover:text-dental-500'
            )}
          >
            {t('navigation.patients')}
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={cn(
              "font-medium text-sm transition-colors",
              location.pathname === '/contact' 
                ? 'text-dental-500' 
                : 'hover:text-dental-500'
            )}
          >
            {t('navigation.contact')}
          </Link>
        </li>
      </ul>

      <div className="flex items-center border-l pl-4 border-gray-200">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default DesktopNavigation;
