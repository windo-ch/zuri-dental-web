
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Location from '@/components/Location';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  useEffect(() => {
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
      <Hero />
      <About />
      <Location />
      <ContactForm />
      <Testimonials />
      <Partners />
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
