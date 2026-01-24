import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LabOrderForm from '@/components/LabOrderForm';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const ForDentistsPageSimple: React.FC = () => {
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
                  Professional Dental Laboratory
                </motion.h1>
                <motion.p 
                  className="text-xl text-dental-700 mb-8 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Access our comprehensive lab order forms and professional resources for seamless case submission and optimal results.
                </motion.p>
                
                {/* Call to Action Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.a
                    href="#lab-forms"
                    className="inline-flex items-center px-8 py-4 bg-dental-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-dental-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Forms
                    <Download className="ml-2 w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="tel:+41442220565"
                    className="inline-flex items-center px-8 py-4 border-2 border-dental-600 text-dental-600 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-dental-600 hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Call +41 44 222 05 65
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Gradient fade out */}
          <div className="h-24 bg-gradient-to-b from-transparent to-white" />
        </motion.section>

        {/* Lab Order Forms Section */}
        <section id="lab-forms">
          <LabOrderForm />
        </section>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default ForDentistsPageSimple;
