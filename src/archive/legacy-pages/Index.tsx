import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <Layout
      title={t('seo.home.title', 'Pietrobon & Michel | Excellence in Dental Technology')}
      description={t('seo.home.description', 'Pietrobon & Michel is a leading dental technology laboratory in Zurich, providing high-quality dental restorations and innovative solutions since 1995.')}
    >
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Partners />
    </Layout>
  );
};

export default Index;
