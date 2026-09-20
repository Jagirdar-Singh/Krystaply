import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const DealerNetwork: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    city: '',
    years: '',
    phone: '',
    email: '',
    volume: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#171717] py-16 border-t border-[#343536]/50 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
              [ SECTION 12 // EXPANSION ]
            </div>
            <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
              BUILD THE NETWORK WITH US.
            </h2>
            <p className="font-body-md text-[15px] text-[#c3c7cb] leading-relaxed">
              Partner with KRYSTAPLY CLUB SHIELD™ as an authorized distribution partner. We support stockists with consistent batch supply, marketing collateral, competitive margin structures, and certified factory-direct guarantees.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 bg-[#1f2021] border border-[#343536]">
                <span className="font-label-caps text-[11px] text-[#f6bd4e] uppercase block font-bold">
                  PRIORITY REGIONAL INVENTORY
                </span>
                <span className="font-body-sm text-[13px] text-[#c3c7cb] mt-1 block">
                  Guaranteed warehouse fulfillment cycles for standard 8x4 calibrated sheets.
                </span>
              </div>
              <div className="p-4 bg-[#1f2021] border border-[#343536]">
                <span className="font-label-caps text-[11px] text-[#f6bd4e] uppercase block font-bold">
                  ARCHITECTURAL LEAD ROUTING
                </span>
                <span className="font-body-sm text-[13px] text-[#c3c7cb] mt-1 block">
                  Regional commercial project enquiries directly routed to our authorized stocking dealers.
                </span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7 bg-[#1b1c1d] p-6 sm:p-8 border border-[#343536] shadow-xl">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold uppercase text-[#e3e2e3] mb-6">
              Authorized Dealer Application
            </h3>

            {submitted ? (
              <div className="p-6 bg-[#1f2021] border border-[#f6bd4e] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#f6bd4e]/20 border border-[#f6bd4e] text-[#f6bd4e] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-headline-sm text-lg font-bold text-white uppercase">
                  Application Received
                </h4>
                <p className="font-body-sm text-[13px] text-[#c3c7cb] max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.name || 'Partner'}</span>. Our Regional Distribution Lead will review your warehouse capacity and reach out within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-[#292a2b] hover:bg-[#343536] text-xs uppercase font-mono text-[#f6bd4e] border border-[#343536]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Partner Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                  />
                </div>
                <div>
                  <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                    Firm / Enterprise*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Timber Trading Co."
                    value={formData.firm}
                    onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                    className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                  />
                </div>
                <div>
                  <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                    City / Region*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai / Bangalore / Dubai"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                  />
                </div>
                <div>
                  <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                    Years In Timber Trade
                  </label>
                  <input
                    type="text"
                    placeholder="[XX+] Years"
                    value={formData.years}
                    onChange={(e) => setFormData({ ...formData, years: e.target.value })}
                    className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                  />
                </div>
                <div>
                  <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                  />
                </div>
                <div>
                  <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                    Business Email*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="dealer@timber.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                    Expected Monthly Volume (Sheets)
                  </label>
                  <input
                    type="text"
                    placeholder="[XX,XXX+] Sheets / Month"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                  />
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#f6bd4e] hover:bg-[#ffdea7] text-[#412d00] font-headline-sm text-[11px] uppercase tracking-wider transition-colors font-bold cursor-pointer shadow-lg"
                  >
                    Submit Dealership Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
