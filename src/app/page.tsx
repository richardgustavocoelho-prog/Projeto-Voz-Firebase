"use client";

import Image from "next/image";
import { HeroSection } from '@/components/landing/HeroSection';
import { ContentBlocks } from '@/components/landing/ContentBlocks';
import { MaterialSection } from '@/components/landing/MaterialSection';
import { ForYouSection } from '@/components/landing/ForYouSection';
import { BonusSection } from '@/components/landing/BonusSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <header className="py-8 bg-background flex justify-center">
        <Image
          src="https://i.imgur.com/O4w4GuK.png"
          alt="VoiceStream Academy Logo"
          width={400}
          height={114} 
          className="w-auto h-auto max-w-[300px] md:max-w-[400px]"
          priority
        />
      </header>
      <main className="flex-grow">
        <HeroSection />
        <ContentBlocks />
        <MaterialSection />
        <ForYouSection />
        <BonusSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
