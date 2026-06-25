"use client";

import { useMemo, useState } from "react";
import {
  calcularRescisao,
  formatBRL,
  parseNumero,
  type TipoRescisao,
} from "../lib";
import {
  CalcShell,
  CampoMoeda,
  CampoNumero,
  CampoOpcoes,
  Checkbox,
  Destaque,
  Linha,
} from "../ui";

const TIPOS: { value: TipoRescisao; label: string }[] = [
  { value: "sem_justa_causa", label: "Demissão sem justa causa" },
  { value: "pedido_demissao", label: "Pedido de demissão" },
  { value: "acordo", label: "Acordo (484-A)" },
  { value: "justa_causa", label: "Justa causa" },
];

export default function Calculadora() {
  const [salario, setSalario] = useState("");
  const [tipo, setTipo] = useState<TipoRescisao>("sem_justa_causa");
  const [anos, setAnos] = useState("0");
  const [diasMes, setDiasMes] = useState("30");
  const [mesesAno, setMesesAno] = useState("");
  const [saldoFGTS, setSaldoFGTS] = useState("");
  const [dependentes, setDependentes] = useState("0");
  const [feriasVencidas, setFeriasVencidas] = useState(false);
  const [avisoTrabalhado, setAvisoTrabalhado] = useState(false);

  const r = useMemo(() => {
    const s = parseNumero(salario);
    if (s <= 0) return null;
    return calcularRescisao({
      salario: s,
      tipo,
      anosTrabalho: parseInt(anos || "0", 10),
      diasTrabalhadosMes: parseInt(diasMes || "0", 10),
      mesesNoAno: parseInt(mesesAno || "0", 10),
      feriasVencidas,
      avisoTrabalhado,
      saldoFGTS: parseNumero(saldoFGTS),
      dependentes: parseInt(dependentes || "0", 10),
    });
  }, [
    salario,
    tipo,
    anos,
    diasMes,
    mesesAno,
    feriasVencidas,
    avisoTrabalhado,
    saldoFGTS,
    dependentes,
  ]);

  const mostraAviso = tipo === "sem_justa_causa" || tipo === "acordo" || tipo === "pedido_demissao";
  const mostraFGTS = tipo === "sem_justa_causa" || tipo === "acordo";

  return (
    <CalcShell
      titulo="Calculadora de Rescisão"
      descricao="Estime as verbas rescisórias conforme o tipo de desligamento, com descontos de INSS e IRRF e multa do FGTS (2026)."
      signature={r ? JSON.stringify(r) : null}
    >
      <div className="space-y-5">
        <CampoOpcoes
          label="Tipo de desligamento"
          value={tipo}
          onChange={setTipo}
          options={TIPOS}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <CampoMoeda label="Salário bruto mensal" value={salario} onChange={setSalario} />
          <CampoNumero
            label="Anos completos na empresa"
            value={anos}
            onChange={setAnos}
            hint="+3 dias de aviso prévio por ano (até 90 dias)."
          />
          <CampoNumero
            label="Dias trabalhados no mês da saída"
            value={diasMes}
            onChange={setDiasMes}
          />
          <CampoNumero
            label="Meses trabalhados no ano vigente"
            value={mesesAno}
            onChange={setMesesAno}
            hint="Avos de 13º e férias proporcionais."
          />
          {mostraFGTS && (
            <CampoMoeda
              label="Saldo do FGTS depositado"
              value={saldoFGTS}
              onChange={setSaldoFGTS}
              hint="Base para a multa rescisória."
            />
          )}
          <CampoNumero
            label="Dependentes (para o IR)"
            value={dependentes}
            onChange={setDependentes}
          />
        </div>

        <div className="flex flex-wrap gap-6">
          <Checkbox
            label="Tenho férias vencidas a receber"
            checked={feriasVencidas}
            onChange={setFeriasVencidas}
          />
          {mostraAviso && (
            <Checkbox
              label="Aviso prévio será trabalhado"
              checked={avisoTrabalhado}
              onChange={setAvisoTrabalhado}
            />
          )}
        </div>
      </div>

      {r && (
        <div className="mt-8 border-t border-slate-200 pt-6">
          <Destaque label="Total líquido da rescisão" valor={formatBRL(r.totalLiquido)} />
          <div className="mt-4 divide-y divide-slate-100">
            {r.verbas.map((v) => (
              <Linha
                key={v.label}
                label={v.label}
                valor={formatBRL(v.valor)}
                negativo={v.desconto}
              />
            ))}
            <Linha label="Total de proventos" valor={formatBRL(r.totalBruto)} />
            <Linha
              label="Total de descontos"
              valor={formatBRL(r.totalDescontos)}
              negativo
            />
            <Linha label="Total líquido" valor={formatBRL(r.totalLiquido)} forte />
          </div>
          {r.sacaFGTS && (
            <p className="mt-3 text-xs text-slate-500">
              Você também poderá sacar o saldo do FGTS
              {tipo === "acordo" ? " (até 80%)" : ""}. A multa do FGTS é depositada
              na conta vinculada, além das verbas acima.
            </p>
          )}
        </div>
      )}
    </CalcShell>
  );
}
