"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-6 md:py-8 bg-secondary border-t border-border">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="text-sm text-secondary-foreground/80">
          © {year || new Date().getFullYear()} VoiceStream Academy. Todos os direitos reservados.
        </p>
        <p className="text-sm text-secondary-foreground/80 mt-2 md:mt-0">
          Suporte:{" "}
          <Link
            href="mailto:suporte@voicestream.com"
            className="underline hover:text-primary transition-colors"
          >
            suporte@voicestream.com
          </Link>
        </p>
      </div>
    </footer>
  );
}
