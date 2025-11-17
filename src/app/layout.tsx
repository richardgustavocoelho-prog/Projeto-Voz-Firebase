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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fast.wistia.com" />
        <link rel="preconnect" href="https://embed-ssl.wistia.com" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" />

        <Script id="utmify-pixel-id" strategy="afterInteractive">
          {`window.pixelId = "68fff3810e72c5b616af00c9";`}
        </Script>
        <Script
          id="utmify-pixel"
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="afterInteractive"
          async
          defer
        />
        <Script
          id="utmify-utms"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
          async
          defer
        ></Script>
        <Script src="https://fast.wistia.net/player.js" strategy="lazyOnload" async />
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
            loading="lazy"
          />
        </a>
      </body>
    </html>
  );
}
