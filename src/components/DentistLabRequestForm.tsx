import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { 
  Activity, 
  Calendar, 
  User, 
  FileText, 
  Phone,
  Mail,
  CheckCircle2,
  Clock,
  ArrowRight,
  Upload,
  AlertCircle
} from 'lucide-react';

// Form field type
interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date' | 'file';
  placeholder?: string;
  required?: boolean;
  options?: Array<{
    value: string;
    label: string;
  }>;
  section: 'dentist' | 'patient' | 'work' | 'materials' | 'timeline';
}

// Form sections type
interface FormSection {
  id: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
}

const DentistLabRequestForm = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  // Define form sections
  const sections: FormSection[] = [
    {
      id: 'dentist',
      title: t('labRequestForm.dentistSection'),
      description: t('labRequestForm.dentistDescription'),
      icon: <User className="text-dental-500" />
    },
    {
      id: 'patient',
      title: t('labRequestForm.patientSection'),
      description: t('labRequestForm.patientDescription'),
      icon: <User className="text-dental-500" />
    },
    {
      id: 'work',
      title: t('labRequestForm.workSection'),
      description: t('labRequestForm.workDescription'),
      icon: <Activity className="text-dental-500" />
    },
    {
      id: 'materials',
      title: t('labRequestForm.materialsSection'),
      description: t('labRequestForm.materialsDescription'),
      icon: <FileText className="text-dental-500" />
    },
    {
      id: 'timeline',
      title: t('labRequestForm.timelineSection'),
      description: t('labRequestForm.timelineDescription'),
      icon: <Calendar className="text-dental-500" />
    }
  ];
  
  // Define form fields
  const fields: FormField[] = [
    // Dentist information
    {
      id: 'dentistName',
      label: t('labRequestForm.dentistName'),
      type: 'text',
      placeholder: t('labRequestForm.dentistNamePlaceholder'),
      required: true,
      section: 'dentist'
    },
    {
      id: 'practiceName',
      label: t('labRequestForm.practiceName'),
      type: 'text',
      placeholder: t('labRequestForm.practiceNamePlaceholder'),
      required: true,
      section: 'dentist'
    },
    {
      id: 'email',
      label: t('labRequestForm.email'),
      type: 'email',
      placeholder: t('labRequestForm.emailPlaceholder'),
      required: true,
      section: 'dentist'
    },
    {
      id: 'phone',
      label: t('labRequestForm.phone'),
      type: 'tel',
      placeholder: t('labRequestForm.phonePlaceholder'),
      required: true,
      section: 'dentist'
    },
    
    // Patient information
    {
      id: 'patientId',
      label: t('labRequestForm.patientId'),
      type: 'text',
      placeholder: t('labRequestForm.patientIdPlaceholder'),
      required: true,
      section: 'patient'
    },
    {
      id: 'patientAge',
      label: t('labRequestForm.patientAge'),
      type: 'text',
      placeholder: t('labRequestForm.patientAgePlaceholder'),
      required: false,
      section: 'patient'
    },
    {
      id: 'patientGender',
      label: t('labRequestForm.patientGender'),
      type: 'select',
      required: false,
      options: [
        { value: 'male', label: t('labRequestForm.male') },
        { value: 'female', label: t('labRequestForm.female') },
        { value: 'other', label: t('labRequestForm.other') }
      ],
      section: 'patient'
    },
    
    // Work details
    {
      id: 'workType',
      label: t('labRequestForm.workType'),
      type: 'select',
      required: true,
      options: [
        { value: 'crown', label: t('labRequestForm.crown') },
        { value: 'bridge', label: t('labRequestForm.bridge') },
        { value: 'veneer', label: t('labRequestForm.veneer') },
        { value: 'implant', label: t('labRequestForm.implant') },
        { value: 'denture', label: t('labRequestForm.denture') },
        { value: 'other', label: t('labRequestForm.otherWork') }
      ],
      section: 'work'
    },
    {
      id: 'toothNumbers',
      label: t('labRequestForm.toothNumbers'),
      type: 'text',
      placeholder: t('labRequestForm.toothNumbersPlaceholder'),
      required: true,
      section: 'work'
    },
    {
      id: 'shadeInformation',
      label: t('labRequestForm.shadeInformation'),
      type: 'text',
      placeholder: t('labRequestForm.shadeInformationPlaceholder'),
      required: false,
      section: 'work'
    },
    {
      id: 'specificInstructions',
      label: t('labRequestForm.specificInstructions'),
      type: 'textarea',
      placeholder: t('labRequestForm.specificInstructionsPlaceholder'),
      required: false,
      section: 'work'
    },
    {
      id: 'attachments',
      label: t('labRequestForm.attachments'),
      type: 'file',
      placeholder: t('labRequestForm.attachmentsPlaceholder'),
      required: false,
      section: 'work'
    },
    
    // Materials
    {
      id: 'material',
      label: t('labRequestForm.material'),
      type: 'select',
      required: true,
      options: [
        { value: 'zirconia', label: t('labRequestForm.zirconia') },
        { value: 'emax', label: t('labRequestForm.emax') },
        { value: 'pfm', label: t('labRequestForm.pfm') },
        { value: 'composite', label: t('labRequestForm.composite') },
        { value: 'pmma', label: t('labRequestForm.pmma') },
        { value: 'other', label: t('labRequestForm.otherMaterial') }
      ],
      section: 'materials'
    },
    {
      id: 'materialColor',
      label: t('labRequestForm.materialColor'),
      type: 'select',
      required: false,
      options: [
        { value: 'a1', label: 'A1' },
        { value: 'a2', label: 'A2' },
        { value: 'a3', label: 'A3' },
        { value: 'a3.5', label: 'A3.5' },
        { value: 'a4', label: 'A4' },
        { value: 'b1', label: 'B1' },
        { value: 'b2', label: 'B2' },
        { value: 'b3', label: 'B3' },
        { value: 'b4', label: 'B4' },
        { value: 'c1', label: 'C1' },
        { value: 'c2', label: 'C2' },
        { value: 'c3', label: 'C3' },
        { value: 'c4', label: 'C4' },
        { value: 'd2', label: 'D2' },
        { value: 'd3', label: 'D3' },
        { value: 'd4', label: 'D4' }
      ],
      section: 'materials'
    },
    {
      id: 'materialSpecifications',
      label: t('labRequestForm.materialSpecifications'),
      type: 'textarea',
      placeholder: t('labRequestForm.materialSpecificationsPlaceholder'),
      required: false,
      section: 'materials'
    },
    
    // Timeline
    {
      id: 'deadline',
      label: t('labRequestForm.deadline'),
      type: 'date',
      required: true,
      section: 'timeline'
    },
    {
      id: 'priority',
      label: t('labRequestForm.priority'),
      type: 'select',
      required: true,
      options: [
        { value: 'standard', label: t('labRequestForm.standard') },
        { value: 'rush', label: t('labRequestForm.rush') },
        { value: 'urgent', label: t('labRequestForm.urgent') }
      ],
      section: 'timeline'
    },
    {
      id: 'deliveryMethod',
      label: t('labRequestForm.deliveryMethod'),
      type: 'select',
      required: true,
      options: [
        { value: 'pickup', label: t('labRequestForm.pickup') },
        { value: 'delivery', label: t('labRequestForm.delivery') }
      ],
      section: 'timeline'
    }
  ];
  
  // Get fields for current section
  const getCurrentSectionFields = () => {
    const currentSection = sections[currentStep];
    return fields.filter(field => field.section === currentSection.id);
  };
  
  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    // Clear error when field is modified
    if (formErrors[id]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
    
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  // Handle file uploads
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, files } = e.target;
    
    if (files && files.length > 0) {
      setFormData(prev => ({
        ...prev,
        [id]: files
      }));
    }
  };
  
  // Validate current section
  const validateSection = () => {
    const currentFields = getCurrentSectionFields();
    const newErrors: Record<string, string> = {};
    
    currentFields.forEach(field => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = t('labRequestForm.requiredField');
      }
      
      // Email validation
      if (field.id === 'email' && formData[field.id] && !/\S+@\S+\.\S+/.test(formData[field.id])) {
        newErrors[field.id] = t('labRequestForm.invalidEmail');
      }
      
      // Phone validation
      if (field.id === 'phone' && formData[field.id] && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData[field.id])) {
        newErrors[field.id] = t('labRequestForm.invalidPhone');
      }
    });
    
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Move to next section
  const handleNext = () => {
    if (validateSection()) {
      setCurrentStep(prev => Math.min(prev + 1, sections.length - 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Move to previous section
  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Submit the form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateSection()) {
      setIsSubmitting(true);
      
      try {
        // This would be replaced with your actual API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Successful submission
        setIsSubmitted(true);
        setIsSubmitting(false);
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitting(false);
        // Here you would handle the error state
      }
    }
  };
  
  // Render a form field based on its type
  const renderField = (field: FormField) => {
    const { id, label, type, placeholder, required, options } = field;
    const error = formErrors[id];
    
    const labelElement = (
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-dental-700 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    );
    
    const errorMessage = error && (
      <p className="mt-1 text-red-500 text-xs flex items-center">
        <AlertCircle size={12} className="mr-1" />
        {error}
      </p>
    );
    
    switch (type) {
      case 'text':
      case 'email':
      case 'tel':
      case 'date':
        return (
          <div className="mb-4">
            {labelElement}
            <input
              id={id}
              type={type}
              value={formData[id] || ''}
              onChange={handleChange}
              placeholder={placeholder}
              className={cn(
                "w-full px-3 py-2 border rounded-md text-dental-800 placeholder-gray-400",
                error ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-dental-500 focus:border-dental-500"
              )}
            />
            {errorMessage}
          </div>
        );
        
      case 'textarea':
        return (
          <div className="mb-4">
            {labelElement}
            <textarea
              id={id}
              value={formData[id] || ''}
              onChange={handleChange}
              placeholder={placeholder}
              rows={4}
              className={cn(
                "w-full px-3 py-2 border rounded-md text-dental-800 placeholder-gray-400",
                error ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-dental-500 focus:border-dental-500"
              )}
            />
            {errorMessage}
          </div>
        );
        
      case 'select':
        return (
          <div className="mb-4">
            {labelElement}
            <select
              id={id}
              value={formData[id] || ''}
              onChange={handleChange}
              className={cn(
                "w-full px-3 py-2 border rounded-md text-dental-800",
                error ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-dental-500 focus:border-dental-500"
              )}
            >
              <option value="">{t('labRequestForm.selectOption')}</option>
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errorMessage}
          </div>
        );
        
      case 'file':
        return (
          <div className="mb-4">
            {labelElement}
            <div className={cn(
              "w-full px-3 py-2 border rounded-md flex items-center justify-center bg-gray-50 cursor-pointer",
              error ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-dental-500 focus:border-dental-500",
              "hover:bg-gray-100 transition-colors"
            )}>
              <input
                id={id}
                type="file"
                onChange={handleFileChange}
                multiple
                className="hidden"
              />
              <label htmlFor={id} className="cursor-pointer flex items-center">
                <Upload size={18} className="mr-2 text-dental-500" />
                <span className="text-gray-500">
                  {formData[id] && formData[id].length > 0 
                    ? `${formData[id].length} ${t('labRequestForm.filesSelected')}`
                    : placeholder || t('labRequestForm.chooseFiles')}
                </span>
              </label>
            </div>
            {errorMessage}
          </div>
        );
        
      default:
        return null;
    }
  };
  
  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };
  
  // Show success message after submission
  if (isSubmitted) {
    return (
      <motion.div 
        className="max-w-2xl mx-auto py-12 px-4 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-green-500" size={40} />
        </div>
        <h2 className="text-2xl font-display font-bold text-dental-800 mb-4">
          {t('labRequestForm.requestReceived')}
        </h2>
        <p className="text-dental-600 mb-8">
          {t('labRequestForm.requestReceivedMessage')}
        </p>
        <div className="p-6 bg-dental-50 rounded-lg mb-8">
          <h3 className="font-medium text-dental-700 mb-2">
            {t('labRequestForm.referenceNumber')}
          </h3>
          <p className="text-xl font-semibold text-dental-800">
            {/* Generate a random reference number */}
            {`LAB-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/dashboard"
            className="px-6 py-3 bg-dental-600 text-white rounded-lg font-medium hover:bg-dental-700 transition-colors shadow-md flex items-center justify-center"
          >
            {t('labRequestForm.goToDashboard')}
          </a>
          <a
            href="/"
            className="px-6 py-3 bg-white text-dental-600 rounded-lg font-medium hover:bg-dental-50 transition-colors border border-dental-200 shadow-sm flex items-center justify-center"
          >
            {t('labRequestForm.backToHome')}
          </a>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div 
      ref={ref}
      className="my-12 max-w-4xl mx-auto"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            duration: 0.6,
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.h2 
        className="text-3xl font-display font-bold text-dental-800 mb-6 text-center"
        variants={formVariants}
      >
        {t('labRequestForm.title')}
      </motion.h2>
      
      <motion.p 
        className="text-lg text-dental-600 max-w-3xl mx-auto mb-10 text-center"
        variants={formVariants}
      >
        {t('labRequestForm.subtitle')}
      </motion.p>
      
      {/* Progress indicator */}
      <motion.div 
        className="mb-8 px-4"
        variants={formVariants}
      >
        <div className="flex items-center justify-between">
          {sections.map((section, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            
            return (
              <div 
                key={section.id} 
                className="flex flex-col items-center space-y-2 relative"
              >
                {/* Connector line */}
                {index < sections.length - 1 && (
                  <div 
                    className={cn(
                      "absolute top-4 h-0.5 left-10 w-full -translate-y-1/2 transition-colors duration-300 md:left-12",
                      isCompleted ? "bg-dental-500" : "bg-gray-200"
                    )}
                  />
                )}
                
                {/* Circle indicator */}
                <div 
                  className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center text-white relative z-10 transition-all duration-300 md:h-10 md:w-10",
                    isActive ? "bg-dental-600 ring-4 ring-dental-100" : 
                    isCompleted ? "bg-dental-500" : "bg-gray-300"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>
                
                {/* Step label */}
                <span 
                  className={cn(
                    "text-xs font-medium hidden md:block",
                    isActive || isCompleted ? "text-dental-800" : "text-gray-500"
                  )}
                >
                  {section.title}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
      
      {/* Current section content */}
      <motion.div 
        key={currentStep}
        className="bg-white rounded-xl shadow-md overflow-hidden"
        variants={formVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Section header */}
        <div className="bg-dental-50 p-6 border-b border-dental-100">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-dental-100 flex items-center justify-center mr-4">
              {sections[currentStep].icon}
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-dental-800">
                {sections[currentStep].title}
              </h3>
              {sections[currentStep].description && (
                <p className="text-dental-600 text-sm">
                  {sections[currentStep].description}
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* Section form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid sm:grid-cols-2 gap-x-6">
            {getCurrentSectionFields().map(field => (
              <div key={field.id} className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
                {renderField(field)}
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-6 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={handlePrevious}
              className={cn(
                "px-5 py-2.5 rounded-md text-dental-700 border border-dental-200 transition-colors hover:bg-dental-50",
                currentStep === 0 ? "opacity-0 cursor-default" : ""
              )}
              disabled={currentStep === 0}
            >
              {t('labRequestForm.previous')}
            </button>
            
            {currentStep < sections.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 bg-dental-600 text-white rounded-md transition-colors hover:bg-dental-700 flex items-center"
              >
                {t('labRequestForm.next')}
                <ArrowRight size={16} className="ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                className="px-5 py-2.5 bg-dental-600 text-white rounded-md transition-colors hover:bg-dental-700 flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    {t('labRequestForm.submitting')}
                  </>
                ) : (
                  t('labRequestForm.submit')
                )}
              </button>
            )}
          </div>
        </form>
      </motion.div>
      
      {/* Additional information */}
      <motion.div 
        className="mt-8 bg-dental-50 p-6 rounded-lg text-center"
        variants={formVariants}
      >
        <div className="flex items-center justify-center space-x-2 mb-2 text-dental-600">
          <Clock size={18} />
          <span className="text-sm font-medium">{t('labRequestForm.timeToComplete')}</span>
        </div>
        <p className="text-sm text-dental-500">
          {t('labRequestForm.formCompletionTime')}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DentistLabRequestForm; 