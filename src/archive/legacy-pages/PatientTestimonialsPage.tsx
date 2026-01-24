import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const testimonialImages = [
  // List of image filenames from the folder
  "opera-testimonial-pund-m.jpg.jpeg",
  "testimonial-1.jpg.jpeg",
  "testimonial-2.jpg.jpeg",
  "testimonial-3.jpg.jpeg",
  "testimonial-3-2019.jpg.jpeg",
  "testimonial-4.jpg.jpeg",
  "testimonial-5.jpg.jpeg",
  "testimonial-6.jpg.jpeg",
  "testimonial-7.jpg.jpeg",
  "testimonial-8.jpg.jpeg",
  "testimonial-9.jpg.jpeg",
  "testimonial-10.jpg.jpeg",
  "testimonial-11.jpg.jpeg",
  "testimonial-12.jpg.jpeg",
  "testimonial-13.jpg.jpeg",
  "testimonial-14.jpg.jpeg",
  "testimonial-15.jpg.jpeg",
  "testimonial-16.jpg.jpeg",
  "testimonial-17.jpg.jpeg",
  "testimonial-18.jpg.jpeg",
  "testimonial-19.jpg.jpeg",
  "testimonial-20.jpg.jpeg",
  "testimonial-21.jpg.jpeg",
  "testimonial-22.jpg.jpeg",
  "testimonial-23.jpg.jpeg",
  "testimonial-24.jpg.jpeg",
  "testimonial-25.jpg.jpeg",
  "testimonial-26.jpg.jpeg",
  "testimonial-27.jpg.jpeg",
  "testimonial-28.jpg.jpeg",
  "testimonial-29.jpg.jpeg",
  "testimonial-30.jpg.jpeg",
  "testimonial-31.jpg.jpeg",
  "testimonial-32.jpg.jpeg",
  "testimonial-33.jpg.jpeg",
  "testimonial-34.jpg.jpeg",
  "testimonial-35.jpg.jpeg",
  "testimonial-36.jpg.jpeg",
  "testimonial-37.jpeg",
  "testimonial-38.jpeg",
  "testimonial-39.jpg.jpeg",
  "testimonial-f3-2019.jpg.jpeg",
  "opera-testimonial-pund-m-865x1223.jpg.jpeg"
];

const imageBase = "/assets/images/PM-testimonials-2025/";

const PatientTestimonialsPage = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  // Open modal and set current index
  const openModal = (img: string, idx: number) => {
    setSelected(img);
    setCurrentIndex(idx);
  };

  // Keyboard navigation
  React.useEffect(() => {
    if (selected === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowLeft') setCurrentIndex(i => (i > 0 ? i - 1 : testimonialImages.length - 1));
      if (e.key === 'ArrowRight') setCurrentIndex(i => (i < testimonialImages.length - 1 ? i + 1 : 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected]);

  // Update selected image when currentIndex changes
  React.useEffect(() => {
    if (currentIndex >= 0 && currentIndex < testimonialImages.length) {
      setSelected(testimonialImages[currentIndex]);
    }
  }, [currentIndex]);

  // Swipe support (basic)
  let touchStartX = 0;
  let touchEndX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 50) setCurrentIndex(i => (i > 0 ? i - 1 : testimonialImages.length - 1));
    if (touchStartX - touchEndX > 50) setCurrentIndex(i => (i < testimonialImages.length - 1 ? i + 1 : 0));
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-dental-50 min-h-screen">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-10 text-center">
            Patient Testimonials Gallery
          </h1>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {testimonialImages.map((img, i) => (
              <div key={img} className="mb-4 break-inside-avoid">
                <img
                  src={imageBase + img}
                  alt={img.replace(/[-_]/g, ' ').replace(/\..+$/, '')}
                  className="w-full rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => openModal(img, i)}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Lightbox Modal with navigation */}
          {selected && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              onClick={() => setSelected(null)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <button
                className="absolute left-4 md:left-12 text-white text-4xl font-bold bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition"
                onClick={e => { e.stopPropagation(); setCurrentIndex(i => (i > 0 ? i - 1 : testimonialImages.length - 1)); }}
                aria-label="Previous"
              >
                &#8592;
              </button>
              <img
                src={imageBase + selected}
                alt={selected.replace(/[-_]/g, ' ').replace(/\..+$/, '')}
                className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white"
                onClick={e => e.stopPropagation()}
              />
              <button
                className="absolute right-4 md:right-12 text-white text-4xl font-bold bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition"
                onClick={e => { e.stopPropagation(); setCurrentIndex(i => (i < testimonialImages.length - 1 ? i + 1 : 0)); }}
                aria-label="Next"
              >
                &#8594;
              </button>
              <button
                className="absolute top-8 right-8 text-white text-3xl font-bold bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition"
                onClick={e => { e.stopPropagation(); setSelected(null); }}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default PatientTestimonialsPage; 