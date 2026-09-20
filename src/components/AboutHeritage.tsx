import React from 'react';

export const AboutHeritage: React.FC = () => {
  return (
    <section id="about-section" className="w-full bg-[#121314] py-16 border-t border-[#343536]/40 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
              [ SECTION 17 // HERITAGE ]
            </div>
            <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight leading-tight">
              BUILT ON WOOD.<br />
              <span className="text-[#d91e18]">DRIVEN BY PRECISION.</span>
            </h2>
            <p className="font-body-lg text-lg text-[#c3c7cb] leading-relaxed">
              KRYSTAPLY CLUB SHIELD™ was established to eliminate the chronic unpredictability of timber composites. Where traditional plywood often conceals hollow interior gaps, mixed timber grades, and erratic thickness, we apply industrial engineering standards.
            </p>
            <p className="font-body-md text-[15px] text-[#e3e2e3]/80 leading-relaxed">
              By integrating advanced resin formulations, strict hydraulic calibration, and zero-compromise destructive testing, we empower architects to specify timber substrates with the same structural confidence as structural steel.
            </p>
          </div>

          {/* Right Milestone Timeline */}
          <div className="lg:col-span-6 bg-[#1b1c1d] p-6 sm:p-8 border border-[#343536] shadow-xl">
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase mb-6 font-bold tracking-wider">
              Evolutionary Milestones
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="font-label-caps text-[11px] text-[#d91e18] font-bold shrink-0 w-24 pt-0.5">
                  FOUNDATION
                </span>
                <div>
                  <h4 className="font-headline-sm text-base uppercase text-[#e3e2e3] font-semibold">
                    Timber Processing Origins
                  </h4>
                  <p className="font-body-sm text-[13px] text-[#c3c7cb] mt-1 leading-relaxed">
                    Established high-density veneer procurement protocols with a strict ban on hollow core filler strips.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="font-label-caps text-[11px] text-[#f6bd4e] font-bold shrink-0 w-24 pt-0.5">
                  ENGINEERING
                </span>
                <div>
                  <h4 className="font-headline-sm text-base uppercase text-[#e3e2e3] font-semibold">
                    In-House Phenolic Synthesis
                  </h4>
                  <p className="font-body-sm text-[13px] text-[#c3c7cb] mt-1 leading-relaxed">
                    Commissioned specialized high-pressure reactor vessels for 100% pure synthetic unextended phenolic resin.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="font-label-caps text-[11px] text-[#e3e2e3] font-bold shrink-0 w-24 pt-0.5">
                  THE FUTURE
                </span>
                <div>
                  <h4 className="font-headline-sm text-base uppercase text-[#e3e2e3] font-semibold">
                    Club Shield™ Automated Era
                  </h4>
                  <p className="font-body-sm text-[13px] text-[#c3c7cb] mt-1 leading-relaxed">
                    Full line 4-head automated sanding calibration and ultrasound void detection systems installed across facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
