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

const SITE_URL = "https://praticasolucao.com.br";
const DESCRICAO =
  "Terceirização de folha de pagamento, departamento pessoal, consultoria em SST, eSocial, certificado digital e abertura de empresa em Goiânia. Prazos cumpridos e suporte humano. Atendimento 100% online.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Prática Soluções Empresariais | Departamento Pessoal e SST em Goiânia",
    template: "%s | Prática Soluções Empresariais",
  },
  description: DESCRICAO,
  applicationName: "Prática Soluções Empresariais",
  authors: [{ name: "Prática Soluções Empresariais" }],
  generator: "Next.js",
  keywords: [
    "terceirização de folha de pagamento",
    "departamento pessoal",
    "consultoria em SST",
    "segurança do trabalho",
    "eSocial",
    "PGR PCMSO LTCAT",
    "certificado digital",
    "e-CPF e-CNPJ",
    "abertura de empresa",
    "cadastro de obra CNO",
    "endereço fiscal",
    "folha de pagamento Goiânia",
    "contabilidade trabalhista",
    "rotinas trabalhistas",
    "calculadora trabalhista",
    "Prática Soluções Empresariais",
    "Goiânia",
    "Goiás",
  ],
  category: "business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Prática Soluções Empresariais",
    title:
      "Prática Soluções Empresariais | Departamento Pessoal e SST em Goiânia",
    description: DESCRICAO,
    images: [
      {
        url: "/logo.png",
        width: 240,
        height: 120,
        alt: "Prática Soluções Empresariais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Prática Soluções Empresariais | Departamento Pessoal e SST em Goiânia",
    description: DESCRICAO,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Prática Soluções Empresariais",
  description: DESCRICAO,
  url: SITE_URL,
  telephone: "+55-62-98210-3699",
  email: "contato@praticasolucao.com.br",
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goiânia",
    addressRegion: "GO",
    addressCountry: "BR",
  },
  sameAs: ["https://wa.me/5562982103699"],
  priceRange: "$$",
  knowsAbout: [
    "Terceirização de folha de pagamento",
    "Departamento pessoal",
    "Consultoria em SST",
    "eSocial",
    "Certificado digital",
    "Abertura de empresa",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
        <FloatingWhats />
      </body>
    </html>
  );
}
