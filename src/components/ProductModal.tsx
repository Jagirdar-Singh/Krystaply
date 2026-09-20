import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectForQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onSelectForQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with motion fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0d0e0f]/85 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="relative w-full max-w-4xl bg-[#1b1c1d] border border-[#343536] text-white shadow-2xl z-10 overflow-hidden my-8"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-[#343536]/80 flex items-start justify-between bg-[#1f2021]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-micro-tag text-[9px] text-[#f6bd4e] bg-[#292a2b] px-2 py-0.5 border border-[#343536]">
                    SPEC SHEET // {product.code}
                  </span>
                  <span className="font-micro-tag text-[9px] text-[#ffb4a9] border border-[#d91e18]/40 px-2 py-0.5">
                    {product.badge}
                  </span>
                </div>
                <h3 className="font-display-lg text-2xl sm:text-3xl font-bold uppercase text-[#e3e2e3] mt-2">
                  {product.name}
                </h3>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={onClose}
                aria-label="Close Specification Sheet"
                className="p-2 bg-[#292a2b] hover:bg-[#343536] text-[#c3c7cb] hover:text-white border border-[#343536] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {/* Image & Main specs */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-6 h-64 overflow-hidden border border-[#343536] relative bg-[#0d0e0f]">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#121314]/90 text-[#f6bd4e] font-micro-tag text-[9px] px-2 py-1 border border-[#343536]">
                    MICROSCOPY SCAN: VERIFIED RESIN PENETRATION
                  </div>
                </div>

                <div className="md:col-span-6 space-y-4">
                  <h4 className="font-label-caps text-[11px] text-[#f6bd4e] uppercase font-bold tracking-wider">
                    Substrate Engineering Summary
                  </h4>
                  <p className="font-body-sm text-[13px] text-[#c3c7cb] leading-relaxed">
                    {product.desc}
                  </p>
                  <p className="font-body-sm text-[13px] text-[#c3c7cb] leading-relaxed">
                    Manufactured under hydraulic high-pressure heat schedules. The cross-laminated veneer composition neutralizes directional fiber stress, preventing twist and warp across expansive architectural spans.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 font-mono text-[10px]">
                    <span className="bg-[#292a2b] text-[#e3e2e3] px-2.5 py-1 border border-[#343536]">
                      THICKNESS: {product.thickness}
                    </span>
                    <span className="bg-[#292a2b] text-[#e3e2e3] px-2.5 py-1 border border-[#343536]">
                      SHEET: {product.standardSize}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Parameter Grid */}
              <div className="border-t border-[#343536]/80 pt-6">
                <h4 className="font-label-caps text-[11px] text-[#f6bd4e] uppercase mb-4 font-bold tracking-wider">
                  Laboratory Test Benchmarks &amp; Tolerances
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-body-sm text-[13px]">
                  <div className="p-3 bg-[#1f2021] border border-[#343536]">
                    <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block">
                      CALIBRATED TOLERANCE
                    </span>
                    <span className="font-mono text-[13px] text-[#f6bd4e] font-bold">
                      {product.specs.thicknessTolerance}
                    </span>
                  </div>

                  <div className="p-3 bg-[#1f2021] border border-[#343536]">
                    <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block">
                      CORE SPECIES
                    </span>
                    <span className="text-[#e3e2e3] font-medium truncate block">
                      {product.specs.coreTimber}
                    </span>
                  </div>

                  <div className="p-3 bg-[#1f2021] border border-[#343536]">
                    <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block">
                      BONDING RESIN
                    </span>
                    <span className="text-[#e3e2e3] font-medium truncate block">
                      {product.specs.bondingMatrix}
                    </span>
                  </div>

                  <div className="p-3 bg-[#1f2021] border border-[#343536]">
                    <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block">
                      WARRANTY COMMITMENT
                    </span>
                    <span className="font-mono text-[13px] text-[#d91e18] font-bold">
                      {product.specs.warranty}
                    </span>
                  </div>

                  <div className="p-3 bg-[#1f2021] border border-[#343536]">
                    <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block">
                      CERTIFICATION
                    </span>
                    <span className="text-[#e3e2e3] font-medium truncate block">
                      {product.specs.certifications}
                    </span>
                  </div>

                  <div className="p-3 bg-[#1f2021] border border-[#343536]">
                    <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block">
                      RESISTANCE RATING
                    </span>
                    <span className="text-[#e3e2e3] font-medium truncate block">
                      {product.specs.waterResistance || product.specs.fireRating || '100% Anti-Borer & Termite'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Compliance Badges */}
              <div className="p-4 bg-[#1f2021] border border-[#343536] flex flex-wrap items-center justify-between gap-3 font-micro-tag text-[10px] text-[#c3c7cb]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f6bd4e]" />
                  <span>100% Core Composed (Zero Overlapping / Zero Internal Gaps)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f6bd4e]" />
                  <span>Quad Sanded for Automated CNC Vacuum Clamping</span>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 bg-[#1f2021] border-t border-[#343536] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => alert(`Downloading Technical Data Sheet (TDS) for ${product.name}...`)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#292a2b] hover:bg-[#343536] text-[#e3e2e3] font-label-caps text-[11px] uppercase transition-colors border border-[#343536] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#f6bd4e]" />
                Download PDF Data Sheet
              </button>

              <div className="w-full sm:w-auto flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 bg-transparent hover:bg-[#292a2b] text-[#c3c7cb] font-label-caps text-[11px] uppercase transition-colors border border-[#343536] cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectForQuote(product.name);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#d91e18] hover:bg-[#c00007] text-white font-headline-sm text-[11px] uppercase tracking-wider transition-colors font-bold cursor-pointer shadow-lg"
                >
                  Specify in BOQ Schedule →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
