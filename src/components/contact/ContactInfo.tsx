
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

const ContactInfo = () => {
  const { t } = useLanguage();

  return (
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
          
          {/* Hours - Removed the div that was selected for removal */}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
