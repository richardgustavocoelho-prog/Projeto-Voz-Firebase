const cardData = [
  "Quer aprender a cantar do zero",
  "Já canta, mas falta técnica e direção",
  "Prefere praticar sozinho no seu tempo",
  "ESCOLAS DE MÚSICA RECÉM-ABERTAS",
  "PROFESSORES QUE ENSINAM EM AULAS PARTICULARES",
  "PROFESSORES QUE ENSINAM CRIANÇAS E ADULTOS",
  "PROFISSIONAIS COM POUCO TEMPO PARA PLANEJAR",
  "PROFESSORES QUE QUEREM MELHORAR SUA DIDÁTICA",
];

export function ForYouSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase text-black mb-12">
          ESSE MATERIAL É PARA VOCÊ:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cardData.map((text, index) => (
            <div
              key={index}
              className="bg-destructive-alt rounded-lg p-6 flex items-center justify-center text-center min-h-[120px]"
            >
              <p className="text-white font-bold uppercase">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
