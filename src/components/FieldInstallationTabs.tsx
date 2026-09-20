import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FIELD_ITEMS } from '../data/mockData';

export const FieldInstallationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'commercial' | 'professional'>('home');

  const tabs: { label: string; id: 'home' | 'commercial' | 'professional' }[] = [
    { label: 'Home Spaces', id: 'home' },
    { label: 'Commercial', id: 'commercial' },
    { label: 'Professional Specs', id: 'professional' },
  ];

  const currentItems = FIELD_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section className="w-full bg-[#171717] py-16 border-t border-[#343536]/50 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
              [ SECTION 08 // ARCHITECTURAL CONTEXTS ]
            </div>
            <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
              APPLICATION SCENARIOS
            </h2>
            <p className="font-body-md text-[15px] text-[#c3c7cb] mt-1">
              Engineered performance built for demanding environments across residential and commercial sectors.
            </p>
          </div>

          {/* Application Tabs */}
          <div className="flex gap-1.5" id="appTabs">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-[11px] font-label-caps uppercase transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#d91e18] text-white border-[#d91e18] font-bold shadow-md'
                      : 'bg-[#1f2021] hover:bg-[#292a2b] text-[#c3c7cb] hover:text-white border-[#343536]'
                  }`}
                >
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content Panel with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="bg-[#1b1c1d] p-4 border border-[#343536] hover:border-[#f6bd4e]/50 transition-all group shadow-xl"
              >
                <div className="w-full h-56 overflow-hidden mb-3 relative border border-[#343536]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <span className="font-micro-tag text-[9px] text-[#f6bd4e] uppercase font-semibold">
                  {item.recommendation}
                </span>

                <h3 className="font-headline-sm text-lg font-bold uppercase text-[#e3e2e3] mt-1 group-hover:text-[#f6bd4e] transition-colors">
                  {item.title}
                </h3>

                <p className="font-body-sm text-[13px] text-[#c3c7cb] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
