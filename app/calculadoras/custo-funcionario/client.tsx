"use client";

import { useMemo, useState } from "react";
import {
  calcularCustoFuncionario,
  formatBRL,
  parseNumero,
  type Regime,
} from "../lib";
import {
  CalcShell,
  CampoMoeda,
  CampoNumero,
  CampoOpcoes,
  Destaque,
  Linha,
} from "../ui";

export default function Calculadora() {
  const [salario, setSalario] = useState("");
  const [regime, setRegime] = useState<Regime>("simples");
  const [rat, setRat] = useState("2");

  const r = useMemo(() => {
    const s = parseNumero(salario);
    if (s <= 0) return null;
    return calcularCustoFuncionario(s, regime, parseNumero(rat) || 0);
  }, [salario, regime, rat]);

  return (
    <CalcShell
      titulo="Calculadora de Custo de Funcionário"
      descricao="Veja quanto um empregado CLT custa de fato para a empresa, somando encargos e provisões de 13º, férias e FGTS (2026)."
      signature={r ? JSON.stringify(r) : null}
    >
      <div className="space-y-5">
        <CampoOpcoes
          label="Regime tributário da empresa"
          value={regime}
          onChange={setRegime}
          options={[
            { value: "simples", label: "Simples Nacional" },
            { value: "presumido_real", label: "Lucro Presumido / Real" },
          ]}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <CampoMoeda label="Salário bruto" value={salario} onChange={setSalario} />
          {regime === "presumido_real" && (
            <CampoNumero
              label="RAT (%)"
              value={rat}
              onChange={setRat}
              hint="Risco de acidente: 1% a 3% conforme a atividade."
            />
          )}
        </div>
        <p className="text-xs text-slate-400">
          No Simples Nacional não há INSS patronal nem contribuição a terceiros
          sobre a folha — o cálculo considera apenas FGTS e provisões.
        </p>
      </div>

      {r && (
        <div className="mt-8 border-t border-slate-200 pt-6">
          <Destaque
            label="Custo mensal por funcionário"
            valor={formatBRL(r.custoMensal)}
            sub={`Encargos: +${r.percentualEncargos.toLocaleString("pt-BR")}% sobre o salário · Custo anual ${formatBRL(r.custoAnual)}`}
          />
          <div className="mt-4 divide-y divide-slate-100">
            <Linha label="Salário bruto" valor={formatBRL(r.salario)} />
            <Linha label="FGTS (8%)" valor={formatBRL(r.fgts)} />
            <Linha label="Provisão de 13º salário" valor={formatBRL(r.decimoTerceiro)} />
            <Linha label="Provisão de férias + 1/3" valor={formatBRL(r.ferias)} />
            <Linha label="FGTS sobre provisões" valor={formatBRL(r.fgtsProvisoes)} />
            <Linha label="Provisão multa FGTS (40%)" valor={formatBRL(r.multaProvisao)} />
            {r.inssPatronal > 0 && (
              <Linha label="INSS patronal (20%)" valor={formatBRL(r.inssPatronal)} />
            )}
            {r.terceiros > 0 && (
              <Linha label="Terceiros / Sistema S (5,8%)" valor={formatBRL(r.terceiros)} />
            )}
            {r.rat > 0 && <Linha label="RAT" valor={formatBRL(r.rat)} />}
            <Linha label="Custo mensal total" valor={formatBRL(r.custoMensal)} forte />
          </div>
        </div>
      )}
    </CalcShell>
  );
}
