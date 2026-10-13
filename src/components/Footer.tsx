import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E2DFD8] text-[#1B1C1A]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E2DFD8]">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#121316] text-[#FBF9F5] flex items-center justify-center font-serif text-base font-semibold">
                  <span>B</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold tracking-tight text-[#121316] leading-none">
                    BroRiser
                  </span>
                  <span className="text-[8px] font-sans tracking-[0.2em] uppercase text-[#71747E] font-medium mt-0.5">
                    Real Estate Consulting
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#5E5E62] leading-relaxed max-w-sm mb-6">
                Transforming real estate consulting through transparency, institutional diligence, and digital clarity.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F5F2EB] border border-[#D8D4CC] text-[10px] font-semibold uppercase tracking-wider text-[#1E3A2F] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
              <span>FIDUCIARY STANDARDS ENFORCED</span>
            </div>
          </div>

          {/* Links Columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: Opportunities */}
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#121316] mb-4">
                OPPORTUNITIES
              </span>
              <ul className="space-y-2.5 text-xs text-[#5E5E62]">
                <li><a href="#curated-opportunities" className="hover:text-[#121316] transition-colors">Prime Residential</a></li>
                <li><a href="#curated-opportunities" className="hover:text-[#121316] transition-colors">Grade-A Commercial</a></li>
                <li><a href="#curated-opportunities" className="hover:text-[#121316] transition-colors">Land Parcels</a></li>
                <li><a href="#contact-advisory" className="hover:text-[#121316] transition-colors">Portfolio Advisory</a></li>
              </ul>
            </div>

            {/* Column 2: Framework */}
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#121316] mb-4">
                FRAMEWORK
              </span>
              <ul className="space-y-2.5 text-xs text-[#5E5E62]">
                <li><a href="#methodology" className="hover:text-[#121316] transition-colors">Transparency Charter</a></li>
                <li><a href="#due-diligence" className="hover:text-[#121316] transition-colors">RERA & Due Diligence</a></li>
                <li><a href="#due-diligence" className="hover:text-[#121316] transition-colors">Verification Standards</a></li>
                <li><a href="#methodology" className="hover:text-[#121316] transition-colors">Research & Insights</a></li>
              </ul>
            </div>

            {/* Column 3: Partnerships */}
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#121316] mb-4">
                PARTNERSHIPS
              </span>
              <ul className="space-y-2.5 text-xs text-[#5E5E62]">
                <li><a href="#partners" className="hover:text-[#121316] transition-colors">Developer Representation</a></li>
                <li><a href="#partners" className="hover:text-[#121316] transition-colors">Channel Partners</a></li>
                <li><a href="#partners" className="hover:text-[#121316] transition-colors">Institutional Capital</a></li>
              </ul>
            </div>

            {/* Column 4: Corporate */}
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#121316] mb-4">
                CORPORATE
              </span>
              <ul className="space-y-2.5 text-xs text-[#5E5E62]">
                <li><a href="#methodology" className="hover:text-[#121316] transition-colors">About BroRiser</a></li>
                <li><a href="#contact-advisory" className="hover:text-[#121316] transition-colors">Leadership</a></li>
                <li><a href="#due-diligence" className="hover:text-[#121316] transition-colors">Regulatory Disclosures</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Sub-Footer Legal Block */}
        <div className="pt-8 flex flex-col gap-4 text-[11px] text-[#71747E] leading-relaxed">
          <p className="max-w-4xl">
            Illustrative Concept Prototype. BroRiser Consulting is an independent advisory firm. All opportunity data presented is for discovery guidance; formal representation occurs under statutory contracts and verified documentation.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-[#E2DFD8] text-[10px] text-[#8C8E97]">
            <span>
              © 2025 BroRiser Consulting LLP. Registered Advisory Firm. RERA Compliance Mandate Enforced.
            </span>
            <span className="font-medium text-[#121316]">
              Bangalore · Mumbai · NCR
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
