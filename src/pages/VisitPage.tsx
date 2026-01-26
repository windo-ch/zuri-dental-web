import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Train, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FloatingBackButton from '@/components/FloatingBackButton';
import SlideNavBarBottom from '@/components/slides/SlideNavBar';
import SlideFooter from '@/components/slides/SlideFooter';
import { SEO } from '@/components/SEO';

const VisitPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const labInfo = {
    address: {
      street: t('location.address'),
      city: t('location.city'),
      country: t('location.country')
    },
    hours: t('location.appointmentOnly'),
    phone: "+41 44 222 05 65",
    email: i18n.language === 'de' ? "labor@pietrobonundmichel.ch" : "lab@pietrobonandmichel.ch",
    googleMapsUrl: "https://www.google.com/maps?sca_esv=9267af3241730e66&biw=1501&bih=972&output=search&q=pietrobon+und+michel&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3p-ML-906rRL_m6jR-tdAeyw6pOVABma0FfM0NmtARIDnpJx573e9TrfqkEMeBvVj48Q0Kn_hndxQIgBCXPrZunQ-pjfcPY_qpLdbLlQ8nHPSQwaaLbb3rVmz7vBYY7xs-cIxqkhgXKq6AykoVVepjwRQ07DLgOc0WAnfRZ-N7lSo9-A&entry=mc&ved=1t:200715&ictx=111"
  };

  const visitingInfo = [
    {
      icon: Clock,
      title: t('slides.patients.visitingInfo.appointment.title'),
      description: t('slides.patients.visitingInfo.appointment.description')
    },
    {
      icon: Car,
      title: t('slides.patients.visitingInfo.parking.title'),
      description: t('slides.patients.visitingInfo.parking.description')
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
      <SEO 
        title={t('seo.patients.title')}
        description={t('seo.patients.description')}
      />
      <FloatingBackButton />

      {/* Main Content - Scrollable */}
      <main className="pb-20">
        {/* Hero Section */}
        <section className="pt-32 pb-32 relative overflow-hidden min-h-[600px] md:min-h-[700px]">
          {/* Dimmed Background Image */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source srcSet="/assets/images/team/nic-and-reto-lab-2.webp" type="image/webp" />
              <img
                src="/assets/images/team/nic-and-reto-lab-2.jpg"
                alt="Pietrobon & Michel Laboratory"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-dental-900/60 via-dental-800/50 to-dental-900/60"></div>
          </div>
          
          <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/assets/images/pietrobon-logo-animated.svg"
                  alt="Pietrobon & Michel"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">
                {t('slides.patients.heroTitle')}
              </h1>
              <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
                {t('slides.patients.heroDescription')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Location Information */}
        <section className="py-16 bg-white">
          <div className="container max-w-5xl mx-auto px-4">
            <motion.div
              className="bg-gradient-to-br from-white to-dental-50 rounded-2xl p-8 md:p-10 shadow-xl border border-dental-200 overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Image extending to left, top, and bottom edges */}
              <div className="absolute left-0 top-0 w-full md:w-1/4 h-48 md:h-auto md:bottom-0 overflow-hidden rounded-t-2xl md:rounded-t-none">
                <picture>
                  <source srcSet="/assets/images/core/Bahnhofstrasse-s.webp" type="image/webp" />
                  <img
                    src="/assets/images/core/Bahnhofstrasse-s.jpg"
                    alt="Bahnhofstrasse, Zürich"
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-white/80 to-transparent"></div>
              </div>
              
              <h2 className="text-3xl font-display font-bold text-dental-800 mb-8 text-center relative z-10 pt-56 md:pt-0">
                {t('slides.patients.locationTitle')}
              </h2>
              
              <div className="relative z-10 md:ml-[25%]">
                {/* Content */}
                <div className="space-y-6">
                  {/* Address */}
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-dental-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-dental-100 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-dental-600" />
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-dental-800">
                        {t('slides.patients.addressTitle')}
                      </h3>
                    </div>
                    <div className="space-y-2 pl-0 md:pl-16">
                      <p className="text-dental-800 font-medium text-xl">
                        {labInfo.address.street}
                      </p>
                      <p className="text-dental-700 text-lg">
                        {labInfo.address.city}
                      </p>
                      <p className="text-dental-600 text-lg">
                        {labInfo.address.country}
                      </p>
                    </div>
                  </motion.div>

                  {/* Contact */}
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-dental-100 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-dental-100 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-dental-600" />
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-dental-800">
                        {t('slides.patients.contactTitle')}
                      </h3>
                    </div>
                    <div className="space-y-4 pl-0 md:pl-16">
                      <a 
                        href={`tel:${labInfo.phone}`}
                        className="text-dental-700 hover:text-dental-800 transition-colors block font-medium hover:underline flex items-center text-lg w-full md:w-auto"
                      >
                        <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                        {labInfo.phone}
                      </a>
                      <a 
                        href={`mailto:${labInfo.email}`}
                        className="text-dental-700 hover:text-dental-800 transition-colors block font-medium hover:underline break-all flex items-center text-sm md:text-lg w-full md:w-auto"
                      >
                        <Mail className="w-4 h-4 md:w-5 md:h-5 mr-3 flex-shrink-0" />
                        {labInfo.email}
                      </a>
                      <p className="text-dental-600 text-base mt-6 italic pt-4 border-t border-dental-200">
                        {labInfo.hours}
                      </p>
                    </div>
                  </motion.div>
                </div>
              
                {/* Google Maps Button */}
                <motion.div
                  className="flex justify-center mt-8 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.a
                    href={labInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-medium hover:bg-dental-700 transition-colors shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    {t('slides.patients.openInMaps')}
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Visiting Information */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-display font-bold text-dental-800 mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('slides.patients.visitingTitle')}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {visitingInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-dental-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 * index }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-dental-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-dental-600" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-dental-800">
                        {info.title}
                      </h3>
                    </div>
                    <p className="text-dental-700 leading-relaxed">
                      {info.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Public Transport */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              className="bg-dental-50 rounded-xl p-8 shadow-lg border border-dental-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-display font-bold text-dental-800 mb-4 flex items-center justify-center">
                {t('slides.patients.publicTransportTitle')}
              </h2>
              <p className="text-dental-600 mb-6 max-w-2xl mx-auto">
                {t('slides.patients.publicTransportDescription')}
              </p>
              <motion.a
                href="https://www.sbb.ch/en?stops=[{%22label%22:%22%22,%22type%22:%22ID%22,%22value%22:%22%22},{%22value%22:%228591299%22,%22type%22:%22ID%22,%22label%22:%22Z%C3%BCrich,+Paradeplatz%22}]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-semibold hover:bg-dental-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('slides.patients.checkSBB')}
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Parking & Hotels */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-display font-bold text-dental-800 mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('slides.patients.additionalInfo')}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border border-dental-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl font-display font-bold text-dental-800 mb-4 flex items-center">
                  {t('slides.patients.parkingTitle')}
                </h3>
                <p className="text-dental-700 mb-4">
                  {t('slides.patients.parkingDescription')}
                </p>
                <motion.a
                  href="/parking"
                  className="inline-flex items-center px-4 py-2 bg-dental-600 text-white rounded-lg font-medium hover:bg-dental-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('slides.patients.viewParkingGuide')}
                </motion.a>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border border-dental-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-display font-bold text-dental-800 mb-4 flex items-center">
                  {t('slides.patients.hotelsTitle')}
                </h3>
                <p className="text-dental-700 mb-4">
                  {t('slides.patients.hotelsDescription')}
                </p>
                <motion.a
                  href="/hotels"
                  className="inline-flex items-center px-4 py-2 bg-dental-600 text-white rounded-lg font-medium hover:bg-dental-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('slides.patients.viewHotelGuide')}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-dental-600 to-dental-800">
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold mb-4">
                {t('slides.patients.appointmentTitle')}
              </h2>
              <p className="text-dental-100 mb-8 max-w-2xl mx-auto">
                {t('slides.patients.appointmentDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+41442220565"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-dental-800 rounded-lg font-semibold text-lg hover:bg-dental-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('slides.patients.callNow')}
                </motion.a>
                <motion.a
                  href="mailto:lab@pietrobonandmichel.ch"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t('slides.patients.sendEmail')}
                </motion.a>
              </div>
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

export default VisitPage;
