import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vigorre Hire™ — Recrutamento Inteligente",
  description:
    "O produto de recrutamento do Ecossistema Vigorre™. Conectamos talentos e empresas com dados, IA e análise comportamental.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
