import type { Metadata } from "next";
import Calculadora from "./client";

export const metadata: Metadata = {
  title: "Calculadora de Custo de Funcionário 2026 | Prática Soluções",
  description:
    "Calcule grátis o custo real de um funcionário CLT para a sua empresa: FGTS, 13º, férias, encargos e provisões (2026).",
};

export default function Page() {
  return <Calculadora />;
}
