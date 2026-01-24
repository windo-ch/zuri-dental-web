import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Check, Send } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { ref, inView } = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.errors.name_required', 'Name is required');
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.email_required', 'Email is required');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.errors.email_invalid', 'Please enter a valid email');
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.message_required', 'Message is required');
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.success', 'Message sent successfully'),
        description: `${t('contact.name', 'Name')}: ${formData.name}`
      });
      
      setIsSuccess(true);
      setIsSubmitting(false);

      // Reset form after showing success state for a moment
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" ref={ref} className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-gray-600">{t('contact.subtitle')}</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-medium text-gray-700">
                  {t('contact.formName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.formNamePlaceholder', 'Enter your full name')}
                  className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-medium text-gray-700">
                  {t('contact.formEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.formEmailPlaceholder', 'Enter your email address')}
                  className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="mb-2 font-medium text-gray-700">
                {t('contact.formPhone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.formPhonePlaceholder', 'Enter your phone number')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="mb-2 font-medium text-gray-700">
                {t('contact.formMessage')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.formMessagePlaceholder', 'Enter your message')}
                rows={5}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full flex items-center justify-center gap-2 bg-dental-500 hover:bg-dental-600 transition-colors py-3 rounded-md text-white font-medium"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('contact.formSubmitting', 'Sending...')}
                </>
              ) : isSuccess ? (
                <>
                  <Check className="h-5 w-5" />
                  {t('contact.formSuccess', 'Message Sent!')}
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  {t('contact.formSubmit', 'Send Message')}
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;