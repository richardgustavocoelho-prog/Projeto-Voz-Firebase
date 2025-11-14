"use client";

import React, { Suspense } from 'react';
import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { Footer } from '@/components/landing/Footer';
import { Skeleton } from '@/components/ui/skeleton';

const ContentBlocks = React.lazy(() => import('@/components/landing/ContentBlocks').then(module => ({ default: module.ContentBlocks })));
const MaterialSection = React.lazy(() => import('@/components/landing/MaterialSection').then(module => ({ default: module.MaterialSection })));
const ForYouSection = React.lazy(() => import('@/components/landing/ForYouSection').then(module => ({ default: module.ForYouSection })));
const TestimonialsSection = React.lazy(() => import('@/components/landing/TestimonialsSection').then(module => ({ default: module.TestimonialsSection })));
const BonusSection = React.lazy(() => import('@/components/landing/BonusSection').then(module => ({ default: module.BonusSection })));
const PricingSection = React.lazy(() => import('@/components/landing/PricingSection').then(module => ({ default: module.PricingSection })));
const FaqSection = React.lazy(() => import('@/components/landing/FaqSection').then(module => ({ default: module.FaqSection })));


const SkeletonLoader = () => (
  <div className="container px-4 md:px-6 py-12 md:py-24">
    <div className="flex flex-col items-center space-y-8">
      <Skeleton className="h-10 w-3/4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <Skeleton className="h-96 w-full rounded-2xl" />
        <Skeleton className="h-96 w-full rounded-2xl" />
      </div>
    </div>
  </div>
);


export default function Home() {
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById('oferta-1');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-grow">
        <HeroSection onCTAClick={handleScrollToPricing} />
        <Suspense fallback={<SkeletonLoader />}>
          <ContentBlocks onCTAClick={handleScrollToPricing} />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <MaterialSection onCTAClick={handleScrollToPricing} />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <ForYouSection />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <BonusSection />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<SkeletonLoader />}>
          <FaqSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
