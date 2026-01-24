import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Zap, CheckCircle2, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FloatingBackButton from '@/components/FloatingBackButton';
import SlideNavBarBottom from '@/components/slides/SlideNavBar';
import SlideFooter from '@/components/slides/SlideFooter';
import { SEO } from '@/components/SEO';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: Award,
      title: t('slides.about.values.excellence.title'),
      description: t('slides.about.values.excellence.description')
    },
    {
      icon: Heart,
      title: t('slides.about.values.passion.title'),
      description: t('slides.about.values.passion.description')
    },
    {
      icon: Users,
      title: t('slides.about.values.collaboration.title'),
      description: t('slides.about.values.collaboration.description')
    },
    {
      icon: Zap,
      title: t('slides.about.values.innovation.title'),
      description: t('slides.about.values.innovation.description')
    }
  ];

  const achievements = t('slides.about.achievementsList', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
      <SEO 
        title={t('seo.about.title')}
        description={t('seo.about.description')}
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
              <div className="mb-6">
                <img
                  src="/assets/images/pietrobon-logo-animated.svg"
                  alt="Pietrobon & Michel Logo"
                  className="h-24 w-auto mx-auto"
                  draggable={false}
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-4">
                {t('slides.about.credo')}
              </h1>
              <p className="text-xl text-dental-600 mb-8 max-w-2xl mx-auto">
                {t('slides.about.credoDescription')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg border border-dental-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold text-dental-800 mb-6">
                {t('slides.about.mission')}
              </h2>
              <p className="text-lg text-dental-700 leading-relaxed mb-6">
                {t('slides.about.missionText1')}
              </p>
              <p className="text-lg text-dental-700 leading-relaxed">
                {t('slides.about.missionText2')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-display font-bold text-dental-800 mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('slides.about.coreValues')}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="text-center bg-dental-50 rounded-xl p-6 shadow-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 * index }}
                  >
                    <div className="w-16 h-16 bg-dental-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-dental-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-dental-700 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-display font-bold text-dental-800 mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('slides.about.achievements')}
            </motion.h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-dental-600 mr-4 flex-shrink-0" />
                    <p className="text-lg text-dental-700">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              className="bg-gradient-to-r from-dental-600 to-dental-700 text-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Globe className="w-16 h-16 mx-auto mb-6 text-dental-100" />
              <h3 className="text-2xl font-display font-bold mb-6">
                {t('slides.about.philosophy')}
              </h3>
              <p className="text-lg leading-relaxed mb-6 text-dental-100">
                "{t('slides.about.philosophyQuote')}"
              </p>
              <p className="text-lg font-semibold">
                {t('slides.about.philosophyAuthor')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-dental-800 mb-4">
                  {t('slides.about.founders')}
                </h2>
                <p className="text-xl text-dental-600 max-w-2xl mx-auto">
                  {t('slides.about.foundersSubtitle')}
                </p>
              </div>
              
              {/* Partners Image */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="/assets/images/partners_pietrobon-and-michel.jpg"
                  alt={t('slides.about.partnersAlt')}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </motion.div>

              {/* Profile Links */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center">
                <motion.a
                  href="/nicola-pietrobon"
                  className="group bg-dental-50 rounded-xl p-4 md:p-8 text-center hover:bg-dental-100 transition-all duration-300 w-full sm:w-64"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <h3 className="text-xl md:text-2xl font-display font-bold text-dental-800 mb-2 md:mb-4 group-hover:text-dental-900">
                    Nicola Pietrobon
                  </h3>
                  <div className="text-dental-500 group-hover:text-dental-600 text-sm md:text-base">
                    {t('slides.about.viewProfile')}
                  </div>
                </motion.a>

                <motion.a
                  href="/reto-michel"
                  className="group bg-dental-50 rounded-xl p-4 md:p-8 text-center hover:bg-dental-100 transition-all duration-300 w-full sm:w-64"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <h3 className="text-xl md:text-2xl font-display font-bold text-dental-800 mb-2 md:mb-4 group-hover:text-dental-900">
                    Reto Michel
                  </h3>
                  <div className="text-dental-500 group-hover:text-dental-600 text-sm md:text-base">
                    {t('slides.about.viewProfile')}
                  </div>
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

export default AboutPage;
