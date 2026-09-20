import React from 'react';
import { motion } from 'motion/react';
import { HERO_BACKGROUND_IMAGE } from '../data/mockData';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenQuote: () => void;
  onOpenSelector: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenQuote,
  onOpenSelector,
}) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[920px] flex items-center justify-center overflow-hidden bg-[#0d0e0f] text-white pt-20"
      style={{ backgroundColor: 'rgb(13, 14, 15)' }}
    >
      {/* Macro Plywood Background with blueprint overlay */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.1 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')` }}
      />

      {/* Blueprint grid scanning laser line */}
      <motion.div
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#d91e18]/40 to-transparent z-10 pointer-events-none"
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
      />

      {/* Technical Blueprint Gridlines & Cadastral Registration Marks */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(#343536_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

      {/* Corner calibration markings with subtle pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute top-28 left-8 z-10 hidden md:block font-micro-tag text-[9px] text-[#c3c7cb] tracking-widest leading-relaxed"
      >
        GRID REF: KP-09-X // CALIBRATION 1:1<br />
        TOLERANCE ±0.02MM // COMPOSITE STRATA
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-28 right-8 z-10 hidden md:block text-right font-micro-tag text-[9px] text-[#f6bd4e] tracking-widest leading-relaxed"
      >
        SPEC SYSTEM: SHIELD-CORE-V3<br />
        STATUS: SPECIFICATION ACTIVE
      </motion.div>

      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center">
        <div className="max-w-4xl space-y-6">
          {/* Pre-title micro badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#292a2b]/80 backdrop-blur border border-[#343536]"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#f6bd4e]"
            />
            <span className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
              ARCHITECTURAL PLYWOOD ENGINEERING
            </span>
            <span className="text-[#343536]">/</span>
            <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase">
              SERIES 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-xl tracking-tight text-[#e3e2e3] font-bold uppercase text-4xl sm:text-6xl lg:text-[56px] leading-tight sm:leading-[64px]"
          >
            BUILT FOR WHAT <br className="hidden sm:inline" />
            <span className="text-[#d91e18] underline decoration-[#f6bd4e] decoration-2 underline-offset-8">
              COMES NEXT.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-lg text-lg text-[#c3c7cb] max-w-2xl leading-relaxed"
          >
            Engineered plywood solutions precision-calibrated for structural load, moisture defense, and uncompromising dimensional stability in demanding architectural climates.
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, x: 2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onExploreProducts}
              className="inline-flex items-center justify-center bg-[#d91e18] text-white font-headline-sm text-[11px] uppercase px-6 py-3.5 tracking-wider transition-all hover:bg-[#c00007] shadow-lg cursor-pointer"
            >
              <span className="mr-2 text-[#f6bd4e] font-mono">[■]</span> Explore Products
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, x: 2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center bg-[#292a2b]/90 text-[#e3e2e3] hover:text-[#f6bd4e] font-headline-sm text-[11px] uppercase px-6 py-3.5 tracking-wider transition-all backdrop-blur border border-[#343536] cursor-pointer"
            >
              Request BOQ Consultation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, color: '#ffdea7' }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenSelector}
              className="inline-flex items-center gap-1.5 font-label-caps text-[11px] text-[#f6bd4e] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">tune</span> Selector Tool
            </motion.button>
          </motion.div>

          {/* Trust Badges Bar with staggered entrance */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.6 },
              },
            }}
            className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              {
                icon: 'verified',
                title: 'Precision Engineered',
                desc: 'Quadra-press calibrated thickness tolerance within ±0.15mm.',
              },
              {
                icon: 'precision_manufacturing',
                title: 'Quality Controlled',
                desc: 'Rigorous 72-hr cyclic boiling and stress-shear laboratory verified.',
              },
              {
                icon: 'wb_sunny',
                title: 'Built for Demanding Climates',
                desc: 'Formulated to resist thermal expansion and tropical relative humidity.',
              },
            ].map((badge, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
                whileHover={{ y: -3, borderColor: '#f6bd4e' }}
                className="p-4 bg-white border border-[#e8e5df] text-[#1c1a17] transition-all shadow-sm"
              >
                <div className="font-label-caps text-[11px] text-[#1c1a17] uppercase flex items-center gap-1.5 font-semibold">
                  <span className="material-symbols-outlined text-[#f6bd4e] text-[18px]">
                    {badge.icon}
                  </span>
                  {badge.title}
                </div>
                <p className="font-body-sm text-[13px] text-[#5a554e] mt-1">{badge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
