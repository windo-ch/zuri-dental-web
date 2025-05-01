
import { useState, useEffect, FormEvent } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useToast } from '@/hooks/use-toast';
import { Phone } from 'lucide-react';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.success'),
        description: `${t('contact.name')}: ${formData.name}`,
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setIsSubmitting(false);
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500 focus:border-transparent transition-all"
                />
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
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500 focus:border-transparent transition-all"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-dental-600 hover:bg-dental-700 text-white font-medium rounded-md transition-colors disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : t('contact.submit')}
            </button>
          </form>
        </div>
        
        <div className="md:col-span-2 animate-on-scroll">
          <div className="bg-dental-50 p-8 rounded-lg">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-dental-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-dental-600" />
              </div>
              
              <h3 className="text-xl font-medium mb-2">{t('contact.callUs')}</h3>
              
              <a 
                href="tel:+41442220565"
                className="text-xl font-display text-dental-600 hover:text-dental-800 transition-colors"
              >
                {t('contact.phoneNumber')}
              </a>
              
              <p className="mt-4 text-muted-foreground">
                Monday - Friday: 8:00 - 18:00<br />
                Saturday: By appointment only<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
