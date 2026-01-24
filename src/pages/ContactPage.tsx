import React from 'react';
import { useTranslation } from 'react-i18next';
import FloatingBackButton from '../components/FloatingBackButton';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SlideNavBarBottom from '../components/slides/SlideNavBar';
import { SEO } from '@/components/SEO';

const ContactPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
      <SEO 
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
      />
      <FloatingBackButton />
      
      <main className="pt-16 pb-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-dental-600 mb-8">
              {t('contact.subtitle')}
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-dental-100 max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-dental-800 mb-2">{t('patientPage.address')}</h3>
                  <p className="text-dental-600">
                    {t('location.address')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-dental-800 mb-2">{t('patientPage.phone')}</h3>
                  <a href="tel:+41442220565" className="text-dental-600 hover:text-dental-800">
                    {t('contact.phoneNumber')}
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-dental-800 mb-2">Email</h3>
                  <a href="mailto:lab@pietrobonandmichel.ch" className="text-dental-600 hover:text-dental-800">
                    {t('contact.emailAddress')}
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-dental-800 mb-2">{t('patientPage.hours')}</h3>
                  <p className="text-dental-600">{t('location.appointmentOnly')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <SlideNavBarBottom />
      <ScrollToTopButton />
    </div>
  );
};

export default ContactPage;
