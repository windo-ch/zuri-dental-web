import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Settings, Users, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FloatingBackButton from '@/components/FloatingBackButton';
import SlideNavBarBottom from '@/components/slides/SlideNavBar';
import SlideFooter from '@/components/slides/SlideFooter';
import HolidaySchedule from '@/components/HolidaySchedule';
import { SEO } from '@/components/SEO';

const ForDentistsPage: React.FC = () => {
  const { t } = useTranslation();
  
  const labForms = [
    { 
      name: t('slides.dentists.forms.workOrder.name'), 
      file: "https://laborblock.ch/", 
      icon: FileText,
      type: "download"
    },
    { 
      name: t('slides.dentists.forms.appointmentCards.name'), 
      icon: Users,
      type: "order",
      emailSubject: t('slides.dentists.forms.appointmentCards.emailSubject'),
      emailBody: t('slides.dentists.forms.appointmentCards.emailBody')
    },
    { 
      name: t('slides.dentists.forms.priceList.name'), 
      icon: Download,
      type: "order",
      emailSubject: t('slides.dentists.forms.priceList.emailSubject'),
      emailBody: t('slides.dentists.forms.priceList.emailBody')
    }
  ];

  const services = t('slides.dentists.services', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
      <SEO 
        title={t('seo.dentists.title')}
        description={t('seo.dentists.description')}
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
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/assets/images/pietrobon-logo-animated.svg"
                  alt="Pietrobon & Michel"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-4">
                {t('slides.dentists.heroTitle')}
              </h1>
              <p className="text-xl text-dental-600 mb-8 max-w-2xl mx-auto">
                {t('slides.dentists.heroDescription')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lab Order Forms Section */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-display font-bold text-dental-800 mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('slides.dentists.formsTitle')}
            </motion.h2>
            
            {/* Prominent Work Order Form Card */}
            <motion.div
              className="bg-gradient-to-br from-dental-600 to-dental-800 rounded-2xl p-8 md:p-12 shadow-2xl mb-8 text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {t('slides.dentists.forms.workOrder.name')}
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Access our online work order system for streamlined lab requests
              </p>
              <motion.a
                href="https://laborblock.ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-dental-800 rounded-lg font-semibold text-lg hover:bg-dental-50 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                {t('slides.dentists.forms.workOrder.download')}
              </motion.a>
            </motion.div>

            {/* Other Forms - Smaller Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {labForms.filter(form => form.type !== "download").map((form, index) => {
                const IconComponent = form.icon;
                return (
                  <motion.div
                    key={form.name}
                    className="bg-white rounded-xl p-6 shadow-lg border border-dental-100 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 * index }}
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-dental-100 rounded-lg flex items-center justify-center mx-auto">
                        <IconComponent className="w-6 h-6 text-dental-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-display font-bold text-dental-800 mb-4">
                      {form.name}
                    </h3>
                    <motion.a
                      href={`mailto:lab@pietrobonandmichel.ch?subject=${encodeURIComponent(form.emailSubject)}&body=${encodeURIComponent(form.emailBody)}`}
                      className="inline-flex items-center justify-center px-4 py-2 bg-dental-600 hover:bg-dental-700 text-white rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {form.name === t('slides.dentists.forms.appointmentCards.name') ? t('slides.dentists.forms.appointmentCards.order') : t('slides.dentists.forms.priceList.order')}
                    </motion.a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-display font-bold text-dental-800 mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('slides.dentists.servicesTitle')}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="flex items-center bg-dental-50 rounded-lg p-4 shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="w-3 h-3 bg-dental-500 rounded-full mr-4 flex-shrink-0" />
                  <p className="text-lg font-medium text-dental-700">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lab Hours & Closure Dates Combined Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              className="bg-dental-50 rounded-xl p-8 shadow-lg border border-dental-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Lab Opening Hours */}
              <div className="mb-8 pb-8 border-b border-dental-200">
                <h2 className="text-3xl font-display font-bold text-dental-800 mb-6 text-center">
                  {t('slides.dentists.labHoursTitle')}
                </h2>
                <div className="space-y-4 text-center">
                  <p className="text-xl text-dental-700 font-medium">
                    {t('slides.dentists.labHoursMondayThursday')}
                  </p>
                  <p className="text-xl text-dental-700 font-medium">
                    {t('slides.dentists.labHoursFriday')}
                  </p>
                  <p className="text-lg text-dental-600 italic mt-6">
                    {t('slides.dentists.labHoursByAppointment')}
                  </p>
                </div>
              </div>

              {/* Lab Closure Dates */}
              <div>
                <HolidaySchedule />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-dental-50">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg border border-dental-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-display font-bold text-dental-800 mb-6">
                {t('slides.dentists.contactTitle')}
              </h3>
              <p className="text-dental-600 mb-8 max-w-2xl mx-auto">
                {t('slides.dentists.contactDescription')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.a
                  href="tel:+41442220565"
                  className="flex items-center justify-center p-4 bg-dental-600 hover:bg-dental-700 text-white rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('slides.dentists.callNow')}
                </motion.a>
                
                <motion.a
                  href="mailto:lab@pietrobonandmichel.ch"
                  className="flex items-center justify-center p-4 bg-dental-100 hover:bg-dental-200 text-dental-800 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t('slides.dentists.sendEmail')}
                </motion.a>
                
                <motion.button
                  onClick={() => window.open('https://maps.google.com/?q=Bahnhofstrasse 35, 8001 Zürich, Switzerland', '_blank')}
                  className="flex items-center justify-center p-4 bg-dental-100 hover:bg-dental-200 text-dental-800 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  {t('slides.dentists.visitLab')}
                </motion.button>
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

export default ForDentistsPage;
