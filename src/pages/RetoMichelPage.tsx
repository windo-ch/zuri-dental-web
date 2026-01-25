import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Phone, Mail, Quote, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FloatingBackButton from '@/components/FloatingBackButton';
import SlideNavBarBottom from '@/components/slides/SlideNavBar';
import { SEO } from '@/components/SEO';
import { createPersonStructuredData } from '@/lib/structuredData';

const RetoMichelPage: React.FC = () => {
  const { t } = useTranslation();

  const specializations = [
    t('retoPage.expertise.item2'),
    t('retoPage.expertise.item3'),
    t('retoPage.expertise.item1'),
    t('retoPage.expertise.item4'),
    t('retoPage.specializations.item5')
  ];

  const certifications = [
    t('retoPage.certifications.item1'),
    t('retoPage.certifications.item2'),
    t('retoPage.certifications.item3'),
    t('retoPage.certifications.item4')
  ];

  const title = t('retoPage.title');
  const description = t('seo.reto.description');
  const jobTitle = t('retoPage.jobTitle', 'Dental Technician & Co-Founder');

  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
      <SEO 
        title={t('seo.reto.title')}
        description={description}
        type="profile"
        structuredData={createPersonStructuredData(
          title,
          jobTitle,
          description,
          'https://pietrobonundmichel.ch/assets/images/core/about-reto.jpg',
          'https://pietrobonundmichel.ch/reto-michel'
        )}
        keywords={t('seo.reto.keywords', 'Reto Michel, dental technician, Zurich, dental technology, co-founder')}
        description={t('seo.reto.description')}
      />
      <FloatingBackButton />
      
      {/* Main Content - Scrollable */}
      <main className="pt-16 pb-16">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center">
              {/* Profile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-32 h-32 mx-auto mb-6">
                  <img
                    src="/assets/images/core/about-reto.jpg"
                    alt={t('retoPage.title')}
                    className="w-32 h-32 rounded-full object-cover shadow-lg border-2 border-white"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-6">
                  {t('retoPage.title')}
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              className="prose prose-lg max-w-none text-dental-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-dental-50 rounded-xl p-8">
                <div className="whitespace-pre-line">
                  {t('retoPage.philosophy.content')}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Two Column Section: Specializations & Certifications */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Specializations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-display font-bold text-dental-800 mb-6 text-center">
                  <Settings className="w-6 h-6 inline-block mr-2" />
                  {t('retoPage.expertise.title')}
                </h2>
                <div className="space-y-4">
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
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-display font-bold text-dental-800 mb-6 text-center">
                  <Award className="w-6 h-6 inline-block mr-2" />
                  {t('retoPage.certificationsTitle')}
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-dental-500 mr-3" />
                        <span className="text-dental-800 font-medium">{cert}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
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
                {t('retoPage.philosophy.title')}
              </h2>
              <div className="max-w-3xl mx-auto">
                <Quote className="w-8 h-8 text-dental-400 mx-auto mb-4" />
                <blockquote className="text-xl text-dental-600 italic mb-8 leading-relaxed">
                  {t('retoPage.quote')}
                </blockquote>
                <div className="text-dental-500 font-medium">
                  — {t('retoPage.title')}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Link */}
        <section className="py-12 bg-dental-50">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-display font-bold text-dental-800 mb-4">
                {t('retoPage.coFounderTitle')}
              </h3>
              <p className="text-dental-600 mb-6">
                {t('retoPage.coFounderDescription')}
              </p>
              <motion.a
                href="/nicola-pietrobon"
                className="inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-semibold hover:bg-dental-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('retoPage.coFounderButton')}
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-dental-600 to-dental-800">
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-display font-bold mb-4">
                {t('retoPage.achievements.title')}
              </h2>
              <p className="text-dental-100 mb-8">
                {t('retoPage.achievements.item3')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+41442220565"
                  className="inline-flex items-center px-6 py-3 bg-white text-dental-800 rounded-lg font-semibold hover:bg-dental-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('slides.dentists.callNow')}
                </motion.a>
                <motion.a
                  href="mailto:lab@pietrobonandmichel.ch"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-dental-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t('slides.dentists.sendEmail')}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Bottom Navigation with Tooltips */}
      <SlideNavBarBottom />
    </div>
  );
};

export default RetoMichelPage;
