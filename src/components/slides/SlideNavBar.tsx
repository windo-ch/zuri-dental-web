import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Briefcase, MapPin, Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SlideNavBarProps {
  currentSlide?: number;
  totalSlides?: number;
  onGoToSlide?: (index: number) => void;
  className?: string;
}

const SlideNavBar: React.FC<SlideNavBarProps> = ({
  currentSlide = 0,
  totalSlides = 4,
  onGoToSlide,
  className = ''
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    {
      id: 'entry',
      icon: Home,
      label: 'Entry',
      description: t('navigation.tooltips.entry'),
      action: () => onGoToSlide?.(0)
    },
    {
      id: 'team',
      icon: Users,
      label: 'Team',
      description: t('navigation.tooltips.team'),
      action: () => onGoToSlide?.(1)
    },
    {
      id: 'services',
      icon: Briefcase,
      label: 'Services',
      description: t('navigation.tooltips.services'),
      action: () => onGoToSlide?.(2)
    },
    {
      id: 'closing',
      icon: Phone,
      label: 'Contact',
      description: t('navigation.tooltips.closing'),
      action: () => onGoToSlide?.(3)
    },
    {
      id: 'dentists',
      icon: Briefcase,
      label: 'Dentists',
      description: t('navigation.tooltips.dentists'),
      action: () => navigate('/for-dentists')
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Location',
      description: t('navigation.tooltips.location'),
      action: () => navigate('/visit')
    }
  ];

  // Tooltip component - Simple and reliable
  const Tooltip = ({ content, children, isVisible }: { content: string; children: React.ReactNode; isVisible: boolean }) => (
    <div className="relative">
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded shadow-lg whitespace-nowrap z-[100] pointer-events-none">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black" />
        </div>
      )}
    </div>
  );

  // Only show slide navigation items if we're on the main slide page
  const isMainSlidePage = location.pathname === '/';
  // Main slides: show dentists + location (both direct access buttons)
  // Sub-pages: show dentists + location (same options)
  const itemsToShow = navItems.slice(4); // Always show dentists + location
  

  return (
    <motion.nav
      className={`fixed bottom-8 left-0 right-0 flex justify-center z-50 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-3">
        {/* Home Button - Separate circle for sub-pages */}
        {!isMainSlidePage && (
          <Tooltip 
            content={t('navigation.tooltips.homeButton')}
            isVisible={hoveredItem === 'home-button'}
          >
            <motion.button
              onClick={() => navigate('/')}
              className="p-3 bg-white/95 backdrop-blur-md hover:bg-white shadow-lg hover:shadow-xl border border-dental-200/50 rounded-full transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredItem('home-button')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Home className="w-5 h-5 text-dental-600" />
            </motion.button>
          </Tooltip>
        )}

        {/* Main Navigation Container */}
        <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-full px-4 py-3 shadow-lg border border-dental-200/50">
          {isMainSlidePage && totalSlides && (
            <>
              {/* Slide indicators for main page */}
              {Array.from({ length: totalSlides }, (_, index) => (
                <Tooltip 
                  key={`slide-${index}`}
                  content={navItems[index]?.description || `Slide ${index + 1}`}
                  isVisible={hoveredItem === `slide-${index}`}
                >
                  <button
                    onClick={() => onGoToSlide?.(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-dental-600 scale-125'
                        : 'bg-dental-300 hover:bg-dental-400'
                    }`}
                    onMouseEnter={() => setHoveredItem(`slide-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                    aria-label={`${t('navigation.tooltips.entry')} ${index + 1}`}
                  />
                </Tooltip>
              ))}
              
              <div className="w-px h-6 bg-dental-200 mx-2" />
            </>
          )}

          {/* Navigation items */}
          {itemsToShow.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Tooltip 
                key={item.id}
                content={item.description}
                isVisible={hoveredItem === item.id}
              >
                <motion.button
                  onClick={item.action}
                  className="p-2 text-dental-600 hover:text-dental-700 hover:bg-dental-50 rounded-full transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <IconComponent className="w-4 h-4" />
                </motion.button>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default SlideNavBar;
