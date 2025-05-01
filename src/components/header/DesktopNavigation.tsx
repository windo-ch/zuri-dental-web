
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DesktopNavigation = () => {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center justify-center flex-1">
      <ul className="flex space-x-8 items-center">
        <li className="relative group">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent px-0">
                  <span className={cn(
                    "font-medium text-sm transition-colors",
                    location.pathname === '/about' 
                      ? 'text-dental-500' 
                      : 'hover:text-dental-500'
                  )}>
                    Pietrobon & Michel
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white min-w-[200px]">
                  <div className="p-2">
                    <Link
                      to="/about"
                      className="block px-3 py-2 text-sm rounded hover:bg-dental-50 transition-colors"
                    >
                      {t('navigation.about')}
                    </Link>
                    <Link
                      to="/nicola-pietrobon"
                      className="block px-3 py-2 text-sm rounded hover:bg-dental-50 transition-colors"
                    >
                      Nicola Pietrobon
                    </Link>
                    <Link
                      to="/reto-michel"
                      className="block px-3 py-2 text-sm rounded hover:bg-dental-50 transition-colors"
                    >
                      Reto Michel
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
            {t('navigation.location')}
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
    </nav>
  );
};

export default DesktopNavigation;
