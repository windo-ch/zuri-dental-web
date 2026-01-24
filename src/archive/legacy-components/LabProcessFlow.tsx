import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { 
  Clipboard, 
  Microscope, 
  Printer, 
  FileCheck, 
  Truck,
  CheckCircle,
  Clock,
  CalendarDays,
  ArrowRight
} from 'lucide-react';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof processIcons;
  duration: string;
  responsibilities: Array<{
    party: 'dentist' | 'laboratory';
    task: string;
  }>;
  checkpoints: string[];
  image?: string;
}

// Icons for different process steps
const processIcons = {
  order: Clipboard,
  analysis: Microscope,
  production: Printer,
  quality: FileCheck,
  delivery: Truck,
  complete: CheckCircle,
};

interface LabProcessFlowProps {
  steps: ProcessStep[];
  className?: string;
}

const LabProcessFlow = ({ steps, className }: LabProcessFlowProps) => {
  const { t } = useTranslation();
  const [activeStepId, setActiveStepId] = useState<string | null>(null);
  
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
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };
  
  const toggleStep = (id: string) => {
    setActiveStepId(activeStepId === id ? null : id);
  };
  
  if (!steps || steps.length === 0) {
    return (
      <div className="text-center py-10">
        <p>{t('labProcess.noSteps')}</p>
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
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative">
          {/* Connect line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-dental-100 transform -translate-x-1/2 hidden md:block" />
          
          {/* Process steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const isActive = activeStepId === step.id;
              const isEven = index % 2 === 0;
              const IconComponent = processIcons[step.icon] || Clipboard;
              
              return (
                <motion.div 
                  key={step.id}
                  className="relative"
                  variants={itemVariants}
                  custom={index + 2}
                >
                  {/* Step circle with number on timeline (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-dental-500 flex items-center justify-center text-dental-800 font-semibold shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content layout - alternating left and right for desktop */}
                  <div className={cn(
                    "md:grid md:grid-cols-2 gap-8 items-center",
                    isEven ? "md:grid-flow-row" : "md:grid-flow-row-dense"
                  )}>
                    {/* Content */}
                    <div className={cn(
                      "bg-white p-6 rounded-xl shadow-md relative z-10",
                      isEven ? "md:col-start-1" : "md:col-start-2"
                    )}>
                      {/* Mobile step number */}
                      <div className="flex items-center mb-4 md:hidden">
                        <div className="w-8 h-8 rounded-full bg-dental-500 flex items-center justify-center text-white font-semibold shadow-sm mr-3">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-display font-semibold text-dental-800">
                          {step.title}
                        </h3>
                      </div>
                      
                      {/* Desktop heading */}
                      <h3 className="text-xl font-display font-semibold text-dental-800 mb-2 hidden md:block">
                        {step.title}
                      </h3>
                      
                      <p className="text-dental-600 mb-4">
                        {step.description}
                      </p>
                      
                      <div className="flex items-center text-sm text-dental-500 mb-4">
                        <Clock size={16} className="mr-1.5" />
                        <span>{t('labProcess.duration')}: {step.duration}</span>
                      </div>
                      
                      <button
                        onClick={() => toggleStep(step.id)}
                        className="flex items-center text-dental-500 hover:text-dental-700 transition-colors text-sm font-medium"
                      >
                        {isActive ? t('labProcess.hideDetails') : t('labProcess.viewDetails')}
                        <span className={cn(
                          "inline-block ml-1 transition-transform duration-300",
                          isActive ? "rotate-90" : ""
                        )}>
                          ›
                        </span>
                      </button>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-dental-100">
                              {/* Responsibilities */}
                              <h4 className="font-medium text-dental-700 mb-3">
                                {t('labProcess.responsibilities')}
                              </h4>
                              
                              <div className="space-y-3 mb-6">
                                {step.responsibilities.map((resp, idx) => (
                                  <div 
                                    key={idx} 
                                    className={cn(
                                      "p-3 rounded-lg flex items-start",
                                      resp.party === 'dentist' ? "bg-blue-50" : "bg-dental-50"
                                    )}
                                  >
                                    <div className={cn(
                                      "h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5",
                                      resp.party === 'dentist' ? "bg-blue-100 text-blue-600" : "bg-dental-100 text-dental-600"
                                    )}>
                                      <span className="text-xs font-semibold">
                                        {resp.party === 'dentist' ? 'D' : 'L'}
                                      </span>
                                    </div>
                                    <div>
                                      <p className={cn(
                                        "text-sm font-medium mb-0.5",
                                        resp.party === 'dentist' ? "text-blue-700" : "text-dental-700"
                                      )}>
                                        {resp.party === 'dentist' ? t('labProcess.dentist') : t('labProcess.laboratory')}
                                      </p>
                                      <p className="text-sm text-dental-600">
                                        {resp.task}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Checkpoints */}
                              <h4 className="font-medium text-dental-700 mb-3">
                                {t('labProcess.checkpoints')}
                              </h4>
                              
                              <ul className="space-y-2 mb-4">
                                {step.checkpoints.map((checkpoint, idx) => (
                                  <li 
                                    key={idx} 
                                    className="flex items-start"
                                  >
                                    <CheckCircle className="h-5 w-5 text-dental-500 mr-2 shrink-0 mt-0.5" />
                                    <span className="text-sm text-dental-600">{checkpoint}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    {/* Image */}
                    <div className={cn(
                      "rounded-xl overflow-hidden shadow-md mt-4 md:mt-0 aspect-video relative",
                      isEven ? "md:col-start-2" : "md:col-start-1"
                    )}>
                      <div className="absolute inset-0 bg-dental-100 flex items-center justify-center">
                        <IconComponent className="text-dental-500" size={48} />
                      </div>
                      {step.image && (
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Arrow to next step (except for last) */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-6">
                      <motion.div 
                        className="text-dental-400"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1.5, 
                          ease: "easeInOut" 
                        }}
                      >
                        <ArrowRight size={24} className="transform rotate-90" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <motion.div 
        className="mt-16 text-center bg-dental-50 p-8 rounded-xl max-w-3xl mx-auto"
        variants={itemVariants}
        custom={steps.length + 2}
      >
        <h3 className="text-2xl font-display font-semibold text-dental-800 mb-3">
          {t('labProcess.wantToCollaborate', 'Want to collaborate with us?')}
        </h3>
        <p className="text-dental-600 mb-6 max-w-xl mx-auto">
          {t('labProcess.collaborateDescription', 'We work closely with dentists to deliver exceptional restorations that meet your patients\' needs. Contact us to learn more about our process and how we can support your practice.')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact" 
            className="px-6 py-3 bg-dental-600 text-white rounded-lg font-medium hover:bg-dental-700 transition-colors shadow-md"
          >
            {t('labProcess.contactUs', 'Contact Us')}
          </a>
          <a 
            href="/for-dentists" 
            className="px-6 py-3 bg-white text-dental-600 rounded-lg font-medium hover:bg-dental-50 transition-colors border border-dental-200 shadow-sm"
          >
            {t('labProcess.learnMore', 'Learn More')}
          </a>
        </div>
        
        <div className="flex items-center justify-center mt-6">
          <CalendarDays className="text-dental-500 mr-2" size={18} />
          <p className="text-sm text-dental-500">
            {t('labProcess.schedulingNote', 'Schedule a consultation at your convenience')}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LabProcessFlow;