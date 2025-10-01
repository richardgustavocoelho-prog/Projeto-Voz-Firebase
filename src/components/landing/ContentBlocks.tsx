import { Check, ArrowRight } from "lucide-react";

const sections = [
  {
    title: "TENHA ACESSO IMEDIATO A UM MATERIAL COMPLETO",
    items: [
      "Aulas de técnica vocal do básico ao avançado",
      "Repertório com mais de 100 músicas cifradas e com playback",
      "Exercícios de aquecimento e desaquecimento vocal",
      "Materiais de apoio em PDF e áudio",
    ],
    icon: <Check className="h-6 w-6 text-primary" />,
  },
  {
    title: "PLANO DE ESTUDO ESTRUTURADO",
    items: [
      "Sequência didática validada por centenas de professores.",
      "Aulas que se adaptam a diferentes níveis de alunos.",
      "Progressão clara e objetiva para seus alunos.",
    ],
    icon: <ArrowRight className="h-6 w-6 text-primary" />,
  },
  {
    title: "FUNDAMENTAIS DE TÉCNICA VOCAL",
    items: [
      "Respiração e Apoio",
      "Registros Vocais",
      "Ressonância e Articulação",
      "Agilidade, Extensão e Dinâmica",
    ],
    icon: <Check className="h-6 w-6 text-primary" />,
  },
  {
    title: "PARA QUEM É O PACK?",
    items: [
        "Professores de canto iniciantes e experientes.",
        "Escolas de música que buscam padronizar seu ensino.",
        "Profissionais autônomos que desejam otimizar seu tempo.",
        "Qualquer pessoa que queira um método de canto pronto para usar.",
    ],
    icon: <ArrowRight className="h-6 w-6 text-primary" />,
  }
];

export function ContentBlocks() {
  return (
    <div className="py-12 md:py-24 space-y-16 md:space-y-24 bg-background">
      {sections.map((section, index) => (
        <section key={index} className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline uppercase mb-8">
              {section.title}
            </h2>
            <ul className="space-y-4 text-left">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{section.icon}</div>
                  <span className="text-lg text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
