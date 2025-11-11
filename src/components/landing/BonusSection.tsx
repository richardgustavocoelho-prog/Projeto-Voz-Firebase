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
          <Card 
            className="overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 flex flex-col rounded-2xl border-0 shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            <CardContent 
              className="p-6 flex flex-col items-center text-center flex-grow rounded-2xl"
              style={{ backgroundColor: '#fc8404' }}
            >
              <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                  src="https://i.imgur.com/n1qbgtm.png"
                  alt="Ilustração de um contrato em uma prancheta"
                  fill
                  className="object-contain"
                  data-ai-hint="contract clipboard"
                />
              </div>
              <h3 className="text-sm font-bold uppercase text-white">
                Comunidade Exclusiva de Alunos
              </h3>
              <p className="text-7xl font-black text-primary mt-4 font-headline">
                GRÁTIS
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Planner Digital */}
          <Card 
            className="overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 flex flex-col rounded-2xl border-0 shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            <CardContent 
              className="p-6 flex flex-col items-center text-center flex-grow rounded-2xl"
              style={{ backgroundColor: '#fc8404' }}
            >
              <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                  src="https://i.imgur.com/DlLeJIn.png"
                  alt="Ilustração de um planner digital em um tablet"
                  fill
                  className="object-contain"
                  data-ai-hint="digital planner"
                />
              </div>
              <h3 className="text-sm font-bold uppercase text-white">
                Planner de Treinos de Canto
              </h3>
              <p className="text-7xl font-black text-primary mt-4 font-headline">
                GRÁTIS
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Biblioteca de Repertório */}
          <Card 
            className="overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 flex flex-col rounded-2xl border-0 shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            <CardContent 
              className="p-6 flex flex-col items-center text-center flex-grow rounded-2xl"
              style={{ backgroundColor: '#fc8404' }}
            >
              <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                  src="https://i.imgur.com/vFQ0OjK.png"
                  alt="Ilustração de uma biblioteca de música"
                  fill
                  className="object-contain"
                  data-ai-hint="music library"
                />
              </div>
              <h3 className="text-sm font-bold uppercase text-white">
                Biblioteca de Repertório Exclusivo
              </h3>
              <p className="text-7xl font-black text-primary mt-4 font-headline">
                GRÁTIS
              </p>
            </CardContent>
          </Card>

          {/* Card 4: Mini Guia de Didática */}
          <Card 
            className="overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 flex flex-col rounded-2xl border-0 shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            <CardContent
              className="p-6 flex flex-col items-center text-center flex-grow rounded-2xl"
              style={{ backgroundColor: '#fc8404' }}
            >
              <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                  src="https://i.imgur.com/NW4J4uV.png"
                  alt="Ilustração de um guia ou manual"
                  fill
                  className="object-contain"
                  data-ai-hint="teaching guide"
                />
              </div>
              <h3 className="text-sm font-bold uppercase text-white">
                Acesso a modelos de organização pessoal
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
