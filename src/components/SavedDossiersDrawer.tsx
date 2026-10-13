import React from 'react';
import { X, Trash2, ArrowRight, Eye, ShieldCheck } from 'lucide-react';
import { Property } from '../types/property';

interface SavedDossiersDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProperties: Property[];
  onSelectProperty: (property: Property) => void;
  onRemoveBookmark: (propertyId: string) => void;
  onOpenConsultation: () => void;
}

export const SavedDossiersDrawer: React.FC<SavedDossiersDrawerProps> = ({
  isOpen,
  onClose,
  savedProperties,
  onSelectProperty,
  onRemoveBookmark,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#121316]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#FFFFFF] border-l border-[#121316] h-full flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="px-6 py-5 bg-[#FBF9F5] border-b border-[#E2DFD8] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#71747E] block">
              INVESTOR LOCKER
            </span>
            <h3 className="font-serif text-lg font-bold text-[#121316]">
              Bookmarked Opportunities ({savedProperties.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#71747E] hover:text-[#121316] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of saved dossiers */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {savedProperties.length === 0 ? (
            <div className="py-16 text-center text-xs text-[#71747E]">
              <p className="mb-2">No property dossiers bookmarked yet.</p>
              <p className="text-[11px] text-[#8C8E97]">
                Click the bookmark icon on any opportunity card to curate your confidential evaluation portfolio.
              </p>
            </div>
          ) : (
            savedProperties.map((prop) => (
              <div
                key={prop.id}
                className="p-4 bg-[#FBF9F5] border border-[#E2DFD8] flex flex-col gap-3 group hover:border-[#121316] transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#1E3A2F] block">
                      {prop.locationTag}
                    </span>
                    <h4 className="font-serif text-base font-semibold text-[#121316]">
                      {prop.title}
                    </h4>
                    <span className="text-xs font-bold text-[#121316] tabular-nums">
                      {prop.indicativeGuide}
                    </span>
                  </div>

                  <button
                    onClick={() => onRemoveBookmark(prop.id)}
                    className="text-[#8C8E97] hover:text-[#BA1A1A] transition-colors p-1"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#E2DFD8]">
                  <button
                    onClick={() => {
                      onSelectProperty(prop);
                      onClose();
                      const element = document.getElementById('due-diligence');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex-1 py-1.5 bg-[#121316] text-[#FBF9F5] text-[10px] font-semibold uppercase tracking-wider hover:bg-[#1E3A2F] transition-colors flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3 h-3" />
                    <span>Inspect Diligence</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedProperties.length > 0 && (
          <div className="p-6 bg-[#FBF9F5] border-t border-[#E2DFD8] space-y-3">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full py-3 bg-[#121316] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A2F] transition-colors flex items-center justify-center gap-2"
            >
              <span>Review Portfolio with Senior Advisor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
