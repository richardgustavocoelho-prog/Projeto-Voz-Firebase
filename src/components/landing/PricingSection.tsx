"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Gift } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
  "SEM MENSALIDADES",
  "GARANTIA DE 7 DIAS",
  "ATUALIZAÇÕES GRÁTIS",
];

const bonuses = [
  "BÔNUS: MODELOS DE CONTRATO PRÉ-PRONTOS",
  "BÔNUS: PLANNER DIGITAL PARA PROFESSORES DE MÚSICA",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-black mb-2">
            <span className="text-primary">OFERTA ESPECIAL</span> PARA GARANTIR HOJE!
          </h2>
          <p className="text-black/80">
            Promoção de lançamento pode encerrar a qualquer momento.
          </p>
          <div className="relative inline-block my-4">
            <p className="text-4xl md:text-5xl font-bold text-destructive-alt line-through decoration-destructive-alt decoration-4">
              DE R$ 147,00
            </p>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto bg-secondary rounded-3xl p-6 md:p-8 flex flex-col text-foreground">
          <div className="text-center">
            <p className="font-bold uppercase text-foreground">POR APENAS</p>
            <p className="text-6xl md:text-7xl font-black text-primary my-2">
              R$ 37,90
            </p>
            <p className="font-bold uppercase text-foreground">PAGAMENTO ÚNICO</p>
          </div>

          <div className="my-8 space-y-4">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm uppercase font-medium">{feature}</span>
                </div>
                <Separator className="bg-[#444444] mt-4" />
              </div>
            ))}
            
            {bonuses.map((bonus, index) => (
               <div key={index}>
                <div className="flex items-center gap-3">
                    <Gift className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm uppercase font-bold text-accent">{bonus}</span>
                </div>
                {index < bonuses.length -1 && <Separator className="bg-[#444444] mt-4" />}
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            GARANTIR O MEU AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}
