import React from 'react';
import { Compass, FileCheck, Shield, Users } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover the Opportunity',
      description:
        'Filter by verified capital allocation bands, micro-market velocity, and asset class without high-pressure sales calls, fabricated discounts, or misleading starting prices.',
      tag: 'OBJECTIVE DISCOVERY',
      icon: Compass,
    },
    {
      step: '02',
      title: 'Understand Verified Details',
      description:
        'Access comprehensive Property Briefs detailing verified municipal approvals, encumbrance certificates, developer milestone audits, and items that remain pending verification.',
      tag: 'TITLE & SPEC AUDITS',
      icon: FileCheck,
    },
    {
      step: '03',
      title: 'Connect with a Senior Advisor',
      description:
        'Engage in an objective consultation tailored strictly to your portfolio timeline, tax exposure, and family office acquisition structures with zero aggressive follow-ups.',
      tag: 'PRIVATE FIDUCIARY SESSION',
      icon: Shield,
    },
  ];

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E2DFD8]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-[#71747E] block mb-2">
            METHODOLOGY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#121316] mb-3">
            A Clearer Path to a Decision
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#46464B]">
            We replace opaque transactional pressure with structured, calm milestone reviews.
          </p>
        </div>

        {/* 3 Step Architectural Plates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#FFFFFF] border border-[#E2DFD8] p-8 flex flex-col justify-between hover:border-[#121316] transition-all group"
              >
                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-[#71747E]/40 font-normal block mb-6 group-hover:text-[#121316] transition-colors tabular-nums">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#121316] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#46464B] leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DFD8] flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#71747E]">
                  <Icon className="w-3.5 h-3.5 text-[#1E3A2F]" />
                  <span>{item.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
