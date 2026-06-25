import type { Metadata } from "next";
import Calculadora from "./client";

export const metadata: Metadata = {
  title: "Calculadora de Seguro-Desemprego 2026 | Prática Soluções",
  description:
    "Calcule grátis o valor e o número de parcelas do seu seguro-desemprego em 2026 com base na média salarial e no tempo de trabalho.",
};

export default function Page() {
  return <Calculadora />;
}
