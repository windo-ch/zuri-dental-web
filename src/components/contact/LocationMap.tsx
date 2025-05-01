
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const LocationMap = () => {
  const { t } = useLanguage();
  
  return (
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
  );
};

export default LocationMap;
