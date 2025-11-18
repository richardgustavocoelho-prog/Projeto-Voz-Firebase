"use client";

import React from 'react';
import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { Footer } from '@/components/landing/Footer';
import { ContentBlocks } from '@/components/landing/ContentBlocks';
import { MaterialSection } from '@/components/landing/MaterialSection';
import { ForYouSection } from '@/components/landing/ForYouSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { BonusSection } from '@/components/landing/BonusSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { BlackFridayBar } from '@/components/landing/BlackFridayBar';

export default function Home() {
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById('oferta-1');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <BlackFridayBar />
      <Header />
      <main className="flex-grow pt-[44px]">
        <HeroSection onCTAClick={handleScrollToPricing} />
        <ContentBlocks onCTAClick={handleScrollToPricing} />
        <MaterialSection onCTAClick={handleScrollToPricing} />
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
