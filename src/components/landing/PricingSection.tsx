"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Gift } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { UpsellPopup } from "./UpsellPopup";
import { FinalOfferPopup } from "./FinalOfferPopup";

const firstCardFeatures = [
    "600 AULAS PRONTAS, ESTRUTURADAS DA BASE AO AVANÇADO",
    "ACESSO IMEDIATO EM QUALQUER DISPOSITIVO",
];

const features = [
  "600 AULAS PRONTAS, ESTRUTURADAS DA BASE AO AVANÇADO",
  "ROTEIROS DE AULA COM TEMPO ESTIMADO, PASSO A PASSO E TAREFA DE CASA",
  "APLICAÇÕES REAIS COM INTERPRETAÇÃO MUSICAL, REPERTÓRIO E USO DO MICROFONE",
  "ECONOMIA DE TEMPO — NÃO PRECISA MAIS MONTAR AULA DO ZERO",
  "ESTRUTURA PROFISSIONAL, MESMO PARA QUEM NUNCA DEU AULA",
  "ACESSO IMEDIATO EM QUALQUER DISPOSITIVO",
  "CRONOGRAMA PASSO A PASSO",
  "EM PDF PARA FACILITAR CONSULTA",
  "ACESSO VITALÍCIO",
  "GARANTIA DE 30 DIAS",
];

const bonuses = [
  "MODELOS DE CONTRATO PRÉ-PRONTOS",
  "PLANNER DIGITAL PARA PROFESSORES DE MÚSICA",
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

          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto items-start">
            {/* First Card */}
            <div className="w-full bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-6 md:p-8 flex flex-col text-foreground">
              <div className="text-center">
                <p className="text-6xl md:text-7xl font-black text-primary my-2">
                  R$ 3,90
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
                QUERO MINHAS AULAS AGORA!
              </Button>
            </div>

            {/* Second Card (Premium) */}
            <div className="relative w-full bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-1 shadow-[0_0_40px_rgba(249,178,51,0.3)]">
               <div className="w-full text-center py-2 border-b border-accent/50" style={{ background: 'linear-gradient(90deg, rgba(249,178,51,0.15), rgba(249,178,51,0.05))', borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}>
                <p className="font-extrabold text-accent uppercase tracking-widest animate-pulsate-gold text-sm md:text-base">
                  ⚡ ÚLTIMA CHANCE ⚡
                </p>
              </div>
              <div className="bg-black/40 rounded-b-[1.25rem] p-0 flex flex-col text-foreground h-full backdrop-blur-sm overflow-hidden">
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <p className="text-2xl line-through text-red-500/80 decoration-red-500">De R$ 147,90</p>
                    <p className="text-7xl md:text-8xl font-black my-2" style={{color: '#00FF87', textShadow: '0 0 15px rgba(0, 255, 135, 0.6)'}}>
                      R$ 19,90
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

                  <Button
                    size="lg"
                    className="w-full mt-auto font-bold text-lg px-10 py-7 rounded-xl border-2 border-green-800 animate-pulsate-green"
                    style={{ backgroundColor: '#00FF87', color: 'white' }}
                  >
                    QUERO O PACK COMPLETO
                  </Button>
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
