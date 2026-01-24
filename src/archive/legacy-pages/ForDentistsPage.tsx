import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Download, 
  Award, 
  FileCheck, 
  Clock, 
  Truck, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LabOrderForm from '@/components/LabOrderForm';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { cn } from '@/lib/utils';

// Animation variants (from Index.tsx)
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

// Sample data for WorkShowcase (from Index.tsx)
const workShowcaseItems = [
  {
    id: "1",
    title: "Full Zirconia Crown",
    description: "A full zirconia crown restoration showcasing our precise craftsmanship and attention to detail.",
    beforeImage: "/img/showcase/before-crown.jpg",
    afterImage: "/img/showcase/after-crown.jpg",
    tags: ["Crown", "Zirconia", "Restoration"],
    materialUsed: "Multilayered Zirconia",
    completionTime: "48 hours"
  },
  {
    id: "2",
    title: "Ceramic Veneers",
    description: "A set of six anterior ceramic veneers designed for natural aesthetics and longevity.",
    beforeImage: "/img/showcase/before-veneers.jpg",
    afterImage: "/img/showcase/after-veneers.jpg",
    tags: ["Veneers", "Ceramic", "Anterior"],
    materialUsed: "Lithium Disilicate (e.max)",
    completionTime: "72 hours"
  },
  {
    id: "3",
    title: "Implant-Supported Bridge",
    description: "A three-unit implant-supported bridge combining functionality with aesthetic design.",
    beforeImage: "/img/showcase/before-implant.jpg",
    afterImage: "/img/showcase/after-implant.jpg",
    tags: ["Bridge", "Implant", "Restoration"],
    materialUsed: "Zirconia with Porcelain Layering",
    completionTime: "5 days"
  }
];

// Sample data for MaterialsShowcase (from Index.tsx)
const materialsData = [
  {
    id: "zirconia",
    name: "Zirconia",
    description: "A high-strength ceramic material known for its durability and biocompatibility. Ideal for posterior restorations and implant-supported structures.",
    image: "/img/materials/zirconia.jpg",
    color: "blue",
    icon: "zirconia" as const,
    properties: [
      { name: "Flexural Strength", value: "900-1200 MPa", rating: 5 },
      { name: "Aesthetics", value: "Good to Excellent", rating: 4 },
      { name: "Biocompatibility", value: "Excellent", rating: 5 },
      { name: "Wear Resistance", value: "High", rating: 5 }
    ],
    applications: [
      "Full-contour crowns and bridges",
      "Framework for porcelain layering",
      "Implant abutments and restorations",
      "Posterior restorations"
    ],
    advantages: [
      "Exceptional strength and durability",
      "Metal-free restoration option",
      "Highly biocompatible",
      "Resistance to fracture and chipping",
      "Versatile for various applications"
    ],
    limitations: [
      "Less translucent than glass ceramics",
      "May cause wear on opposing teeth",
      "Requires specific equipment for processing"
    ]
  },
  {
    id: "emax",
    name: "Lithium Disilicate (e.max)",
    description: "A glass-ceramic material combining excellent aesthetics with good strength. Perfect for anterior restorations where beauty is paramount.",
    image: "/img/materials/emax.jpg",
    color: "green",
    icon: "ceramic" as const,
    properties: [
      { name: "Flexural Strength", value: "360-400 MPa", rating: 3 },
      { name: "Aesthetics", value: "Excellent", rating: 5 },
      { name: "Biocompatibility", value: "Excellent", rating: 5 },
      { name: "Wear Resistance", value: "Moderate", rating: 3 }
    ],
    applications: [
      "Anterior crowns and veneers",
      "Inlays and onlays",
      "Single posterior crowns",
      "Small anterior bridges"
    ],
    advantages: [
      "Superior aesthetics and translucency",
      "Natural light transmission",
      "Good color stability",
      "Can be both pressed and milled",
      "Excellent marginal fit"
    ],
    limitations: [
      "Lower strength than zirconia",
      "Not recommended for posterior bridges",
      "More technique-sensitive"
    ]
  },
  {
    id: "pfm",
    name: "Porcelain Fused to Metal (PFM)",
    description: "The traditional standard with proven long-term clinical success. Combines the strength of metal with the aesthetics of porcelain.",
    image: "/img/materials/pfm.jpg",
    color: "gray",
    icon: "metal" as const,
    properties: [
      { name: "Flexural Strength", value: "High (metal substructure)", rating: 4 },
      { name: "Aesthetics", value: "Good", rating: 3 },
      { name: "Biocompatibility", value: "Good", rating: 3 },
      { name: "Wear Resistance", value: "Moderate", rating: 3 }
    ],
    applications: [
      "Full-contour crowns and bridges",
      "Framework for porcelain layering",
      "Implant abutments and restorations",
      "Posterior restorations"
    ],
    advantages: [
      "High strength and durability",
      "Metal-free restoration option",
      "Versatile for various applications",
      "Good color stability"
    ],
    limitations: [
      "May cause wear on opposing teeth",
      "Requires specific equipment for processing"
    ]
  }
];

