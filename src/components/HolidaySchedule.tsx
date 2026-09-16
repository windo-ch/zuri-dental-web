import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HolidaySchedule: React.FC = () => {
  const { t } = useTranslation();
  const holidays = [
    {
      date: t('schedule.holidays.christmas2026.date'),
      name: t('schedule.holidays.christmas2026.name'),
      duration: t('schedule.holidays.christmas2026.duration')
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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-display font-bold text-dental-800 mb-8 text-center flex items-center justify-center">
        <CalendarDays className="w-8 h-8 text-dental-600 mr-3" /> 
        {t('schedule.title')}
      </h2>


      <div className="space-y-4">
        {holidays.map((holiday, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between p-6 bg-dental-50 rounded-lg shadow-sm border border-dental-100"
            variants={itemVariants}
          >
            <div className="flex-1">
              <p className="text-lg font-semibold text-dental-800 mb-1">{holiday.name}</p>
              <p className="text-dental-600">{holiday.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HolidaySchedule;