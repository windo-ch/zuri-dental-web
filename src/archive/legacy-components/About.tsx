import { useTranslation } from 'react-i18next';
import { Award, Clock, Star, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();
  
  // Create refs for different sections to animate them when they come into view
  const { ref: titleRef, inView: titleInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  const { ref: descriptionRef, inView: descriptionInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });
  const { ref: teamRef, inView: teamInView } = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const benefitsData = [
    {
      title: t('about.benefits.quality.title', 'Premium Quality'),
      description: t('about.benefits.quality.description', 'Exceptional materials and craftsmanship for lasting results'),
      icon: <Star className="h-8 w-8 text-dental-500" aria-hidden="true" />,
      iconLabel: 'Star icon representing quality'
    },
    {
      title: t('about.benefits.experience.title', 'Experience'),
      description: t('about.benefits.experience.description', 'Over 25 years of excellence in dental technology'),
      icon: <Award className="h-8 w-8 text-dental-500" aria-hidden="true" />,
      iconLabel: 'Award icon representing experience'
    },
    {
      title: t('about.benefits.timeliness.title', 'Timely Delivery'),
      description: t('about.benefits.timeliness.description', 'Reliable and punctual service for your peace of mind'),
      icon: <Clock className="h-8 w-8 text-dental-500" aria-hidden="true" />,
      iconLabel: 'Clock icon representing timely delivery'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white" aria-labelledby="about-title">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div 
          ref={titleRef}
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          <motion.h2 id="about-title" className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-4">
            {t('about.title')}
          </motion.h2>
          <motion.p className="text-xl text-dental-600 mb-8">
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          ref={descriptionRef}
          className="max-w-3xl mx-auto mb-16"
          variants={fadeIn}
          initial="hidden"
          animate={descriptionInView ? "visible" : "hidden"}
        >
          <motion.p className="text-lg mb-6">
            {t('about.description')}
          </motion.p>
          <motion.div 
            className="h-1 w-24 bg-dental-500 rounded-full mb-6 mx-auto md:mx-0"
            initial={{ width: 0 }}
            animate={descriptionInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            aria-hidden="true"
          />
          <motion.p className="text-gray-600">
            {t('about.additionalDescription', 'Pietrobon & Michel combines traditional craftsmanship with cutting-edge technology to deliver dental solutions that exceed expectations. Our team of specialists has decades of combined experience and a passion for perfection.')}
          </motion.p>
        </motion.div>
        
        <div aria-labelledby="benefits-title" className="mb-16">
          <h3 id="benefits-title" className="sr-only">{t('about.benefitsTitle', 'The Pietrobon & Michel Advantage')}</h3>
          <motion.div
            ref={benefitsRef} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20"
            variants={staggerContainer}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            aria-live="polite"
          >
            {benefitsData.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                variants={fadeIn}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)" 
                }}
              >
                <motion.div 
                  className="mb-4 text-dental-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  aria-label={benefit.iconLabel}
                >
                  {benefit.icon}
                </motion.div>
                <h4 className="text-xl font-medium mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div aria-labelledby="team-title" className="mt-20">
          <motion.div 
            ref={teamRef}
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            <motion.h2 
              id="team-title" 
              className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-4"
            >
              {t('about.team', 'Our Team')}
            </motion.h2>
            <motion.p className="text-xl text-dental-600 max-w-3xl mx-auto">
              {t('about.teamSubtitle', 'Meet the experts behind our exceptional dental laboratory')}
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            aria-live="polite"
          >
            {/* Team Member - Nicola */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={fadeIn}
              whileHover={{ y: -5 }}
              role="article"
              aria-labelledby="nicola-name"
            >
              <div className="text-center">
                <motion.div
                  className="w-40 h-40 rounded-full mx-auto mb-6 bg-gray-200 overflow-hidden border-4 border-dental-50 shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="/assets/images/core/about-nic.jpg" 
                    alt="Nicola Pietrobon"
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/placeholder-person.svg';
                    }}
                  />
                </motion.div>
                
                <h4 id="nicola-name" className="text-2xl font-display font-semibold text-dental-800 mb-1">
                  {t('about.nicolaTitle')}
                </h4>
                <p className="text-dental-500 font-medium mb-4">
                  {t('about.nicolaPosition')}
                </p>
                <p className="text-dental-600 mb-6">
                  {t('about.nicolaBio')}
                </p>
                
                <div className="flex justify-center mt-6">
                  <Link
                    to="/nicola-pietrobon"
                    className="inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-dental-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 h-11"
                  >
                    {t('about.learnMore', 'Learn more')}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Team Member - Reto */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={fadeIn}
              whileHover={{ y: -5 }}
              role="article"
              aria-labelledby="reto-name"
            >
              <div className="text-center">
                <motion.div
                  className="w-40 h-40 rounded-full mx-auto mb-6 bg-gray-200 overflow-hidden border-4 border-dental-50 shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="/assets/images/core/about-reto.jpg" 
                    alt="Reto Michel"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/placeholder-person.svg';
                    }}
                  />
                </motion.div>
                
                <h4 id="reto-name" className="text-2xl font-display font-semibold text-dental-800 mb-1">
                  {t('about.retoTitle')}
                </h4>
                <p className="text-dental-500 font-medium mb-4">
                  {t('about.retoPosition')}
                </p>
                <p className="text-dental-600 mb-6">
                  {t('about.retoBio')}
                </p>
                
                <div className="flex justify-center mt-6">
                  <Link
                    to="/reto-michel"
                    className="inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-dental-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 h-11"
                  >
                    {t('about.learnMore', 'Learn more')}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
