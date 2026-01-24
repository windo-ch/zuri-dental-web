import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Award, Sparkles, Zap, Clock, ChevronRight, CheckCircle2, Globe } from 'lucide-react';

const AboutPage = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Create refs for different sections to animate them when they come into view
  const { ref: introRef, inView: introInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  const { ref: historyRef, inView: historyInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  const { ref: missionRef, inView: missionInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  const { ref: teamRef, inView: teamInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  const { ref: valuesRef, inView: valuesInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
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

  const teamMemberVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.7
      }
    })
  };

  const valueItems = [
    {
      icon: <Award className="h-8 w-8 text-dental-500" />,
      title: "Excellence",
      description: "We strive for perfection in every dental restoration we create."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-dental-500" />,
      title: "Precision",
      description: "Meticulous attention to detail in our craftsmanship and technical processes."
    },
    {
      icon: <Zap className="h-8 w-8 text-dental-500" />,
      title: "Innovation",
      description: "Continuous integration of new technologies and advanced techniques."
    },
    {
      icon: <Clock className="h-8 w-8 text-dental-500" />,
      title: "Partnership",
      description: "Close collaboration with dental professionals for optimal results."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 bg-gradient-to-b from-dental-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-dental-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-center">
            <motion.div 
              className="md:w-1/2 md:pr-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dental-800 mb-6 leading-tight">
                Excellence in <span className="text-dental-600">Dental Artistry</span>
              </h1>
              <p className="text-xl text-dental-700 mb-8 leading-relaxed">
                {t('companyPage.intro')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/for-dentists" 
                  className="inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-medium transition-colors hover:bg-dental-700 shadow-md"
                >
                  For Dentists
                  <ChevronRight size={16} className="ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 border border-dental-300 text-dental-700 rounded-lg font-medium transition-colors hover:bg-dental-50"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 mt-10 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-dental-100 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dental-100 rounded-full z-0"></div>
                <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="/assets/images/core/Bahnhofstrasse-s.jpg" 
                    alt="Pietrobon & Michel Dental Laboratory" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Team Section */}
      <section 
        ref={teamRef}
        className="py-20 bg-white"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-4">
              Our Dental Technicians
            </h2>
            <p className="text-xl text-dental-600 max-w-3xl mx-auto">
              A perfectly coordinated lab-team with decades of experience in dental craftsmanship.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              className="relative group"
              variants={teamMemberVariants}
              custom={0}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-dental-600/70 to-dental-800/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-10"></div>
              <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
                <div className="aspect-w-4 aspect-h-5 relative">
                  <img 
                    src="/assets/images/core/about-nic.jpg" 
                    alt="Nicola Pietrobon" 
                    className="object-cover object-center h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 drop-shadow-md">
                    Nicola Pietrobon
                  </h3>
                  <p className="text-white/90 font-medium mb-4 drop-shadow-md">
                    Dental Technician
                  </p>
                  <p className="text-white/80 mb-6 line-clamp-2 md:line-clamp-3 transition-all duration-300 group-hover:line-clamp-none drop-shadow-md">
                    Renowned expert in aesthetic prosthodontics and dental teamwork. Active member of the European Academy of Esthetic Dentistry and internationally respected author and presenter.
                  </p>
                  <Link 
                    to="/nicola-pietrobon" 
                    className="inline-flex items-center px-5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium backdrop-blur-sm transition-colors"
                  >
                    Read full profile
                    <ChevronRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative group"
              variants={teamMemberVariants}
              custom={1}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-dental-600/70 to-dental-800/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-10"></div>
              <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
                <div className="aspect-w-4 aspect-h-5 relative">
                  <img 
                    src="/assets/images/core/about-reto.jpg" 
                    alt="Reto Michel" 
                    className="object-cover object-center h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 drop-shadow-md">
                    Reto Michel
                  </h3>
                  <p className="text-white/90 font-medium mb-4 drop-shadow-md">
                    Dental Technician
                  </p>
                  <p className="text-white/80 mb-6 line-clamp-2 md:line-clamp-3 transition-all duration-300 group-hover:line-clamp-none drop-shadow-md">
                    Specialist in fixed dentures and esthetic implant restorations. Trained in advanced dental technology at the University of Zurich with expertise in temporomandibular disorders solutions.
                  </p>
                  <Link 
                    to="/reto-michel" 
                    className="inline-flex items-center px-5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium backdrop-blur-sm transition-colors"
                  >
                    Read full profile
                    <ChevronRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* History & Mission Section */}
      <section className="py-20 bg-dental-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={historyRef}
              variants={fadeIn}
              initial="hidden"
              animate={historyInView ? "visible" : "hidden"}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-display font-bold text-dental-800 mb-6">
                {t('companyPage.history.title')}
              </h2>
              <p className="text-dental-700 mb-6 leading-relaxed">
                {t('companyPage.history.content')}
              </p>
              
              <h2 className="text-3xl font-display font-bold text-dental-800 mb-6 mt-12">
                {t('companyPage.mission.title')}
              </h2>
              <p className="text-dental-700 mb-6 leading-relaxed">
                {t('companyPage.mission.content')}
              </p>
              
              <div className="mt-8">
                <Link 
                  to="/for-dentists" 
                  className="inline-flex items-center text-dental-600 font-medium hover:text-dental-800 transition-colors"
                >
                  Learn about our services for dentists
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              ref={missionRef}
              className="relative order-1 md:order-2"
              variants={fadeIn}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-dental-100 rounded-xl z-0 transform rotate-6"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-dental-200 rounded-xl z-0 transform -rotate-6"></div>
                <div className="relative z-10 p-8 bg-white rounded-xl shadow-xl">
                  <div className="text-5xl text-dental-200 mb-4">"</div>
                  <blockquote className="italic text-xl text-dental-800 mb-6">
                    {t('companyPage.quote')}
                  </blockquote>
                  <div className="flex justify-end">
                    <div className="text-5xl text-dental-200">"</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-12">
                <div className="flex -space-x-4">
                  <img 
                    src="/assets/images/core/EAED.png" 
                    alt="EAED" 
                    className="w-16 h-16 object-contain bg-white rounded-full border-2 border-white shadow-md"
                  />
                  <img 
                    src="/assets/images/core/SSRD.png" 
                    alt="SSRD" 
                    className="w-16 h-16 object-contain bg-white rounded-full border-2 border-white shadow-md"
                  />
                  <img 
                    src="/assets/images/core/IAED.png" 
                    alt="IAED" 
                    className="w-16 h-16 object-contain bg-white rounded-full border-2 border-white shadow-md"
                  />
                  <img 
                    src="/assets/images/core/VZLS.png" 
                    alt="VZLS" 
                    className="w-16 h-16 object-contain bg-white rounded-full border-2 border-white shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section 
        ref={valuesRef}
        className="py-20 bg-white"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-dental-600 max-w-3xl mx-auto">
              The principles that guide our laboratory in delivering exceptional dental work.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            {valueItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-dental-50 rounded-xl p-6 border border-dental-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                variants={fadeIn}
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-dental-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-dental-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dental-600 to-dental-800 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">
              Experience the Excellence of Pietrobon & Michel
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Partner with our laboratory for exceptional dental restorations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/for-dentists" 
                className="px-6 py-3 bg-white text-dental-700 rounded-lg font-medium transition-colors hover:bg-dental-50"
              >
                For Dental Professionals
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </div>
  );
};

export default AboutPage;
