
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Phone, Clock, Car, Train } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const LocationPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-dental-50 py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-dental-800 mb-4">
              {t('location.title')}
            </h1>
            <p className="text-xl text-dental-600 max-w-2xl">
              {t('patientPage.intro')}
            </p>
          </div>
        </section>
        
        {/* Location Details */}
        <section className="py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h2 className="font-display text-2xl text-dental-700 mb-6">
                    {t('patientPage.visitUs')}
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-dental-500 mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-medium text-lg text-dental-800">
                          {t('patientPage.address')}
                        </h3>
                        <p className="text-dental-600">
                          {t('location.address')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="text-dental-500 mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-medium text-lg text-dental-800">
                          {t('patientPage.phone')}
                        </h3>
                        <p className="text-dental-600">
                          {t('contact.phoneNumber')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="text-dental-500 mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-medium text-lg text-dental-800">
                          {t('patientPage.hours')}
                        </h3>
                        <p className="text-dental-600">
                          {t('patientPage.workingHours')}
                        </p>
                        <p className="text-dental-600 font-medium mt-2">
                          {t('location.appointmentOnly')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h2 className="font-display text-2xl text-dental-700 mb-6">
                    {t('patientPage.directions')}
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Car className="text-dental-500 mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-medium text-lg text-dental-800">
                          {t('patientPage.parking')}
                        </h3>
                        <p className="text-dental-600">
                          {t('location.parkingInfo')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Train className="text-dental-500 mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-medium text-lg text-dental-800">
                          {t('patientPage.publicTransport')}
                        </h3>
                        <p className="text-dental-600">
                          {t('location.publicTransport')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-full">
                <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
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
                
                <div className="mt-6 text-center">
                  <a 
                    href="https://goo.gl/maps/R52xzNPHbZ9sJJzx9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-dental-500 hover:text-dental-600 font-medium"
                  >
                    {t('location.directions')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Patient Information */}
        <section className="py-12 md:py-16 bg-dental-50">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="font-display text-3xl text-dental-800 mb-8 text-center">
              {t('patientPage.patientInfo')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Array.isArray(t('patientPage.infoItems')) && t('patientPage.infoItems').map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-dental-100 text-dental-500 rounded-full flex items-center justify-center mb-4">
                    <span className="font-display text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl text-dental-700 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-dental-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
              <h3 className="font-display text-2xl text-dental-700 mb-4 text-center">
                {t('patientPage.appointmentTitle')}
              </h3>
              <p className="text-center text-dental-600 mb-6">
                {t('patientPage.appointmentDesc')}
              </p>
              <div className="flex justify-center">
                <a 
                  href="tel:+41442220565"
                  className="bg-dental-500 hover:bg-dental-600 text-white font-medium px-6 py-3 rounded-lg transition-colors inline-flex items-center"
                >
                  <Phone className="mr-2" size={18} />
                  {t('contact.phoneNumber')}
                </a>
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

export default LocationPage;
