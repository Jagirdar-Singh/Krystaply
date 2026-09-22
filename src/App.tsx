import React, { useState } from 'react';
import { Header } from './components/Header';
import { QuickQuoteButton } from './components/QuickQuoteButton';
import { Hero } from './components/Hero';
import { StrataAnatomy } from './components/StrataAnatomy';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { ApplicationSlider } from './components/ApplicationSlider';
import { CoreTenets } from './components/CoreTenets';
import { FieldInstallationTabs } from './components/FieldInstallationTabs';
import { PlywoodSelector } from './components/PlywoodSelector';
import { QualityJourney } from './components/QualityJourney';
import { ArchitectPortal } from './components/ArchitectPortal';
import { DealerNetwork } from './components/DealerNetwork';
import { ProjectGallery } from './components/ProjectGallery';
import { PlywoodLibrary } from './components/PlywoodLibrary';
import { PlywoodEducation } from './components/PlywoodEducation';
import { TrustMetrics } from './components/TrustMetrics';
import { AboutHeritage } from './components/AboutHeritage';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { BOQQuoteSection } from './components/BOQQuoteSection';
import { Footer } from './components/Footer';
import { Product } from './types';

export default function App() {
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [quoteProduct, setQuoteProduct] = useState<string>('Club Shield Marine Ply (BWP 710)');
  const [quoteThickness, setQuoteThickness] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForQuote = (productName: string) => {
    setQuoteProduct(productName);
    scrollToSection('boq-quote');
  };

  const handleProceedWithSpec = (specName: string, thickness: string) => {
    setQuoteProduct(specName);
    setQuoteThickness(thickness);
    scrollToSection('boq-quote');
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#121314] text-[#e3e2e3] font-body-md antialiased selection:bg-[#d91e18] selection:text-[#ffefed]">
      {/* Main Navigation Header */}
      <Header onOpenQuote={() => scrollToSection('boq-quote')} />

      {/* Main Content Sections */}
      <main className="w-full bg-[#121314]">
        {/* Section 2: Hero */}
        <Hero
          onExploreProducts={() => scrollToSection('products-range')}
          onOpenQuote={() => scrollToSection('boq-quote')}
          onOpenSelector={() => scrollToSection('ply-selector')}
        />

        {/* Section 3: Brand Statement & Strata Anatomy */}
        <StrataAnatomy />

        {/* Section 4: Product Range Catalog */}
        <ProductCatalog
          onInspectProduct={(prod) => setModalProduct(prod)}
          onSelectForQuote={handleSelectProductForQuote}
        />

        {/* Section 6 & 8: Applications Slider ("Where It Belongs") */}
        <ApplicationSlider
          onSpecifyApplication={(appName) => {
            setQuoteProduct(`Custom Specification for ${appName}`);
            scrollToSection('boq-quote');
          }}
        />

        {/* Section 7: Core Tenets ("Why Krystaply Club Shield") */}
        <CoreTenets />

        {/* Section 8: Field Installation Contexts (Tabs) */}
        <FieldInstallationTabs />

        {/* Section 9: Interactive Plywood Selector Engine */}
        <PlywoodSelector onProceedWithSpec={handleProceedWithSpec} />

        {/* Section 10: Quality & Testing Pipeline */}
        <QualityJourney />

        {/* Section 11: Architect & Designer Portal */}
        <ArchitectPortal onOpenEnquiry={() => scrollToSection('boq-quote')} />

        {/* Section 12: Dealer & Distributor Network */}
        <DealerNetwork />

        {/* Section 13: Project Showcase */}
        <ProjectGallery />

        {/* Section 14: Resources & Plywood Library */}
        <PlywoodLibrary />

        {/* Section 15: Plywood Education ("Know Your Ply") */}
        <PlywoodEducation />

        {/* Section 16: Trust & Proof Metrics */}
        <TrustMetrics />

        {/* Section 17: About Us & Heritage */}
        <AboutHeritage />

        {/* Section 19: Product Comparison Matrix */}
        <ComparisonMatrix />

        {/* Section 18: Contact & BOQ Quote Experience */}
        <BOQQuoteSection
          initialProduct={quoteProduct}
          initialThickness={quoteThickness}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating quick-quote shortcut, appears after scrolling past the hero */}
      <QuickQuoteButton onOpenQuote={() => scrollToSection('boq-quote')} />

      {/* Inspection Spec Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onSelectForQuote={handleSelectProductForQuote}
      />
    </div>
  );
}
