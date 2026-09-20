import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { LIBRARY_DOCS } from '../data/mockData';

export const PlywoodLibrary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocs = LIBRARY_DOCS.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = (title: string, size: string) => {
    alert(`Initiating secure technical download: ${title} (${size}).`);
  };

  return (
    <section id="resources-section" className="w-full bg-[#171717] py-16 border-t border-[#343536]/50 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-label-caps text-[11px] text-[#f6bd4e] uppercase tracking-widest">
              [ SECTION 14 // REPOSITORY ]
            </div>
            <h2 className="font-display-lg text-3xl sm:text-4xl font-bold text-[#e3e2e3] uppercase tracking-tight">
              THE PLYWOOD LIBRARY
            </h2>
            <p className="font-body-md text-[15px] text-[#c3c7cb] mt-1">
              Download architectural specification sheets, guides, and care handbooks.
            </p>
          </div>

          {/* Live Search Input */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-[#c3c7cb] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technical documents..."
              className="w-full bg-[#1f2021] pl-9 pr-3 py-2.5 font-body-sm text-[13px] text-[#e3e2e3] border border-[#343536] focus:border-[#f6bd4e] outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="libraryGrid">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-5 bg-[#1b1c1d] border border-[#343536] hover:border-[#f6bd4e]/50 transition-all flex flex-col justify-between shadow-md"
            >
              <div>
                <span className="material-symbols-outlined text-[#f6bd4e] text-[28px] mb-2 block">
                  {doc.icon}
                </span>
                <h3 className="font-headline-sm text-base font-semibold uppercase text-[#e3e2e3]">
                  {doc.title}
                </h3>
                <p className="font-body-sm text-[12px] text-[#c3c7cb] mt-1 leading-relaxed">
                  {doc.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleDownload(doc.title, doc.fileSize)}
                className="mt-6 py-2 bg-[#1f2021] hover:bg-[#292a2b] text-[#e3e2e3] font-label-caps text-[11px] uppercase transition-colors border border-[#343536] cursor-pointer"
              >
                Download ({doc.fileSize})
              </button>
            </div>
          ))}

          {filteredDocs.length === 0 && (
            <div className="col-span-full p-8 text-center bg-[#1b1c1d] border border-[#343536] text-[#c3c7cb]">
              No documents matched your search term "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
