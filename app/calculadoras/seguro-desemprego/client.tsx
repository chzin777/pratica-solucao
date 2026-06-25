"use client";

import { useMemo, useState } from "react";
import { calcularSeguroDesemprego, formatBRL, parseNumero } from "../lib";
import {
  CalcShell,
  CampoMoeda,
  CampoNumero,
  CampoOpcoes,
  Destaque,
  Linha,
} from "../ui";

/** Formata número em string BR (vírgula), legível pelos campos de moeda. */
function fmt(v: number): string {
  return v > 0 ? v.toFixed(2).replace(".", ",") : "";
}

export default function Calculadora() {
  const [sal1, setSal1] = useState(""); // último mês
  const [sal2, setSal2] = useState(""); // penúltimo
  const [sal3, setSal3] = useState(""); // antepenúltimo
  const [media, setMedia] = useState("");
  const [meses, setMeses] = useState("");
  const [solicitacao, setSolicitacao] = useState<"1" | "2" | "3">("1");

  // Edita um dos salários → recalcula a média automaticamente.
  function editarSalario(qual: 1 | 2 | 3, valor: string) {
    const novo1 = qual === 1 ? valor : sal1;
    const novo2 = qual === 2 ? valor : sal2;
    const novo3 = qual === 3 ? valor : sal3;
    if (qual === 1) setSal1(valor);
    if (qual === 2) setSal2(valor);
    if (qual === 3) setSal3(valor);
    const m = (parseNumero(novo1) + parseNumero(novo2) + parseNumero(novo3)) / 3;
    setMedia(fmt(m));
  }

  // Edita a média manualmente → reflete nos 3 campos de salário.
  function editarMedia(valor: string) {
    setMedia(valor);
    const reflexo = fmt(parseNumero(valor));
    setSal1(reflexo);
    setSal2(reflexo);
    setSal3(reflexo);
  }

  const r = useMemo(() => {
    const m = parseNumero(media);
    const mt = parseInt(meses || "0", 10);
    if (m <= 0 || mt <= 0) return null;
    return calcularSeguroDesemprego(
      m,
      mt,
      parseInt(solicitacao, 10) as 1 | 2 | 3,
    );
  }, [media, meses, solicitacao]);

  return (
    <CalcShell
      titulo="Calculadora de Seguro-Desemprego"
      descricao="Estime o valor da parcela e a quantidade de parcelas do benefício com base na média dos seus 3 últimos salários (valores de 2026)."
      signature={r ? JSON.stringify(r) : null}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <CampoMoeda
          label="Salário do último mês"
          value={sal1}
          onChange={(v) => editarSalario(1, v)}
        />
        <CampoMoeda
          label="Penúltimo mês"
          value={sal2}
          onChange={(v) => editarSalario(2, v)}
        />
        <CampoMoeda
          label="Antepenúltimo mês"
          value={sal3}
          onChange={(v) => editarSalario(3, v)}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <CampoMoeda
          label="Média dos 3 últimos salários"
          value={media}
          onChange={editarMedia}
          hint="Calculada automaticamente — pode ajustar manualmente se quiser."
        />
        <CampoNumero
          label="Meses trabalhados no último emprego"
          value={meses}
          onChange={setMeses}
        />
        <div className="sm:col-span-2">
          <CampoOpcoes
            label="Qual solicitação?"
            value={solicitacao}
            onChange={setSolicitacao}
            options={[
              { value: "1", label: "1ª vez" },
              { value: "2", label: "2ª vez" },
              { value: "3", label: "3ª ou +" },
            ]}
          />
        </div>
      </div>

      {r && (
        <div className="mt-8 border-t border-slate-200 pt-6">
          {r.elegivel ? (
            <>
              <Destaque
                label="Valor de cada parcela"
                valor={formatBRL(r.valorParcela)}
                sub={`${r.parcelas} parcelas · total de ${formatBRL(r.total)}`}
              />
              <div className="mt-4 divide-y divide-slate-100">
                <Linha label="Valor de cada parcela" valor={formatBRL(r.valorParcela)} />
                <Linha label="Número de parcelas" valor={String(r.parcelas)} />
                <Linha label="Total do benefício" valor={formatBRL(r.total)} forte />
              </div>
            </>
          ) : (
            <div className="rounded-xl bg-amber-50 p-5 text-sm text-amber-800">
              <p className="font-semibold">Ainda não elegível</p>
              <p className="mt-1">{r.motivo}</p>
            </div>
          )}
        </div>
      )}
    </CalcShell>
  );
}
