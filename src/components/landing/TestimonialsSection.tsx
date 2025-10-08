"use client";

import Image from 'next/image';
import { Star, PlayCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    quote: "Antes eu passava horas montando aula, escolhendo repertório e tentando organizar o cronograma. Agora, com o pack, eu só abro o material e ensino. Mudou completamente minha rotina!",
    author: "Ana Paula",
    role: "Professora de canto particular",
  },
  {
    quote: "Eu sempre tive dificuldade pra estruturar minhas aulas e acompanhar a evolução dos alunos. Esse material deixou tudo claro e fácil — até meus alunos perceberam a diferença!",
    author: "Ricardo Lima",
    role: "Instrutor de canto popular",
  },
  {
    quote: "Uso as aulas prontas há 3 meses e não quero outra coisa. A didática é excelente, economizo tempo e ainda passo mais segurança pros meus alunos.",
    author: "Juliana Souza",
    role: "Professora em escola de música",
  },
];

export function TestimonialsSection() {
  const videoPlaceholder = PlaceHolderImages.find(img => img.id === 'testimonial-video');

  return (
    <section className="py-12 md:py-24" style={{ background: 'linear-gradient(to bottom, #1C1C1C, #111111)' }}>
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-white">
            O Que Dizem Nossos <span style={{ color: '#FFD65A' }}>Professores</span>:
          </h2>
          <p className="text-muted-foreground mt-4">
            Veja o que professores de canto estão dizendo sobre o Pack de 600 Aulas Prontas e como ele transformou suas rotinas de ensino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/30 border-border/20 rounded-xl overflow-hidden flex flex-col" style={{ boxShadow: '0 0 12px rgba(0,0,0,0.2)' }}>
              <CardContent className="p-6 text-center flex-grow flex flex-col items-center justify-center">
                <p className="text-white/90 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">🎬 Veja o que nossos professores têm a dizer:</h3>
          {videoPlaceholder && (
            <div className="relative mb-4 rounded-xl overflow-hidden shadow-lg mx-auto" style={{ boxShadow: '0 0 25px rgba(0, 255, 127, 0.15)' }}>
              <Image
                src={videoPlaceholder.imageUrl}
                alt={videoPlaceholder.description}
                width={800}
                height={450}
                className="w-full h-auto"
                data-ai-hint={videoPlaceholder.imageHint}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <PlayCircle className="h-20 w-20 text-white/80 hover:text-white transition-colors cursor-pointer" style={{ color: '#00FF7F' }} />
              </div>
            </div>
          )}
          <p className="text-muted-foreground text-sm mb-4">Depoimento enviado por Felipe M. – Professor de canto iniciante</p>
          <div className="flex items-center justify-center gap-2 font-bold text-lg" style={{ color: '#FFD65A' }}>
            <Star fill="#FFD65A" className="h-5 w-5" />
            <span>4.9 de 5 – baseado em +1.200 professores satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
