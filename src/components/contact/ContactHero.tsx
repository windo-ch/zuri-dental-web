
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const ContactHero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-dental-50 py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-dental-800 mb-6">
          {t('contact.title')}
        </h1>
        <p className="text-xl md:text-2xl text-dental-600 max-w-3xl mx-auto mb-10">
          {t('contact.subtitle')}
        </p>
        
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-2xl mx-auto transform md:-translate-y-4">
          <div className="text-center">
            <h2 className="font-display text-2xl md:text-3xl text-dental-700 mb-4">
              {t('contactPage.callUsTitle')}
            </h2>
            <a 
              href="tel:+41442220565"
              className="font-display text-3xl md:text-4xl text-dental-500 hover:text-dental-600 transition-colors block mb-4"
            >
              +41 44 222 05 65
            </a>
            <p className="text-dental-600 font-medium text-lg">
              {t('location.appointmentOnly')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
