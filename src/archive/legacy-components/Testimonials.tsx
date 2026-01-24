import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ValueItem {
  title: string;
  description: string;
}

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  
  // Get values from the correct path in translations
  const valuesItems = t('testimonials.credo.values', { returnObjects: true }) as ValueItem[] || [];
  
  // Create refs for animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: credoRef, inView: credoInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="credo" 
      ref={sectionRef}
      className="py-20 bg-dental-50"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-4">
            {t('testimonials.credo.title')}
          </h2>
          <p className="text-xl text-dental-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            ref={credoRef}
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={credoInView ? "visible" : "hidden"}
          >
            {/* Adding a check to ensure valuesItems is an array before mapping */}
            {Array.isArray(valuesItems) && valuesItems.map((value: ValueItem, index: number) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                variants={fadeIn}
              >
                <h3 className="text-xl font-display font-semibold text-dental-700 mb-3">{value.title}</h3>
                <p className="text-dental-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            ref={testimonialsRef}
            variants={fadeIn}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-2xl font-display font-semibold text-dental-700 mb-4 text-center">
              What the Patients of our Dentists Say
            </h3>
            <p className="text-lg text-dental-600 mb-6 text-center max-w-2xl">
              Discover real stories and smiles from patients who have benefited from our laboratory's work, as shared by their dentists.
            </p>
            <a
              href={`/${i18n.language.split('-')[0]}/patient-testimonials`}
              className="inline-block px-8 py-4 bg-dental-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-dental-500"
            >
              View Patient Testimonials
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
