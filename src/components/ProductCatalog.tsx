import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCategory, Product } from '../types';
import { PRODUCTS } from '../data/mockData';

interface ProductCatalogProps {
  onInspectProduct: (product: Product) => void;
  onSelectForQuote: (productName: string) => void;
}

const CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'water', label: 'Waterproof (BWP)' },
  { id: 'calibrated', label: 'Calibrated' },
  { id: 'fire', label: 'Fire Retardant' },
  { id: 'blocks', label: 'Blockboards' },
  { id: 'decorative', label: 'Doors & Veneer' },
];

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onInspectProduct,
  onSelectForQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeCategory === 'all') return true;
    return product.category === activeCategory;
  });

  return (
    <section id="products-range" className="w-full bg-[#121314] py-16 border-t border-[#343536]/40 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header and Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
              [ SECTION 04 // PRODUCT SPECIFICATION MATRIX ]
            </div>
            <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
              ENGINEERED PRODUCT RANGE
            </h2>
            <p className="font-body-md text-[15px] text-[#c3c7cb] mt-1 max-w-xl">
              Precision substrates calibrated for distinct moisture, fire, and structural load envelopes.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5" id="productCategoryFilters">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-[11px] font-label-caps uppercase transition-all cursor-pointer border relative ${
                    isActive
                      ? 'bg-[#d91e18] text-white border-[#d91e18] font-bold shadow-md'
                      : 'bg-[#1b1c1d] hover:bg-[#292a2b] text-[#c3c7cb] hover:text-white border-[#343536]'
                  }`}
                >
                  {cat.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Product Cards Grid with AnimatePresence & layout */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                layout
                key={prod.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -5 }}
                className="bg-[#1b1c1d] p-4 border border-[#343536] hover:border-[#f6bd4e]/60 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Image container */}
                  <div className="w-full h-48 bg-[#0d0e0f] overflow-hidden mb-3 relative border border-[#343536]">
                    <img
                      src={prod.image}
                      alt={prod.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Banner Badge */}
                    <span className="absolute top-2 left-2 bg-[#121314]/90 text-[#f6bd4e] font-micro-tag text-[9px] px-2 py-0.5 uppercase border border-[#343536]">
                      {prod.bannerBadge}
                    </span>

                    <span className="absolute bottom-2 right-2 bg-[#121314]/90 text-[#e3e2e3] font-mono text-[9px] px-1.5 py-0.5 border border-[#343536]">
                      {prod.code}
                    </span>
                  </div>

                  {/* Badge & Title */}
                  <span className="font-micro-tag text-[9px] text-[#f6bd4e] uppercase tracking-wider font-semibold">
                    {prod.badge}
                  </span>

                  <h3 className="font-headline-sm text-lg font-bold uppercase text-[#e3e2e3] mt-1 group-hover:text-[#f6bd4e] transition-colors leading-snug">
                    {prod.name}
                  </h3>

                  <p className="font-body-sm text-[12px] text-[#c3c7cb] mt-2 line-clamp-2 leading-relaxed">
                    {prod.desc}
                  </p>

                  {/* Quick specs pill */}
                  <div className="mt-3 pt-3 border-t border-[#343536]/60 flex items-center justify-between font-micro-tag text-[10px] text-[#c3c7cb]">
                    <span>THICKNESS:</span>
                    <span className="text-[#e3e2e3] font-mono">{prod.thickness}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between font-micro-tag text-[10px] text-[#c3c7cb]">
                    <span>STANDARD SIZES:</span>
                    <span className="text-[#e3e2e3] font-mono">{prod.standardSize}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 mt-4 border-t border-[#343536]/60 grid grid-cols-2 gap-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => onInspectProduct(prod)}
                    className="w-full py-2 bg-[#292a2b] hover:bg-[#343536] text-[#e3e2e3] font-label-caps text-[10px] uppercase transition-colors border border-[#343536] cursor-pointer"
                  >
                    View Specs
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => onSelectForQuote(prod.name)}
                    className="w-full py-2 bg-[#d91e18] hover:bg-[#c00007] text-white font-label-caps text-[10px] uppercase transition-colors font-bold cursor-pointer shadow-sm"
                  >
                    + Specify
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
