
import { useState, FormEvent } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Check } from 'lucide-react';
import { useAnimationObserver } from '../hooks/useAnimationObserver';
import { Button } from './ui/button';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  useAnimationObserver();

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
    const {
      name,
      value
    } = e.target;
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
      newErrors.name = t('contact.errors.name_required');
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.email_required');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.errors.email_invalid');
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.message_required');
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
    <section id="contact" className="section-container">
      <h2 className="section-title animate-on-scroll">{t('contact.title')}</h2>
      <p className="section-subtitle animate-on-scroll">{t('contact.subtitle')}</p>

      <div className="max-w-2xl mx-auto mt-8 animate-on-scroll">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.name')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t('contact.name_placeholder')}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t('contact.email_placeholder')}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Phone Field (optional) */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              {t('contact.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder={t('contact.phone_placeholder')}
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {t('contact.message')} *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t('contact.message_placeholder')}
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full md:w-auto flex items-center justify-center gap-2 relative"
          >
            <span className={`transition-opacity ${isSuccess ? 'opacity-0' : 'opacity-100'}`}>
              {isSubmitting ? t('contact.sending') : t('contact.submit')}
            </span>
            <span className={`absolute inset-0 flex items-center justify-center transition-opacity ${
              isSuccess ? 'opacity-100' : 'opacity-0'
            }`}>
              <Check className="mr-2" /> {t('contact.sent')}
            </span>
            {!isSuccess && <ArrowRight className={isSubmitting ? 'opacity-0' : 'opacity-100'} />}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
