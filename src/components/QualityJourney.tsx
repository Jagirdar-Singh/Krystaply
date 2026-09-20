import React from 'react';

export const QualityJourney: React.FC = () => {
  const steps = [
    { num: 'STEP 01', name: 'Raw Material' },
    { num: 'STEP 02', name: 'Veneer Peeling' },
    { num: 'STEP 03', name: 'Core Assembly' },
    { num: 'STEP 04', name: 'Hot Pressing' },
    { num: 'STEP 05', name: 'Calibration' },
    { num: 'STEP 06', name: 'Lab Testing' },
    { num: 'STEP 07', name: 'Dispatch', isFinal: true },
  ];

  const benchmarks = [
    {
      title: 'Bond Quality',
      tag: '72-HR BOIL AUDIT',
      desc: 'Samples are subjected to continuous boiling water cycles followed by extreme shear knife separation tests to ensure zero delamination.',
    },
    {
      title: 'Dimensional Stability',
      tag: '< 0.1% WARP TARGET',
      desc: 'Panels are conditioned in variable atmospheric chambers to monitor planar deflection and diagonal squareness under shifting climates.',
    },
    {
      title: 'Surface Flatness',
      tag: 'RA < 3.2 MICRONS',
      desc: 'Electronic optical thickness sensors track thickness variation across 16 grid locations on every finished board.',
    },
    {
      title: 'Moisture Resistance',
      tag: '8-12% TARGET',
      desc: 'Moisture meters audit raw veneer before pressing to achieve uniform hygroscopic balance in tropical and temperate air.',
    },
    {
      title: 'Screw Holding Power',
      tag: '> 2500N FACE RETENTION',
      desc: 'High mechanical load testing ensures edge and face screws retain tension without stripping or core disintegration.',
    },
    {
      title: 'Workability',
      tag: 'CLEAN SAW CUTS',
      desc: 'Zero void guarantee prevents chipped veneer edges when running high-speed circular saws and automated CNC cutters.',
    },
  ];

  return (
    <section id="quality-section" className="w-full bg-[#171717] py-16 border-t border-[#343536]/50 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
            [ SECTION 10 // VALIDATION PROTOCOL ]
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
            QUALITY IS MEASURED.
          </h2>
          <p className="font-body-md text-[15px] text-[#c3c7cb] mt-1">
            A complete chain of custody from raw log peeler to laboratory certification.
          </p>
        </div>

        {/* Linear Pipeline Journey */}
        <div className="overflow-x-auto pb-4">
          <div className="flex items-center min-w-[850px] gap-2">
            {steps.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div
                  className={`flex-1 p-3 border text-center transition-transform hover:-translate-y-1 ${
                    step.isFinal
                      ? 'bg-[#d91e18] border-[#d91e18] text-white'
                      : 'bg-[#1b1c1d] border-[#343536] text-[#e3e2e3]'
                  }`}
                >
                  <span
                    className={`font-micro-tag text-[9px] block ${
                      step.isFinal ? 'text-white' : 'text-[#f6bd4e]'
                    }`}
                  >
                    {step.num}
                  </span>
                  <span className="font-label-caps text-[11px] uppercase font-bold tracking-wider">
                    {step.name}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <span className="text-[#c3c7cb] font-mono text-sm px-1 select-none">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 6 QC Benchmark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benchmarks.map((bench) => (
            <div
              key={bench.title}
              className="p-6 bg-[#1f2021] border border-[#343536] hover:border-[#f6bd4e]/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-headline-sm text-lg font-semibold uppercase text-[#e3e2e3]">
                  {bench.title}
                </span>
                <span className="font-micro-tag text-[9px] text-[#f6bd4e] bg-[#292a2b] px-2 py-0.5 border border-[#343536]">
                  {bench.tag}
                </span>
              </div>
              <p className="font-body-sm text-[13px] text-[#c3c7cb] leading-relaxed">
                {bench.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-3 bg-[#1b1c1d] border border-[#343536] text-[#c3c7cb] font-micro-tag text-[10px]">
          * Laboratory metrics and numerical testing data provided here serve as reference engineering standards and can be verified with client-specific lab certificates upon request.
        </div>
      </div>
    </section>
  );
};
