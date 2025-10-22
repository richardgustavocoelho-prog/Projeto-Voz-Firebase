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
      className="relative w-full flex items-center justify-center pt-20 pb-12 md:pt-28"
      style={{ backgroundColor: '#12100e' }}
    >
      <div className="container px-4 md:px-6 text-center flex flex-col items-center">
        
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline uppercase">
            <span className="text-accent">600 Aulas</span> de Técnica Vocal Prontas pra Aplicar
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
          
          <div className="mt-8 flex flex-col items-center w-full">
            <Button
              size="lg"
              onClick={onCTAClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-md"
            >
              ✅ QUERO AS 600 AULAS AGORA
            </Button>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Aulas prontas e estruturadas para aplicar com seus alunos, do zero ao avançado. Com tarefas, teoria, prática e plano de estudos completo, para otimizar seu tempo.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center w-full">
          
          <div className="mt-4">
            <Image
              src="https://i.imgur.com/mP7KQUO.png"
              alt="Selo de garantia"
              width={350}
              height={66}
              className="w-full max-w-[350px] h-auto"
              data-ai-hint="guarantee seal"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
