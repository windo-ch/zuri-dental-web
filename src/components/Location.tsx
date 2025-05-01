
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
    <section id="location" className="py-16 bg-dental-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-4">
            {t('location.title')}
          </h2>
          <div className="w-24 h-1 bg-dental-500 mx-auto mb-6"></div>
          <p className="text-lg text-dental-600 max-w-xl mx-auto">
            {t('location.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-8 rounded-xl shadow-md animate-on-scroll">
            <div className="flex items-start mb-6">
              <MapPin className="text-dental-500 mt-1 mr-3" size={24} />
              <div>
                <h3 className="font-medium text-xl text-dental-800 mb-2">
                  {t('location.address')}
                </h3>
                <p className="text-dental-600">
                  Bahnhofstrasse 35<br />
                  8001 Zürich, Schweiz
                </p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <Phone className="text-dental-500 mt-1 mr-3" size={24} />
              <div>
                <h3 className="font-medium text-xl text-dental-800 mb-2">
                  {t('contact.phone')}
                </h3>
                <p className="text-dental-600">
                  <a href="tel:+41442220565" className="hover:text-dental-500 transition-colors">
                    +41 44 222 05 65
                  </a>
                </p>
              </div>
            </div>
            
            <div className="bg-dental-50 p-4 rounded-lg text-center mt-6">
              <p className="text-dental-700 font-medium">
                {t('location.appointmentOnly')}
              </p>
            </div>
          </div>
          
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg animate-on-scroll" ref={mapContainerRef}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.2639208169655!2d8.536501276526575!3d47.3715045711734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa7fe0f11cf91%3A0xebf6aa8e5c2d6b1c!2sBahnhofstrasse%2035%2C%208001%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1715847138215!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pietrobon & Michel Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
