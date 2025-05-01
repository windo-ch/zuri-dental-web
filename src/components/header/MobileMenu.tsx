
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const { t } = useLanguage();
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <div className={cn(
      'md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden',
      isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
    )}>
      <nav className="container px-4">
        <ul className="space-y-3">
          <li>
            <div className="w-full">
              <button 
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="w-full flex items-center justify-between py-2 font-medium hover:text-dental-500 transition-colors"
              >
                <span>Pietrobon & Michel</span>
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  aboutDropdownOpen ? "transform rotate-180" : ""
                )} />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                aboutDropdownOpen ? "max-h-40 pt-2 pb-1" : "max-h-0"
              )}>
                <Link 
                  to="/about" 
                  className="w-full block text-left py-2 pl-4 text-sm hover:text-dental-500 transition-colors"
                >
                  {t('navigation.about')}
                </Link>
                <Link 
                  to="/nicola-pietrobon" 
                  className="w-full block text-left py-2 pl-4 text-sm hover:text-dental-500 transition-colors"
                >
                  Nicola Pietrobon
                </Link>
                <Link 
                  to="/reto-michel" 
                  className="w-full block text-left py-2 pl-4 text-sm hover:text-dental-500 transition-colors"
                >
                  Reto Michel
                </Link>
              </div>
            </div>
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
              {t('navigation.location')}
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
