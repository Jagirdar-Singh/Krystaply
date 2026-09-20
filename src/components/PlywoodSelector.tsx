import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PlywoodSelectorProps {
  onProceedWithSpec: (specName: string, thickness: string) => void;
}

export const PlywoodSelector: React.FC<PlywoodSelectorProps> = ({
  onProceedWithSpec,
}) => {
  const [step1, setStep1] = useState<string>('kitchen');
  const [step2, setStep2] = useState<string>('moist');
  const [step3, setStep3] = useState<string>('water');

  const recommendation = useMemo(() => {
    if (step1 === 'doors' || step3 === 'stability') {
      return {
        id: 'blockboard',
        name: 'Architectural Blockboard (Pine Core)',
        reason: 'Solid timber batten core engineered to prevent bowing or warping across tall, unsupported spans such as 8ft wardrobe shutters and sliding partitions.',
        thickness: '19mm / 25mm',
        core: '100% Seasoned Solid Pine Battens',
      };
    }
    if (step1 === 'modular' || step3 === 'precision') {
      return {
        id: 'calibrated',
        name: 'Club Shield Calibrated Ply (±0.15mm)',
        reason: 'Sanded to razor-sharp mechanical tolerance for automated CNC cut-lists, zero void chipping, and flawless modular carcass joinery.',
        thickness: '16mm / 18mm',
        core: 'Selected Composed Hardwood',
      };
    }
    if (step3 === 'fire' || step1 === 'commercial') {
      return {
        id: 'fire',
        name: 'Fire-Retardant FR-710 Plywood',
        reason: 'Vacuum-impregnated flame-suppression salts meet strict commercial building codes, public atriums, and hospitality escape corridors.',
        thickness: '12mm / 19mm',
        core: 'Treated Structural Hardwood (Class 1)',
      };
    }
    return {
      id: 'marine',
      name: 'Club Shield Marine Ply (BWP 710)',
      reason: 'Kitchen environments undergo daily steam, liquid contact, and thermal shifts. The phenolic synthetic resin barrier prevents delamination and bacterial swell.',
      thickness: '16mm / 19mm',
      core: '100% Selected Dense Hardwood',
    };
  }, [step1, step2, step3]);

  return (
    <section id="ply-selector" className="w-full bg-[#121314] py-16 border-t border-[#343536]/40 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
            [ SECTION 09 // SPECIFICATION ENGINE ]
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
            FIND YOUR PLY
          </h2>
          <p className="font-body-md text-[15px] text-[#c3c7cb] mt-1">
            Answer 3 brief questions to receive the exact engineered specification for your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#1b1c1d] p-6 sm:p-8 border border-[#343536] shadow-2xl">
          {/* Questions Left Panel */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1 */}
            <div>
              <span className="font-micro-tag text-[9px] text-[#f6bd4e] block mb-2 uppercase font-bold tracking-wider">
                STEP 01: WHAT ARE YOU BUILDING?
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'kitchen', label: 'Kitchen' },
                  { id: 'wardrobe', label: 'Wardrobe' },
                  { id: 'doors', label: 'Doors / Shutters' },
                  { id: 'modular', label: 'CNC / Modular' },
                  { id: 'office', label: 'Office Space' },
                  { id: 'commercial', label: 'Public Escape' },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => setStep1(item.id)}
                    className={`p-3 text-left font-label-caps text-[11px] uppercase transition-colors border cursor-pointer ${
                      step1 === item.id
                        ? 'bg-[#d91e18] text-white border-[#d91e18] font-bold'
                        : 'bg-[#1f2021] hover:bg-[#292a2b] text-[#e3e2e3] border-[#343536]'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <span className="font-micro-tag text-[9px] text-[#f6bd4e] block mb-2 uppercase font-bold tracking-wider">
                STEP 02: WHERE WILL IT BE USED?
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'moist', label: 'Moisture Prone' },
                  { id: 'dry', label: 'Dry Interior' },
                  { id: 'outdoor', label: 'Semi-Outdoor' },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => setStep2(item.id)}
                    className={`p-3 text-left font-label-caps text-[11px] uppercase transition-colors border cursor-pointer ${
                      step2 === item.id
                        ? 'bg-[#d91e18] text-white border-[#d91e18] font-bold'
                        : 'bg-[#1f2021] hover:bg-[#292a2b] text-[#e3e2e3] border-[#343536]'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <span className="font-micro-tag text-[9px] text-[#f6bd4e] block mb-2 uppercase font-bold tracking-wider">
                STEP 03: WHAT MATTERS MOST?
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'water', label: 'Water Resistance' },
                  { id: 'precision', label: 'Precision Sanding' },
                  { id: 'fire', label: 'Fire Safety' },
                  { id: 'stability', label: 'Anti-Warp / Span' },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => setStep3(item.id)}
                    className={`p-3 text-left font-label-caps text-[11px] uppercase transition-colors border cursor-pointer ${
                      step3 === item.id
                        ? 'bg-[#d91e18] text-white border-[#d91e18] font-bold'
                        : 'bg-[#1f2021] hover:bg-[#292a2b] text-[#e3e2e3] border-[#343536]'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculated Live Result Card with AnimatePresence */}
          <div className="lg:col-span-5 bg-[#1f2021] p-6 border border-[#343536] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#343536]/60 pb-3">
                <span className="font-micro-tag text-[9px] text-[#f6bd4e] uppercase font-bold tracking-wider">
                  CALCULATED RECOMMENDATION
                </span>
                <span className="w-2 h-2 rounded-full bg-[#f6bd4e] animate-ping" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={recommendation.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="p-4 bg-[#292a2b] border border-[#343536]">
                    <div className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase">
                      OPTIMAL SPEC GRADE
                    </div>
                    <h3 className="font-headline-lg text-xl sm:text-2xl font-bold text-[#e3e2e3] uppercase mt-1">
                      {recommendation.name}
                    </h3>
                  </div>

                  <div className="space-y-1 font-body-sm text-[13px] text-[#c3c7cb]">
                    <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase font-bold">
                      Engineering Rationale:
                    </div>
                    <p className="leading-relaxed text-[#c3c7cb]">{recommendation.reason}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-3 bg-[#1b1c1d] border border-[#343536]">
                      <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block">
                        SUGGESTED THICKNESS
                      </span>
                      <span className="font-label-caps text-[11px] text-[#e3e2e3] font-mono">
                        {recommendation.thickness}
                      </span>
                    </div>
                    <div className="p-3 bg-[#1b1c1d] border border-[#343536]">
                      <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block">
                        CORE SPECIFICATION
                      </span>
                      <span className="font-label-caps text-[11px] text-[#e3e2e3] font-mono">
                        {recommendation.core}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() =>
                  onProceedWithSpec(recommendation.name, recommendation.thickness)
                }
                className="w-full text-center block py-3.5 bg-[#d91e18] hover:bg-[#c00007] text-white font-headline-sm text-[11px] uppercase tracking-wider transition-colors font-bold cursor-pointer shadow-lg"
              >
                Proceed with this Specification →
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
