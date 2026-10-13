import React, { useState } from 'react';
import { CheckCircle2, Clock, ShieldCheck, Download, FileText, ChevronRight, Maximize2 } from 'lucide-react';
import { Property } from '../types/property';

interface DueDiligenceSectionProps {
  property: Property;
  onRequestDossier: (property: Property) => void;
}

export const DueDiligenceSection: React.FC<DueDiligenceSectionProps> = ({
  property,
  onRequestDossier,
}) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'elevation' | 'vignette' | 'blueprint'>('elevation');

  // Active image based on tab
  const activeImage =
    activeMediaTab === 'blueprint'
      ? property.images.floorplateBlueprint
      : activeMediaTab === 'vignette'
      ? property.images.internalVignette
      : property.images.primaryElevation;

  return (
    <section id="due-diligence" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E2DFD8]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#71747E] block mb-2">
              PROPERTY DETAIL ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-[#121316] mb-3">
              Opportunity Architecture: Deep Due Diligence Preview
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#46464B] max-w-2xl leading-relaxed">
              Explore our transparency standard. We separate verified statutory facts from items undergoing formal verification, so you commit capital with absolute clarity.
            </p>
          </div>

          {/* Inspecting Project pill */}
          <div className="bg-[#F5F2EB] border border-[#E2DFD8] px-4 py-2 text-xs font-medium text-[#121316] shrink-0 self-start lg:self-end">
            <span className="text-[#71747E] uppercase text-[10px] font-semibold mr-2 tracking-wider">
              INSPECTING PROJECT:
            </span>
            <span className="font-semibold text-[#121316]">
              {property.title} • {property.city}
            </span>
          </div>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Architecture Viewports & Structural Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Primary Display Media */}
            <div className="relative aspect-[4/3] bg-[#121316] border border-[#E2DFD8] overflow-hidden group">
              <img
                src={activeImage}
                alt={`${property.title} - ${activeMediaTab}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Viewport Label */}
              <div className="absolute top-3 left-3 bg-[#121316]/90 backdrop-blur-sm px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#FBF9F5]">
                {activeMediaTab === 'elevation'
                  ? 'PRIMARY ELEVATION'
                  : activeMediaTab === 'vignette'
                  ? 'INTERNAL VIGNETTE'
                  : 'FLOORPLATE BLUEPRINT'}
              </div>

              {/* Resolution pill */}
              <div className="absolute bottom-3 right-3 bg-[#FBF9F5]/90 backdrop-blur-sm px-2 py-0.5 text-[9px] font-mono text-[#121316] flex items-center gap-1">
                <span>CAD SPEC AUDIT</span>
              </div>
            </div>

            {/* Sub-thumbnails (Internal Vignette & Floorplate Blueprint) */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setActiveMediaTab('vignette')}
                className={`relative aspect-[16/10] bg-[#121316] border overflow-hidden text-left cursor-pointer transition-all ${
                  activeMediaTab === 'vignette'
                    ? 'border-[#121316] ring-2 ring-[#121316]'
                    : 'border-[#E2DFD8] opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={property.images.internalVignette}
                  alt="Internal Vignette"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#FBF9F5]">
                    INTERNAL VIGNETTE
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveMediaTab('blueprint')}
                className={`relative aspect-[16/10] bg-[#121316] border overflow-hidden text-left cursor-pointer transition-all ${
                  activeMediaTab === 'blueprint'
                    ? 'border-[#121316] ring-2 ring-[#121316]'
                    : 'border-[#E2DFD8] opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={property.images.floorplateBlueprint}
                  alt="Floorplate Blueprint"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#FBF9F5]">
                    FLOORPLATE BLUEPRINT
                  </span>
                </div>
              </button>
            </div>

            {/* Structural Metrics Ribbon */}
            <div className="p-4 bg-[#FBF9F5] border border-[#E2DFD8] mt-2">
              <span className="text-[9px] uppercase font-bold tracking-wider text-[#71747E] block mb-3">
                STRUCTURAL METRICS
              </span>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 border-r border-[#E2DFD8] last:border-r-0">
                  <span className="block text-base font-bold text-[#121316] tabular-nums">
                    {property.structuralMetrics.carpetEfficiency}
                  </span>
                  <span className="text-[10px] text-[#71747E] uppercase">
                    Carpet Efficiency
                  </span>
                </div>

                <div className="p-2 border-r border-[#E2DFD8] last:border-r-0">
                  <span className="block text-base font-bold text-[#121316]">
                    {property.structuralMetrics.dedicatedParking}
                  </span>
                  <span className="text-[10px] text-[#71747E] uppercase">
                    Dedicated Parking
                  </span>
                </div>

                <div className="p-2">
                  <span className="block text-base font-bold text-[#1E3A2F]">
                    {property.structuralMetrics.occupancyCert}
                  </span>
                  <span className="text-[10px] text-[#71747E] uppercase">
                    Occupancy Cert.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Confirmed vs Pending Verification Side-by-Side */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Confirmed Information Panel */}
              <div className="p-5 bg-[#FBF9F5] border border-[#E2DFD8] flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A2F]" />
                  <h3 className="font-serif text-lg font-semibold text-[#121316]">
                    Confirmed Information
                  </h3>
                </div>
                <p className="text-[11px] text-[#71747E] mb-5 leading-normal pb-3 border-b border-[#E2DFD8]">
                  Items backed by official public documentation, RERA registries, or developer escrow mandates.
                </p>

                <div className="flex flex-col gap-4 text-xs">
                  <div>
                    <span className="block font-bold text-[#121316] mb-0.5">
                      Developer Track Record
                    </span>
                    <span className="text-[#5E5E62] leading-relaxed">
                      {property.confirmedInfo.developerTrackRecord}
                    </span>
                  </div>

                  <div>
                    <span className="block font-bold text-[#121316] mb-0.5">
                      RERA Registration Status
                    </span>
                    <span className="text-[#1E3A2F] font-medium leading-relaxed">
                      {property.confirmedInfo.reraStatus}
                    </span>
                  </div>

                  <div>
                    <span className="block font-bold text-[#121316] mb-0.5">
                      Structural Completion
                    </span>
                    <span className="text-[#5E5E62] leading-relaxed">
                      {property.confirmedInfo.structuralCompletion}
                    </span>
                  </div>

                  <div>
                    <span className="block font-bold text-[#121316] mb-0.5">
                      Baseline Price Per Sq. Ft
                    </span>
                    <span className="text-[#121316] font-semibold tabular-nums leading-relaxed">
                      {property.confirmedInfo.baselinePricePerSqFt}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pending Verification Panel */}
              <div className="p-5 bg-[#FBF9F5] border border-[#E2DFD8] flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#8C8E97]" />
                  <h3 className="font-serif text-lg font-semibold text-[#121316]">
                    Pending Verification
                  </h3>
                </div>
                <p className="text-[11px] text-[#71747E] mb-5 leading-normal pb-3 border-b border-[#E2DFD8]">
                  Items clarified dynamically during one-on-one advisory consultations and allocation runs.
                </p>

                <div className="flex flex-col gap-4 text-xs">
                  <div>
                    <span className="block font-bold text-[#121316] mb-0.5">
                      Specific Unit Floor Hold
                    </span>
                    <span className="text-[#5E5E62] leading-relaxed">
                      {property.pendingVerification.unitFloorHold}
                    </span>
                  </div>

                  <div>
                    <span className="block font-bold text-[#121316] mb-0.5">
                      Custom Milestone Schedule
                    </span>
                    <span className="text-[#5E5E62] leading-relaxed">
                      {property.pendingVerification.milestoneSchedule}
                    </span>
                  </div>

                  <div>
                    <span className="block font-bold text-[#121316] mb-0.5">
                      Bank Subvention Consents
                    </span>
                    <span className="text-[#5E5E62] leading-relaxed">
                      {property.pendingVerification.bankConsents}
                    </span>
                  </div>

                  <div>
                    <span className="block font-bold text-[#121316] mb-0.5">
                      Bespoke Fit-Out Deliverable
                    </span>
                    <span className="text-[#5E5E62] leading-relaxed">
                      {property.pendingVerification.bespokeFitOut}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Advisory Pledge Box */}
            <div className="p-5 bg-[#F5F2EB] border border-[#E2DFD8] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-3 max-w-xl">
                <ShieldCheck className="w-5 h-5 text-[#1E3A2F] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#121316] mb-1">
                    BRORISER ADVISORY PLEDGE
                  </span>
                  <p className="text-xs text-[#5E5E62] leading-relaxed">
                    BroRiser strictly refrains from publishing speculative yields or unverified capital appreciation forecasts. Financial schedules and tenancy covenants are reviewed during confidential 1-on-1 advisor consultations.
                  </p>
                </div>
              </div>

              {/* Dossier Download Action */}
              <div className="flex flex-col items-start md:items-end shrink-0 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-[#E2DFD8]">
                <span className="text-[10px] font-mono font-semibold uppercase text-[#71747E] mb-2 tracking-wider">
                  Dossier ID: {property.dossierRef}
                </span>
                <button
                  onClick={() => onRequestDossier(property)}
                  className="w-full md:w-auto px-5 py-3 bg-[#121316] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A2F] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Request Detailed Information Dossier</span>
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
