import type { Metadata } from "next";
import Link from "next/link";
import SplitText from "../components/SplitText";
import Reveal from "../components/Reveal";
import { WHATSAPP } from "./ui";

export const metadata: Metadata = {
  title: "Calculadoras Trabalhistas Gratuitas | Prática Soluções",
  description:
    "Calculadoras trabalhistas grátis e atualizadas para 2026: salário líquido, seguro-desemprego, rescisão e custo de funcionário para a empresa.",
};

const CALCS = [
  {
    href: "/calculadoras/salario-liquido",
    titulo: "Salário Líquido",
    desc: "Descubra quanto você recebe após os descontos de INSS e Imposto de Renda.",
  },
  {
    href: "/calculadoras/seguro-desemprego",
    titulo: "Seguro-Desemprego",
    desc: "Estime o valor e o número de parcelas do seu benefício.",
  },
  {
    href: "/calculadoras/rescisao",
    titulo: "Rescisão",
    desc: "Calcule as verbas rescisórias por tipo de desligamento.",
  },
  {
    href: "/calculadoras/custo-funcionario",
    titulo: "Custo de Funcionário",
    desc: "Saiba o custo real de um empregado CLT para a sua empresa.",
  },
];

function Icone() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7 text-brand"
      aria-hidden="true"
    >
      <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11.5" x2="9" y2="11.5" />
      <line x1="11.5" y1="11.5" x2="12.5" y2="11.5" />
      <line x1="15" y1="11.5" x2="16" y2="11.5" />
      <line x1="8" y1="15" x2="9" y2="15" />
      <line x1="11.5" y1="15" x2="12.5" y2="15" />
      <line x1="15" y1="15" x2="16" y2="18.5" />
    </svg>
  );
}

export default function CalculadorasIndex() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="down">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              Ferramentas gratuitas
            </p>
          </Reveal>
          <SplitText
            text="Calculadoras Trabalhistas"
            tag="h1"
            className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
            splitType="chars"
            delay={25}
            duration={0.7}
          />
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg text-slate-600">
              Ferramentas grátis e atualizadas para 2026. Faça simulações em
              segundos, sem cadastro.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CALCS.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.1}>
              <Link
                href={c.href}
                className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                  <Icone />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-brand-deep group-hover:text-brand">
                    {c.titulo}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-3xl bg-brand-deep p-8 text-center text-white sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Quer parar de calcular no chute?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sky-50/90">
              A Prática Soluções assume folha, rescisões e rotinas trabalhistas
              da sua empresa. Fale agora com um especialista e receba um
              diagnóstico gratuito.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold tracking-wide text-brand-deep transition-colors hover:bg-sky-50"
            >
              FALAR COM ESPECIALISTA NO WHATSAPP
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
