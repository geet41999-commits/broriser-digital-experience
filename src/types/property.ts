export interface Property {
  id: string;
  title: string;
  locationTag: string;
  city: 'Mumbai' | 'Gurugram' | 'Bengaluru';
  marketRegion: string;
  assetClass: 'Luxury Residential' | 'Grade-A Commercial' | 'Plotted Land';
  badge: string;
  verificationTag1: string;
  verificationTag2: string;
  description: string;
  indicativeGuide: string;
  spatialLabel: string;
  spatialArea: string;
  dossierRef: string;
  reraStatus: string;
  reraNumber: string;
  images: {
    primaryElevation: string;
    internalVignette: string;
    floorplateBlueprint: string;
  };
  structuralMetrics: {
    carpetEfficiency: string;
    dedicatedParking: string;
    occupancyCert: string;
  };
  confirmedInfo: {
    developerTrackRecord: string;
    reraStatus: string;
    structuralCompletion: string;
    baselinePricePerSqFt: string;
    additionalNotes?: string;
  };
  pendingVerification: {
    unitFloorHold: string;
    milestoneSchedule: string;
    bankConsents: string;
    bespokeFitOut: string;
    additionalNotes?: string;
  };
}
