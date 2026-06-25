import type { Metadata } from "next";
import Calculadora from "./client";

export const metadata: Metadata = {
  title: "Calculadora de Salário Líquido 2026 | Prática Soluções",
  description:
    "Calcule grátis seu salário líquido em 2026 com os descontos de INSS e Imposto de Renda atualizados. Resultado na hora, sem cadastro.",
};

export default function Page() {
  return <Calculadora />;
}
