"use client";
import { Star } from "lucide-react";

const cardData = [
  {
    title: "CRONOGRAMA COMPLETO E ESTRUTURADO",
    description: "Um plano detalhado com aulas prontas, organizadas passo a passo, do iniciante ao avançado.",
  },
  {
    title: "ECONOMIA DE TEMPO",
    description: "Evite noites perdidas planejando o que ensinar. Todo o cronograma já está preparado para aplicar diretamente.",
  },
  {
    title: "DIDÁTICA ORGANIZADA E EFICIENTE",
    description: "Aulas progressivas que garantem que seus alunos avancem com confiança e resultados reais.",
  },
  {
    title: "FLEXIBILIDADE PARA DIFERENTES NÍVEIS E IDADES",
    description: "Conteúdo adaptável para ensinar desde crianças até adultos, seja em nível iniciante ou avançado.",
  },
  {
    title: "FOCO NA PROSPECÇÃO DE NOVOS ALUNOS",
    description: "Com o planejamento resolvido, sobra mais tempo para captar novos clientes e expandir sua agenda.",
  },
  {
    title: "REDUÇÃO DO ESTRESSE E DA IMPROVISAÇÃO",
    description: "Ensine com confiança e segurança, sem se preocupar com o que preparar para a próxima aula.",
  },
  {
    title: "INVESTIMENTO BAIXO COM ALTO RETORNO",
    description: "Pelo preço promocional, o pack oferece um excelente custo-benefício, otimizando seu trabalho e melhorando a qualidade das aulas.",
  },
  {
    title: "IDEAL PARA PROFESSORES INICIANTES E EXPERIENTES",
    description: "Seja para quem está começando ou para quem já tem experiência, o pack facilita a vida e eleva o nível de ensino.",
  },
];

export function MaterialSection() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase text-accent mb-12">
          Com esse MATERIAL você terá!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 text-center flex flex-col items-center transition-all duration-300 transform hover:scale-105 
                ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'}
              `}
            >
              <div className="mb-4">
                <Star
                  className={`h-10 w-10 text-white`}
                  fill={'#FFFFFF'}
                />
              </div>
              <h3
                className={`text-lg font-bold uppercase mb-3 text-black`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm text-black`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}