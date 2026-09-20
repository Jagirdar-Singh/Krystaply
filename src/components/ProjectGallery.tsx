import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/mockData';

export const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'hospitality'>('all');

  const filterOptions: { label: string; id: 'all' | 'residential' | 'commercial' | 'hospitality' }[] = [
    { label: 'All', id: 'all' },
    { label: 'Residential', id: 'residential' },
    { label: 'Commercial', id: 'commercial' },
    { label: 'Hospitality', id: 'hospitality' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section className="w-full bg-[#121314] py-16 border-t border-[#343536]/40 text-white">
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
              [ SECTION 13 // REPERTOIRE ]
            </div>
            <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
              BUILT WITH KRYSTAPLY
            </h2>
            <p className="font-body-md text-[15px] text-[#c3c7cb] mt-1">
              Real architectural installations demonstrating structural longevity and craft.
            </p>
          </div>

          <div className="flex gap-1.5" id="projectFilterNav">
            {filterOptions.map((opt) => {
              const isActive = filter === opt.id;
              return (
                <motion.button
                  key={opt.id}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setFilter(opt.id)}
                  className={`px-3 py-1.5 text-[11px] font-label-caps uppercase transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#d91e18] text-white border-[#d91e18] font-bold shadow-md'
                      : 'bg-[#1f2021] text-[#c3c7cb] hover:text-white border-[#343536]'
                  }`}
                >
                  {opt.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6" id="projectGallery">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="bg-[#1b1c1d] p-4 border border-[#343536] hover:border-[#f6bd4e]/50 transition-all group shadow-xl"
              >
                <div className="w-full h-64 overflow-hidden mb-3 relative border border-[#343536]">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 right-2 bg-[#121314]/90 text-[#e3e2e3] px-2 py-0.5 font-micro-tag text-[9px] border border-[#343536]">
                    {project.badge}
                  </span>
                </div>

                <span className="font-micro-tag text-[9px] text-[#f6bd4e] uppercase font-bold">
                  {project.location}
                </span>

                <h3 className="font-headline-sm text-lg font-bold uppercase text-[#e3e2e3] mt-1 group-hover:text-[#f6bd4e] transition-colors">
                  {project.title}
                </h3>

                <p className="font-body-sm text-[13px] text-[#c3c7cb] mt-1 leading-relaxed">
                  {project.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
