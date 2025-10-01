import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";

const cardData = [
  {
    id: "vocal-technique",
    title: "🔴 600 AULAS DE TÉCNICA VOCAL ESTRUTURADAS – DO ZERO AO AVANÇADO",
    benefits: [
      "Módulos passo a passo, fácil aplicação.",
      "Exercícios práticos guiados.",
      "Postura, respiração, projeção, afinação e interpretação.",
      "Conteúdo testado e validado.",
    ],
  },
  {
    id: "study-plan",
    title: "📅 PLANO DE ESTUDO PRONTO E CUSTOMIZÁVEL",
    benefits: [
      "Sequência didática para aulas de 30, 45 ou 60 minutos.",
      "Progressão lógica do iniciante ao avançado.",
      "Flexibilidade para adaptar o material ao seu método.",
      "Economia de tempo no planejamento.",
    ],
  },
  {
    id: "training-tools",
    title: "🔧 FERRAMENTAS DE TREINO E PERFORMANCE",
    benefits: [
      "Playbacks de aquecimento e desaquecimento vocal.",
      "Exercícios de percepção rítmica e melódica.",
      "Técnicas para presença de palco e controle da ansiedade.",
      "Materiais de apoio em áudio e PDF.",
    ],
  },
  {
    id: "repertoire",
    title: "🎤 APLICAÇÃO REAL COM REPERTÓRIO VERSÁTIL",
    benefits: [
      "+100 músicas cifradas e com playback.",
      "Estilos variados: pop, rock, MPB, gospel e mais.",
      "Análise de melodia e harmonia.",
      "Dicas de interpretação para cada canção.",
    ],
  },
  {
    id: "teaching-didactics",
    title: "🧑‍🏫 DIDÁTICA PROFISSIONAL PARA PROFESSORES",
    benefits: [
      "Como estruturar uma aula de canto cativante.",
      "Técnicas para identificar e corrigir dificuldades dos alunos.",
      "Estratégias para manter os alunos motivados.",
      "Modelo de avaliação de desempenho.",
    ],
  }
];

const getImage = (id: string) => {
  return PlaceHolderImages.find(img => img.id === id);
}

export function ContentBlocks() {
  return (
    <section id="acesso" className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase text-foreground mb-12">
          TENHA ACESSO:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cardData.map((card) => {
            const image = getImage(card.id);
            return (
              <Card key={card.id} className="shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <CardContent className="p-6 flex-grow flex flex-col">
                  {image && (
                    <div className="mb-6 rounded-md overflow-hidden aspect-[3/2]">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold uppercase text-foreground mb-4 leading-tight">{card.title}</h3>
                  <ul className="space-y-2 text-foreground/80 flex-grow">
                    {card.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">✅</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="w-full max-w-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          >
            GARANTIR MEU PACK AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}
