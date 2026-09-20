import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STRATA_LAYERS, STRATA_MACRO_IMAGE } from '../data/mockData';

export const StrataAnatomy: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('layer-01');
  const activeLayer = STRATA_LAYERS.find((l) => l.id === selectedLayerId) || STRATA_LAYERS[0];

  return (
    <section className="w-full bg-[#171717] py-20 border-t border-[#343536]/50 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="border-b border-[#343536]/60 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
              [ SECTION 03 // ANATOMICAL COMPOSITION ]
            </div>
            <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e3e2e3] uppercase tracking-tight">
              INSIDE THE SHIELD
            </h2>
            <p className="font-body-md text-[15px] text-[#c3c7cb] mt-1 max-w-xl">
              Deconstructed engineering: A multi-phase cross-grain laminate matrix bonded under 180°C hydraulic compression.
            </p>
          </div>

          <div className="font-mono text-xs text-[#f6bd4e] bg-[#1f2021] px-3 py-1.5 border border-[#343536] self-start md:self-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d91e18] animate-pulse" />
            <span>INTERACTIVE LAYER EXPLORER</span>
          </div>
        </motion.div>

        {/* Interactive Strata Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selector Stack */}
          <div className="lg:col-span-5 space-y-2">
            <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase tracking-wider block mb-3">
              SELECT CROSS-SECTION LAYER:
            </span>

            {STRATA_LAYERS.map((layer) => {
              const isSelected = layer.id === selectedLayerId;
              return (
                <motion.button
                  key={layer.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`relative w-full p-4 text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#1f2021] border-[#f6bd4e] text-white shadow-lg'
                      : 'bg-[#1b1c1d] hover:bg-[#1f2021]/60 border-[#343536] text-[#c3c7cb]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="strataActiveIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d91e18]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between pl-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isSelected ? 'text-[#f6bd4e]' : 'text-[#c3c7cb]'
                        }`}
                      >
                        {layer.indexStr}
                      </span>
                      <span className="font-headline-sm text-sm uppercase font-bold tracking-wide">
                        {layer.name}
                      </span>
                    </div>

                    <span
                      className={`font-micro-tag text-[9px] uppercase px-2 py-0.5 border ${
                        isSelected
                          ? 'border-[#f6bd4e] text-[#f6bd4e] bg-[#292a2b]'
                          : 'border-[#343536] text-[#c3c7cb]'
                      }`}
                    >
                      {layer.subLabel}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Layer Specifications Detail Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-[#1b1c1d] p-6 sm:p-8 border border-[#343536] shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-[#343536]/60 pb-4 mb-6">
                  <div>
                    <span className="font-micro-tag text-[9px] text-[#f6bd4e] uppercase font-bold tracking-wider">
                      ACTIVE STRATA LAYER {activeLayer.indexStr}
                    </span>
                    <h3 className="font-display-lg text-2xl sm:text-3xl font-bold uppercase text-[#e3e2e3] mt-0.5">
                      {activeLayer.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block">
                      LAYER GRADE
                    </span>
                    <span className="font-spec-numeral text-base text-[#f6bd4e] font-bold">
                      {activeLayer.subLabel}
                    </span>
                  </div>
                </div>

                {/* Macro close-up imagery preview */}
                <div className="w-full h-48 sm:h-56 overflow-hidden mb-6 relative border border-[#343536] bg-[#0d0e0f]">
                  <motion.img
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                    src={STRATA_MACRO_IMAGE}
                    alt="Engineered structural plywood cross section macro detail"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1d] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 font-micro-tag text-[9px] bg-[#121314]/90 px-2 py-1 text-[#f6bd4e] uppercase border border-[#343536]">
                    SCAN CALIBRATION: HIGH-RES OPTICAL SENSOR 50X
                  </div>
                </div>

                <div className="space-y-4 font-body-sm text-[13px] text-[#c3c7cb] leading-relaxed">
                  <p>{activeLayer.description}</p>
                </div>

                {/* Micro Technical Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-[#343536]/60">
                  <div className="p-3 bg-[#1f2021] border border-[#343536]">
                    <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block truncate">
                      LAMINATION
                    </span>
                    <span className="font-label-caps text-[11px] text-[#e3e2e3] uppercase font-bold truncate block mt-0.5">
                      CROSS-GRAIN
                    </span>
                  </div>
                  <div className="p-3 bg-[#1f2021] border border-[#343536]">
                    <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block truncate">
                      COMPRESSION
                    </span>
                    <span className="font-label-caps text-[11px] text-[#e3e2e3] uppercase font-bold truncate block mt-0.5">
                      180°C HYDRAULIC
                    </span>
                  </div>
                  <div className="p-3 bg-[#1f2021] border border-[#343536]">
                    <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block truncate">
                      RESIN BOND
                    </span>
                    <span className="font-label-caps text-[11px] text-[#f6bd4e] uppercase font-bold truncate block mt-0.5">
                      {activeLayer.isMatrix ? '100% PHENOLIC' : 'SYNTHETIC PF'}
                    </span>
                  </div>
                  <div className="p-3 bg-[#1f2021] border border-[#343536]">
                    <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block truncate">
                      CORE INTEGRITY
                    </span>
                    <span className="font-label-caps text-[11px] text-[#d91e18] uppercase font-bold truncate block mt-0.5">
                      ZERO VOID
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
