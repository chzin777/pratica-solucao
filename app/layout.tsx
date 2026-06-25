import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prática Soluções Empresariais | Consultoria para seu negócio",
  description:
    "Consultoria especializada em SST, terceirização de folha de pagamento, certificado digital, abertura de empresa e endereço fiscal. Soluções práticas para o seu negócio.",
  openGraph: {
    title: "Prática Soluções Empresariais",
    description:
      "Consultoria especializada e muito mais soluções para seu negócio.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
