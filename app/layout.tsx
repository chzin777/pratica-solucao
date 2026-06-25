import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import FloatingWhats from "./components/FloatingWhats";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
    <html
      lang="pt-BR"
      className={`${geistSans.variable} h-full overflow-x-hidden scroll-smooth scroll-pt-24 antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-slate-900">
        {children}
        <FloatingWhats />
      </body>
    </html>
  );
}
