import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Phone, Mail, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FloatingBackButton from '@/components/FloatingBackButton';
import SlideNavBarBottom from '@/components/slides/SlideNavBar';
import { SEO } from '@/components/SEO';
import { createPersonStructuredData } from '@/lib/structuredData';

const NicolaPietrobonPage: React.FC = () => {
  const { t } = useTranslation();

  const specializations = [
    t('nicolaPage.expertise.item1'),
    t('nicolaPage.expertise.item2'),
    t('nicolaPage.expertise.item3'),
    t('nicolaPage.expertise.item4'),
    t('nicolaPage.specializations.item5'),
    t('nicolaPage.specializations.item6'),
    t('nicolaPage.specializations.item7'),
    t('nicolaPage.specializations.item8')
  ];

  const title = t('nicolaPage.title');
  const description = t('seo.nicola.description');
  const jobTitle = t('nicolaPage.jobTitle', 'Dental Technician & Co-Founder');

  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
      <SEO 
        title={t('seo.nicola.title')}
        description={description}
        type="profile"
        structuredData={createPersonStructuredData(
          title,
          jobTitle,
          description,
          'https://pietrobonundmichel.ch/assets/images/core/about-nic.jpg',
          'https://pietrobonundmichel.ch/nicola-pietrobon'
        )}
        keywords={t('seo.nicola.keywords', 'Nicola Pietrobon, dental technician, Zurich, dental technology, co-founder')}
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
                    src="/assets/images/core/about-nic.jpg"
                    alt={t('nicolaPage.title')}
                    className="w-32 h-32 rounded-full object-cover shadow-lg border-2 border-white"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-6">
                  {t('nicolaPage.title')}
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
                  {t('nicolaPage.philosophy.content')}
                </div>
              </div>
            </motion.div>
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
              {t('nicolaPage.expertise.title')}
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
                {t('nicolaPage.philosophy.title')}
              </h2>
              <div className="max-w-3xl mx-auto">
                <Quote className="w-8 h-8 text-dental-400 mx-auto mb-4" />
                <blockquote className="text-xl text-dental-600 italic mb-8 leading-relaxed">
                  {t('nicolaPage.quote')}
                </blockquote>
                <div className="text-dental-500 font-medium">
                  — {t('nicolaPage.title')}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-dental-800 mb-8 text-center">
                Professional Affiliations & Recognition
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  t('nicolaPage.achievements.item3'),
                  t('nicolaPage.achievements.item4'),
                  t('nicolaPage.achievements.item5'),
                  t('nicolaPage.achievements.item1')
                ].map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-dental-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Award className="w-5 h-5 text-dental-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-dental-700">{info}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Link */}
        <section className="py-12 bg-white">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-display font-bold text-dental-800 mb-4">
                {t('nicolaPage.coFounderTitle')}
              </h3>
              <p className="text-dental-600 mb-6">
                {t('nicolaPage.coFounderDescription')}
              </p>
              <motion.a
                href="/reto-michel"
                className="inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-semibold hover:bg-dental-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nicolaPage.coFounderButton')}
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
                {t('nicolaPage.ctaTitle')}
              </h2>
              <p className="text-dental-100 mb-8">
                {t('nicolaPage.ctaDescription')}
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

export default NicolaPietrobonPage;
