import { useState, FormEvent } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Check } from 'lucide-react';
import { useAnimationObserver } from '../hooks/useAnimationObserver';
import { Button } from './ui/button';
const ContactForm = () => {
  const {
    t
  } = useLanguage();
  const {
    toast
  } = useToast();
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
  return;
};
export default ContactForm;