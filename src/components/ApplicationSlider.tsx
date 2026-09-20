import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { APPLICATION_SLIDES } from '../data/mockData';

interface ApplicationSliderProps {
  onSpecifyApplication: (appName: string) => void;
}

export const ApplicationSlider: React.FC<ApplicationSliderProps> = ({
  onSpecifyApplication,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const totalSlides = APPLICATION_SLIDES.length;

  const currentSlide = APPLICATION_SLIDES[currentSlideIndex];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleSelectThumb = (idx: number) => {
    setDirection(idx > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(idx);
  };

  return (
    <section id="applications-section" className="w-full bg-[#121314] py-16 border-t border-[#343536]/40 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
              [ SECTION 08 // FIELD INSTALLATION ]
            </div>
            <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
              WHERE IT BELONGS
            </h2>
            <p className="font-body-md text-[15px] text-[#c3c7cb] max-w-2xl mt-1">
              Engineered performance built for demanding environments across residential, hospitality, and commercial sectors.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#1b1c1d] px-3 py-1.5 border border-[#343536]">
              <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase">SPACE:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSlide.numberStr}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="font-spec-numeral text-[16px] text-[#f6bd4e] font-bold"
                >
                  {currentSlide.numberStr}
                </motion.span>
              </AnimatePresence>
              <span className="text-[#c3c7cb]">/</span>
              <span className="font-spec-numeral text-[16px] text-[#c3c7cb]">
                0{totalSlides}
              </span>
            </div>

            <div className="flex gap-1.5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={handlePrev}
                aria-label="Previous Space"
                className="p-2 bg-[#292a2b] hover:bg-[#343536] text-[#e3e2e3] transition-colors border border-[#343536] cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={handleNext}
                aria-label="Next Space"
                className="p-2 bg-[#d91e18] hover:bg-[#c00007] text-white transition-colors border border-[#d91e18] cursor-pointer shadow-md"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Slider Display with smooth motion AnimatePresence */}
        <div className="relative overflow-hidden bg-white text-[#1c1a17] border border-[#e8e5df] shadow-2xl min-h-[480px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Image Stage */}
              <div className="lg:col-span-8 relative h-[380px] lg:h-[500px] overflow-hidden bg-[#0d0e0f]">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e0f]/95 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 font-micro-tag text-[9px] bg-[#121314]/90 backdrop-blur px-2.5 py-1 text-[#f6bd4e] uppercase border border-[#343536]">
                  {currentSlide.categoryLabel}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between text-white gap-2">
                  <span className="font-headline-sm text-lg sm:text-xl uppercase font-bold text-shadow">
                    {currentSlide.title}
                  </span>
                  <span className="font-micro-tag text-[9px] bg-[#d91e18] text-white px-2.5 py-1 uppercase tracking-wider font-bold w-fit">
                    {currentSlide.specBadge}
                  </span>
                </div>
              </div>

              {/* Content Details Panel */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-white text-[#1c1a17]">
                <div className="space-y-4">
                  <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase font-bold tracking-wider">
                    {currentSlide.tagline}
                  </div>

                  <h3 className="font-headline-md text-2xl font-bold uppercase text-[#1c1a17]">
                    {currentSlide.heading}
                  </h3>

                  <p className="font-body-sm text-[13px] text-[#5a554e] leading-relaxed">
                    {currentSlide.body}
                  </p>

                  <div className="pt-2 space-y-1.5 font-micro-tag text-[10px] text-[#5a554e] border-t border-[#e8e5df]">
                    {currentSlide.specItems.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-[#5a554e] uppercase">{item.label}</span>
                        <span
                          className={`font-semibold font-mono ${
                            item.isPrimary
                              ? 'text-[#d91e18]'
                              : item.isSecondary
                              ? 'text-[#ba881a]'
                              : 'text-[#1c1a17]'
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onSpecifyApplication(currentSlide.heading)}
                    className="w-full block text-center py-3 bg-[#102a43] hover:bg-[#1f4068] text-white font-label-caps text-[11px] uppercase transition-colors tracking-wider font-bold cursor-pointer"
                  >
                    {currentSlide.ctaText} →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2" id="sliderThumbStrip">
          {APPLICATION_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <motion.button
                key={slide.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => handleSelectThumb(idx)}
                className={`relative p-2 text-left transition-all border-b-2 group cursor-pointer ${
                  isActive
                    ? 'bg-[#faf8f5] border-[#f6bd4e] shadow-md'
                    : 'bg-[#1b1c1d] hover:bg-[#292a2b] border-transparent'
                }`}
              >
                <div className="w-full h-16 overflow-hidden mb-1 relative border border-[#343536]">
                  <img
                    src={slide.image}
                    alt={slide.thumbTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span
                  className={`font-micro-tag text-[9px] uppercase block ${
                    isActive ? 'text-[#ba881a] font-bold' : 'text-[#c3c7cb]'
                  }`}
                >
                  {slide.thumbTitle}
                </span>
                <span
                  className={`font-label-caps text-[10px] truncate block ${
                    isActive ? 'text-[#1c1a17]' : 'text-[#e3e2e3]'
                  }`}
                >
                  {slide.thumbSub}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 pt-1" id="sliderDots">
          {APPLICATION_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectThumb(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 transition-all cursor-pointer ${
                idx === currentSlideIndex
                  ? 'w-8 bg-[#f6bd4e]'
                  : 'w-2 bg-[#292a2b] hover:bg-[#343536]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
