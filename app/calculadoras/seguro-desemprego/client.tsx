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

export default function Calculadora() {
  const [media, setMedia] = useState("");
  const [meses, setMeses] = useState("");
  const [solicitacao, setSolicitacao] = useState<"1" | "2" | "3">("1");

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
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CampoMoeda
          label="Média dos 3 últimos salários"
          value={media}
          onChange={setMedia}
          hint="Some os 3 últimos salários brutos e divida por 3."
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
                label="Total a receber"
                valor={formatBRL(r.total)}
                sub={`${r.parcelas} parcelas de ${formatBRL(r.valorParcela)}`}
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
