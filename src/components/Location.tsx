
import { useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Phone } from 'lucide-react';

const Location = () => {
  const { t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
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

  // This would normally use a proper map API like Google Maps or Mapbox
  // For demo purposes, we're using an iframe with OpenStreetMap
  return (
    <section id="location" className="relative py-16 md:py-24 bg-dental-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title animate-on-scroll">
          {t('location.title')}
        </h2>
        <p className="section-subtitle animate-on-scroll">
          {t('location.subtitle')}
        </p>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 animate-on-scroll">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="text-dental-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">{t('location.address')}</h3>
                  <p className="text-sm text-dental-700 font-medium mt-4">
                    {t('location.appointmentOnly')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 mb-6">
                <Phone className="text-dental-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">+41 44 222 05 65</h3>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Bahnhofstrasse+35,+8001+Zürich,+Schweiz"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 px-4 bg-dental-500 hover:bg-dental-600 text-white font-medium rounded-md transition-colors"
              >
                {t('location.directions')}
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 h-96 rounded-lg overflow-hidden shadow-lg animate-on-scroll" ref={mapContainerRef}>
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=8.534470796585084%2C47.36757494628323%2C8.539695739746094%2C47.369633195428284&amp;layer=mapnik&amp;marker=47.368604082305924%2C8.537083268165588"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              title="Map"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
