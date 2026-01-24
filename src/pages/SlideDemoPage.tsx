import React from 'react';
import { motion } from 'framer-motion';
import SlideContainer from '../components/slides/SlideContainer';
import EntrySlide from '../components/slides/EntrySlide';
import ClosingSlide from '../components/slides/ClosingSlide';
import Slide from '../components/slides/Slide';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { SEO } from '@/components/SEO';

const SlideDemoPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get current slide from URL hash
  const getCurrentSlide = () => {
    const hash = location.hash;
    const slideMatch = hash.match(/slide=(\d+)/);
    if (slideMatch) {
      return parseInt(slideMatch[1], 10);
    }
    return 0;
  };
  
  const currentSlide = getCurrentSlide();

  return (
    <div className="w-full h-screen">
      <SEO 
        title={t('seo.home.title')}
        description={t('seo.home.description')}
      />
      <SlideContainer showNavigation={true}>
        {/* Entry Slide - Matches your screenshot */}
        <EntrySlide />

        {/* About Slide - Team Cards */}
        <Slide background="dental-light" id="about">
          <div className="container max-w-5xl mx-auto px-4 text-center h-full flex flex-col justify-center pt-4 pb-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
              style={{ willChange: 'transform, opacity' }}
            >
              <h1 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-display font-bold text-dental-800 mb-2 md:mb-3">
                {t('slideDemo.team.title')}
              </h1>
              <p className="hidden md:block text-sm md:text-base lg:text-lg text-dental-600 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                {t('slideDemo.team.subtitle')}
              </p>
              
              {/* Team Member Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-6 md:mb-8">
                <motion.div
                  className="bg-white rounded-xl p-3 md:p-8 shadow-lg cursor-pointer group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    // Always go back to slide 1 (team slide) from profiles
                    sessionStorage.setItem('lastSlide', '1');
                    navigate('/nicola-pietrobon', { state: { fromSlide: 1 } });
                  }}
                >
                  <div className="flex items-center gap-3 md:flex-col md:items-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
                      <img
                        src="/assets/images/core/about-nic.jpg"
                        alt={t('about.nicolaTitle')}
                        className="w-full h-full rounded-full object-cover shadow-lg border-2 border-white"
                      />
                    </div>
                    <div className="flex-1 flex items-center justify-between gap-2 md:flex-col md:items-center md:mt-3 md:mb-4">
                      <h3 className="text-base md:text-xl font-display font-bold text-dental-800 md:mb-6">
                        Nicola Pietrobon
                      </h3>
                      <div className="bg-dental-600 text-white px-2 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium group-hover:bg-dental-700 transition-colors whitespace-nowrap">
                        {t('slideDemo.team.viewProfile')}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-3 md:p-8 shadow-lg cursor-pointer group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    // Always go back to slide 1 (team slide) from profiles
                    sessionStorage.setItem('lastSlide', '1');
                    navigate('/reto-michel', { state: { fromSlide: 1 } });
                  }}
                >
                  <div className="flex items-center gap-3 md:flex-col md:items-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
                      <img
                        src="/assets/images/core/about-reto.jpg"
                        alt={t('about.retoTitle')}
                        className="w-full h-full rounded-full object-cover shadow-lg border-2 border-white"
                      />
                    </div>
                    <div className="flex-1 flex items-center justify-between gap-2 md:flex-col md:items-center md:mt-3 md:mb-4">
                      <h3 className="text-base md:text-xl font-display font-bold text-dental-800 md:mb-6">
                        Reto Michel
                      </h3>
                      <div className="bg-dental-600 text-white px-2 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium group-hover:bg-dental-700 transition-colors whitespace-nowrap">
                        {t('slideDemo.team.viewProfile')}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Learn More Section */}
              <motion.div
                className="max-w-2xl mx-auto text-center mt-4 md:mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-base md:text-lg font-display font-bold text-dental-800 mb-3 md:mb-4">
                  {t('slideDemo.team.learnMore')}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  <motion.button
                    onClick={() => navigate('/about')}
                    className="bg-dental-600 hover:bg-dental-700 text-white rounded-lg py-2.5 md:py-3 px-4 md:px-6 text-sm md:text-base font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('slideDemo.team.credo')}
                  </motion.button>

                  <motion.button
                    onClick={() => navigate('/testimonials')}
                    className="bg-dental-600 hover:bg-dental-700 text-white rounded-lg py-2.5 md:py-3 px-4 md:px-6 text-sm md:text-base font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('slideDemo.team.testimonials')}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Slide>

        {/* Front Page - For Dentists & Patients */}
        <Slide background="gradient" id="services" className="relative">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            poster="/assets/images/video-posters/nic-reto-intro-poster.jpg"
            preload="metadata"
            ref={(video) => {
              if (video) {
                video.playbackRate = 0.5; // Slow down to half speed
              }
            }}
          >
            <source src="/assets/nic-reto-site-intro-v1-long.webm" type="video/webm" />
          </video>
          
          {/* Overlay for better readability - same as entry slide */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />

          <div className="container max-w-4xl mx-auto px-4 text-center relative z-10 h-full flex items-center justify-center pt-4 pb-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
                <motion.div
                  className="bg-dental-600 text-white rounded-xl p-4 md:p-8 shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                           onClick={() => navigate('/for-dentists')}
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">🦷</div>
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4">
                    {t('slideDemo.services.forDentists.title')}
                  </h3>
                  <p className="text-dental-100 mb-4 md:mb-6 text-sm md:text-base">
                    {t('slideDemo.services.forDentists.description')}
                  </p>
                  <div className="bg-white/20 px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium">
                    {t('slideDemo.services.forDentists.cta')}
                  </div>
                </motion.div>

                <motion.div
                  className="bg-dental-100 text-dental-800 rounded-xl p-4 md:p-8 shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                           onClick={() => navigate('/visit')}
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">🔍</div>
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4">
                    {t('slideDemo.services.forPatients.title')}
                  </h3>
                  <p className="text-dental-600 mb-4 md:mb-6 text-sm md:text-base">
                    {t('slideDemo.services.forPatients.description')}
                  </p>
                  <div className="bg-dental-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium">
                    {t('slideDemo.services.forPatients.cta')}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Slide>

        {/* Closing Slide with Video Background */}
        <ClosingSlide />
      </SlideContainer>
    </div>
  );
};

export default SlideDemoPage;
