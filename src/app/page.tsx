"use client";

import { HeroSection } from '@/components/landing/HeroSection';
import { ContentBlocks } from '@/components/landing/ContentBlocks';
import { MaterialSection } from '@/components/landing/MaterialSection';
import { ForYouSection } from '@/components/landing/ForYouSection';
import { BonusSection } from '@/components/landing/BonusSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
       <Head>
        <style>{`
          .headline {
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            color: #FFFFFF;
            font-size: 2rem;
            line-height: 1.3;
            margin-bottom: 24px;
          }

          .highlight-yellow {
            color: #F9B233;
          }

          .vsl-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 40px auto;
            width: 100%;
            max-width: 800px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 25px rgba(249,178,51,0.15);
            background-color: #141414;
          }

          @media (max-width: 768px) {
            .headline {
              font-size: 1.5rem;
              margin-bottom: 16px;
            }
            .vsl-container {
              max-width: 95%;
              margin-bottom: 32px;
            }
          }
        `}</style>
      </Head>
      <main className="flex-grow">
        <HeroSection />
        <ContentBlocks />
        <MaterialSection />
        <ForYouSection />
        <BonusSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
