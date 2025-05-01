
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import LocationMap from '../components/contact/LocationMap';

const ContactPage = () => {
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        <ContactHero />
        <ContactInfo />
        <LocationMap />
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default ContactPage;
