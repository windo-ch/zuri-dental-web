import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Car } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FloatingBackButton from '@/components/FloatingBackButton';
import SlideNavBarBottom from '@/components/slides/SlideNavBar';
import SlideFooter from '@/components/slides/SlideFooter';
import { SEO } from '@/components/SEO';

const ParkingPage: React.FC = () => {
  const { t } = useTranslation();
  const parkingGarages = [
    {
      name: "Urania",
      address: "Widdergasse 1, CH-8001 Zürich",
      phone: "+41 (0)43 888 67 40",
      distance: "2-minute walk",
      rates: "CHF 2.50/hour",
      hours: "24/7"
    },
    {
      name: "Jelmoli",
      address: "Steinmühleplatz 1, CH-8001 Zürich",
      phone: "No phone available",
      distance: "3-minute walk",
      rates: "CHF 2.00/hour",
      hours: "Mon-Sat: 7:00-22:00, Sun: 9:00-20:00"
    },
    {
      name: "Talgarten",
      address: "Nüschelerstrasse 31, CH-8001 Zürich",
      phone: "+41 (0)43 344 62 70",
      distance: "4-minute walk",
      rates: "CHF 2.20/hour",
      hours: "24/7"
    },
    {
      name: "Globus",
      address: "Löwenstrasse 50, CH-8001 Zürich",
      phone: "No phone available",
      distance: "5-minute walk",
      rates: "CHF 2.00/hour",
      hours: "Mon-Sat: 7:00-22:00, Sun: 9:00-20:00"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
      <SEO 
        title={t('seo.parking.title')}
        description={t('seo.parking.description')}
      />
      <FloatingBackButton />

      {/* Main Content - Scrollable */}
      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-dental-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Car className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-4">
                {t('slides.parking.title')}
              </h1>
              <p className="text-xl text-dental-600 mb-8 max-w-2xl mx-auto">
                {t('slides.parking.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Parking Garages */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-display font-bold text-dental-800 mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('slides.parking.nearbyTitle')}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {parkingGarages.map((garage, index) => (
                <motion.div
                  key={index}
                  className="bg-dental-50 rounded-xl p-6 shadow-lg border border-dental-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-display font-bold text-dental-800 mb-4">
                    {garage.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-dental-700">
                      <MapPin className="w-4 h-4 mr-3 text-dental-600" />
                      <span className="text-sm">{garage.address}</span>
                    </div>
                    
                    <div className="flex items-center text-dental-700">
                      <Clock className="w-4 h-4 mr-3 text-dental-600" />
                      <span className="text-sm">{garage.distance}</span>
                    </div>
                    
                    <div className="flex items-center text-dental-700">
                      <DollarSign className="w-4 h-4 mr-3 text-dental-600" />
                      <span className="text-sm font-medium">{garage.rates}</span>
                    </div>
                    
                    <div className="flex items-center text-dental-700">
                      <Clock className="w-4 h-4 mr-3 text-dental-600" />
                      <span className="text-sm">{garage.hours}</span>
                    </div>
                    
                    {garage.phone !== t('slides.parking.noPhone') && (
                      <div className="flex items-center text-dental-700">
                        <Car className="w-4 h-4 mr-3 text-dental-600" />
                        <a href={`tel:${garage.phone}`} className="text-sm hover:text-dental-800 transition-colors">
                          {garage.phone}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <motion.a
                    href={`https://maps.google.com/?q=${encodeURIComponent(garage.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 px-4 py-2 bg-dental-600 text-white rounded-lg font-medium hover:bg-dental-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {t('slides.parking.getDirections')}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg border border-dental-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-display font-bold text-dental-800 mb-6 text-center">
                {t('slides.parking.notesTitle')}
              </h2>
              
              <div className="space-y-4 text-dental-700">
                {(t('slides.parking.notes', { returnObjects: true }) as string[]).map((note, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-dental-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>{note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Alternative Transportation */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-display font-bold text-dental-800 mb-4">
                {t('slides.parking.alternativeTitle')}
              </h2>
              <p className="text-dental-600 mb-6 max-w-2xl mx-auto">
                {t('slides.parking.alternativeDescription')}
              </p>
              <motion.a
                href="/visit"
                className="inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-semibold hover:bg-dental-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('slides.parking.viewPublicTransport')}
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <SlideFooter />
      
      {/* Bottom Navigation with Tooltips */}
      <SlideNavBarBottom />
    </div>
  );
};

export default ParkingPage;
