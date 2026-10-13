import React, { useState } from 'react';
import { X, Download, ShieldCheck, CheckCircle2, Clock, Printer, Share2, Check } from 'lucide-react';
import { Property } from '../types/property';

interface DossierModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({
  property,
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen || !property) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      // Trigger a printable window or simple alert
      window.print();
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121316]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] border border-[#121316] w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-[#FBF9F5] border-b border-[#E2DFD8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#121316] text-[#FBF9F5] flex items-center justify-center font-serif text-xs font-semibold">
              B
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#71747E]">
                CONFIDENTIAL LEGAL BRIEF // {property.dossierRef}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#121316]">
                {property.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 text-[#71747E] hover:text-[#121316] transition-colors border border-[#E2DFD8] hover:bg-[#F5F2EB]"
              title="Share Dossier Reference"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#1E3A2F]" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#71747E] hover:text-[#121316] transition-colors border border-[#E2DFD8] hover:bg-[#F5F2EB]"
              aria-label="Close Dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Executive Summary Card */}
          <div className="p-5 bg-[#F5F2EB] border border-[#E2DFD8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E3A2F] block mb-1">
                STATUTORY COMPLIANCE SEAL • ACTIVE
              </span>
              <p className="font-serif text-lg text-[#121316] font-semibold">
                RERA Registration: <span className="font-mono">{property.reraNumber}</span>
              </p>
              <p className="text-xs text-[#5E5E62] mt-0.5">
                Location: {property.locationTag} • Asset Class: {property.assetClass}
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="text-[9px] uppercase font-bold text-[#8C8E97] tracking-wider block">
                VALUATION RANGE
              </span>
              <span className="text-base font-bold text-[#121316] tabular-nums">
                {property.indicativeGuide}
              </span>
              <span className="text-[10px] text-[#71747E] block">
                Net Carpet: {property.spatialArea}
              </span>
            </div>
          </div>

          {/* Blueprint & Elevation Dual View */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[#E2DFD8] p-3 bg-[#FBF9F5]">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#71747E] block mb-2">
                ARCHITECTURAL ELEVATION
              </span>
              <div className="aspect-[16/10] bg-[#121316] overflow-hidden">
                <img
                  src={property.images.primaryElevation}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="border border-[#E2DFD8] p-3 bg-[#FBF9F5]">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#71747E] block mb-2">
                FLOORPLATE BLUEPRINT AUDIT
              </span>
              <div className="aspect-[16/10] bg-[#121316] overflow-hidden">
                <img
                  src={property.images.floorplateBlueprint}
                  alt="Floorplate CAD Blueprint"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Confirmed Statutory Details Table */}
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#E2DFD8]">
              <CheckCircle2 className="w-4 h-4 text-[#1E3A2F]" />
              <h4 className="font-serif text-base font-semibold text-[#121316]">
                Audited & Confirmed Statutory Invariants
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-[#FBF9F5] border border-[#E2DFD8]">
                <strong className="block text-[#121316] mb-1">Developer Track Record:</strong>
                <p className="text-[#5E5E62]">{property.confirmedInfo.developerTrackRecord}</p>
              </div>
              <div className="p-3 bg-[#FBF9F5] border border-[#E2DFD8]">
                <strong className="block text-[#121316] mb-1">RERA Verification:</strong>
                <p className="text-[#1E3A2F] font-medium">{property.confirmedInfo.reraStatus}</p>
              </div>
              <div className="p-3 bg-[#FBF9F5] border border-[#E2DFD8]">
                <strong className="block text-[#121316] mb-1">Structural & Seismic Certification:</strong>
                <p className="text-[#5E5E62]">{property.confirmedInfo.structuralCompletion}</p>
              </div>
              <div className="p-3 bg-[#FBF9F5] border border-[#E2DFD8]">
                <strong className="block text-[#121316] mb-1">Validated Carpet Rate:</strong>
                <p className="text-[#121316] font-semibold">{property.confirmedInfo.baselinePricePerSqFt}</p>
              </div>
            </div>
          </div>

          {/* Pending Diligence Items */}
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#E2DFD8]">
              <Clock className="w-4 h-4 text-[#71747E]" />
              <h4 className="font-serif text-base font-semibold text-[#121316]">
                Items Subject to Commercial Negotiation & Allocation
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-[#FBF9F5] border border-[#E2DFD8]">
                <strong className="block text-[#121316] mb-1">Specific Unit Hold Protocol:</strong>
                <p className="text-[#5E5E62]">{property.pendingVerification.unitFloorHold}</p>
              </div>
              <div className="p-3 bg-[#FBF9F5] border border-[#E2DFD8]">
                <strong className="block text-[#121316] mb-1">Tranche & Escrow Milestone:</strong>
                <p className="text-[#5E5E62]">{property.pendingVerification.milestoneSchedule}</p>
              </div>
              <div className="p-3 bg-[#FBF9F5] border border-[#E2DFD8]">
                <strong className="block text-[#121316] mb-1">Institutional Subvention Consents:</strong>
                <p className="text-[#5E5E62]">{property.pendingVerification.bankConsents}</p>
              </div>
              <div className="p-3 bg-[#FBF9F5] border border-[#E2DFD8]">
                <strong className="block text-[#121316] mb-1">Fit-out Specification Tier:</strong>
                <p className="text-[#5E5E62]">{property.pendingVerification.bespokeFitOut}</p>
              </div>
            </div>
          </div>

          {/* Legal Fiduciary Statement */}
          <div className="p-4 bg-[#F5F2EB] border border-[#D8D4CC] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#1E3A2F] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#5E5E62] leading-relaxed">
              BroRiser Fiduciary Warranty: All facts listed as confirmed have been audited directly against physical registries, master title deeds, and developer bank escrow covenants. No unverified capital appreciation charts are issued.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#FBF9F5] border-t border-[#E2DFD8] flex flex-wrap items-center justify-between gap-4">
          <div className="text-[10px] font-mono text-[#71747E]">
            ID: {property.dossierRef} • STRICTLY CONFIDENTIAL
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-4 py-2.5 bg-[#FFFFFF] border border-[#121316] text-[#121316] text-xs font-semibold uppercase tracking-wider hover:bg-[#F5F2EB] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF Brief</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-5 py-2.5 bg-[#121316] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A2F] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Advisor Review</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
