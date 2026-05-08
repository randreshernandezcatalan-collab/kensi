import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kensi — Diseño y desarrollo web moderno",
  description:
    "Estudio independiente de diseño y desarrollo web. Hacemos webs que venden como cohetes.",
  icons: { icon: "/assets/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@500;700&family=JetBrains+Mono:wght@300;400;500&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
