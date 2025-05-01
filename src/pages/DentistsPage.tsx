import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
const DentistsPage = () => {
  const {
    t
  } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);

    // Add scroll animation observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
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
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className={cn("transition-opacity duration-700 ease-in-out pt-24", isLoaded ? "opacity-100" : "opacity-0")}>
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-8">
            {t('dentistsPage.title')}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-dental-700 mb-8 leading-relaxed">
              {t('dentistsPage.intro')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              {/* Services */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-dental-100 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-100">
                <h2 className="text-3xl font-display font-semibold text-dental-700 mb-6">
                  {t('dentistsPage.services.title')}
                </h2>
                
                <ul className="space-y-4">
                  {Array.from({
                  length: 5
                }).map((_, index) => <li key={index} className="flex items-start">
                      <Check className="text-dental-500 h-5 w-5 mr-3 mt-1 shrink-0" />
                      <span>{t(`dentistsPage.services.items.${index}`)}</span>
                    </li>)}
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-dental-100 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-300">
                <h2 className="text-3xl font-display font-semibold text-dental-700 mb-6">
                  {t('dentistsPage.benefits.title')}
                </h2>
                
                <ul className="space-y-4">
                  {Array.from({
                  length: 5
                }).map((_, index) => <li key={index} className="flex items-start">
                      <Check className="text-dental-500 h-5 w-5 mr-3 mt-1 shrink-0" />
                      <span>{t(`dentistsPage.benefits.items.${index}`)}</span>
                    </li>)}
                </ul>
              </div>
            </div>
            
            <h2 className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16">
              {t('dentistsPage.partnership.title')}
            </h2>
            <p className="mb-6">
              {t('dentistsPage.partnership.content')}
            </p>
            
            <div className="bg-dental-50 p-8 rounded-lg border border-dental-100 my-12">
              <h3 className="text-2xl font-display font-bold text-dental-700 mb-4">
                {t('dentistsPage.referral.title')}
              </h3>
              <p className="mb-6">
                {t('dentistsPage.referral.content')}
              </p>
              <a href="#contact" onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="inline-block bg-dental-600 hover:bg-dental-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                {t('dentistsPage.referral.cta')}
              </a>
            </div>
          </div>
          
          
        </div>
      </main>
      
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </div>;
};
export default DentistsPage;