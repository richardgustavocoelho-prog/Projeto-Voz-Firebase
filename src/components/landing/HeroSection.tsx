"use client";

import { Button } from '@/components/ui/button';
import Image from "next/image";
import Script from 'next/script';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center pt-20 pb-12"
      style={{ backgroundColor: '#1a1a18' }}
    >
      <div className="container px-4 md:px-6 text-center flex flex-col items-center">
        <div className="mb-8">
            <Image
              src="https://i.imgur.com/O4w4GuK.png"
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
                <div className="wistia_embed wistia_async_5f16lbgntl videoFoam=true">&nbsp;</div>
              </div>
            </div>
          </div>
          <Script src="https://fast.wistia.com/embed/medias/5f16lbgntl.jsonp" strategy="afterInteractive" />
          <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="afterInteractive" />

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            São mais de 600 aulas prontas e estruturadas para você aplicar
            com seus alunos, do iniciante ao avançado, e otimizar seu tempo.
          </p>
        </div>
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            QUERO MINHAS AULAS
          </Button>
        </div>
      </div>
    </section>
  );
}
