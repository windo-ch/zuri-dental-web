
import { useLanguage } from '../hooks/useLanguage';
import { useAnimationObserver } from '../hooks/useAnimationObserver';

const Partners = () => {
  const { t } = useLanguage();
  useAnimationObserver();
  
  // Using placeholder gray logos for partner brands
  const partnerLogos = [
    "https://placehold.co/200x80/e6e6e6/a1a1a1?text=Partner+1",
    "https://placehold.co/200x80/e6e6e6/a1a1a1?text=Partner+2",
    "https://placehold.co/200x80/e6e6e6/a1a1a1?text=Partner+3",
    "https://placehold.co/200x80/e6e6e6/a1a1a1?text=Partner+4",
    "https://placehold.co/200x80/e6e6e6/a1a1a1?text=Partner+5",
    "https://placehold.co/200x80/e6e6e6/a1a1a1?text=Partner+6",
  ];

  return (
    <section id="partners" className="section-container">
      <h2 className="section-title animate-on-scroll">
        {t('partners.title')}
      </h2>
      <p className="section-subtitle animate-on-scroll">
        {t('partners.subtitle')}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="animate-on-scroll">
            <img 
              src={logo} 
              alt={`Partner ${index + 1}`} 
              className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
