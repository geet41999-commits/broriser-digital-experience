import React, { useState } from 'react';
import { Phone, User, ShieldCheck, ChevronRight, Menu, X, Bookmark } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenSavedDossiers: () => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation,
  onOpenSavedDossiers,
  savedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E2DFD8] transition-all">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-6">
        {/* Brand Lockup */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 bg-[#121316] text-[#FBF9F5] flex items-center justify-center font-serif text-lg font-semibold tracking-tighter border border-[#121316] transition-transform group-hover:scale-[1.02]">
            <span>B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#121316] leading-none">
              BroRiser
            </span>
            <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-[#71747E] font-medium mt-1">
              Real Estate Consulting
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#46464B]">
          <a
            href="#curated-opportunities"
            className="flex items-center gap-1.5 px-2 py-1 text-[#121316] hover:text-black transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F]" />
            <span className="tracking-wide uppercase text-[11px] font-semibold">Verified Opportunities</span>
          </a>

          <a
            href="#curated-opportunities"
            className="text-[#121316] font-semibold underline decoration-[#121316] decoration-1 underline-offset-8 transition-colors"
          >
            Explore Opportunities
          </a>

          <a
            href="#methodology"
            className="hover:text-[#121316] transition-colors"
          >
            Our Approach
          </a>

          <a
            href="#due-diligence"
            className="hover:text-[#121316] transition-colors"
          >
            Insights
          </a>

          <a
            href="#partners"
            className="hover:text-[#121316] transition-colors"
          >
            Partners & Developers
          </a>
        </nav>

        {/* Right Action Zone */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6 shrink-0">
          {/* Advisory Desk Hotline */}
          <div className="hidden md:flex flex-col items-end text-right">
            <span className="text-[10px] tracking-wider uppercase font-semibold text-[#8C8E97]">
              Advisory Desk
            </span>
            <a
              href="tel:+918049208800"
              className="text-[13px] font-sans font-semibold tracking-tight text-[#121316] tabular-nums hover:text-[#1E3A2F] transition-colors flex items-center gap-1"
            >
              <span>+91 (0) 80 4920 8800</span>
            </a>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 bg-[#121316] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A2F] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Discuss an Opportunity</span>
          </button>

          {/* Saved Dossier / User Button */}
          <button
            onClick={onOpenSavedDossiers}
            title="Saved Property Dossiers"
            className="relative w-9 h-9 border border-[#D8D4CC] flex items-center justify-center text-[#121316] hover:bg-[#F5F2EB] transition-colors cursor-pointer"
          >
            <User className="w-4 h-4 text-[#121316]" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1E3A2F] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#121316] border border-[#D8D4CC] hover:bg-[#F5F2EB]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-[#E2DFD8] px-6 py-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <a
              href="#curated-opportunities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E2DFD8] text-[#121316] font-semibold"
            >
              Verified Opportunities
            </a>
            <a
              href="#methodology"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E2DFD8] text-[#46464B]"
            >
              Our Approach & Charter
            </a>
            <a
              href="#due-diligence"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E2DFD8] text-[#46464B]"
            >
              Due Diligence Architecture
            </a>
            <a
              href="#partners"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E2DFD8] text-[#46464B]"
            >
              Partners & Developers
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#71747E]">
              <span>Direct Advisory Line:</span>
              <span className="font-semibold text-[#121316]">+91 (0) 80 4920 8800</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-[#121316] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider"
            >
              Discuss an Opportunity
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
