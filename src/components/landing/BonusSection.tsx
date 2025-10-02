"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function BonusSection() {
  return (
    <section id="bonus" className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline uppercase mb-12 text-accent">
            BÔNUS ESPECIAIS PARA GARANTIR HOJE!
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Card 1: Modelos de Contratos */}
          <Card className="bg-white text-black overflow-hidden shadow-xl transform transition-transform duration-300 hover:-translate-y-2 flex flex-col rounded-2xl">
            <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                  src="https://picsum.photos/seed/contract/600/450"
                  alt="Ilustração de um contrato em uma prancheta"
                  fill
                  className="object-contain"
                  data-ai-hint="contract clipboard"
                />
              </div>
              <h3 className="text-lg font-bold uppercase text-black">
                Modelos de Contratos Pré-Prontos
              </h3>
              <p className="text-7xl font-black text-primary mt-4 font-headline">
                GRÁTIS
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Planner Digital */}
          <Card className="bg-white text-black overflow-hidden shadow-xl transform transition-transform duration-300 hover:-translate-y-2 flex flex-col rounded-2xl">
            <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                  src="https://picsum.photos/seed/planner/600/450"
                  alt="Ilustração de um planner digital em um tablet"
                  fill
                  className="object-contain"
                  data-ai-hint="digital planner"
                />
              </div>
              <h3 className="text-lg font-bold uppercase text-black">
                Planner Digital Para Professores de Música
              </h3>
              <p className="text-7xl font-black text-primary mt-4 font-headline">
                GRÁTIS
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
