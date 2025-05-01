
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
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
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Visit Us */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-dental-100 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-dental-500" size={28} />
                </div>
                <h3 className="font-display text-xl text-dental-800 mb-3">
                  {t('contactPage.visitUs')}
                </h3>
                <p className="text-dental-600 mb-4">
                  {t('location.address')}
                </p>
                <a 
                  href="https://goo.gl/maps/R52xzNPHbZ9sJJzx9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-dental-500 hover:text-dental-600 font-medium"
                >
                  {t('location.directions')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              {/* Call Us */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-dental-100 rounded-full flex items-center justify-center mb-6">
                  <Phone className="text-dental-500" size={28} />
                </div>
                <h3 className="font-display text-xl text-dental-800 mb-3">
                  {t('contactPage.callUs')}
                </h3>
                <p className="text-dental-600 mb-4">
                  {t('contactPage.phoneDesc')}
                </p>
                <a 
                  href="tel:+41442220565"
                  className="inline-flex items-center text-dental-500 hover:text-dental-600 font-medium"
                >
                  +41 44 222 05 65
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              {/* Hours */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-dental-100 rounded-full flex items-center justify-center mb-6">
                  <Clock className="text-dental-500" size={28} />
                </div>
                <h3 className="font-display text-xl text-dental-800 mb-3">
                  {t('contactPage.hours')}
                </h3>
                <ul className="text-dental-600 space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>{t('contactPage.byAppointment')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>{t('contactPage.closed')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="font-display text-3xl text-dental-800 mb-8 text-center">
              {t('contactPage.findUs')}
            </h2>
            
            <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.2639208169655!2d8.536501276526575!3d47.3715045711734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa7fe0f11cf91%3A0xebf6aa8e5c2d6b1c!2sBahnhofstrasse%2035%2C%208001%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1715847138215!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pietrobon & Michel Location"
              />
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="font-display text-2xl text-dental-700 mb-6 text-center">
                  {t('contactPage.transportation')}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-lg text-dental-800 mb-3">
                      {t('contactPage.publicTransport')}
                    </h4>
                    <p className="text-dental-600">
                      {t('location.publicTransport')}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lg text-dental-800 mb-3">
                      {t('contactPage.parking')}
                    </h4>
                    <p className="text-dental-600">
                      {t('location.parkingInfo')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default ContactPage;
