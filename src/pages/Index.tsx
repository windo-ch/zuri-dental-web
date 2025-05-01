
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Location from '../components/Location';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import ScrollToTopButton from '../components/ScrollToTopButton';
import CookieConsent from '../components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Location />
        <ContactForm />
        <Testimonials />
        <Partners />
      </main>

      <ScrollToTopButton />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
