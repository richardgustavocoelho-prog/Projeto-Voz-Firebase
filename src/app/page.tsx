"use client";

import { HeroSection } from '@/components/landing/HeroSection';
import { ContentBlocks } from '@/components/landing/ContentBlocks';
import { MaterialSection } from '@/components/landing/MaterialSection';
import { ForYouSection } from '@/components/landing/ForYouSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { BonusSection } from '@/components/landing/BonusSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <main className="flex-grow">
        <HeroSection />
        <ContentBlocks />
        <MaterialSection />
        <ForYouSection />
        <TestimonialsSection />
        <BonusSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
