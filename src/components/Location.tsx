
import { useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Phone } from 'lucide-react';

const Location = () => {
  const { t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="location" className="section-container bg-dental-50">
      <h2 className="section-title animate-on-scroll">
        {t('location.title')}
      </h2>
      <p className="section-subtitle animate-on-scroll">
        {t('location.subtitle')}
      </p>

      <div className="grid md:grid-cols-2 gap-8 animate-on-scroll">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="bg-dental-100 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-dental-600" />
            </div>
            <div>
              <h3 className="font-medium text-lg">{t('location.address')}</h3>
              <p className="text-muted-foreground">Bahnhofstrasse 35, 8001 Zürich, Schweiz</p>
              <p className="text-sm font-medium text-dental-600 mt-1">{t('location.appointmentOnly')}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-dental-100 p-3 rounded-full">
              <Phone className="h-6 w-6 text-dental-600" />
            </div>
            <div>
              <h3 className="font-medium text-lg">{t('location.phone')}</h3>
              <a href="tel:+41442220565" className="text-dental-600 hover:text-dental-700 transition-colors">
                +41 44 222 05 65
              </a>
            </div>
          </div>
        </div>

        <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.2639208169655!2d8.536501276526575!3d47.3715045711734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa7fe0f11cf91%3A0xebf6aa8e5c2d6b1c!2sBahnhofstrasse%2035%2C%208001%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1715847138215!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Pietrobon & Michel Location"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a 
          href="https://goo.gl/maps/R52xzNPHbZ9sJJzx9" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-4 py-2 bg-dental-600 text-white rounded-md hover:bg-dental-700 transition-colors"
        >
          {t('location.directions')}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Location;
