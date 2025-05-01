
import { useState, useEffect, FormEvent } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Check, Phone } from 'lucide-react';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
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
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
        title: t('contact.success'),
        description: `${t('contact.name')}: ${formData.name}`,
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
    <section id="contact" className="section-container">
      <h2 className="section-title animate-on-scroll">
        {t('contact.title')}
      </h2>
      <p className="section-subtitle animate-on-scroll">
        {t('contact.subtitle')}
      </p>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-3 animate-on-scroll">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.name')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all
                    ${errors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-dental-500 focus:border-transparent'}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all
                    ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-dental-500 focus:border-transparent'}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                {t('contact.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t('contact.message')} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all resize-none
                  ${errors.message ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-dental-500 focus:border-transparent'}`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`group relative flex items-center justify-center w-full py-3 px-6 
                ${isSuccess ? 'bg-green-500 hover:bg-green-600' : 'bg-dental-600 hover:bg-dental-700'} 
                text-white font-medium rounded-md transition-all disabled:opacity-70`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : isSuccess ? (
                <span className="flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Sent Successfully!
                </span>
              ) : (
                <>
                  {t('contact.submit')}
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
        
        <div className="md:col-span-2 animate-on-scroll">
          <div className="bg-dental-50 p-8 rounded-lg shadow-lg h-full">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-dental-100 rounded-full mb-4 shadow-md">
                <Phone className="h-8 w-8 text-dental-600" />
              </div>
              
              <h3 className="text-xl font-medium mb-2">{t('contact.callUs')}</h3>
              
              <a 
                href="tel:+41442220565"
                className="text-xl font-display text-dental-600 hover:text-dental-800 transition-colors hover:underline"
              >
                {t('contact.phoneNumber')}
              </a>
              
              <p className="mt-6 mb-8 text-muted-foreground">
                Monday - Friday: 8:00 - 18:00<br />
                Saturday: By appointment only<br />
                Sunday: Closed
              </p>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-dental-200 to-transparent my-6"></div>
              
              <div className="flex flex-col items-center">
                <p className="text-dental-700 font-medium mb-2">Follow Us</p>
                <div className="flex space-x-4">
                  {/* Social media placeholders */}
                  {['#', '#', '#'].map((_, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-dental-100 hover:bg-dental-200 transition-colors"
                      aria-label={`Social media link ${index + 1}`}
                    >
                      <svg className="w-5 h-5 text-dental-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
