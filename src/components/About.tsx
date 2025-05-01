
import { useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Award, Clock, Star } from 'lucide-react';

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
  
  const benefits = [
    {
      title: 'Premium Quality',
      description: 'Exceptional materials and craftsmanship for lasting results',
      icon: <Star className="h-8 w-8 text-dental-500" />
    },
    {
      title: 'Experience',
      description: 'Over 25 years of excellence in dental technology',
      icon: <Award className="h-8 w-8 text-dental-500" />
    },
    {
      title: 'Timely Delivery',
      description: 'Reliable and punctual service for your peace of mind',
      icon: <Clock className="h-8 w-8 text-dental-500" />
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-container">
      <h2 className="section-title animate-on-scroll">
        {t('about.title')}
      </h2>
      <p className="section-subtitle animate-on-scroll">
        {t('about.subtitle')}
      </p>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
        <div className="animate-on-scroll order-2 md:order-1">
          <p className="text-lg mb-6">
            {t('about.description')}
          </p>
          <div className="h-1 w-24 bg-dental-500 rounded-full mb-6" />
          <p className="text-muted-foreground">
            Pietrobon & Michel combines traditional craftsmanship with cutting-edge technology to deliver dental solutions that exceed expectations. Our team of specialists has decades of combined experience and a passion for perfection.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="mb-4 transform group-hover:-translate-y-1 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative h-80 md:h-auto overflow-hidden rounded-lg shadow-xl animate-on-scroll order-1 md:order-2">
          <div className="absolute inset-0 bg-dental-500/10 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1629909615183-141b5a1c0fb0?q=80&w=2069&auto=format&fit=crop" 
            alt="Dental laboratory" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      <h3 className="text-2xl font-display font-medium text-center mb-12 animate-on-scroll">
        {t('about.team')}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Team Member - Nicola */}
        <div className="flex flex-col md:flex-row gap-6 items-center animate-on-scroll bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-dental-100 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Nicola Pietrobon" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-center md:justify-start space-x-3">
                {['#', '#'].map((_, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-dental-50 hover:bg-dental-100 transition-colors"
                  >
                    <svg className="w-4 h-4 text-dental-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Member - Reto */}
        <div className="flex flex-col md:flex-row gap-6 items-center animate-on-scroll bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-dental-100 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Reto Michel" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-center md:justify-start space-x-3">
                {['#', '#'].map((_, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-dental-50 hover:bg-dental-100 transition-colors"
                  >
                    <svg className="w-4 h-4 text-dental-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
