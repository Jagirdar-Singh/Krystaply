import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText } from 'lucide-react';

interface QuickQuoteButtonProps {
  onOpenQuote: () => void;
}

// A small persistent shortcut back to the quote form, shown once the visitor
// has scrolled past the hero. Replaces the old "Cadastral HUD" widget, which
// only displayed the mouse cursor's pixel position as decoration — this does
// the same visual job (a subtle, animated, always-available fixed element)
// while actually being useful.
export const QuickQuoteButton: React.FC<QuickQuoteButtonProps> = ({ onOpenQuote }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 900);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={onOpenQuote}
          className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-4 py-3 bg-[#d91e18] hover:bg-[#c00007] text-white shadow-2xl cursor-pointer"
          aria-label="Jump to quote request form"
        >
          <FileText className="w-4 h-4 text-[#f6bd4e]" />
          <span className="font-label-caps text-[11px] uppercase tracking-wider font-bold">
            Get a Quote
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
