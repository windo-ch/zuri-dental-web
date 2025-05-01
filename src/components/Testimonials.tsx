
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { cn } from '@/lib/utils';

interface TestimonialItem {
  quote: string;
  author: string;
  position: string;
}

interface ValueItem {
  title: string;
  description: string;
}

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Get testimonials from the correct path in translations
  const testimonials = t('testimonials.testimonials') as TestimonialItem[] || [];
  
  // Get values from the correct path in translations
  const valuesItems = t('testimonials.credo.values') as ValueItem[] || [];
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  useEffect(() => {
    // Only start auto-slide if we have testimonials
    if (testimonials && testimonials.length > 0) {
      startAutoSlide();
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials]);
  
  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Only set interval if we have testimonials
    if (testimonials && testimonials.length > 0) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };
  
  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
    
    // Reset auto-slide timer when manually changing
    startAutoSlide();
  };

  return (
    <section id="credo" className="py-16 md:py-24 bg-dental-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title animate-on-scroll">
          {t('testimonials.credo.title')}
        </h2>
        <p className="section-subtitle animate-on-scroll">
          {t('testimonials.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-on-scroll">
            {/* Adding a check to ensure valuesItems is an array before mapping */}
            {Array.isArray(valuesItems) && valuesItems.map((value: ValueItem, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-display text-dental-700 mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-display mb-8 text-center">
              {t('testimonials.title')}
            </h3>
            
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10">
              {/* Quote icon */}
              <svg 
                className="absolute text-dental-100 w-16 h-16 -top-6 -left-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              {/* Testimonials - Only render if testimonials exist */}
              {Array.isArray(testimonials) && testimonials.length > 0 && (
                <div className="relative overflow-hidden h-48">
                  {testimonials.map((testimonial: TestimonialItem, index: number) => (
                    <div 
                      key={index}
                      className={cn(
                        "absolute inset-0 transition-all duration-500 flex flex-col",
                        index === activeIndex 
                          ? "opacity-100 translate-x-0" 
                          : index < activeIndex
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )}
                    >
                      <p className="text-lg italic mb-6">{testimonial.quote}</p>
                      <div className="mt-auto">
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-dental-600">{testimonial.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Indicators - Only render if testimonials exist */}
              {Array.isArray(testimonials) && testimonials.length > 0 && (
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_: TestimonialItem, index: number) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        index === activeIndex ? "bg-dental-500 w-6" : "bg-dental-200"
                      )}
                      onClick={() => handleIndicatorClick(index)}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
