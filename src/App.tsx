/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { DueDiligenceSection } from './components/DueDiligenceSection';
import { MethodologySection } from './components/MethodologySection';
import { IntegritySection } from './components/IntegritySection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DossierModal } from './components/DossierModal';
import { ConsultationModal } from './components/ConsultationModal';
import { SavedDossiersDrawer } from './components/SavedDossiersDrawer';
import { PROPERTIES } from './data/properties';
import { Property } from './types/property';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property>(PROPERTIES[0]);
  const [dossierModalProperty, setDossierModalProperty] = useState<Property | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationProperty, setConsultationProperty] = useState<Property | null>(null);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>([
    'oberoi-skyresidences-worli',
  ]);

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleRequestDossier = (property: Property) => {
    setDossierModalProperty(property);
  };

  const handleOpenConsultation = (property?: Property) => {
    setConsultationProperty(property || null);
    setIsConsultationOpen(true);
  };

  const handleBookmarkToggle = (propertyId: string) => {
    setSavedPropertyIds((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const savedPropertiesList = PROPERTIES.filter((p) =>
    savedPropertyIds.includes(p.id)
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1B1C1A] flex flex-col font-sans selection:bg-[#121316] selection:text-[#FBF9F5]">
      {/* Primary Top Bar */}
      <Header
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenSavedDossiers={() => setIsSavedDrawerOpen(true)}
        savedCount={savedPropertyIds.length}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreClick={() => scrollToSection('curated-opportunities')}
          onCharterClick={() => scrollToSection('methodology')}
          onInspectHeroProperty={() => {
            setSelectedProperty(PROPERTIES[0]);
            scrollToSection('due-diligence');
          }}
        />

        {/* 2. Curated Opportunities */}
        <OpportunitiesSection
          properties={PROPERTIES}
          selectedProperty={selectedProperty}
          onSelectProperty={handleSelectProperty}
          onBookmarkProperty={handleBookmarkToggle}
          savedPropertyIds={savedPropertyIds}
        />

        {/* 3. Opportunity Architecture: Deep Due Diligence Preview */}
        <DueDiligenceSection
          property={selectedProperty}
          onRequestDossier={handleRequestDossier}
        />

        {/* 4. Methodology: A Clearer Path to a Decision */}
        <MethodologySection />

        {/* 5. Built on Institutional Integrity, Not Transactional Churn */}
        <IntegritySection />

        {/* 6. Institutional Collaboration for Developers & Partners */}
        <PartnersSection
          onDeveloperClick={() => scrollToSection('contact-advisory')}
          onPartnerClick={() => handleOpenConsultation()}
        />

        {/* 7. Direct Advisory Access (Contact Consultation Form) */}
        <ContactSection />
      </main>

      {/* 8. Institutional Footer */}
      <Footer />

      {/* Interactive Modals */}
      <DossierModal
        property={dossierModalProperty}
        isOpen={!!dossierModalProperty}
        onClose={() => setDossierModalProperty(null)}
        onOpenConsultation={() => {
          const prop = dossierModalProperty;
          setDossierModalProperty(null);
          handleOpenConsultation(prop || undefined);
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultProperty={consultationProperty}
      />

      <SavedDossiersDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedProperties={savedPropertiesList}
        onSelectProperty={handleSelectProperty}
        onRemoveBookmark={handleBookmarkToggle}
        onOpenConsultation={() => {
          setIsSavedDrawerOpen(false);
          handleOpenConsultation();
        }}
      />
    </div>
  );
}
