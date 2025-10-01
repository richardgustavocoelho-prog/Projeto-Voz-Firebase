import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "+600 Aulas Prontas",
  "Material do Básico ao Avançado",
  "Repertório com Playbacks",
  "Exercícios e Apostilas em PDF",
  "Bônus Exclusivos",
  "Acesso Vitalício",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center p-8 md:p-12 bg-secondary rounded-xl shadow-2xl border">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline uppercase text-secondary-foreground">
            Acesso Imediato a Todo o Conteúdo
          </h2>
          <div className="my-8">
            <p className="text-xl text-secondary-foreground/80 line-through">
              DE R$ 97,00
            </p>
            <p className="text-5xl md:text-7xl font-black text-primary mt-2 font-headline">
              POR APENAS R$ 37,90
            </p>
            <p className="text-secondary-foreground/80 mt-2">(Pagamento único)</p>
          </div>
          <ul className="space-y-4 text-left my-8 max-w-md mx-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg text-secondary-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="w-full max-w-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            GARANTIR MEU ACESSO
          </Button>
          <p className="text-xs text-secondary-foreground/60 mt-4">
            Compra segura. Acesso imediato e vitalício.
          </p>
        </div>
      </div>
    </section>
  );
}
