import React from 'react';
import { ShieldCheck, Ban, CheckSquare, Scale, Layers } from 'lucide-react';

export const IntegritySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2DFD8]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Proposition and Verification Guarantee */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#46464B]">
                THE FIDUCIARY STANDARD
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight tracking-tight text-[#121316] mb-6">
              Built on Institutional Integrity, Not Transactional Churn.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#46464B] leading-relaxed mb-8">
              Traditional brokerage thrives on informational asymmetry. BroRiser was founded to establish the standard we demanded as private investors: full disclosure, zero pressure, and audited facts.
            </p>

            {/* Guarantee Highlight Plate */}
            <div className="p-6 bg-[#FBF9F5] border border-[#E2DFD8] relative">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#1E3A2F] block mb-2">
                OUR VERIFICATION GUARANTEE
              </span>
              <p className="text-xs sm:text-sm text-[#121316] leading-relaxed">
                Every prospective deal posted to our institutional platform undergoes title verification by independent legal counsel before onboarding.
              </p>
            </div>
          </div>

          {/* Right Column: 2x2 Pillar Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-6 sm:p-7 bg-[#FBF9F5] border border-[#E2DFD8] flex flex-col justify-between hover:border-[#121316] transition-all">
              <div>
                <div className="w-8 h-8 flex items-center justify-center text-[#121316] mb-4">
                  <Ban className="w-5 h-5 text-[#71747E]" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#121316] mb-2.5">
                  Zero Artificial Urgency
                </h3>
                <p className="text-xs text-[#5E5E62] leading-relaxed">
                  We never publish artificial countdown clocks, false bidding wars, or fabricated unit exhaustion metrics. You deliberate on your own timeline.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 sm:p-7 bg-[#FBF9F5] border border-[#E2DFD8] flex flex-col justify-between hover:border-[#121316] transition-all">
              <div>
                <div className="w-8 h-8 flex items-center justify-center text-[#1E3A2F] mb-4">
                  <CheckSquare className="w-5 h-5 text-[#1E3A2F]" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#121316] mb-2.5">
                  Clear Title & RERA First
                </h3>
                <p className="text-xs text-[#5E5E62] leading-relaxed">
                  Only projects with fully inspectable public authority records and statutory approvals enter our active advisory directory.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 sm:p-7 bg-[#FBF9F5] border border-[#E2DFD8] flex flex-col justify-between hover:border-[#121316] transition-all">
              <div>
                <div className="w-8 h-8 flex items-center justify-center text-[#121316] mb-4">
                  <Scale className="w-5 h-5 text-[#71747E]" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#121316] mb-2.5">
                  Transparent Advisory Model
                </h3>
                <p className="text-xs text-[#5E5E62] leading-relaxed">
                  Independent counsel aligned with long-term investor satisfaction rather than short-term developer sales commissions.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 sm:p-7 bg-[#FBF9F5] border border-[#E2DFD8] flex flex-col justify-between hover:border-[#121316] transition-all">
              <div>
                <div className="w-8 h-8 flex items-center justify-center text-[#121316] mb-4">
                  <Layers className="w-5 h-5 text-[#71747E]" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#121316] mb-2.5">
                  Information Distinction
                </h3>
                <p className="text-xs text-[#5E5E62] leading-relaxed">
                  Always knowing what is legally binding and verified versus what remains indicative or subject to statutory sanction.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
