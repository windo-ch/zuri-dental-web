import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, FileText, Clock, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LabOrderForm: React.FC = () => {
  const { t } = useTranslation();
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const forms = [
    {
      id: 'crown-bridge',
      title: 'Crown & Bridge Order',
      description: 'Single units, bridges, and complex reconstructions',
      icon: '👑',
      downloadUrl: '/forms/crown-bridge-order.pdf'
    },
    {
      id: 'implant',
      title: 'Implant Restoration Order',
      description: 'Implant crowns, bridges, and custom abutments',
      icon: '🔧',
      downloadUrl: '/forms/implant-order.pdf'
    },
    {
      id: 'removable',
      title: 'Removable Prosthetics',
      description: 'Partial and complete dentures, flexible prosthetics',
      icon: '🦷',
      downloadUrl: '/forms/removable-order.pdf'
    },
    {
      id: 'orthodontic',
      title: 'Orthodontic Appliances',
      description: 'Retainers, splints, and custom orthodontic devices',
      icon: '📐',
      downloadUrl: '/forms/orthodontic-order.pdf'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dental-800 mb-4">
            Laboratory Order Forms
          </h2>
          <p className="text-xl text-dental-600 max-w-3xl mx-auto">
            Download our professional order forms for precise case communication and optimal results.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {forms.map((form) => (
            <motion.div
              key={form.id}
              className="bg-white border border-dental-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setActiveForm(activeForm === form.id ? null : form.id)}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{form.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-dental-800 mb-2">
                    {form.title}
                  </h3>
                  <p className="text-dental-600 mb-4 text-sm">
                    {form.description}
                  </p>
                  
                  <div className="flex space-x-2">
                    <motion.button
                      className="inline-flex items-center px-4 py-2 bg-dental-600 text-white rounded-lg text-sm font-medium hover:bg-dental-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // In a real app, this would trigger a download
                        alert(`Downloading ${form.title} form...`);
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </motion.button>
                    
                    <motion.button
                      className="inline-flex items-center px-4 py-2 border border-dental-300 text-dental-700 rounded-lg text-sm font-medium hover:bg-dental-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        alert('Opening digital form...');
                      }}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Digital Form
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Expanded details */}
              {activeForm === form.id && (
                <motion.div
                  className="mt-6 pt-6 border-t border-dental-100"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center text-dental-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Standard turnaround: 5-7 business days</span>
                    </div>
                    <div className="flex items-center text-dental-600">
                      <User className="w-4 h-4 mr-2" />
                      <span>Requires doctor signature</span>
                    </div>
                    <div className="flex items-center text-dental-600">
                      <Send className="w-4 h-4 mr-2" />
                      <span>Email or fax submission</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="bg-dental-50 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-display font-semibold text-dental-800 mb-4">
            Need Assistance?
          </h3>
          <p className="text-dental-600 mb-6">
            Our technical team is available to help with case planning and form completion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+41442220565"
              className="inline-flex items-center px-6 py-3 bg-dental-600 text-white rounded-lg font-medium hover:bg-dental-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call +41 44 222 05 65
            </motion.a>
            <motion.a
              href="mailto:lab@pietrobonandmichel.ch"
              className="inline-flex items-center px-6 py-3 border border-dental-300 text-dental-700 rounded-lg font-medium hover:bg-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Lab
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LabOrderForm;
