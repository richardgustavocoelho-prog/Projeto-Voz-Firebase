"use client";

import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ContentBlocks } from '@/components/landing/ContentBlocks';
import { MaterialSection } from '@/components/landing/MaterialSection';
import { BonusSection } from '@/components/landing/BonusSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ContentBlocks />
        <MaterialSection />
        <BonusSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}