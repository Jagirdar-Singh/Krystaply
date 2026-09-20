import React from 'react';

export const ComparisonMatrix: React.FC = () => {
  const rows = [
    {
      param: 'RESIN MATRIX',
      marine: '100% Phenol Formaldehyde (BWP)',
      marineHighlight: 'text-[#d91e18] font-bold',
      calibrated: 'Phenolic / Fortified Melamine',
      calibratedHighlight: '',
      mr: 'Synthetic Urea Formaldehyde',
    },
    {
      param: 'THICKNESS TOLERANCE',
      marine: '±0.25mm',
      calibrated: '±0.15mm (Quad Calibrated)',
      calibratedHighlight: 'text-[#f6bd4e] font-bold',
      mr: '±0.40mm',
    },
    {
      param: 'WATERPROOF LEVEL',
      marine: '100% Boiling Water Proof (72h)',
      marineHighlight: 'text-[#e3e2e3] font-semibold',
      calibrated: 'Water Resistant (BWR)',
      calibratedHighlight: '',
      mr: 'Moisture Resistant (Indoor)',
    },
    {
      param: 'PRIMARY FIT',
      marine: 'Kitchen, Bathroom, Coastal, Wet',
      calibrated: 'Modular CNC, Wardrobes, Desks',
      mr: 'Dry Wardrobe, Ceilings, Bed Backs',
    },
    {
      param: 'CORE SPECIES',
      marine: '100% Dense Tropical Hardwood',
      calibrated: 'Selected Hardwood Core',
      mr: 'Hardwood & Plantation Species',
    },
    {
      param: 'AVAILABLE SIZES',
      marine: '8x4 ft, 7x4 ft (Custom cuts)',
      calibrated: '8x4 ft (CNC Ready)',
      mr: '8x4 ft, 7x4 ft, 6x4 ft',
    },
  ];

  return (
    <section className="w-full bg-[#171717] py-16 border-t border-[#343536]/50 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
            [ SECTION 19 // BENCHMARK ]
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
            COMPARE PLY
          </h2>
          <p className="font-body-md text-[15px] text-[#c3c7cb] mt-1">
            Side-by-side technical evaluation across three flagship KRYSTAPLY grades.
          </p>
        </div>

        <div className="overflow-x-auto bg-[#1b1c1d] border border-[#343536] shadow-xl">
          <table className="w-full text-left font-body-sm text-[13px] border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#1f2021] text-label-caps text-[11px] uppercase text-[#f6bd4e] border-b border-[#343536]">
                <th className="p-4 w-1/4">Parameter</th>
                <th className="p-4 text-[#e3e2e3] w-1/4">Club Shield Marine (BWP)</th>
                <th className="p-4 text-[#e3e2e3] w-1/4">Club Shield Calibrated</th>
                <th className="p-4 text-[#e3e2e3] w-1/4">Commercial MR Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#343536]/30 text-[#c3c7cb]">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#1f2021]/50 transition-colors">
                  <td className="p-4 font-micro-tag text-[9px] text-[#e3e2e3] uppercase tracking-wider font-semibold">
                    {row.param}
                  </td>
                  <td className={`p-4 ${row.marineHighlight || ''}`}>
                    {row.marine}
                  </td>
                  <td className={`p-4 ${row.calibratedHighlight || ''}`}>
                    {row.calibrated}
                  </td>
                  <td className="p-4 text-[#c3c7cb]">
                    {row.mr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