// Sample process steps data
const processSteps = [
  {
    id: "order",
    title: "Order Placement",
    description: "The initial step where the dentist submits a lab work order with all necessary details and materials.",
    icon: "order" as const,
    duration: "1 day",
    responsibilities: [
      {
        party: "dentist" as const,
        task: "Submit the lab work order with patient information, restoration details, and material preferences."
      },
      {
        party: "laboratory" as const,
        task: "Review the order, contact the dentist for any missing information, and confirm receipt."
      }
    ],
    checkpoints: [
      "Order form properly completed",
      "Impressions or digital scans received",
      "Shade information provided",
      "Timeline and delivery confirmed"
    ],
    image: "/img/process/order.jpg"
  },
  {
    id: "analysis",
    title: "Case Analysis",
    description: "Our technical team examines the case, prepares models, and plans the restoration process.",
    icon: "analysis" as const,
    duration: "1-2 days",
    responsibilities: [
      {
        party: "laboratory" as const,
        task: "Create working models, analyze occlusion, and plan the technical approach for the restoration."
      },
      {
        party: "dentist" as const,
        task: "Be available for any follow-up questions or clarifications about the case."
      }
    ],
    checkpoints: [
      "Models created and articulated",
      "Digital design planning completed",
      "Material selection finalized",
      "Technical approach documented"
    ],
    image: "/img/process/analysis.jpg"
  },
  {
    id: "production",
    title: "Fabrication",
    description: "The restoration is fabricated using state-of-the-art technology and materials according to specifications.",
    icon: "production" as const,
    duration: "2-5 days",
    responsibilities: [
      {
        party: "laboratory" as const,
        task: "Fabricate the restoration using appropriate materials and techniques, following the agreed-upon design."
      }
    ],
    checkpoints: [
      "Material preparation completed",
      "CAD/CAM milling performed if applicable",
      "Layering and characterization applied",
      "Initial fitting on model tested"
    ],
    image: "/img/process/production.jpg"
  },
  {
    id: "quality",
    title: "Quality Control",
    description: "Rigorous quality checks to ensure the restoration meets our high standards and the dentist's specifications.",
    icon: "quality" as const,
    duration: "1 day",
    responsibilities: [
      {
        party: "laboratory" as const,
        task: "Perform multiple quality checks including fit, occlusion, aesthetics, and finish."
      }
    ],
    checkpoints: [
      "Marginal fit verified",
      "Occlusion and contact points checked",
      "Surface finish and polish inspected",
      "Shade and aesthetics verified"
    ],
    image: "/img/process/quality.jpg"
  },
  {
    id: "delivery",
    title: "Delivery",
    description: "The finished restoration is packaged and delivered to the dental practice, ready for placement.",
    icon: "delivery" as const,
    duration: "1 day",
    responsibilities: [
      {
        party: "laboratory" as const,
        task: "Package the restoration securely with all necessary documentation and deliver to the dental practice."
      },
      {
        party: "dentist" as const,
        task: "Receive the restoration, verify its quality, and provide feedback to the laboratory."
      }
    ],
    checkpoints: [
      "Restoration properly disinfected",
      "Packaging secured and labeled",
      "Delivery tracking provided",
      "Documentation included"
    ],
    image: "/img/process/delivery.jpg"
  }
];

