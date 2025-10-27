import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoiceStream Academy",
  description: "Aulas de canto prontas para professores e escolas de música.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
      </head>
      <body className="font-body antialiased">
        {children}
        <a
          href="https://wa.me/5519998059433"
          className="whatsapp-button"
          target="_blank"
          aria-label="Fale conosco no WhatsApp"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
            alt="WhatsApp"
          />
        </a>
      </body>
    </html>
  );
}
