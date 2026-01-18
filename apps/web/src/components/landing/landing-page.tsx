'use client';

import { LandingNavbar } from './landing-navbar';
import { Hero } from './hero';
import { DashboardPreview } from './dashboard-preview';
import { ProblemSection } from './problem-section';
import { SolutionSection } from './solution-section';
import { BenefitsSection } from './benefits-section';
import { WhoItsForSection } from './who-its-for-section';
import { HowItWorksSection } from './how-it-works-section';
import { SecuritySection } from './security-section';
import { FAQSection } from './faq-section';
import { FinalCTASection } from './final-cta-section';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <Hero />
      <DashboardPreview />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <WhoItsForSection />
      <HowItWorksSection />
      <SecuritySection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}

