import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const CadastralHUD: React.FC = () => {
  const [coords, setCoords] = useState({ x: '0119.70', y: '039.90' });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xVal = (e.clientX / 10).toFixed(2).padStart(6, '0');
      const yVal = (e.clientY / 10).toFixed(2).padStart(5, '0');
      setCoords({ x: xVal, y: yVal });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.aside
      id="cadastral-hud"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="fixed bottom-6 right-6 z-40 hidden xl:flex items-center gap-2 px-3.5 py-2 bg-[#121314]/90 backdrop-blur-md border border-[#343536] shadow-2xl text-white select-none pointer-events-auto"
    >
      <motion.span
        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="w-2 h-2 rounded-full bg-[#d91e18]"
      />
      <span className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase tracking-wider">
        COORDINATE:
      </span>
      <span className="font-label-caps text-[11px] text-[#f6bd4e] font-mono">
        X: {coords.x} / Y: {coords.y}
      </span>
      <span className="text-[#343536] text-xs">|</span>
      <span className="font-micro-tag text-[9px] text-[#ffdad5] uppercase tracking-wider">
        CORE: 7-PLY 100% HARDWOOD
      </span>
    </motion.aside>
  );
};
