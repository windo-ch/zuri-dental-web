
import { useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
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

  return (
    <section id="about" ref={sectionRef} className="section-container">
      <h2 className="section-title animate-on-scroll">
        {t('about.title')}
      </h2>
      <p className="section-subtitle animate-on-scroll">
        {t('about.subtitle')}
      </p>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
        <div className="animate-on-scroll">
          <p className="text-lg mb-6">
            {t('about.description')}
          </p>
          <div className="h-1 w-24 bg-dental-500 rounded-full mb-6" />
          <p className="text-muted-foreground">
            Pietrobon & Michel combines traditional craftsmanship with cutting-edge technology to deliver dental solutions that exceed expectations. Our team of specialists has decades of combined experience and a passion for perfection.
          </p>
        </div>
        
        <div className="relative h-80 md:h-auto overflow-hidden rounded-lg shadow-xl animate-on-scroll">
          <img 
            src="https://images.unsplash.com/photo-1629909615183-141b5a1c0fb0?q=80&w=2069&auto=format&fit=crop" 
            alt="Dental laboratory" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h3 className="text-2xl font-display font-medium text-center mb-12 animate-on-scroll">
        {t('about.team')}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Team Member - Nicola */}
        <div className="flex flex-col md:flex-row gap-6 items-center animate-on-scroll">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-dental-100 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Nicola Pietrobon" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-display font-medium text-dental-800 mb-1">
              {t('about.nicolaTitle')}
            </h4>
            <p className="text-sm text-dental-500 mb-3">
              {t('about.nicolaPosition')}
            </p>
            <p className="text-muted-foreground">
              {t('about.nicolaBio')}
            </p>
          </div>
        </div>
        
        {/* Team Member - Reto */}
        <div className="flex flex-col md:flex-row gap-6 items-center animate-on-scroll">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-dental-100 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Reto Michel" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-display font-medium text-dental-800 mb-1">
              {t('about.retoTitle')}
            </h4>
            <p className="text-sm text-dental-500 mb-3">
              {t('about.retoPosition')}
            </p>
            <p className="text-muted-foreground">
              {t('about.retoBio')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
