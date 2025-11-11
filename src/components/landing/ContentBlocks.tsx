import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";

const cardData = [
  {
    id: "vocal-technique",
    title: "🔴 600 Aulas de Técnica Vocal Estruturadas - Do Zero ao Avançado",
    benefits: [
      "Método passo a passo, ideal para iniciantes e professores.",
      "Aulas com teoria clara, prática guiada e tarefa de casa.",
      "Tudo organizado em módulos temáticos: postura, respiração, projeção, afinação, vibrato, interpretação e mais.",
      "Linguagem acessível, didática moderna e 100% aplicável.",
    ],
    bgColor: "#E4E1C0",
  },
  {
    id: "study-plan",
    title: "📅 Plano de Estudo Pronto para Aplicar Hoje",
    benefits: [
      "Sequência lógica e progressiva: basta seguir e evoluir.",
      "Estrutura pensada para ser usada em aulas presenciais, online ou para autoestudo.",
      "Cada aula leva em média 30 minutos e já vem com tempo estimado para cada etapa.",
    ],
    bgColor: "#2C3E4C",
  },
  {
    id: "training-tools",
    title: "🔧 Ferramentas de Treino com Materiais Simples",
    benefits: [
      "Técnicas com balão, canudo, espelho, tubo de PVC e outros recursos baratos e eficazes.",
      "Exercícios práticos com vocalizes e sugestões de uso de apps gratuitos.",
      "Atividades de autocorreção, percepção auditiva e consciência corporal.",
    ],
    bgColor: "#FFF3D6",
  },
  {
    id: "repertoire",
    title: "🎤 Aplicação Real com Repertório, Interpretação e Microfone",
    benefits: [
      "Treinamento completo com foco em performance.",
      "Aulas que ensinam como usar o microfone com técnica e estilo.",
      "Módulo de interpretação musical: cante com verdade, não só com técnica.",
    ],
    bgColor: "#C8E0E7",
  },
  {
    id: "teaching-didactics",
    title: "🧑‍🏫 Didática Profissional para Todos os Níveis",
    benefits: [
      "Ideal para professores que querem dar aula com plano e segurança.",
      "Pode ser usado como currículo completo em escolas de música.",
      "Economia de tempo: não precisa planejar aula por aula.",
    ],
    bgColor: "#F7E2C4",
  }
];

const getImage = (id: string) => {
  return PlaceHolderImages.find(img => img.id === id);
}

type ContentBlocksProps = {
  onCTAClick: () => void;
};


export function ContentBlocks({ onCTAClick }: ContentBlocksProps) {
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
              <Card 
                key={card.id} 
                className="border-2 border-solid flex flex-col bg-secondary border-accent rounded-2xl overflow-hidden"
              >
                {image && (
                  <div className="relative w-full" style={{ backgroundColor: card.bgColor }}>
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold uppercase mb-4 leading-tight text-accent">{card.title}</h3>
                  <ul className="space-y-2 flex-grow text-white">
                    {card.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
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
            onClick={onCTAClick}
            className="w-full max-w-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          >
            GARANTIR MEU ACESSO
          </Button>
        </div>
      </div>
    </section>
  );
}
