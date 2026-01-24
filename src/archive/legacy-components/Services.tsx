import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Paintbrush, Computer, Heart, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

interface ServiceItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const Services = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const handleDiscoverServices = () => {
    const currentLang = i18n.language;
    const basePath = currentLang === 'en' ? '/for-dentists' : `/${currentLang}/for-dentists`;
    navigate(`${basePath}#services`);
    // Add a small delay to ensure the page loads before scrolling to the anchor
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  // Create an array of service items
  const services: ServiceItem[] = [
    {
      title: t('services.restorations.title', 'Dental Restorations'),
      description: t('services.restorations.description', 'We create premium custom-made dental restorations with meticulous attention to detail and aesthetics.'),
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: t('services.aesthetics.title', 'Aesthetic Solutions'),
      description: t('services.aesthetics.description', 'Enhance the beauty of your patients\' smiles with our aesthetically focused solutions.'),
      icon: <Paintbrush className="h-8 w-8" />
    },
    {
      title: t('services.digital.title', 'Digital Workflow'),
      description: t('services.digital.description', 'We leverage the latest digital technologies for precision and efficiency in dental restorations.'),
      icon: <Computer className="h-8 w-8" />
    },
    {
      title: t('services.care.title', 'Patient-Centered Care'),
      description: t('services.care.description', 'We work with dentists to ensure each patient receives personalized attention and optimal results.'),
      icon: <Heart className="h-8 w-8" />
    }
  ];
  
  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-4">
            {t('services.title', 'Our Services')}
          </h2>
          <p className="text-xl text-dental-600 max-w-3xl mx-auto">
            {t('services.subtitle', 'Comprehensive dental technology solutions for dentists and patients')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md border border-gray-100 p-6"
            >
              <div className="flex items-start">
                <div className="bg-dental-100 p-3 rounded-lg text-dental-600 mr-4 hidden sm:block">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dental-800 mb-2 flex items-center">
                    <span className="sm:hidden mr-2 bg-dental-100 p-1.5 rounded text-dental-600">
                      {service.icon}
                    </span>
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Discover All Services Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={handleDiscoverServices}
            className="inline-flex items-center px-8 py-3 bg-dental-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-dental-700 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {t('services.discoverAll', 'Discover All Services')}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 