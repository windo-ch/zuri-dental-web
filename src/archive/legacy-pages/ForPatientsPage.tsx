import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Clock, Car, Train } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ForPatientsPage = () => {
  const { t } = useTranslation();
  
  // Create refs for different sections to animate them when they come into view
  const { ref: mapRef, inView: mapInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  const { ref: infoRef, inView: infoInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="bg-gradient-to-b from-dental-50 via-white to-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container max-w-6xl mx-auto px-4 py-24 md:py-32">
            <div className="relative">
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-dental-200 rounded-full opacity-10" />
              
              <motion.div
                className="relative max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dental-800 mb-6 leading-tight"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {t('forPatients.hero.title', 'For Patients')}
                </motion.h1>
                <motion.p 
                  className="text-xl text-dental-700 mb-8 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {t('forPatients.hero.subtitle', 'Welcome to Pietrobon & Michel Dental Laboratory. We are here to help you understand your dental restorations, find our lab easily, and make your visit as comfortable as possible.')}
                </motion.p>
              </motion.div>
            </div>
          </div>
          
          {/* Gradient fade out */}
          <div className="h-24 bg-gradient-to-b from-transparent to-white" />
        </motion.section>
        
        {/* What to Expect Section */}
        <section className="py-24 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-6">
                {t('forPatients.expect.title', 'What to Expect')}
              </h2>
              <p className="text-xl text-dental-600 leading-relaxed mb-8">
                {t('forPatients.expect.desc', 'When you visit our laboratory, you can expect a friendly welcome and a professional environment. Please bring any documents or information your dentist has provided. Our team will guide you through the process and answer any questions you may have. If you have special needs or requests, let us know in advance so we can assist you.')}
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Accessibility Section */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-2xl font-display font-semibold text-dental-700 mb-4">
                {t('forPatients.accessibility.title', 'Accessibility')}
              </h2>
              <p className="text-xl text-dental-600 leading-relaxed">
                {t('forPatients.accessibility.desc', 'Our laboratory is wheelchair accessible and has an elevator. If you require any assistance, please let us know ahead of your visit so we can make your experience as smooth as possible.')}
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Location Details */}
        <section id="find-us" className="py-24 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-10 text-center">
              {t('forPatients.findUs.title', 'How to Find Us')}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 mb-8">
                  <h2 className="text-2xl font-display font-semibold text-dental-700 mb-4">
                    {t('patientPage.visitUs')}
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-dental-500 mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-medium text-lg text-dental-800">
                          {t('patientPage.address')}
                        </h3>
                        <p className="text-xl text-dental-600 leading-relaxed">
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
                        <p className="text-xl text-dental-600 leading-relaxed">
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
                        <p className="text-xl text-dental-600 leading-relaxed">
                          {t('patientPage.workingHours')}
                        </p>
                        <p className="text-dental-600 font-medium mt-2">
                          {t('location.appointmentOnly')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <h2 className="text-2xl font-display font-semibold text-dental-700 mb-4">
                    {t('patientPage.directions')}
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Car className="text-dental-500 mt-1 mr-4" size={24} />
                      <div>
                        <h3 className="font-medium text-lg text-dental-800">
                          {t('patientPage.parking')}
                        </h3>
                        <p className="text-xl text-dental-600 leading-relaxed">
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
                        <p className="text-xl text-dental-600 leading-relaxed">
                          {t('location.publicTransport')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                ref={mapRef}
                className="h-full"
                variants={fadeIn}
                initial="hidden"
                animate={mapInView ? "visible" : "hidden"}
              >
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
                    className="inline-flex items-center text-dental-500 hover:text-dental-600 font-medium transition-colors duration-300"
                  >
                    {t('location.directions')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Patient Information */}
        <motion.section 
          ref={infoRef}
          className="py-24 bg-dental-50"
          variants={fadeIn}
          initial="hidden"
          animate={infoInView ? "visible" : "hidden"}
        >
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-6 text-center">
              {t('patientPage.patientInfo')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {(() => {
                const infoItems = t('patientPage.infoItems', { returnObjects: true });
                if (infoItems && Array.isArray(infoItems)) {
                  return infoItems.map((item: any, index: number) => (
                    <motion.div 
                      key={index} 
                      className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <div className="w-12 h-12 bg-dental-100 text-dental-500 rounded-full flex items-center justify-center mb-4">
                        <span className="font-display text-xl font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-dental-700 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-xl text-dental-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ));
                }
                return null;
              })()}
            </div>
            
            <motion.div 
              className="mt-12 bg-white p-8 rounded-xl shadow-md border border-gray-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-2xl font-display font-semibold text-dental-700 mb-4 text-center">
                {t('patientPage.appointmentTitle')}
              </h3>
              <p className="text-xl text-dental-600 leading-relaxed text-center mb-6">
                {t('patientPage.appointmentDesc')}
              </p>
              <div className="flex justify-center">
                <a 
                  href="tel:+41442220565"
                  className="inline-flex items-center px-8 py-4 bg-dental-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-dental-500"
                >
                  <Phone className="mr-2" size={18} />
                  {t('contact.phoneNumber')}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default ForPatientsPage;
