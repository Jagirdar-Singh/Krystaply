import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ArchitectPortalProps {
  onOpenEnquiry: () => void;
}

export const ArchitectPortal: React.FC<ArchitectPortalProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="w-full bg-[#121314] py-16 border-t border-[#343536]/40 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#1b1c1d] p-6 sm:p-10 border border-[#343536] items-center shadow-xl">
          {/* Left info column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
              [ SECTION 11 // SPECIFIERS ]
            </div>

            <h2 className="font-display-lg text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
              DESIGNED FOR THE PEOPLE WHO DESIGN.
            </h2>

            <p className="font-body-md text-[15px] text-[#c3c7cb] leading-relaxed">
              We provide architects, spatial designers, and high-end turnkey contractors with the technical documentation, samples, and specification support required to execute ambitious millwork without substrate risk.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-body-sm text-[13px]">
              <div className="flex items-center gap-2 text-[#e3e2e3]">
                <CheckCircle className="w-4 h-4 text-[#f6bd4e] shrink-0" />
                CAD Details &amp; Layer DWGs
              </div>
              <div className="flex items-center gap-2 text-[#e3e2e3]">
                <CheckCircle className="w-4 h-4 text-[#f6bd4e] shrink-0" />
                Physical Swatch Box Delivery
              </div>
              <div className="flex items-center gap-2 text-[#e3e2e3]">
                <CheckCircle className="w-4 h-4 text-[#f6bd4e] shrink-0" />
                BOQ Specification Assistance
              </div>
              <div className="flex items-center gap-2 text-[#e3e2e3]">
                <CheckCircle className="w-4 h-4 text-[#f6bd4e] shrink-0" />
                Direct Project Representative
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center bg-[#102a43] hover:bg-[#1f4068] text-white font-headline-sm text-[11px] uppercase px-6 py-3 tracking-wider transition-colors border border-[#102a43] font-bold cursor-pointer shadow-md"
              >
                Architect &amp; Designer Enquiry
              </button>
            </div>
          </div>

          {/* Right graphic preview */}
          <div className="lg:col-span-5 bg-[#1f2021] p-5 border border-[#343536]">
            <div className="w-full h-52 bg-[#343536] overflow-hidden mb-3 border border-[#343536]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjWR71YbNjujLsow3lwvxbL7BQaYpfjdwqlcKscuakAPgeP57rDifshZbFPrxCba5vXAgYCEbNya7SiRVU-ANBxAy6k4LFOe0XYgxegz7QSYSL8CYNs9ka3JKyrBAUDEH7eZDTIL20DQOarcvpKucsotHwWq6qj5aBEPRjzGGLyMClJg2dVYI_7ju7KDGhsrP-xShxe0PNJ4DO2p4DP3W0ez_OihM0SUDmhTgLkT3XHlSzgHHMzu67-w"
                alt="Architectural studio workspace with blueprints, CAD monitors, and layered wooden material sample cubes"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase mb-1 font-bold">
              SAMPLE BOX DISPATCH
            </div>
            <p className="font-body-sm text-[12px] text-[#c3c7cb] leading-relaxed">
              Order an architectural kit containing cross-cut calibrated blocks, veneer samples, and lab tear-sheets directly to your studio practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
