import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Check, Paperclip, Loader2, AlertCircle } from 'lucide-react';

interface BOQQuoteSectionProps {
  initialProduct?: string;
  initialThickness?: string;
}

// TODO: replace with your real WhatsApp Business number (digits only, country code, no + or spaces)
const WHATSAPP_NUMBER = '18005797827';

export const BOQQuoteSection: React.FC<BOQQuoteSectionProps> = ({
  initialProduct = 'Club Shield Marine Ply (BWP 710)',
  initialThickness = '',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    clientType: 'Architect',
    product: initialProduct,
    quantity: '',
    notes: initialThickness ? `Specified thickness: ${initialThickness}` : '',
  });

  // Keep product updated if initialProduct changes
  React.useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        product: initialProduct,
        notes: initialThickness
          ? `Specified thickness: ${initialThickness}`
          : prev.notes,
      }));
    }
  }, [initialProduct, initialThickness]);

  // Submits to Netlify Forms (see the hidden "boq-quote" form stub in index.html).
  // Netlify intercepts POSTs to "/" that include a matching form-name and
  // routes the data to your Netlify dashboard + email notifications.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    const body = new FormData();
    body.append('form-name', 'boq-quote');
    Object.entries(formData).forEach(([key, value]) => body.append(key, value));
    if (attachment) body.append('attachment', attachment);

    try {
      const response = await fetch('/', { method: 'POST', body });
      if (!response.ok) throw new Error(`Submission failed (${response.status})`);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        "Couldn't send your request — please check your connection and try again, or use the direct line/email on the right."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttachment(e.target.files?.[0] ?? null);
  };

  return (
    <section id="boq-quote" className="w-full bg-[#121314] py-16 border-t border-[#343536]/40 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
            [ SECTION 18 // SPECIFICATION INTAKE ]
          </div>
          <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
            LET'S BUILD SOMETHING STRONG.
          </h2>
          <p className="font-body-md text-[15px] text-[#c3c7cb] mt-1">
            Submit your Bill of Quantities (BOQ), commercial project details, or sample kit requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-8 bg-[#1b1c1d] p-6 sm:p-8 border border-[#343536] shadow-2xl">
            {submitted ? (
              <div className="p-8 bg-[#1f2021] border border-[#f6bd4e] text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#f6bd4e]/20 border border-[#f6bd4e] text-[#f6bd4e] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-headline-lg text-2xl font-bold uppercase text-white">
                  BOQ Inquiry Received
                </h3>
                <p className="font-body-sm text-[14px] text-[#c3c7cb] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. An architectural application engineer will review your schedule for <span className="text-[#f6bd4e] font-semibold">{formData.product}</span> and respond within 4 business hours.
                </p>
                <div className="pt-2 font-mono text-[11px] text-[#c3c7cb]">
                  REF TICKET: KP-BOQ-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#d91e18] hover:bg-[#c00007] text-white font-label-caps text-[11px] uppercase tracking-wider"
                >
                  Submit Another Schedule
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="boq-quote"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="boq-quote" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                      Company / Architectural Practice
                    </label>
                    <input
                      type="text"
                      placeholder="Studio / Firm Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                      City &amp; State*
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Location"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                      I am a:*
                    </label>
                    <select
                      value={formData.clientType}
                      onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                      className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                    >
                      <option>Architect</option>
                      <option>Interior Designer</option>
                      <option>Homeowner</option>
                      <option>Contractor / Fabricator</option>
                      <option>Dealer / Distributor</option>
                      <option>Builder / Developer</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                      Product Interested In
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                    >
                      <option>Club Shield Marine Ply (BWP 710)</option>
                      <option>Club Shield Calibrated Ply</option>
                      <option>Fire-Retardant FR Ply</option>
                      <option>Architectural Blockboard</option>
                      <option>Club Shield Flush Doors</option>
                      <option>Decorative Veneer Solutions</option>
                      <option>Multiple / Complete BOQ</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                      Estimated Quantity (Sheets)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 150 Sheets"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-micro-tag text-[9px] text-[#c3c7cb] uppercase block mb-1">
                    Project Details / Material Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention thickness requirements (e.g. 19mm, 12mm), applications (kitchen, wardrobe), or delivery timelines..."
                    className="w-full bg-[#1f2021] p-3 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
                  />
                </div>

                {/* File Attachment */}
                <div className="p-3 bg-[#1f2021] border border-[#343536] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[#c3c7cb] font-body-sm text-[13px] min-w-0">
                    <Paperclip className="w-4 h-4 text-[#f6bd4e] shrink-0" />
                    {attachment ? (
                      <span className="text-[#f6bd4e] font-mono text-xs truncate">
                        Attached: {attachment.name}
                      </span>
                    ) : (
                      <span>Attach BOQ or Drawing (.PDF, .XLSX, .DWG):</span>
                    )}
                  </div>
                  <label className="px-3 py-1.5 bg-[#292a2b] hover:bg-[#343536] text-[10px] font-label-caps uppercase text-[#e3e2e3] border border-[#343536] cursor-pointer shrink-0">
                    {attachment ? 'Change File' : 'Browse Files'}
                    <input
                      type="file"
                      name="attachment"
                      accept=".pdf,.xlsx,.dwg,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {submitError && (
                  <div className="flex items-start gap-2 p-3 bg-[#2a1414] border border-[#93000a] text-[#ffb4ab] font-body-sm text-[13px]">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#d91e18] hover:bg-[#c00007] disabled:opacity-60 disabled:cursor-not-allowed text-white font-headline-sm text-[11px] uppercase tracking-wider transition-colors font-bold shadow-xl cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending Request...
                    </>
                  ) : (
                    <>[+] Submit BOQ Specification Request</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Contact Cards */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 bg-[#1b1c1d] border border-[#343536]">
              <Phone className="w-5 h-5 text-[#f6bd4e] mb-2" />
              <div className="font-headline-sm text-base uppercase text-[#e3e2e3] font-semibold">
                Direct Technical Line
              </div>
              <p className="font-body-sm text-[13px] text-[#c3c7cb] mt-1 leading-relaxed">
                Speak directly with a timber application engineer for load and span calculations.
              </p>
              <div className="font-label-caps text-[12px] text-[#f6bd4e] mt-2 font-mono">
                +1 (800) 579-7827
              </div>
            </div>

            <div className="p-5 bg-[#1b1c1d] border border-[#343536]">
              <Mail className="w-5 h-5 text-[#f6bd4e] mb-2" />
              <div className="font-headline-sm text-base uppercase text-[#e3e2e3] font-semibold">
                Direct Spec Email
              </div>
              <p className="font-body-sm text-[13px] text-[#c3c7cb] mt-1 leading-relaxed">
                Send architectural CAD files and schedules directly to our engineering desk.
              </p>
              <div className="font-label-caps text-[12px] text-[#f6bd4e] mt-2 font-mono">
                SPEC@KRYSTAPLY.COM
              </div>
            </div>

            <div className="p-5 bg-[#1b1c1d] border border-[#343536]">
              <MessageSquare className="w-5 h-5 text-[#f6bd4e] mb-2" />
              <div className="font-headline-sm text-base uppercase text-[#e3e2e3] font-semibold">
                Fast WhatsApp Support
              </div>
              <p className="font-body-sm text-[13px] text-[#c3c7cb] mt-1 leading-relaxed">
                Quick stock availability and dispatch updates for contractors and project managers on site.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  'Hi, I have a question about Krystaply Club Shield plywood.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-[11px] font-label-caps uppercase text-[#d91e18] hover:underline font-bold block cursor-pointer"
              >
                [+] Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
