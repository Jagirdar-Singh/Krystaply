import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="w-full bg-[#0d0e0f] border-t border-[#343536] text-white"
      style={{ backgroundColor: 'rgb(13, 14, 15)', borderColor: 'rgb(52, 53, 54)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#343536]/60">
          {/* Brand and Certs */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-lg text-[#e3e2e3] uppercase font-bold tracking-tight">
                KRYSTAPLY CLUB SHIELD™
              </span>
              <span className="font-micro-tag text-[9px] text-[#f6bd4e] border border-[#f6bd4e]/40 px-1.5 py-0.5">
                SPEC // ISO-9001
              </span>
            </div>

            <p className="font-body-sm text-[13px] text-[#c3c7cb] max-w-sm leading-relaxed">
              Engineered architectural timber panels engineered for zero-tolerance structural resilience, fire resistance, and lifetime composite stability.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="font-micro-tag text-[9px] bg-[#1f2021] text-[#f6bd4e] px-2 py-1 border border-[#343536]">
                IS:710 COMPLIANT
              </span>
              <span className="font-micro-tag text-[9px] bg-[#1f2021] text-[#ffb4a9] px-2 py-1 border border-[#343536]">
                ASTM-D1037 TESTED
              </span>
              <span className="font-micro-tag text-[9px] bg-[#1f2021] text-[#c3c7cb] px-2 py-1 border border-[#343536]">
                OCTA-PRESS HYDRAULICS
              </span>
            </div>
          </div>

          {/* Specification Lines */}
          <div>
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-wider mb-4 font-bold">
              Specification Lines
            </div>
            <ul className="space-y-2.5 font-body-sm text-[13px] text-[#c3c7cb]">
              <li>
                <a href="#products-range" className="hover:text-white transition-colors">
                  Club Shield Calibrated Ply
                </a>
              </li>
              <li>
                <a href="#products-range" className="hover:text-white transition-colors">
                  Marine Core BWP Grade
                </a>
              </li>
              <li>
                <a href="#products-range" className="hover:text-white transition-colors">
                  Fire-Retardant FR-710
                </a>
              </li>
              <li>
                <a href="#products-range" className="hover:text-white transition-colors">
                  Architectural Blockboards
                </a>
              </li>
              <li>
                <a href="#products-range" className="hover:text-white transition-colors">
                  High-Density Flush Doors
                </a>
              </li>
            </ul>
          </div>

          {/* Technical & Dealers */}
          <div>
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-wider mb-4 font-bold">
              Technical &amp; Dealers
            </div>
            <ul className="space-y-2.5 font-body-sm text-[13px] text-[#c3c7cb]">
              <li>
                <a href="#boq-quote" className="hover:text-white transition-colors">
                  Authorized Dealer Inquiries
                </a>
              </li>
              <li>
                <a href="#quality-section" className="hover:text-white transition-colors">
                  Test Certificates &amp; Reports
                </a>
              </li>
              <li>
                <a href="#resources-section" className="hover:text-white transition-colors">
                  CAD Detail Library (.DWG)
                </a>
              </li>
              <li>
                <a href="#resources-section" className="hover:text-white transition-colors">
                  Material Safety Data Sheets
                </a>
              </li>
              <li>
                <a href="#boq-quote" className="hover:text-white transition-colors">
                  Structural Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate HQ */}
          <div>
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-wider mb-4 font-bold">
              Corporate HQ
            </div>
            <div className="font-body-sm text-[13px] text-[#c3c7cb] space-y-2">
              <p>Industrial Zone Sector 4-B</p>
              <p>Precision Engineered Timber Terminal</p>
              <p className="font-label-caps text-[11px] text-[#e3e2e3] pt-2 font-mono">
                DIRECT: +1 (800) 579-7827
              </p>
              <p className="font-label-caps text-[11px] text-[#f6bd4e] font-mono">
                SPEC@KRYSTAPLY.COM
              </p>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#c3c7cb]">
          <div className="font-micro-tag text-[9px] uppercase tracking-wider text-center md:text-left">
            © 2025 KRYSTAPLY CLUB SHIELD™ CORPORATION. ALL SPECIFICATIONS REGISTERED &amp; TRADEMARKED.
          </div>
          <div className="flex items-center gap-6 font-micro-tag text-[9px] uppercase tracking-wider">
            <button
              onClick={() => alert('Viewing Privacy Register (ISO-27001 data compliance)')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Register
            </button>
            <button
              onClick={() => alert('Viewing Timber Chain of Custody Compliance Matrix')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Compliance Matrix
            </button>
            <button
              onClick={() => alert('Viewing Manufacturer Warranty Certificate Terms & Conditions')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Warranty Certificate Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
