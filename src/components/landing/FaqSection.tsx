"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "Esse material serve para quem nunca cantou?",
    answer: "Sim! O método foi feito justamente para iniciantes, mas também serve pra quem já canta e quer melhorar.",
  },
  {
    question: "Posso adaptar o conteúdo para meu ritmo?",
    answer: "Claro. Você pode seguir no seu tempo e até refazer as aulas.",
  },
  {
    question: "Em quanto tempo recebo o acesso após a compra?",
    answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá um link para acessar todo o conteúdo incluindo os bônus diretamente no seu dispositivo.",
  },
  {
    question: "O material é físico ou digital?",
    answer: "100% digital. Você receberá o acesso no e-mail que cadastrar na pagina de pagamento, podendo salvar, consultar no celular, tablet ou computador quando e onde quiser.",
  },
{
    question: "E se eu não gostar do conteúdo?",
    answer: "Você tem 30 dias de garantia total. Se por qualquer motivo o material não atender suas expectativas, basta solicitar o reembolso — simples, rápido e sem burocracia.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-12 md:py-24" style={{ backgroundColor: '#141414' }}>
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase" style={{ color: 'hsl(var(--accent))', textShadow: '0 0 15px rgba(249,178,51,0.6)' }}>
            ❓ PERGUNTAS FREQUENTES
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-accent/20 bg-secondary/30 rounded-lg overflow-hidden">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-white hover:text-accent p-6 transition-colors [&[data-state=open]>svg]:text-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
