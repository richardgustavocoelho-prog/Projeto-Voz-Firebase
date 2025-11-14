"use client";

import { Button } from '@/components/ui/button';
import Image from "next/image";
import Script from "next/script";

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
            <span className="text-accent">25 AULAS</span> de Técnica Vocal Prontas pra Aplicar <span className="text-accent">Hoje</span>
          </h1>

          <div className="vsl-container">
            <div className="wistia_responsive_padding" style={{padding: "56.25% 0 0 0", position: "relative"}}>
              <div className="wistia_responsive_wrapper" style={{height: "100%", left: 0, position: "absolute", top: 0, width: "100%"}}>
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/4rs7wz6u58?web_component=true&seo=false"
                  title="MINI - VSL 2 FINALIZADA Video" 
                  allow="autoplay; fullscreen" 
                  frameBorder="0" 
                  scrolling="no" 
                  className="wistia_embed" 
                  name="wistia_embed" 
                  width="100%" 
                  height="100%"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col items-center w-full">
            <Button
              size="lg"
              onClick={onCTAClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-md"
            >
              ✅ QUERO AS 25 AULAS AGORA
            </Button>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprenda a cantar do zero ao avançado com aulas práticas e um plano direto ao ponto para evoluir em 21 dias com apenas 5 minutos por dia.
          </p>
          <div className="flex justify-center">
              <Image 
                src="https://i.imgur.com/nXIp8Od.png"
                alt="Selo de garantia de 30 dias"
                width={250}
                height={250}
                className="object-contain"
                priority
              />
            </div>
        </div>
      </div>
    </section>
  );
}
