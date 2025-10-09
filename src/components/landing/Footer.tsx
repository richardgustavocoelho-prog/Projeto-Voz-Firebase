"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';
import { Waves, Instagram } from "lucide-react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground py-10 md:py-12">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        
        <div className="mb-4">
          <Waves className="h-8 w-8 text-accent" />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground">600 Aulas Prontas</h3>
        
        <div className="flex items-center gap-4 my-5 text-sm text-muted-foreground">
          <Link href="/politica-de-privacidade" className="hover:text-accent transition-colors">
            Política de Privacidade
          </Link>
          <span>·</span>
          <Link href="/termos-de-uso" className="hover:text-accent transition-colors">
            Termos de Uso
          </Link>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Instagram className="h-4 w-4" />
          <a href="https://instagram.com/bata.90e" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            @bata.90e
          </a>
        </div>
        
        <p className="text-xs text-muted-foreground/70">
          © {year || new Date().getFullYear()} VoiceStream Academy. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}
