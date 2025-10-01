import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CalendarDays } from "lucide-react";

export function BonusSection() {
  return (
    <section id="bonus" className="py-12 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline uppercase mb-12">
            E AINDA TEM BÔNUS ESPECIAIS
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
            <CardHeader className="items-center text-center p-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4 font-headline text-2xl">Modelos de Contrato</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <p className="text-muted-foreground text-center">
                Ganhe acesso a modelos de contrato de prestação de serviços para
                formalizar suas aulas e proteger seu negócio.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
            <CardHeader className="items-center text-center p-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <CalendarDays className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4 font-headline text-2xl">Planner Digital</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <p className="text-muted-foreground text-center">
                Um planner digital exclusivo para organizar suas aulas, estudos e
                metas, ajudando a otimizar sua rotina.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
