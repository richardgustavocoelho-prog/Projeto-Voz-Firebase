"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Antes eu passava horas montando aula, escolhendo repertório e tentando organizar o cronograma. Agora, com o pack, eu só abro o material e ensino. Mudou completamente minha rotina!",
    author: "Ana Paula",
    role: "Professora de canto particular",
    imageUrl: "https://picsum.photos/seed/ana/36/36",
    imageHint: "profile photo"
  },
  {
    quote: "Eu sempre tive dificuldade pra estruturar minhas aulas e acompanhar a evolução dos alunos. Esse material deixou tudo claro e fácil — até meus alunos perceberam a diferença!",
    author: "Ricardo Lima",
    role: "Instrutor de canto popular",
    imageUrl: "https://picsum.photos/seed/ricardo/36/36",
    imageHint: "profile photo"
  },
  {
    quote: "Uso as aulas prontas há 3 meses e não quero outra coisa. A didática é excelente, economizo tempo e ainda passo mais segurança pros meus alunos.",
    author: "Juliana Souza",
    role: "Professora em escola de música",
    imageUrl: "https://picsum.photos/seed/juliana/36/36",
    imageHint: "profile photo"
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-foreground">
            O Que Dizem Nossos <span className="text-primary">Professores</span>:
          </h2>
          <p className="text-muted-foreground mt-4 text-foreground/80">
            Veja o que professores de canto estão dizendo sobre o Pack de 600 Aulas Prontas e como ele transformou suas rotinas de ensino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border-border rounded-xl overflow-hidden flex flex-col" 
            >
              <CardContent className="p-6 text-left flex-grow flex flex-col">
                <p className="text-black/80 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.imageUrl}
                    alt={`Foto de ${testimonial.author}`}
                    width={36}
                    height={36}
                    className="rounded-full"
                    data-ai-hint={testimonial.imageHint}
                  />
                  <div>
                    <p className="font-bold text-black">{testimonial.author}</p>
                    <p className="text-sm text-black/60">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
