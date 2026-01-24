import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const DesktopNavigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Animation variants for menu items
  const menuItemVariants = {
    initial: { y: -5, opacity: 0 },
    animate: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * custom,
        duration: 0.3,
      },
    }),
  };

  // Navigation items with hover descriptions
  const navItems = [
    {
      id: 'dentists',
      label: t('navigation.partner', 'For Dentists'),
      href: '/for-dentists',
      description: 'Lab order forms and professional resources'
    },
    {
      id: 'patients',
      label: t('navigation.forPatients', 'For Patients'),
      href: '/for-patients',
      description: 'Visit our laboratory and location information'
    },
    {
      id: 'contact',
      label: t('navigation.contact', 'Contact'),
      href: '/contact',
      description: 'Get in touch with our team'
    }
  ];

  // Tooltip component
  const Tooltip = ({ content, children, isVisible }: { content: string; children: React.ReactNode; isVisible: boolean }) => (
    <div className="relative">
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-dental-800 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {content}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dental-800 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <nav className="hidden md:flex items-center justify-center flex-1">
      <ul className="flex space-x-8 items-center">
        <motion.li 
          className="relative group"
          variants={menuItemVariants}
          initial="initial"
          animate="animate"
          custom={1}
        >
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
        </motion.li>
        
        {/* Main Navigation Items with Tooltips */}
        {navItems.map((item, index) => (
          <motion.li
            key={item.id}
            variants={menuItemVariants}
            initial="initial"
            animate="animate"
            custom={index + 2}
          >
            <Tooltip content={item.description} isVisible={hoveredItem === item.id}>
              <Link 
                to={item.href}
                className={cn(
                  "font-medium text-sm transition-colors",
                  location.pathname === item.href 
                    ? 'text-dental-500' 
                    : 'hover:text-dental-500'
                )}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
              </Link>
            </Tooltip>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
