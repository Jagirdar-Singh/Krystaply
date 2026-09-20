export type ProductCategory = 'all' | 'water' | 'fire' | 'calibrated' | 'blocks' | 'decorative' | 'general';

export interface ProductSpec {
  thicknessTolerance: string;
  coreTimber: string;
  bondingMatrix: string;
  warranty: string;
  certifications: string;
  waterResistance?: string;
  fireRating?: string;
  modulusOfRupture?: string;
  moistureContent?: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  badge: string;
  isBadgePrimary?: boolean;
  category: 'water' | 'fire' | 'calibrated' | 'blocks' | 'decorative' | 'general';
  image: string;
  imageAlt: string;
  bannerBadge: string;
  desc: string;
  thickness: string;
  standardSize: string;
  paramLabel: string;
  paramValue: string;
  fullDesc: string;
  specs: ProductSpec;
}

export interface StrataLayer {
  id: string;
  indexStr: string;
  name: string;
  subLabel: string;
  description: string;
  isMatrix?: boolean;
}

export interface ApplicationSlide {
  id: string;
  index: number;
  numberStr: string;
  categoryLabel: string;
  title: string;
  specBadge: string;
  image: string;
  imageAlt: string;
  tagline: string;
  heading: string;
  body: string;
  specItems: {
    label: string;
    value: string;
    isPrimary?: boolean;
    isSecondary?: boolean;
  }[];
  ctaText: string;
  thumbTitle: string;
  thumbSub: string;
}

export interface FieldAppItem {
  id: string;
  category: 'home' | 'commercial' | 'professional';
  title: string;
  recommendation: string;
  desc: string;
  image: string;
  imageAlt: string;
}

export interface ProjectShowcaseItem {
  id: string;
  category: 'residential' | 'commercial' | 'hospitality';
  title: string;
  location: string;
  desc: string;
  image: string;
  imageAlt: string;
  badge: string;
}

export interface LibraryDoc {
  id: string;
  icon: string;
  title: string;
  desc: string;
  fileSize: string;
  fileType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SelectorOption {
  value: string;
  label: string;
}

export interface RecommendationResult {
  productName: string;
  rationale: string;
  suggestedThickness: string;
  coreSpec: string;
}
