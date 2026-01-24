import React from 'react';
import { motion } from 'framer-motion';

const SimpleSlideTest: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-dental-600 via-dental-700 to-dental-800 flex items-center justify-center">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md mx-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-display font-bold text-dental-800 mb-4">
          PIETROBON & MICHEL
        </h1>
        <p className="text-sm text-dental-600 mb-4">
          Dentaltechnik • Dental Technology • Esthetics
        </p>
        <div className="text-sm text-dental-700 mb-4">
          <div>Bahnhofstrasse 35</div>
          <div>8001 Zürich, Schweiz</div>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-dental-800 font-semibold text-sm mb-2">
            BY APPOINTMENT ONLY
          </h3>
          <a
            href="tel:+41442220565"
            className="text-xl font-bold text-dental-600 hover:text-dental-700"
          >
            +41 44 222 05 65
          </a>
        </div>
        <div className="text-sm text-dental-500">
          Simple slide test - Working! ✅
        </div>
      </motion.div>
    </div>
  );
};

export default SimpleSlideTest;
