import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

interface SlideFooterProps {
  className?: string;
}

const SlideFooter: React.FC<SlideFooterProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.footer
      className={`bg-gradient-to-r from-dental-800 to-dental-900 text-white ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container max-w-6xl mx-auto px-4 py-12 pb-24 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6">
              <img
                src="/assets/images/pietrobon-logo-animated.svg"
                alt="Pietrobon & Michel"
                className="h-12 w-auto mb-4 opacity-90"
              />
              <h3 className="text-xl font-display font-semibold mb-2">
                Pietrobon & Michel
              </h3>
              <p className="text-dental-200 text-sm">
                Excellence in dental technology
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-dental-300" />
                <div>
                  <div>Bahnhofstrasse 35</div>
                  <div>8001 Zürich, Switzerland</div>
                </div>
              </div>
              
              <motion.a
                href="tel:+41442220565"
                className="flex items-center text-dental-200 hover:text-white transition-colors"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Phone className="w-4 h-4 mr-3 text-dental-300" />
                +41 44 222 05 65
              </motion.a>
              
              <motion.a
                href="mailto:lab@pietrobonandmichel.ch"
                className="flex items-center text-dental-200 hover:text-white transition-colors"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Mail className="w-4 h-4 mr-3 text-dental-300" />
                lab@pietrobonandmichel.ch
              </motion.a>
              
              <div className="pt-2 text-dental-300 text-xs italic">
                by appointment only
              </div>
            </div>
          </motion.div>
          
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          className="border-t border-dental-700 mt-8 pt-6 pb-4 md:pb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dental-300 text-sm">
              © {new Date().getFullYear()} Pietrobon & Michel. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <motion.button
                onClick={() => navigate('/privacy')}
                className="text-dental-300 hover:text-white transition-colors text-sm"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Privacy Policy
              </motion.button>
              <motion.button
                onClick={() => navigate('/terms')}
                className="text-dental-300 hover:text-white transition-colors text-sm"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Terms of Service
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default SlideFooter;
