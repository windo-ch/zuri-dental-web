import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Partners = () => {
  const { t } = useTranslation();
  
  // Create ref for the section to animate when it comes into view
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: partnersRef, inView: partnersInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Using SVG placeholder images for partner brands
  const partnerLogos = [
    "/assets/logos/partner-1.svg",
    "/assets/logos/partner-2.svg",
    "/assets/logos/partner-3.svg",
    "/assets/logos/partner-4.svg", 
    "/assets/logos/partner-5.svg",
    "/assets/logos/partner-6.svg",
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="partners" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-xl text-dental-600 max-w-3xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          ref={partnersRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate={partnersInView ? "visible" : "hidden"}
        >
          {partnerLogos.map((logo, index) => (
            <motion.div 
              key={index} 
              variants={itemFadeIn}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)", y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
            >
              <img 
                src={logo} 
                alt={`Partner ${index + 1}`} 
                className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  // If partner logos are missing, use a generic SVG
                  (e.target as HTMLImageElement).src = `/assets/logos/partner-${index + 1}.svg`;
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate={partnersInView ? "visible" : "hidden"}
          className="text-dental-600 text-center mt-16 max-w-3xl mx-auto"
        >
          {t('partners.description')}
        </motion.p>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={partnersInView ? "visible" : "hidden"}
          className="mt-8 text-center"
        >
          <Button
            asChild
            size="lg"
            className="inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-dental-700 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Link to="/contact">
              {t('partners.contact')}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
