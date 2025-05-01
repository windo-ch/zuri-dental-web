
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import About from '@/components/About';

const AboutPage = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation effect
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-8">
            {t('companyPage.title')}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-dental-700 mb-8 leading-relaxed">
              {t('companyPage.intro')}
            </p>

            <div className="my-12">
              <About />
            </div>

            <h2 className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16">
              {t('companyPage.history.title')}
            </h2>
            <p className="mb-6">
              {t('companyPage.history.content')}
            </p>

            <h2 className="text-3xl font-display font-semibold text-dental-700 mb-6 mt-16">
              {t('companyPage.mission.title')}
            </h2>
            <p className="mb-6">
              {t('companyPage.mission.content')}
            </p>

            <div className="bg-dental-50 p-8 rounded-lg border border-dental-100 my-12">
              <blockquote className="italic text-xl text-dental-800 relative">
                <span className="text-5xl text-dental-300 absolute -top-6 -left-2">"</span>
                {t('companyPage.quote')}
                <span className="text-5xl text-dental-300 absolute -bottom-10 right-0">"</span>
              </blockquote>
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

export default AboutPage;
