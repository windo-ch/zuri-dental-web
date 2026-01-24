import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FloatingBackButton from '@/components/FloatingBackButton';
import SlideNavBarBottom from '@/components/slides/SlideNavBar';
import SlideFooter from '@/components/slides/SlideFooter';
import { SEO } from '@/components/SEO';

const TestimonialsPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // All real patient testimonial images
  // NOTE: Image files currently have .jpg.jpeg extension. These should be renamed to .jpg
  // and the paths below updated accordingly for proper naming convention.
  const galleryImages = [
    "/assets/images/PM-testimonials-2025/testimonial-1.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-2.jpg.jpeg", 
    "/assets/images/PM-testimonials-2025/testimonial-3.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-4.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-5.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-6.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-7.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-8.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-9.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-10.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-11.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-12.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-13.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-14.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-15.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-16.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-17.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-18.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-19.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-20.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-21.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-22.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-23.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-24.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-25.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-26.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-27.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-28.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-29.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-30.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-31.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-32.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-33.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-34.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-35.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-36.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-37.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-38.jpeg",
    "/assets/images/PM-testimonials-2025/testimonial-39.jpg.jpeg",
    "/assets/images/PM-testimonials-2025/opera-testimonial-pund-m.jpg.jpeg"
  ];

  // Close image modal on escape and navigate with arrow keys
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (selectedImage && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        const currentIndex = galleryImages.indexOf(selectedImage);
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          setSelectedImage(galleryImages[currentIndex - 1]);
        } else if (e.key === 'ArrowRight' && currentIndex < galleryImages.length - 1) {
          setSelectedImage(galleryImages[currentIndex + 1]);
        }
      }
    };
    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [selectedImage, galleryImages]);

  // Create random grid sizes for masonry effect
  const getRandomSize = (index: number) => {
    const patterns = [
      'col-span-1 row-span-1', // Small square
      'col-span-2 row-span-1', // Wide rectangle
      'col-span-1 row-span-2', // Tall rectangle
      'col-span-2 row-span-2', // Large square
      'col-span-1 row-span-1', // Small square
      'col-span-1 row-span-1', // Small square
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
      <SEO 
        title={t('seo.testimonials.title')}
        description={t('seo.testimonials.description')}
      />
      <FloatingBackButton />

      {/* Main Content */}
      <main className="pt-16 pb-20">
        {/* Simple Header */}
        <section className="py-12">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('slides.testimonials.title')}
            </motion.h1>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="pb-16">
          <div className="container max-w-7xl mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`${getRandomSize(index)} overflow-hidden cursor-pointer group relative`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.05 * index,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${t('slides.testimonials.imageAlt')} ${index + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    role="presentation"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-dental-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt={t('slides.testimonials.imageAlt')}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            />
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
              aria-label={t('slides.testimonials.closeModal')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Navigation hint */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
              {t('slides.testimonials.closeModal')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <SlideFooter />

      {/* Bottom Navigation */}
      <SlideNavBarBottom />
    </div>
  );
};

export default TestimonialsPage;