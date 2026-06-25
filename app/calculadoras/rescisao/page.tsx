import type { Metadata } from "next";
import Calculadora from "./client";

export const metadata: Metadata = {
  title: "Calculadora de Rescisão 2026 | Prática Soluções",
  description:
    "Calcule grátis as verbas rescisórias por tipo de desligamento: saldo de salário, aviso prévio, 13º, férias e multa do FGTS (2026).",
};

export default function Page() {
  return <Calculadora />;
}
