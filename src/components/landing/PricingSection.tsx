
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Gift } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { UpsellPopup } from "./UpsellPopup";
import { FinalOfferPopup } from "./FinalOfferPopup";
import Link from "next/link";

const firstCardFeatures = [
    "25 AULAS PRONTAS, ESTRUTURADAS DA BASE AO AVANÇADO",
    "ACESSO IMEDIATO EM QUALQUER DISPOSITIVO",
];

const features = [
  "25 AULAS PRONTAS, ESTRUTURADAS DA BASE AO AVANÇADO",
  "Aulas passo a passo com tempo estimado, teoria, prática e tarefas",
  "Exercícios com foco em afinação, interpretação, repertório e uso do microfone",
  "Economia de tempo — não precisa mais procurar o que estudar",
  "Didática simples e direta para iniciantes",
  "Aulas organizadas em sequência lógica",
  "CRONOGRAMA PASSO A PASSO",
  "ACESSO IMEDIATO EM QUALQUER DISPOSITIVO",
  "ACESSO VITALÍCIO",
  "GARANTIA DE 30 DIAS",
];

const bonuses = [
  "Planner de Treinos de Canto",
  "Acesso a modelos de organização pessoal",
  "BIBLIOTECA DE REPERTÓRIO EXCLUSIVO",
  "MINI GUIA DE DIDÁTICA MODERNA",
];

export function PricingSection() {
  const [isUpsellPopupOpen, setIsUpsellPopupOpen] = useState(false);
  const [isFinalOfferPopupOpen, setIsFinalOfferPopupOpen] = useState(false);

  const handleDeclineUpsell = () => {
    setIsUpsellPopupOpen(false);
    setIsFinalOfferPopupOpen(true);
  };

  return (
    <>
      <section id="pricing" className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 flex flex-col items-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-black mb-2">
              <span className="text-primary">OFERTA ESPECIAL</span> PARA GARANTIR HOJE!
            </h2>
            <p className="text-black/80">
              Promoção de lançamento pode encerrar a qualquer momento.
            </p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 w-full max-w-5xl items-start md:justify-center">
            {/* First Card */}
            <div id="oferta-1" className="w-full max-w-md mx-auto bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-6 md:p-8 flex flex-col text-foreground animate-pulse-gold-border">
              <div className="text-center">
                <p className="text-base uppercase font-semibold tracking-wider text-white opacity-80 mb-2">ACESSO BÁSICO</p>
                <p className="text-6xl md:text-7xl font-black text-primary my-2">
                  R$ 9,90
                </p>
                <p className="font-bold uppercase text-foreground">PAGAMENTO ÚNICO</p>
              </div>

              <div className="my-8 space-y-4 flex-grow">
                {firstCardFeatures.map((feature, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm uppercase font-medium">{feature}</span>
                    </div>
                    {index < firstCardFeatures.length -1 && <Separator className="bg-[#444444] mt-4" />}
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setIsUpsellPopupOpen(true)}
              >
                COMEÇAR AGORA
              </Button>
            </div>

            {/* Second Card (Premium) */}
            <div className="relative w-full max-w-md mx-auto bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-1 shadow-[0_0_40px_rgba(249,178,51,0.3)]">
               <div className="w-full text-center py-2 border-b border-accent/50" style={{ background: 'linear-gradient(90deg, rgba(249,178,51,0.15), rgba(249,178,51,0.05))', borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}>
                <p className="font-extrabold text-accent uppercase tracking-widest text-sm md:text-base">
                  ⚡ ÚLTIMA CHANCE ⚡
                </p>
              </div>
              <div className="bg-black/40 rounded-b-[1.25rem] p-0 flex flex-col text-foreground h-full backdrop-blur-sm overflow-hidden">
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <p className="text-base uppercase font-semibold tracking-wider text-white opacity-80 mb-2">ACESSO PREMIUM</p>
                    <p className="text-2xl line-through text-red-500/80 decoration-red-500">De R$ 147,90</p>
                    <p className="text-7xl md:text-8xl font-black my-2" style={{color: '#00FF87', textShadow: '0 0 15px rgba(0, 255, 135, 0.6)'}}>
                      R$ 27,90
                    </p>
                    <p className="font-bold uppercase text-foreground">PAGAMENTO ÚNICO</p>
                  </div>

                  <div className="my-6 space-y-3 flex-grow">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm uppercase font-medium text-white/90">{feature}</span>
                      </div>
                    ))}
                    <Separator className="my-4 border-gray-700"/>
                    <div className="text-center mb-3">
                        <h4 className="text-lg font-extrabold uppercase text-accent animate-pulsate-gold" style={{ textShadow: '0 0 15px rgba(249,178,51,0.6)'}}>
                            🎁 BÔNUS
                        </h4>
                    </div>
                    {bonuses.map((bonus, index) => (
                       <div key={index} className="flex items-start gap-3">
                          <Gift className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm uppercase font-bold text-accent">{bonus}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://pay.kirvano.com/85accea4-a546-4022-a1b9-ef6687ff971d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full font-bold text-lg px-10 py-7 rounded-xl border-2 border-green-800 animate-pulsate-green"
                      style={{ backgroundColor: '#00FF87', color: 'white' }}
                    >
                      QUERO O ACESSO PREMIUM
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UpsellPopup 
        isOpen={isUpsellPopupOpen} 
        onOpenChange={setIsUpsellPopupOpen} 
        onDecline={handleDeclineUpsell}
      />
      <FinalOfferPopup 
        isOpen={isFinalOfferPopupOpen}
        onOpenChange={setIsFinalOfferPopupOpen}
      />
    </>
  );
}
