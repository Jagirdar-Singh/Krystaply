import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, User } from 'lucide-react';
import { BRAND_LOGO } from '../data/mockData';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'products-range', 'technology', 'applications-section', 'quality-section', 'about-section', 'resources-section', 'boq-quote'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Products', href: '#products-range', id: 'products-range' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'Applications', href: '#applications-section', id: 'applications-section' },
    { label: 'Quality & Standards', href: '#quality-section', id: 'quality-section' },
    { label: 'About Us', href: '#about-section', id: 'about-section' },
    { label: 'Resources', href: '#resources-section', id: 'resources-section' },
    { label: 'Contact', href: '#boq-quote', id: 'boq-quote' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#121314]/95 backdrop-blur-md border-[#343536] shadow-xl py-0'
          : 'bg-[#121314]/90 backdrop-blur-md border-[#343536]/80 py-1'
      }`}
    >
      <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group focus:outline-none">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={BRAND_LOGO}
            alt="KRYSTAPLY CLUB SHIELD Logo"
            className="h-8 w-auto object-contain transition-transform"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-headline-sm text-[20px] tracking-tight text-[#e3e2e3] uppercase font-bold">
                KRYSTAPLY
              </span>
              <span className="font-micro-tag text-[9px] text-[#f6bd4e] px-1 border border-[#f6bd4e]/40 uppercase tracking-widest">
                CLUB SHIELD™
              </span>
            </div>
            <span className="font-label-caps text-[10px] text-[#c3c7cb] uppercase tracking-widest">
              ARCHITECTURAL PLY COMPOSITES
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 h-full text-white">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative h-full flex items-center font-label-caps text-[11px] uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-[#f6bd4e] font-semibold'
                    : 'text-[#e3e2e3]/80 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="headerNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f6bd4e]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA cluster */}
        <div className="flex items-center gap-3 shrink-0">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center justify-center bg-[#d91e18] hover:bg-[#c00007] text-white px-4 py-2 font-headline-sm text-[11px] uppercase tracking-wider transition-colors border border-[#d91e18] cursor-pointer shadow-md"
          >
            <span className="mr-1.5 text-[#f6bd4e] font-mono">[+]</span>
            Get a Quote
          </motion.button>

          <a
            href="#boq-quote"
            className="w-8 h-8 rounded-full bg-[#ffb4a9] flex items-center justify-center text-[#690002] hover:opacity-90 transition-opacity"
            title="Account / Technical Specifier Portal"
          >
            <User className="w-4 h-4" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#e3e2e3] hover:text-white hover:bg-[#1f2021] transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden overflow-hidden bg-[#121314] border-b border-[#343536] px-6 py-4 space-y-3"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 font-label-caps text-[12px] uppercase tracking-wider text-[#e3e2e3] hover:text-[#f6bd4e] border-b border-[#1f2021]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full text-center py-2.5 bg-[#d91e18] hover:bg-[#c00007] text-white font-label-caps text-[11px] uppercase tracking-wider font-bold"
              >
                [+] Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
