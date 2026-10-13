import React from 'react';
import { Building2, Newspaper, Check, ArrowRight, ArrowUpRight } from 'lucide-react';

interface PartnersSectionProps {
  onDeveloperClick: () => void;
  onPartnerClick: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  onDeveloperClick,
  onPartnerClick,
}) => {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E2DFD8]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-[#71747E] block mb-2">
            PARTNERSHIP ECOSYSTEM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#121316] mb-3">
            Institutional Collaboration for Developers & Partners
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#46464B]">
            We bridge premier real estate creators with qualified capital through rigorous curation.
          </p>
        </div>

        {/* 2 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: For Developers */}
          <div className="bg-[#FFFFFF] border border-[#E2DFD8] p-8 sm:p-10 flex flex-col justify-between hover:border-[#121316] transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E2DFD8] mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#71747E]">
                  TIER-1 DEVELOPER MANDATE
                </span>
                <Building2 className="w-4 h-4 text-[#121316]" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#121316] mb-4">
                For Developers
              </h3>

              <p className="text-xs sm:text-sm text-[#46464B] leading-relaxed mb-8">
                Experience institutional representation with a refined digital-first presentation. Access pre-qualified family office capital, high-net-worth investors, and an orderly sales channel that protects project brand equity.
              </p>

              <div className="space-y-3 mb-10 text-xs sm:text-sm text-[#1B1C1A]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                  <span>Pre-screened liquidity and serious buyer mandates</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                  <span>Clean architectural editorial packaging & 3D asset presentation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                  <span>Direct response within 1 business day from an asset specialist</span>
                </div>
              </div>
            </div>

            <button
              onClick={onDeveloperClick}
              className="w-full py-3.5 bg-[#121316] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A2F] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Discuss Developer Representation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: For Channel Partners & Wealth Managers */}
          <div className="bg-[#FFFFFF] border border-[#E2DFD8] p-8 sm:p-10 flex flex-col justify-between hover:border-[#121316] transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E2DFD8] mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#71747E]">
                  SYNDICATE & WEALTH DESKS
                </span>
                <Newspaper className="w-4 h-4 text-[#121316]" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#121316] mb-4">
                For Channel Partners & Wealth Managers
              </h3>

              <p className="text-xs sm:text-sm text-[#46464B] leading-relaxed mb-8">
                Empower your ultra-high-net-worth advisory clients with transparent, institutionally vetted dossiers. Partner through structured co-broking agreements, protected commissions, and shared data rooms.
              </p>

              <div className="space-y-3 mb-10 text-xs sm:text-sm text-[#1B1C1A]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                  <span>Escrow-backed commission guarantees and timely disbursal</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                  <span>Institutional research briefs and asset comparables</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1E3A2F] shrink-0 mt-0.5" />
                  <span>Co-branded legal verification certificates for client presentations</span>
                </div>
              </div>
            </div>

            <button
              onClick={onPartnerClick}
              className="w-full py-3.5 bg-[#F5F2EB] border border-[#D8D4CC] text-[#121316] text-xs font-semibold uppercase tracking-wider hover:bg-[#EAE8E4] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Co-Broking Synergies</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
