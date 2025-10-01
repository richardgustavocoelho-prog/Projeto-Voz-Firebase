import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 bg-background"
    >
      <div className="container px-4 md:px-6 text-center flex flex-col items-center">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline uppercase">
            JÁ PENSOU EM PASSAR MESES SEM PRECISAR ESCREVER UMA ÚNICA AULA?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            São mais de 600 aulas prontas e estruturadas para você aplicar
            com seus alunos, do iniciante ao avançado, e otimizar seu tempo.
          </p>
        </div>
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            GARANTIR MEU PACK AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}
