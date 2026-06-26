import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vigorre Hire™ — Recrutamento Inteligente",
  description:
    "O produto de recrutamento do Ecossistema Vigorre™. Conectamos talentos e empresas com dados, IA e análise comportamental.",
  openGraph: {
    title: "Vigorre Hire™ — Recrutamento Inteligente",
    description: "Conectamos talentos e empresas com dados, IA e análise comportamental.",
    url: "https://hire.vigorre.com",
    siteName: "Vigorre Hire™",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
