import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Building, Eye } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onCharterClick: () => void;
  onInspectHeroProperty: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onCharterClick,
  onInspectHeroProperty,
}) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E2DFD8] bg-[#FBF9F5] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Proposition & Institutional Voice */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#46464B]">
                INSTITUTIONAL ADVISORY • HIGH CONVICTION
              </span>
            </div>

            {/* Display Hero Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] leading-[1.12] text-[#121316] font-normal tracking-[-0.02em] mb-7 max-w-2xl text-balance">
              Real estate deserves a more transparent way forward.
            </h1>

            {/* Subtitle Prose */}
            <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-[#46464B] max-w-xl mb-9">
              Explore property opportunities with greater clarity, thoughtful guidance, and a more considered path from discovery to decision. Free from hyperbole, artificial scarcity, and speculative clutter.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onExploreClick}
                className="px-7 py-3.5 bg-[#121316] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A2F] transition-all flex items-center gap-3 cursor-pointer group shadow-sm"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onCharterClick}
                className="px-6 py-3.5 bg-transparent border border-[#121316] text-[#121316] text-xs font-semibold uppercase tracking-wider hover:bg-[#F5F2EB] transition-colors cursor-pointer"
              >
                Our Approach & Charter
              </button>
            </div>

            {/* Trust Standard Box */}
            <div className="p-4 sm:p-5 bg-[#F5F2EB] border border-[#E2DFD8] flex items-start gap-4 max-w-xl">
              <div className="p-2 bg-[#FFFFFF] border border-[#D8D4CC] text-[#1E3A2F] shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#121316] mb-1">
                  RIGOROUS STANDARDS
                </span>
                <p className="text-xs text-[#5E5E62] leading-relaxed">
                  No inflated projections. Every listing itemized by confirmed regulatory status versus verifications pending in diligence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Spotlight Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md bg-[#FFFFFF] border border-[#E2DFD8] p-4 shadow-[0_20px_40px_-15px_rgba(18,19,22,0.05)] transition-all hover:border-[#121316] group">
              
              {/* Card Micro-Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E2DFD8] mb-3 text-[10px] font-semibold tracking-wider text-[#71747E] uppercase">
                <span className="truncate pr-2">Curated Opportunities • Gurugram, Mumbai & Bengaluru</span>
                <span className="shrink-0 text-[#1E3A2F] font-bold">Zero Speculative Clutter</span>
              </div>

              {/* Photo Area */}
              <div className="relative aspect-[4/3] bg-[#EAE8E4] overflow-hidden mb-4 cursor-pointer" onClick={onInspectHeroProperty}>
                <img
                  src="/src/assets/images/hero_sky_villa_1791906549770.jpg"
                  alt="The Sky Villa Sanctuary Worli"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Fallback pattern in case image fails */}
                <div className="absolute inset-0 -z-10 bg-[#E4E2DE] flex flex-col items-center justify-center p-6 text-center">
                  <Building className="w-10 h-10 text-[#71747E] mb-2" />
                  <span className="font-serif text-sm font-semibold text-[#121316]">The Sky Villa Sanctuary</span>
                </div>

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#121316]/90 backdrop-blur-sm text-[#FBF9F5] text-[10px] font-semibold uppercase tracking-wider">
                    VERIFIED MANDATE
                  </span>
                  <span className="px-2 py-1 bg-[#FBF9F5]/90 backdrop-blur-sm text-[#121316] text-[10px] font-semibold tracking-wider">
                    REF #BR-2025-09
                  </span>
                </div>

                {/* Hover inspection pill */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1.5 bg-[#121316] text-[#FBF9F5] text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Diligence</span>
                  </span>
                </div>
              </div>

              {/* Details & Specs */}
              <div className="pt-1 pb-3">
                <h3 className="font-serif text-2xl text-[#121316] font-semibold mb-1 group-hover:text-[#1E3A2F] transition-colors">
                  The Sky Villa Sanctuary
                </h3>
                <p className="text-xs text-[#71747E] mb-4">
                  Worli Promenade • Direct Verified Developer Channel
                </p>

                {/* Spec Band */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-[#E2DFD8] text-xs">
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-[#8C8E97] tracking-wider mb-0.5">
                      INDICATIVE BAND
                    </span>
                    <span className="font-semibold text-[#121316] tabular-nums">
                      ₹18.5 Cr – ₹32.0 Cr
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-[#8C8E97] tracking-wider mb-0.5">
                      STATUS
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold text-[#1E3A2F]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
                      <span>Title Inspected</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Matrix Volume Caption */}
            <div className="w-full max-w-md flex items-center justify-between mt-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#71747E]">
              <span>BroRiser Discovery Matrix</span>
              <span className="tabular-nums">Vol. 04 / 2025</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
