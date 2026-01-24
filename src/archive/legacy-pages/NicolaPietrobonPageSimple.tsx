import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useNavigate } from 'react-router-dom';

const NicolaPietrobonPageSimple: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const experiences = [
    {
      year: "1995-Present",
      title: "Co-Founder & Master Dental Technician",
      company: "Pietrobon & Michel",
      description: "Leading aesthetic restorations and precision craftsmanship for over 25 years"
    },
    {
      year: "1990-1995",
      title: "Senior Dental Technician",
      company: "Dental Lab Zürich",
      description: "Specialized in crown and bridge work, developing expertise in ceramic restorations"
    },
    {
      year: "1986-1990",
      title: "Dental Technician Apprenticeship",
      company: "Swiss Dental Institute",
      description: "Comprehensive training in all aspects of dental technology"
    }
  ];

  const specializations = [
    "Aesthetic Crowns & Bridges",
    "Ceramic Veneers",
    "Complex Reconstructions",
    "Color Matching & Characterization",
    "Digital Workflow Integration"
  ];

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
          <div className="container max-w-4xl mx-auto px-4 py-16">
            {/* Back Button */}
            <motion.button
              onClick={() => navigate('/')}
              className="inline-flex items-center mb-8 text-dental-600 hover:text-dental-700 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </motion.button>

            <div className="text-center">
              {/* Profile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-32 h-32 bg-dental-200 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-dental-700">
                  NP
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-2">
                  Nicola Pietrobon
                </h1>
                <p className="text-xl text-dental-600 mb-6">
                  Master Dental Technician & Co-Founder
                </p>
              </motion.div>

              {/* Contact */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center text-dental-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Zürich, Switzerland</span>
                </div>
                <div className="flex items-center text-dental-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+41442220565" className="hover:text-dental-700">
                    +41 44 222 05 65
                  </a>
                </div>
                <div className="flex items-center text-dental-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:lab@pietrobonandmichel.ch" className="hover:text-dental-700">
                    lab@pietrobonandmichel.ch
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-display font-bold text-dental-800 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional Experience
            </motion.h2>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-dental-50 rounded-xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-dental-800">
                        {exp.title}
                      </h3>
                      <p className="text-dental-600 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center text-dental-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.year}
                    </div>
                  </div>
                  <p className="text-dental-700">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-display font-bold text-dental-800 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Specializations
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {specializations.map((spec, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-dental-600 mr-3" />
                    <span className="text-dental-800 font-medium">{spec}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-dental-800 mb-6">
                Philosophy
              </h2>
              <blockquote className="text-xl text-dental-600 italic mb-8 max-w-3xl mx-auto leading-relaxed">
                "Excellence in dental technology comes from the perfect marriage of traditional 
                craftsmanship and modern innovation. Every restoration we create is not just 
                functional, but a work of art that restores confidence and smiles."
              </blockquote>
              <div className="text-dental-500">
                — Nicola Pietrobon
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

export default NicolaPietrobonPageSimple;
