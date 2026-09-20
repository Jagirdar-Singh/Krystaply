import React from 'react';
import { motion } from 'motion/react';
import { CORE_TENETS } from '../data/mockData';

export const CoreTenets: React.FC = () => {
  return (
    <section className="w-full bg-[#121314] py-16 border-t border-[#343536]/40 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
            [ SECTION 07 // CORE TENETS ]
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
            WHY KRYSTAPLY CLUB SHIELD
          </h2>
          <p className="font-body-md text-[15px] text-[#c3c7cb] mt-1">
            Six structural principles that govern every panel pressed in our facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CORE_TENETS.map((tenet, idx) => (
            <motion.div
              key={tenet.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, borderColor: 'rgba(246, 189, 78, 0.6)' }}
              className="p-6 bg-[#1b1c1d] hover:bg-[#1f2021] transition-all border border-[#343536] group shadow-lg"
            >
              <div className="font-display-lg text-4xl font-bold text-[#343536] group-hover:text-[#f6bd4e] transition-colors mb-3">
                {tenet.number}
              </div>
              <h3 className="font-headline-md text-xl font-bold uppercase text-[#e3e2e3] mb-2">
                {tenet.title}
              </h3>
              <p className="font-body-sm text-[13px] text-[#c3c7cb] leading-relaxed">
                {tenet.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
