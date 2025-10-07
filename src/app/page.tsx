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
          .wistia_responsive_padding {
            padding: 56.25% 0 0 0;
            position: relative;
            width: 100%;
          }
          .wistia_responsive_wrapper {
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
          }
          .wistia_embed {
            height: 100%;
            position: relative;
            width: 100%;
          }
          .wistia_swatch {
            height:100%;
            left:0;
            opacity:0;
            overflow:hidden;
            position:absolute;
            top:0;
            transition:opacity 200ms;
            width:100%;
          }
          .wistia_swatch > img {
            filter:blur(5px);
            height:100%;
            object-fit:contain;
            width:100%;
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
