"use client";

import { useMemo, useState } from "react";
import { calcularSalarioLiquido, formatBRL, parseNumero } from "../lib";
import {
  CalcShell,
  CampoMoeda,
  CampoNumero,
  Destaque,
  Linha,
} from "../ui";

export default function Calculadora() {
  const [bruto, setBruto] = useState("");
  const [dependentes, setDependentes] = useState("0");
  const [outros, setOutros] = useState("");
  const [pensao, setPensao] = useState("");

  const r = useMemo(() => {
    const b = parseNumero(bruto);
    if (b <= 0) return null;
    return calcularSalarioLiquido(
      b,
      parseInt(dependentes || "0", 10),
      parseNumero(outros),
      parseNumero(pensao),
    );
  }, [bruto, dependentes, outros, pensao]);

  return (
    <CalcShell
      titulo="Calculadora de Salário Líquido"
      descricao="Informe seu salário bruto e descubra quanto cai na conta após INSS e Imposto de Renda (tabelas de 2026)."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CampoMoeda label="Salário bruto" value={bruto} onChange={setBruto} />
        <CampoNumero
          label="Número de dependentes"
          value={dependentes}
          onChange={setDependentes}
          hint="Dedução de R$ 189,59 por dependente no IR."
        />
        <CampoMoeda
          label="Pensão alimentícia (opcional)"
          value={pensao}
          onChange={setPensao}
          hint="Valor descontado em folha por decisão judicial."
        />
        <CampoMoeda
          label="Outros descontos (opcional)"
          value={outros}
          onChange={setOutros}
          hint="Vale-transporte, plano de saúde, adiantamentos etc."
        />
      </div>

      {r && (
        <div className="mt-8 border-t border-slate-200 pt-6">
          <Destaque label="Salário líquido estimado" valor={formatBRL(r.liquido)} />
          <div className="mt-4 divide-y divide-slate-100">
            <Linha label="Salário bruto" valor={formatBRL(r.bruto)} />
            <Linha label="INSS" valor={formatBRL(r.inss)} negativo />
            <Linha
              label="Imposto de Renda (IRRF)"
              valor={formatBRL(r.irrf)}
              negativo
            />
            {r.outrosDescontos > 0 && (
              <Linha
                label="Outros descontos"
                valor={formatBRL(r.outrosDescontos)}
                negativo
              />
            )}
            <Linha
              label="Salário líquido"
              valor={formatBRL(r.liquido)}
              forte
            />
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Base de cálculo do IR: {formatBRL(r.baseIRRF)}.
          </p>
        </div>
      )}
    </CalcShell>
  );
}
