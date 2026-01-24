import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';

interface WorkShowcaseProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    beforeImage: string;
    afterImage: string;
    tags: string[];
    materialUsed?: string;
    completionTime?: string;
  }>;
  className?: string;
}

const WorkShowcase = ({ items, className }: WorkShowcaseProps) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const activeItem = items[activeIndex];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };
  
  const handleMouseDown = () => {
    setIsDragging(true);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };
  
  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    setSliderPosition(50); // Reset slider position for new item
  };
  
  const prevItem = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    setSliderPosition(50); // Reset slider position for new item
  };
  
  useEffect(() => {
    // Add global mouse and touch event listeners
    const handleGlobalMouseUp = () => setIsDragging(false);
    
    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalMouseUp);
    
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);
  
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-10">
        <p>{t('workShowcase.noItems')}</p>
      </div>
    );
  }
  
  return (
    <motion.div 
      ref={ref}
      className={cn("", className)}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          variants={itemVariants}
        >
          {/* Image comparison slider */}
          <div 
            ref={containerRef}
            className="relative h-[400px] overflow-hidden cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          >
            {/* Before image (full width) */}
            <div className="absolute inset-0">
              <img 
                src={activeItem.beforeImage} 
                alt={`${activeItem.title} - Before`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400?text=Before+Image';
                }}
              />
            </div>
            
            {/* After image (clipped from left to slider position) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={activeItem.afterImage} 
                alt={`${activeItem.title} - After`}
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ 
                  width: `${100 / (sliderPosition / 100)}%`, 
                  minWidth: '100%'
                }}
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400?text=After+Image';
                }}
              />
            </div>
            
            {/* Slider control */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-md cursor-grab"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-dental-500 rounded-full flex items-center justify-center shadow-lg">
                <MoveHorizontal className="text-white" size={16} />
              </div>
            </div>
            
            {/* Before/After labels */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm font-medium">
              {t('workShowcase.before')}
            </div>
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm font-medium">
              {t('workShowcase.after')}
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevItem}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-colors"
              aria-label={t('workShowcase.previous')}
            >
              <ChevronLeft className="text-dental-800" size={24} />
            </button>
            <button
              onClick={nextItem}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-colors"
              aria-label={t('workShowcase.next')}
            >
              <ChevronRight className="text-dental-800" size={24} />
            </button>
          </div>
          
          {/* Range input slider (for more precise control and accessibility) */}
          <div className="px-6 py-3 border-t border-gray-100">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="w-full accent-dental-500"
              aria-label={t('workShowcase.adjustSlider')}
            />
          </div>
          
          {/* Case details */}
          <div className="p-6 border-t border-gray-100">
            <h3 className="text-2xl font-display font-semibold text-dental-700 mb-2">
              {activeItem.title}
            </h3>
            <p className="text-dental-600 mb-4">
              {activeItem.description}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {activeItem.materialUsed && (
                <div className="bg-dental-50 p-4 rounded-lg">
                  <h4 className="font-medium text-dental-700 mb-1">
                    {t('workShowcase.materialUsed')}
                  </h4>
                  <p className="text-dental-600">{activeItem.materialUsed}</p>
                </div>
              )}
              
              {activeItem.completionTime && (
                <div className="bg-dental-50 p-4 rounded-lg">
                  <h4 className="font-medium text-dental-700 mb-1">
                    {t('workShowcase.completionTime')}
                  </h4>
                  <p className="text-dental-600">{activeItem.completionTime}</p>
                </div>
              )}
            </div>
            
            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {activeItem.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-dental-100 text-dental-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Pagination indicators */}
          <div className="px-6 py-4 border-t border-gray-100 flex justify-center">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setSliderPosition(50);
                }}
                className={cn(
                  "w-3 h-3 rounded-full mx-1 transition-all",
                  activeIndex === index 
                    ? "bg-dental-500 scale-110" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={t('workShowcase.goToItem', { number: index + 1 })}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WorkShowcase; 