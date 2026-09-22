import React, { useState } from 'react';
import { X } from 'lucide-react';

const LEGAL_CONTENT: Record<string, { title: string; body: string }> = {
  privacy: {
    title: 'Privacy Register',
    body: "We collect the information you submit through our BOQ and enquiry forms (name, company, contact details, and project notes) solely to respond to your request and provide quotes or technical support. We do not sell your data to third parties. [Replace this paragraph with your actual data-handling practices before publishing — this is placeholder text, not a reviewed legal policy.]",
  },
  compliance: {
    title: 'Compliance Matrix',
    body: 'Our panels are manufactured to meet the standards referenced across this site (e.g. IS:710, ASTM D1037). [Replace this section with your verified certification numbers, issuing bodies, and links to actual test reports before publishing — claims of ISO or ASTM compliance should be backed by real, checkable documentation.]',
  },
  warranty: {
    title: 'Warranty Certificate Terms',
    body: '[Add your real warranty terms here — coverage period, what is and is not covered, and the claims process. This placeholder exists so the link is honest rather than a dead end, but it should not go live with generic text.]',
  },
};

export const Footer: React.FC = () => {
  const [openLegal, setOpenLegal] = useState<keyof typeof LEGAL_CONTENT | null>(null);

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
            © {new Date().getFullYear()} KRYSTAPLY CLUB SHIELD™ CORPORATION. ALL SPECIFICATIONS REGISTERED &amp; TRADEMARKED.
          </div>
          <div className="flex items-center gap-6 font-micro-tag text-[9px] uppercase tracking-wider">
            <button
              onClick={() => setOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Register
            </button>
            <button
              onClick={() => setOpenLegal('compliance')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Compliance Matrix
            </button>
            <button
              onClick={() => setOpenLegal('warranty')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Warranty Certificate Terms
            </button>
          </div>
        </div>
      </div>

      {/* Legal content modal — replaces the old fake alert() popups */}
      {openLegal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setOpenLegal(null)}
        >
          <div
            className="max-w-lg w-full bg-[#1b1c1d] border border-[#343536] shadow-2xl p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenLegal(null)}
              className="absolute top-4 right-4 text-[#c3c7cb] hover:text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-headline-md text-xl font-bold uppercase text-white mb-4">
              {LEGAL_CONTENT[openLegal].title}
            </h3>
            <p className="font-body-sm text-[14px] text-[#c3c7cb] leading-relaxed">
              {LEGAL_CONTENT[openLegal].body}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};
