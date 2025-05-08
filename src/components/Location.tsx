
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Phone } from 'lucide-react';
import { useAnimationObserver } from '../hooks/useAnimationObserver';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Location = () => {
  const { t } = useLanguage();
  useAnimationObserver();

  return (
    <section id="location" className="section-container bg-slate-50">
      <h2 className="section-title animate-on-scroll">
        {t('location.title')}
      </h2>
      <p className="section-subtitle animate-on-scroll">
        {t('location.subtitle')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Map */}
        <div className="animate-on-scroll h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.0389471908707!2d8.537300076591618!3d47.37038797116796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a080ff284a5%3A0xff6f47cf4ca14d12!2sBahnhofstrasse%2035%2C%208001%20Z%C3%BCrich!5e0!3m2!1sen!2sch!4v1712156830482!5m2!1sen!2sch"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office location"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center animate-on-scroll">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-medium mb-4">{t('location.address')}</h3>
            <div className="flex items-start gap-3 text-lg text-gray-700">
              <MapPin className="mt-1" />
              <address className="not-italic">
                Pietrobon & Michel<br />
                Bahnhofstrasse 35<br />
                8001 Zürich<br />
                Schweiz
              </address>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-display font-medium mb-4">{t('location.contact')}</h3>
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <Phone />
              <a href="tel:+41442220565" className="hover:text-primary transition-colors">
                +41 44 222 05 65
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-medium mb-4">{t('location.hours')}</h3>
            <p className="text-lg text-gray-700 mb-4">
              {t('location.appointment_only')}
            </p>
            <Button
              className={cn(
                "group flex items-center gap-2 font-medium"
              )}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('location.book_appointment')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
