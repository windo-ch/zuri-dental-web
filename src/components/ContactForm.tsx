
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
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
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
        description: `${t('contact.name')}: ${formData.name}`
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
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-dental-500 mx-auto mb-6"></div>
          <p className="text-lg text-dental-600 max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md animate-on-scroll">
            <h3 className="font-display text-2xl text-dental-800 mb-6">
              {t('contact.getInTouch')}
            </h3>
            
            <div className="flex items-center mb-6">
              <Phone className="text-dental-500 mr-4" size={20} />
              <div>
                <p className="text-dental-700 font-medium">
                  {t('contact.phone')}
                </p>
                <a 
                  href="tel:+41442220565" 
                  className="text-dental-500 hover:text-dental-600 transition-colors"
                >
                  +41 44 222 05 65
                </a>
              </div>
            </div>
            
            <p className="text-dental-600 mb-8">
              {t('contact.preferredMethod')}
            </p>
            
            <div className="bg-dental-50 p-4 rounded-lg">
              <p className="text-dental-700">
                {t('contact.officeHours')}
              </p>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-dental-700 font-medium mb-2">
                  {t('contact.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-dental-500`}
                  placeholder={t('contact.namePlaceholder') || "Your name"}
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-dental-700 font-medium mb-2">
                  {t('contact.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-dental-500`}
                  placeholder={t('contact.emailPlaceholder') || "Your email"}
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-dental-700 font-medium mb-2">
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dental-500"
                  placeholder={t('contact.phonePlaceholder') || "Your phone number"}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-dental-700 font-medium mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-dental-500`}
                  placeholder={t('contact.messagePlaceholder') || "Your message"}
                ></textarea>
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors ${
                  isSuccess 
                    ? 'bg-green-500 text-white' 
                    : 'bg-dental-500 hover:bg-dental-600 text-white'
                }`}
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : isSuccess ? (
                  <Check className="mr-2" size={20} />
                ) : (
                  <ArrowRight className="mr-2" size={20} />
                )}
                {isSuccess ? t('contact.sent') : t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
