"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import SplitText from "../components/SplitText";
import Reveal from "../components/Reveal";

export const WHATSAPP =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Usei%20a%20calculadora%20no%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista.";

/** Casca de página para uma calculadora: título, descrição e CTA final. */
export function CalcShell({
  titulo,
  descricao,
  children,
}: {
  titulo: string;
  descricao: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/calculadoras"
          className="text-sm font-medium text-brand hover:text-brand-dark"
        >
          ← Todas as calculadoras
        </Link>
        <SplitText
          text={titulo}
          tag="h1"
          textAlign="left"
          className="mt-4 text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
          splitType="words"
          delay={35}
          duration={0.8}
        />
        <Reveal delay={0.15}>
          <p className="mt-3 text-slate-600">{descricao}</p>
        </Reveal>

        <Reveal delay={0.1} amount={0.05}>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {children}
          </div>
        </Reveal>

        <Reveal>
        <div className="mt-8 rounded-2xl bg-brand-deep p-6 text-center text-white sm:p-8">
          <h2 className="text-xl font-semibold">
            Precisa de ajuda com folha e rotinas trabalhistas?
          </h2>
          <p className="mt-2 text-sky-50/90">
            A Prática Soluções cuida do departamento pessoal da sua empresa.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold tracking-wide text-brand-deep transition-colors hover:bg-sky-50"
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
        </Reveal>

        <p className="mt-6 text-xs leading-relaxed text-slate-400">
          Os valores são estimativas com base nas tabelas vigentes em 2026 (INSS,
          IRRF, FGTS e salário mínimo). O resultado pode variar conforme acordos
          coletivos, benefícios e particularidades de cada contrato. Não substitui
          o cálculo oficial do departamento pessoal.
        </p>
      </div>
    </section>
  );
}

/** Campo de moeda em reais. */
export function CampoMoeda({
  label,
  value,
  onChange,
  placeholder = "0,00",
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="mt-1.5 flex items-center rounded-lg border border-slate-300 bg-white focus-within:border-brand focus-within:ring-1 focus-within:ring-brand">
        <span className="pl-3 text-slate-400">R$</span>
        <input
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent px-2 py-2.5 text-slate-900 outline-none"
        />
      </div>
      {hint && <span className="mt-1 block text-xs text-slate-400">{hint}</span>}
    </label>
  );
}

/** Campo numérico simples (inteiro). */
export function CampoNumero({
  label,
  value,
  onChange,
  hint,
  min = 0,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
  min?: number;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        type="number"
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
      />
      {hint && <span className="mt-1 block text-xs text-slate-400">{hint}</span>}
    </label>
  );
}

/** Seletor (radio em formato de pílulas). */
export function CampoOpcoes<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="mt-1.5 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              value === o.value
                ? "border-brand bg-brand text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-brand hover:text-brand"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand"
      />
      <span className="text-sm text-slate-700">{label}</span>
    </label>
  );
}

/** Linha de resultado (rótulo + valor). */
export function Linha({
  label,
  valor,
  negativo = false,
  forte = false,
}: {
  label: string;
  valor: string;
  negativo?: boolean;
  forte?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between py-2 ${
        forte ? "text-base font-semibold" : "text-sm"
      }`}
    >
      <span className={forte ? "text-brand-deep" : "text-slate-600"}>
        {label}
      </span>
      <span
        className={
          negativo
            ? "text-red-600"
            : forte
              ? "text-brand-deep"
              : "text-slate-900"
        }
      >
        {negativo ? "− " : ""}
        {valor}
      </span>
    </div>
  );
}

/** Caixa de destaque do resultado principal. */
export function Destaque({
  label,
  valor,
  sub,
}: {
  label: string;
  valor: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl bg-brand/10 p-5 text-center">
      <p className="text-sm font-medium text-brand-dark">{label}</p>
      <p className="mt-1 text-3xl font-bold text-brand-deep">{valor}</p>
      {sub && <p className="mt-1 text-sm text-slate-500">{sub}</p>}
    </div>
  );
}
