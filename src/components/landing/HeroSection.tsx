"use client";

import { Button } from '@/components/ui/button';
import Image from "next/image";

type HeroSectionProps = {
  onCTAClick: () => void;
};

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center pt-32 pb-12 md:pt-48"
      style={{ backgroundColor: '#12100e' }}
    >
      <div className="container px-4 md:px-6 text-center flex flex-col items-center">
        <div className="mb-8">
            <Image
              src="https://i.imgur.com/dVNsmqX.png"
              alt="VoiceStream Academy Logo"
              width={400}
              height={114} 
              className="w-auto h-auto max-w-[300px] md:max-w-[400px]"
              priority
            />
        </div>
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline uppercase">
            <span className="text-accent">JÁ PENSOU EM PASSAR MESES</span> SEM PRECISAR ESCREVER UMA ÚNICA AULA?
          </h1>

          <div className="vsl-container">
            <div className="wistia_responsive_padding">
              <div className="wistia_responsive_wrapper">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/y1py5ceq1u?videoFoam=true"
                  title="mini vsl finalizada Video"
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                  scrolling="no"
                  className="wistia_embed"
                  name="wistia_embed"
                  width="100%"
                  height="100%">
                </iframe>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            São mais de 600 aulas prontas e estruturadas para você aplicar
            com seus alunos, do iniciante ao avançado, e otimizar seu tempo.
          </p>
        </div>
        <div className="mt-8">
          <Button
            size="lg"
            onClick={onCTAClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            ✅ QUERO AS 600 AULAS AGORA
          </Button>
          <div className="mt-4 flex justify-center">
            <Image
              src="https://i.imgur.com/mJWg0De.png"
              alt="Mascote 600 Aulas Prontas"
              width={150}
              height={150}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
