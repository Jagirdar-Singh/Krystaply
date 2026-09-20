import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const PlywoodEducation: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

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
            [ SECTION 15 // EDUCATION ]
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
            KNOW YOUR PLY
          </h2>
          <p className="font-body-md text-[15px] text-[#c3c7cb] mt-1">
            Demystifying grades, resin chemistries, and structural anatomy for educated buying.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Education Accordion with Motion */}
          <div className="space-y-3" id="eduAccordion">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#1b1c1d] border border-[#343536] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#1f2021]"
                  >
                    <h3 className="font-headline-sm text-base font-semibold uppercase text-[#e3e2e3]">
                      {faq.question}
                    </h3>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-[#f6bd4e] shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-body-sm text-[13px] text-[#c3c7cb] border-t border-[#343536]/40 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Room-by-room buying matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1b1c1d] p-6 sm:p-8 border border-[#343536] shadow-xl"
          >
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase mb-4 font-bold tracking-wider">
              Room-by-Room Specification Matrix
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-body-sm text-[13px]">
                <thead className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase tracking-wider">
                  <tr className="border-b border-[#343536]">
                    <th className="pb-3 pr-2">ROOM APPLICATION</th>
                    <th className="pb-3 pr-2">RECOMMENDED GRADE</th>
                    <th className="pb-3">MIN. THICKNESS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#343536]/30 text-[#c3c7cb]">
                  <tr className="hover:bg-[#1f2021]/50 transition-colors">
                    <td className="py-3 text-[#e3e2e3] font-medium pr-2">Kitchen Sink Area</td>
                    <td className="py-3 text-[#d91e18] font-semibold pr-2">
                      Marine BWP (Phenolic)
                    </td>
                    <td className="py-3 font-mono">18mm</td>
                  </tr>
                  <tr className="hover:bg-[#1f2021]/50 transition-colors">
                    <td className="py-3 text-[#e3e2e3] font-medium pr-2">Tall Wardrobe Shutters</td>
                    <td className="py-3 text-[#f6bd4e] font-semibold pr-2">
                      Blockboard Pine Core
                    </td>
                    <td className="py-3 font-mono">25mm</td>
                  </tr>
                  <tr className="hover:bg-[#1f2021]/50 transition-colors">
                    <td className="py-3 text-[#e3e2e3] font-medium pr-2">Bedroom Storage Beds</td>
                    <td className="py-3 text-[#e3e2e3] pr-2">MR Commercial Grade</td>
                    <td className="py-3 font-mono">16mm - 19mm</td>
                  </tr>
                  <tr className="hover:bg-[#1f2021]/50 transition-colors">
                    <td className="py-3 text-[#e3e2e3] font-medium pr-2">
                      CNC Grooved Wall Paneling
                    </td>
                    <td className="py-3 text-[#f6bd4e] font-semibold pr-2">
                      Club Shield Calibrated
                    </td>
                    <td className="py-3 font-mono">12mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
