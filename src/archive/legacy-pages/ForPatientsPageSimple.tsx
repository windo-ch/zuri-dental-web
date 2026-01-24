import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Car, Train } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const ForPatientsPageSimple: React.FC = () => {
  const { t } = useTranslation();

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
                  Visit Our Laboratory
                </motion.h1>
                <motion.p 
                  className="text-xl text-dental-700 mb-8 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Located in the heart of Zürich, our dental laboratory is easily accessible by public transport and car. Visits by appointment only.
                </motion.p>
              </motion.div>
            </div>
          </div>
          
          {/* Gradient fade out */}
          <div className="h-24 bg-gradient-to-b from-transparent to-white" />
        </motion.section>

        {/* Location Information */}
        <section className="py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-8">
                  Location & Contact
                </h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <motion.div
                    className="flex items-start space-x-4 p-6 bg-dental-50 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="w-6 h-6 text-dental-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dental-800 mb-2">Address</h3>
                      <p className="text-dental-700">
                        Bahnhofstrasse 35<br />
                        8001 Zürich<br />
                        Switzerland
                      </p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    className="flex items-start space-x-4 p-6 bg-dental-50 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="w-6 h-6 text-dental-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dental-800 mb-2">Phone</h3>
                      <a 
                        href="tel:+41442220565"
                        className="text-dental-700 hover:text-dental-600 transition-colors text-lg font-medium"
                      >
                        +41 44 222 05 65
                      </a>
                    </div>
                  </motion.div>

                  {/* Hours */}
                  <motion.div
                    className="flex items-start space-x-4 p-6 bg-dental-50 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Clock className="w-6 h-6 text-dental-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dental-800 mb-2">Visiting Hours</h3>
                      <p className="text-dental-700">
                        <strong className="text-dental-800">By Appointment Only</strong><br />
                        Monday - Friday: 8:00 - 17:00<br />
                        Please call ahead to schedule your visit
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                  className="mt-8 p-6 bg-gradient-to-r from-dental-600 to-dental-700 rounded-xl text-white text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Schedule Your Visit</h3>
                  <p className="mb-6 opacity-90">
                    Contact us to arrange a visit to our laboratory and see our craftsmanship firsthand.
                  </p>
                  <motion.a
                    href="tel:+41442220565"
                    className="inline-flex items-center px-6 py-3 bg-white text-dental-700 rounded-lg font-semibold hover:bg-dental-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Schedule
                  </motion.a>
                </motion.div>
              </div>

              {/* Directions & Transportation */}
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-8">
                  Getting Here
                </h2>

                <div className="space-y-6">
                  {/* Public Transport */}
                  <motion.div
                    className="p-6 border border-dental-200 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center mb-4">
                      <Train className="w-6 h-6 text-dental-600 mr-3" />
                      <h3 className="text-xl font-semibold text-dental-800">Public Transport</h3>
                    </div>
                    <ul className="space-y-2 text-dental-700">
                      <li>• <strong>Tram:</strong> Lines 2, 11, 14 to "Paradeplatz" (2 min walk)</li>
                      <li>• <strong>Train:</strong> Zürich HB (Hauptbahnhof) - 5 min walk</li>
                      <li>• <strong>Bus:</strong> Multiple lines to Paradeplatz</li>
                    </ul>
                  </motion.div>

                  {/* Parking */}
                  <motion.div
                    className="p-6 border border-dental-200 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <Car className="w-6 h-6 text-dental-600 mr-3" />
                      <h3 className="text-xl font-semibold text-dental-800">Parking</h3>
                    </div>
                    <ul className="space-y-2 text-dental-700">
                      <li>• <strong>Parkhaus Hohe Promenade:</strong> 5 min walk</li>
                      <li>• <strong>Parkhaus Urania:</strong> 3 min walk</li>
                      <li>• Limited street parking available (blue zone)</li>
                    </ul>
                  </motion.div>

                  {/* Directions */}
                  <motion.div
                    className="p-6 bg-dental-50 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex items-center mb-4">
                      <Navigation className="w-6 h-6 text-dental-600 mr-3" />
                      <h3 className="text-xl font-semibold text-dental-800">Navigation</h3>
                    </div>
                    <p className="text-dental-700 mb-4">
                      We're located on the famous Bahnhofstrasse, one of the world's most exclusive shopping streets, 
                      in the heart of Zürich's financial district.
                    </p>
                    <motion.a
                      href="https://maps.google.com/?q=Bahnhofstrasse+35,+8001+Zürich,+Switzerland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-dental-600 text-white rounded-lg font-medium hover:bg-dental-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Open in Maps
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default ForPatientsPageSimple;
