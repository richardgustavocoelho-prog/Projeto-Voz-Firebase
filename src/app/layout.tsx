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
        <Script id="utmify-pixel-id" strategy="afterInteractive">
          {`window.pixelId = "68f05e9a28feb28bbf147a1b";`}
        </Script>
        <Script
          id="utmify-pixel-script"
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="afterInteractive"
          async
          defer
        />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
          strategy="afterInteractive"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
