"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const benefits = [
  "600 aulas prontas e estruturadas em PDF",
  "Plano de estudo completo de 12 meses",
  "Exercícios práticos com repertório e microfone",
  "Didática moderna validada por professores",
  "Bônus exclusivos liberados",
];

type UpsellPopupProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export function UpsellPopup({ isOpen, onOpenChange }: UpsellPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent 
        className="p-0 border-0 max-w-sm w-full"
        style={{ backgroundColor: '#141414', borderRadius: '1.5rem' }}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="w-full text-white rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 0 40px rgba(249, 178, 51, 0.3)' }}>
          
          <div className="bg-[#1C1C1C] text-center p-2 rounded-t-3xl">
            <p className="text-xs">Você clicou na oferta de R$ 3,90 — liberamos uma condição especial.</p>
          </div>
          
          <div className="bg-[#FF4D4D] text-center p-2">
            <p className="font-bold text-sm">⏰ Oferta expira em 2 minutos!</p>
          </div>

          <div className="p-6 text-center">
            <h2 className="text-2xl font-extrabold mb-2" style={{ textShadow: '0 0 10px rgba(249, 178, 51, 0.5)' }}>
              Ops! A oferta de R$ 3,90 esgotou há 2 minutos…
            </h2>

            <p className="text-lg mb-6">
              Mas você pode aproveitar um <span className="font-bold" style={{ color: '#28A745' }}>SUPER DESCONTO</span> no acesso completo!
            </p>

            <div className="bg-black/40 rounded-2xl p-4 my-6 border border-gray-700">
              <p className="text-lg line-through text-gray-400 decoration-[#FF4D4D]">De R$ 37,90</p>
              <p className="text-5xl font-black my-1" style={{ color: '#28FF7A', textShadow: '0 0 15px rgba(40, 255, 122, 0.6)' }}>
                R$ 9,90
              </p>
              <p className="text-sm text-gray-400">acesso imediato</p>
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
              QUERO ESSA OFERTA ESPECIAL!
            </Button>

            <button 
              onClick={() => onOpenChange(false)}
              className="text-gray-500 text-xs underline mt-4 hover:text-gray-400 transition-colors"
            >
              Não, obrigado. Prefiro perder essa chance.
            </button>
            
            <p className="text-gray-600 text-xs mt-6">
              🔒 Pagamento 100% seguro — acesso imediato após confirmação.
            </p>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
