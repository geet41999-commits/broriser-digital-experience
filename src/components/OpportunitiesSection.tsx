import React, { useState } from 'react';
import { SlidersHorizontal, ArrowUpRight, Bookmark, Check, ShieldCheck } from 'lucide-react';
import { Property } from '../types/property';

interface OpportunitiesSectionProps {
  properties: Property[];
  selectedProperty: Property;
  onSelectProperty: (property: Property) => void;
  onBookmarkProperty?: (propertyId: string) => void;
  savedPropertyIds?: string[];
}

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  properties,
  selectedProperty,
  onSelectProperty,
  onBookmarkProperty,
  savedPropertyIds = [],
}) => {
  const [selectedAssetClass, setSelectedAssetClass] = useState<string>('ALL');
  const [selectedRegion, setSelectedRegion] = useState<string>('All Cities');
  const [budgetCap, setBudgetCap] = useState<number>(45);

  const assetClassFilters = [
    { id: 'ALL', label: 'ALL PROPERTIES (12)', match: 'ALL' },
    { id: 'RESIDENTIAL', label: 'LUXURY RESIDENTIAL (6)', match: 'Luxury Residential' },
    { id: 'COMMERCIAL', label: 'GRADE-A COMMERCIAL (4)', match: 'Grade-A Commercial' },
    { id: 'LAND', label: 'PLOTTED LAND (2)', match: 'Plotted Land' },
  ];

  const regionFilters = [
    'All Cities',
    'Gurugram (Golf Course Rd / SPR)',
    'Mumbai (BKC / Worli / Parel)',
    'Bengaluru (North / Whitefield)',
  ];

  const filteredProperties = properties.filter((p) => {
    const matchAsset =
      selectedAssetClass === 'ALL' ||
      (selectedAssetClass === 'RESIDENTIAL' && p.assetClass === 'Luxury Residential') ||
      (selectedAssetClass === 'COMMERCIAL' && p.assetClass === 'Grade-A Commercial') ||
      (selectedAssetClass === 'LAND' && p.assetClass === 'Plotted Land');

    const matchRegion =
      selectedRegion === 'All Cities' ||
      (selectedRegion.includes('Mumbai') && p.city === 'Mumbai') ||
      (selectedRegion.includes('Gurugram') && p.city === 'Gurugram') ||
      (selectedRegion.includes('Bengaluru') && p.city === 'Bengaluru');

    return matchAsset && matchRegion;
  });

  return (
    <section id="curated-opportunities" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E2DFD8]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#46464B]">
                INSTITUTIONAL PORTFOLIOS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#121316] mb-3">
              Curated Opportunities
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#46464B] max-w-2xl">
              Real-time prospective portfolio across residential, commercial, and high-yield commercial assets vetted by our diligence desks.
            </p>
          </div>

          {/* Indicative Budget Span */}
          <div className="flex items-center gap-3 bg-[#FFFFFF] border border-[#E2DFD8] px-4 py-3 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-[#71747E]" />
            <div className="flex flex-col">
              <span className="text-[9px] uppercase font-semibold text-[#8C8E97] tracking-wider">
                INDICATIVE BUDGET SPAN
              </span>
              <span className="text-xs font-semibold text-[#121316] tabular-nums">
                ₹3.5 Cr – ₹{budgetCap} Cr Indicative
              </span>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        <div className="bg-[#FFFFFF] border border-[#E2DFD8] p-4 sm:p-5 mb-10 flex flex-col gap-4">
          {/* Asset Class Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#71747E] mr-2">
              ASSET CLASS:
            </span>
            {assetClassFilters.map((tab) => {
              const isActive = selectedAssetClass === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedAssetClass(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#121316] text-[#FBF9F5]'
                      : 'bg-[#F5F2EB] text-[#46464B] hover:bg-[#EAE8E4]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Market Region Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs pt-3 border-t border-[#E2DFD8]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#71747E] mr-2">
              MARKET REGION:
            </span>
            {regionFilters.map((region) => {
              const isActive = selectedRegion === region;
              return (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#121316] text-[#FBF9F5]'
                      : 'bg-[#F5F2EB] text-[#46464B] hover:bg-[#EAE8E4]'
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProperties.length === 0 ? (
            <div className="col-span-full py-16 text-center bg-[#FFFFFF] border border-[#E2DFD8]">
              <p className="font-serif text-lg text-[#121316] mb-2">No listings match this specific asset and region filter combination.</p>
              <button
                onClick={() => {
                  setSelectedAssetClass('ALL');
                  setSelectedRegion('All Cities');
                }}
                className="text-xs uppercase font-semibold text-[#1E3A2F] underline underline-offset-4"
              >
                Reset all filters to view full portfolio
              </button>
            </div>
          ) : (
            filteredProperties.map((prop) => {
              const isSelected = selectedProperty.id === prop.id;
              const isSaved = savedPropertyIds.includes(prop.id);

              return (
                <div
                  key={prop.id}
                  className={`bg-[#FFFFFF] border transition-all flex flex-col justify-between group ${
                    isSelected ? 'border-[#121316] ring-1 ring-[#121316]' : 'border-[#E2DFD8] hover:border-[#121316]'
                  }`}
                >
                  {/* Top Bar: Location Tag */}
                  <div className="p-3 border-b border-[#E2DFD8] flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#71747E] bg-[#FBF9F5]">
                    <span className="truncate">{prop.locationTag}</span>
                    {onBookmarkProperty && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookmarkProperty(prop.id);
                        }}
                        className="text-[#8C8E97] hover:text-[#121316] transition-colors p-1"
                        title={isSaved ? "Saved to your list" : "Bookmark property"}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#121316] text-[#121316]' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Photo with Overlay Badge */}
                  <div className="relative aspect-[16/10] bg-[#EAE8E4] overflow-hidden">
                    <img
                      src={prop.images.primaryElevation}
                      alt={prop.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    {/* Dark gradient for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Badge Overlay */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 bg-[#121316]/90 backdrop-blur-sm text-[#FBF9F5] text-[9px] font-bold uppercase tracking-wider">
                        {prop.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    {/* Verification Status Micro-Badges */}
                    <div className="flex items-center gap-2 text-[10px] text-[#71747E] mb-3 font-semibold uppercase tracking-wider flex-wrap">
                      <span className="text-[#1E3A2F] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
                        {prop.verificationTag1}
                      </span>
                      <span>•</span>
                      <span className="text-[#46464B]">{prop.verificationTag2}</span>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-serif text-xl font-semibold text-[#121316] mb-2 leading-snug group-hover:text-[#1E3A2F] transition-colors">
                      {prop.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#5E5E62] leading-relaxed mb-5 line-clamp-2 flex-1">
                      {prop.description}
                    </p>

                    {/* Specs 2-Column Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#E2DFD8] mb-4 text-xs">
                      <div>
                        <span className="block text-[9px] uppercase font-semibold text-[#8C8E97] tracking-wider mb-0.5">
                          INDICATIVE GUIDE
                        </span>
                        <span className="font-bold text-[#121316] tabular-nums text-[13px]">
                          {prop.indicativeGuide}
                        </span>
                      </div>

                      <div>
                        <span className="block text-[9px] uppercase font-semibold text-[#8C8E97] tracking-wider mb-0.5">
                          {prop.spatialLabel}
                        </span>
                        <span className="font-semibold text-[#46464B] tabular-nums text-[13px]">
                          {prop.spatialArea}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => {
                        onSelectProperty(prop);
                        const element = document.getElementById('due-diligence');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`w-full py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-[#1E3A2F] text-[#FBF9F5]'
                          : 'bg-[#121316] text-[#FBF9F5] hover:bg-[#1E3A2F]'
                      }`}
                    >
                      <span>View Opportunity & Diligence</span>
                    </button>
                  </div>

                  {/* Footnote */}
                  <div className="px-4 py-2 bg-[#FBF9F5] border-t border-[#E2DFD8] text-[9px] text-[#8C8E97] text-center uppercase tracking-wide">
                    Illustrative Sample Listing • Verified through formal mandate
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
