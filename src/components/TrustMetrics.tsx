import React from 'react';
import { motion } from 'motion/react';

export const TrustMetrics: React.FC = () => {
  const metrics = [
    {
      value: '25+',
      label: 'Years Collective Experience',
      sub: 'Engineered Wood Heritage',
      color: 'text-[#f6bd4e]',
    },
    {
      value: '75,000+',
      label: 'Sq. Ft. Daily Capacity',
      sub: 'Automated Hot Press Facilities',
      color: 'text-[#ffdad5]',
    },
    {
      value: '150+',
      label: 'Authorized Dealers',
      sub: 'Pan-Regional Presence',
      color: 'text-[#f6bd4e]',
    },
    {
      value: '40+',
      label: 'Major Cities Served',
      sub: 'Prompt Logistics Network',
      color: 'text-[#ffdad5]',
    },
  ];

  return (
    <section className="w-full bg-[#171717] py-16 border-t border-[#343536]/50 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(246, 189, 78, 0.6)' }}
              className="p-6 sm:p-8 bg-[#1b1c1d] border border-[#343536] transition-all shadow-lg"
            >
              <div
                className={`font-display-xl text-3xl sm:text-4xl lg:text-5xl font-bold ${metric.color}`}
              >
                {metric.value}
              </div>
              <div className="font-label-caps text-[11px] text-[#e3e2e3] uppercase mt-2 font-bold tracking-wider">
                {metric.label}
              </div>
              <div className="font-micro-tag text-[9px] text-[#c3c7cb] mt-1">
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
