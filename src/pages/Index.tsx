
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Location from '../components/Location';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Location />
      <ContactForm />
      <Testimonials />
      <Partners />
    </Layout>
  );
};

export default Index;
