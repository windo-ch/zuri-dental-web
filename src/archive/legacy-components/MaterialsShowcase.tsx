import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { 
  ChevronDown, 
  Star, 
  Clock, 
  Zap, 
  Sparkles, 
  Gem, 
  Shield, 
  Wrench
} from 'lucide-react';

interface MaterialProperty {
  name: string;
  value: string | number;
  rating?: number; // 1-5 rating (if applicable)
}

interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string; // Tailwind color class
  icon: keyof typeof materialIcons;
  properties: MaterialProperty[];
  applications: string[];
  advantages: string[];
  limitations?: string[];
}

// Icons for different material types
const materialIcons = {
  ceramic: Gem,
  metal: Wrench,
  composite: Sparkles,
  zirconia: Shield,
};

interface MaterialsShowcaseProps {
  materials: Material[];
  className?: string;
}

const MaterialsShowcase = ({ materials, className }: MaterialsShowcaseProps) => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'properties' | 'applications' | 'advantages'>('properties');
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
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
  
  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    // Reset to default tab when opening
    if (expandedId !== id) {
      setActiveTab('properties');
    }
  };
  
  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} 
      />
    ));
  };
  
  if (!materials || materials.length === 0) {
    return (
      <div className="text-center py-10">
        <p>{t('materialsShowcase.noMaterials')}</p>
      </div>
    );
  }
  
  return (
    <motion.div 
      ref={ref}
      className={cn("my-12", className)}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {materials.map((material, index) => {
          const isExpanded = expandedId === material.id;
          const IconComponent = materialIcons[material.icon] || Gem;
          
          return (
            <motion.div 
              key={material.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              {/* Material header/summary */}
              <div 
                className={cn(
                  "p-6 cursor-pointer flex items-center",
                  `bg-${material.color}-50 hover:bg-${material.color}-100 transition-colors`
                )}
                onClick={() => toggleItem(material.id)}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mr-4",
                  `bg-${material.color}-100 text-${material.color}-600`
                )}>
                  <IconComponent size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-dental-800">
                    {material.name}
                  </h3>
                  <p className="text-dental-600 line-clamp-1">
                    {material.description}
                  </p>
                </div>
                
                <ChevronDown 
                  className={cn(
                    "text-dental-500 transition-transform duration-300",
                    isExpanded ? "transform rotate-180" : ""
                  )} 
                  size={20} 
                />
              </div>
              
              {/* Expanded content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-gray-100">
                      {/* Material image */}
                      <div className="h-[200px] overflow-hidden">
                        <img 
                          src={material.image} 
                          alt={material.name} 
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/800x400/${material.color.replace('dental-', '')}?text=${material.name.replace(' ', '+')}`;
                          }}
                        />
                      </div>
                      
                      {/* Tabs */}
                      <div className="border-t border-b border-gray-100">
                        <div className="flex">
                          <button
                            className={cn(
                              "flex-1 py-3 px-4 text-sm font-medium transition-colors",
                              activeTab === 'properties' 
                                ? `text-${material.color}-600 border-b-2 border-${material.color}-500` 
                                : "text-gray-500 hover:text-gray-700"
                            )}
                            onClick={() => setActiveTab('properties')}
                          >
                            {t('materialsShowcase.properties')}
                          </button>
                          <button
                            className={cn(
                              "flex-1 py-3 px-4 text-sm font-medium transition-colors",
                              activeTab === 'applications' 
                                ? `text-${material.color}-600 border-b-2 border-${material.color}-500` 
                                : "text-gray-500 hover:text-gray-700"
                            )}
                            onClick={() => setActiveTab('applications')}
                          >
                            {t('materialsShowcase.applications')}
                          </button>
                          <button
                            className={cn(
                              "flex-1 py-3 px-4 text-sm font-medium transition-colors",
                              activeTab === 'advantages' 
                                ? `text-${material.color}-600 border-b-2 border-${material.color}-500` 
                                : "text-gray-500 hover:text-gray-700"
                            )}
                            onClick={() => setActiveTab('advantages')}
                          >
                            {t('materialsShowcase.advantages')}
                          </button>
                        </div>
                      </div>
                      
                      {/* Tab content */}
                      <div className="p-6">
                        {/* Properties tab */}
                        {activeTab === 'properties' && (
                          <div className="space-y-6">
                            <p className="text-dental-600">{material.description}</p>
                            
                            <div className="grid sm:grid-cols-2 gap-4">
                              {material.properties.map((property, idx) => (
                                <div 
                                  key={idx} 
                                  className={cn(
                                    "p-4 rounded-lg",
                                    `bg-${material.color}-50`
                                  )}
                                >
                                  <h4 className="font-medium text-dental-700 mb-1">
                                    {property.name}
                                  </h4>
                                  <div className="flex justify-between items-center">
                                    <p className="text-dental-600">{property.value}</p>
                                    {property.rating !== undefined && (
                                      <div className="flex">
                                        {getRatingStars(property.rating)}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Applications tab */}
                        {activeTab === 'applications' && (
                          <div className="space-y-4">
                            <h4 className="font-medium text-dental-700 mb-2">
                              {t('materialsShowcase.idealFor')}
                            </h4>
                            <ul className="space-y-2">
                              {material.applications.map((application, idx) => (
                                <li 
                                  key={idx} 
                                  className={cn(
                                    "p-3 rounded-lg flex items-start",
                                    `bg-${material.color}-50`
                                  )}
                                >
                                  <Zap className={`text-${material.color}-500 mr-2 shrink-0 mt-0.5`} size={18} />
                                  <span className="text-dental-600">{application}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Advantages tab */}
                        {activeTab === 'advantages' && (
                          <div>
                            <h4 className="font-medium text-dental-700 mb-3">
                              {t('materialsShowcase.advantages')}
                            </h4>
                            <ul className="space-y-2 mb-6">
                              {material.advantages.map((advantage, idx) => (
                                <li 
                                  key={idx} 
                                  className="flex items-start"
                                >
                                  <Star className={`text-${material.color}-500 mr-2 shrink-0 mt-0.5`} size={18} />
                                  <span className="text-dental-600">{advantage}</span>
                                </li>
                              ))}
                            </ul>
                            
                            {material.limitations && material.limitations.length > 0 && (
                              <>
                                <h4 className="font-medium text-dental-700 mb-3">
                                  {t('materialsShowcase.limitations')}
                                </h4>
                                <ul className="space-y-2">
                                  {material.limitations.map((limitation, idx) => (
                                    <li 
                                      key={idx} 
                                      className="flex items-start text-dental-500"
                                    >
                                      <Clock className="text-dental-400 mr-2 shrink-0 mt-0.5" size={18} />
                                      <span>{limitation}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      
      <motion.div 
        className="mt-12 text-center"
        variants={itemVariants}
      >
        <a 
          href="#contact" 
          className={cn(
            "inline-flex items-center px-6 py-3 rounded-lg font-medium text-white shadow-lg transition-transform hover:transform hover:scale-105",
            "bg-gradient-to-r from-dental-500 to-dental-600"
          )}
        >
          {t('materialsShowcase.consultButton')}
        </a>
        <p className="mt-4 text-sm text-dental-500">
          {t('materialsShowcase.customOptions')}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default MaterialsShowcase; 