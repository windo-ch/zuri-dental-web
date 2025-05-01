
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { MapPin, Mail, Phone } from 'lucide-react';

const NicolaPage = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add scroll animation observer
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
        rootMargin: '0px 0px -10% 0px'
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className={cn(
        "transition-opacity duration-700 ease-in-out pt-24",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-dental-50 p-6 rounded-lg border border-dental-100 mb-8">
                  <img 
                    src="/nicola-profile.jpg" 
                    alt="Nicola Pietrobon"
                    className="w-full h-auto rounded-lg shadow-md mb-6"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x500?text=Nicola+Pietrobon';
                    }}
                  />
                  <h2 className="text-2xl font-display font-bold text-dental-800 mb-2">Nicola Pietrobon</h2>
                  <p className="text-dental-600 mb-4">{t('nicolaPage.position')}</p>
                  
                  <div className="flex flex-col space-y-3 mt-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-dental-500 h-5 w-5" />
                      <a href="tel:+41442220565" className="hover:text-dental-500 transition-colors">
                        {t('contact.phoneNumber')}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-dental-500 h-5 w-5" />
                      <a href="mailto:info@pietrobonundmichel.ch" className="hover:text-dental-500 transition-colors">
                        info@pietrobonundmichel.ch
                      </a>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-dental-500 h-5 w-5 mt-1" />
                      <div>
                        <p>{t('location.address')}</p>
                        <p className="text-sm text-dental-500 mt-1">{t('location.appointmentOnly')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 prose prose-lg max-w-none animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-300">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-8">
                {t('nicolaPage.title')}
              </h1>
              
              <p className="text-xl text-dental-700 mb-8 leading-relaxed">
                {t('about.nicolaBio')}
              </p>
              
              <h2 className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16">
                {t('nicolaPage.expertise.title')}
              </h2>
              <ul className="space-y-4">
                <li>{t('nicolaPage.expertise.item1')}</li>
                <li>{t('nicolaPage.expertise.item2')}</li>
                <li>{t('nicolaPage.expertise.item3')}</li>
                <li>{t('nicolaPage.expertise.item4')}</li>
              </ul>
              
              <h2 className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16">
                {t('nicolaPage.education.title')}
              </h2>
              <ul className="space-y-4">
                <li>{t('nicolaPage.education.item1')}</li>
                <li>{t('nicolaPage.education.item2')}</li>
                <li>{t('nicolaPage.education.item3')}</li>
              </ul>
              
              <h2 className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16">
                {t('nicolaPage.philosophy.title')}
              </h2>
              <p>
                {t('nicolaPage.philosophy.content')}
              </p>
              
              <div className="bg-dental-50 p-8 rounded-lg border border-dental-100 my-12">
                <blockquote className="italic text-xl text-dental-800 relative">
                  <span className="text-5xl text-dental-300 absolute -top-6 -left-2">"</span>
                  {t('nicolaPage.quote')}
                  <span className="text-5xl text-dental-300 absolute -bottom-10 right-0">"</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </div>
  );
};

export default NicolaPage;
