
"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const benefits = [
  "600 aulas prontas e estruturadas em PDF",
  "Plano de estudo completo de 12 meses",
  "Exercícios práticos com repertório e microfone",
  "Didática moderna validada por professores",
  "Bônus exclusivos liberados",
];

type FinalOfferPopupProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export function FinalOfferPopup({ isOpen, onOpenChange }: FinalOfferPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent 
        className="p-0 border-0 max-w-sm w-full"
        style={{ backgroundColor: '#141414', borderRadius: '1.5rem', boxShadow: '0 0 40px rgba(249, 178, 51, 0.3)' }}
        onInteractOutside={(e) => e.preventDefault()}
        hideCloseButton={true}
      >
        <DialogTitle className="sr-only">Última Oferta</DialogTitle>
        <div className="w-full text-white rounded-3xl overflow-hidden">
          
          <div className="bg-[#FF4D4D] text-center p-2">
            <p className="font-bold text-xs uppercase">⏰ Última chance — Oferta expira em 2 minutos!</p>
          </div>

          <div className="p-6 text-center">
            <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ textShadow: '0 0 10px rgba(249, 178, 51, 0.5)' }}>
              Você ainda pode garantir o acesso completo – mas é agora ou nunca.
            </h2>

            <div className="bg-black/40 rounded-2xl p-4 my-6 border border-gray-700">
              <p className="text-lg line-through text-gray-400 decoration-[#FF4D4D]">De R$ 147,90</p>
              <p className="text-5xl font-black my-1" style={{ color: '#28FF7A', textShadow: '0 0 15px rgba(40, 255, 122, 0.6)' }}>
                R$ 6,90
              </p>
              <p className="text-xs italic text-gray-300">acesso completo + todos os bônus liberados</p>
            </div>

            <div className="text-left my-6 space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span style={{ color: '#28A745' }}>✅</span>
                  <p className="text-sm">{benefit}</p>
                </div>
              ))}
            </div>

            <Button
              className="w-full font-bold text-lg h-14 rounded-xl border-2 border-transparent hover:border-[#F9B233]"
              style={{ 
                backgroundColor: '#28A745', 
                color: 'white', 
                boxShadow: '0 0 15px rgba(40, 167, 69, 0.5)',
                transition: 'background-color 0.3s, box-shadow 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#1F8E3E';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#28A745';
              }}
            >
              PEGAR MINHA ÚLTIMA CHANCE AGORA
            </Button>
            
            <p className="text-gray-400 text-xs italic mt-4">
              ⚠️ Essa é a última janela antes do conteúdo sair do ar.
            </p>

            <p className="text-gray-600 text-xs mt-6">
              🔒 Pagamento 100% seguro – acesso imediato após confirmação.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