const ForDentistsPage = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Create refs for different sections
  const { ref: heroRef, inView: heroInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  const { ref: servicesRef, inView: servicesInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  const { ref: materialsRef, inView: materialsInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const { ref: introRef, inView: introInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const { ref: partnershipRef, inView: partnershipInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-24 bg-gradient-to-b from-dental-50 via-white to-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-dental-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dental-800 mb-6 leading-tight">
                {t('forDentists.hero.title')}
              </h1>
              <p className="text-xl text-dental-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                {t('forDentists.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#request-form" 
                  className="inline-flex items-center px-8 py-4 bg-dental-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-dental-500"
                >
                  {t('forDentists.hero.requestButton')}
                  <ArrowRight size={20} className="ml-2" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center px-8 py-4 border border-dental-300 text-dental-700 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-dental-50"
                >
                  {t('forDentists.hero.servicesButton')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Introduction Section */}
      <section 
        ref={introRef} 
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
          >
            <motion.p 
              className="text-xl text-dental-600 mb-8 text-center leading-relaxed"
              variants={itemVariants}
            >
              Pietrobon & Michel offers comprehensive support and specialized services for dental professionals seeking the highest quality laboratory work for their patients. Our partnership approach ensures seamless collaboration and exceptional results.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section 
        ref={benefitsRef} 
        className="py-24 bg-dental-50"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-6"
              variants={itemVariants}
            >
              {t('forDentists.benefits.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-dental-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t('forDentists.benefits.subtitle')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
          >
            {[1, 2, 3].map((num) => (
              <motion.div 
                key={num}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={itemVariants}
              >
                <div className="w-14 h-14 bg-dental-100 text-dental-600 rounded-full flex items-center justify-center mb-6">
                  {num === 1 && <Award size={28} />}
                  {num === 2 && <Clock size={28} />}
                  {num === 3 && <FileCheck size={28} />}
                </div>
                <h3 className="text-2xl font-display font-semibold text-dental-800 mb-4">
                  {t(`forDentists.benefits.cards.${num}.title`)}
                </h3>
                <p className="text-dental-600 mb-6 text-lg">
                  {t(`forDentists.benefits.cards.${num}.description`)}
                </p>
                <ul className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-dental-500 shrink-0 mr-3 mt-0.5" />
                      <span className="text-dental-700 text-lg">
                        {t(`forDentists.benefits.cards.${num}.points.${item}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100"
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-display font-semibold text-dental-800 mb-6 text-center"
              variants={itemVariants}
            >
              Benefits of Partnership
            </motion.h3>
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
            >
              {[
                "Dedicated technical support for your practice",
                "Consistent quality that exceeds patient expectations",
                "Streamlined communication and case management",
                "Access to the latest materials and techniques",
                "Educational opportunities and technical workshops"
              ].map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <CheckCircle className="h-6 w-6 text-dental-500 shrink-0 mr-3 mt-0.5" />
                  <span className="text-dental-700 text-lg">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section 
        id="services"
        ref={servicesRef}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-6"
              variants={itemVariants}
            >
              {t('forDentists.services.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-dental-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t('forDentists.services.subtitle')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
            >
              {[
                "Full range of fixed prosthetics including crowns, bridges, veneers, and implant restorations",
                "Removable prosthetics with premium aesthetics and comfort",
                "Digital workflow integration with your practice",
                "Technical consultation and treatment planning support",
                "Rush services for urgent cases"
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start bg-dental-50 p-6 rounded-xl hover:bg-dental-100 transition-colors duration-300"
                  variants={itemVariants}
                >
                  <div className="h-10 w-10 bg-dental-100 text-dental-600 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <span className="text-lg font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-dental-700 text-lg">{service}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div 
                key={num}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-display font-semibold text-dental-800 mb-4">
                  {t(`forDentists.services.items.${num}.title`)}
                </h3>
                <p className="text-dental-600 mb-6 text-lg">
                  {t(`forDentists.services.items.${num}.description`)}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dental-500 font-medium">
                    {t(`forDentists.services.items.${num}.timeframe`)}
                  </span>
                  <a 
                    href="#request-form" 
                    className="text-dental-600 hover:text-dental-800 font-medium flex items-center text-sm group"
                  >
                    {t('forDentists.services.requestLink')}
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Partnership Section */}
      <section 
        ref={partnershipRef}
        className="py-24 bg-dental-50"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={partnershipInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-8 text-center"
              variants={itemVariants}
            >
              Becoming a Partner Practice
            </motion.h2>
            <motion.p 
              className="text-xl text-dental-600 mb-12 text-center leading-relaxed"
              variants={itemVariants}
            >
              We carefully select dental practices that share our commitment to excellence and patient care. Our partnership program is designed to create long-term professional relationships that benefit both practices and patients. We limit the number of partner practices to ensure we can provide optimal service and attention to each one.
            </motion.p>
            
            <motion.div 
              className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 mt-12"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-display font-semibold text-dental-800 mb-6 text-center">
                Refer a Case
              </h3>
              <p className="text-dental-600 mb-8 text-center text-lg">
                Ready to experience the Pietrobon & Michel difference? We welcome the opportunity to demonstrate our capabilities with your next case.
              </p>
              <div className="flex justify-center">
                <a 
                  href="#request-form" 
                  className="px-8 py-4 bg-dental-600 text-white rounded-lg font-semibold text-lg hover:bg-dental-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-dental-300 focus:ring-offset-2 focus:ring-offset-dental-50 flex items-center group"
                >
                  Contact Us Now
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Work Showcase Section */}
      <section className="py-24 bg-dental-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={true ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-6">
              {t('workShowcase.title', 'Our Work')}
            </h2>
            <p className="text-xl text-dental-600 max-w-3xl mx-auto">
              {t('workShowcase.subtitle', 'Discover examples of our precision craftsmanship and attention to detail')}
            </p>
          </motion.div>
          <WorkShowcase items={workShowcaseItems} />
        </div>
      </section>
      
      {/* Lab Process Flow Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={true ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-6">
              {t('labProcessFlow.title', 'Our Laboratory Process')}
            </h2>
            <p className="text-xl text-dental-600 max-w-3xl mx-auto">
              {t('labProcessFlow.subtitle', 'How we collaborate with dentists to deliver exceptional dental work')}
            </p>
          </motion.div>
          <LabProcessFlow steps={processSteps} />
        </div>
      </section>
      
      {/* Materials Showcase Section */}
      <section className="py-24 bg-dental-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            animate={true ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-6">
              {t('materialsShowcase.title', 'Dental Materials')}
            </h2>
            <p className="text-xl text-dental-600 max-w-3xl mx-auto">
              {t('materialsShowcase.subtitle', 'Explore our premium materials for dental restorations')}
            </p>
          </motion.div>
          <MaterialsShowcase materials={materialsData} />
        </div>
      </section>
      
      {/* Request Form Section */}
      <section id="request-form" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <DentistLabRequestForm />
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-24 bg-dental-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-6">
              {t('forDentists.resources.title')}
            </h2>
            <p className="text-xl text-dental-600 max-w-3xl mx-auto">
              {t('forDentists.resources.subtitle')}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((num) => (
              <a 
                key={num}
                href={`#resource-${num}`}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-dental-100 text-dental-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-dental-200 transition-colors duration-300">
                  <Download size={28} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-dental-800 mb-4">
                  {t(`forDentists.resources.items.${num}.title`)}
                </h3>
                <p className="text-dental-600 mb-6 text-lg">
                  {t(`forDentists.resources.items.${num}.description`)}
                </p>
                <span className="inline-flex items-center text-dental-500 font-medium text-sm group-hover:text-dental-600 transition-colors duration-300">
                  {t('forDentists.resources.downloadLabel')}
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default ForDentistsPage; 