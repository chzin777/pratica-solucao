"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const TELEFONE = "5562982103699";

type Step = {
  pergunta: string;
  legenda: string;
  opcoes: string[];
};

const STEPS: Step[] = [
  {
    pergunta: "Quantos funcionários a sua empresa tem?",
    legenda: "Pra entender o tamanho da sua operação.",
    opcoes: ["Sou MEI / sozinho", "1 a 5", "6 a 20", "Mais de 20"],
  },
  {
    pergunta: "O que mais te aperta hoje?",
    legenda: "Onde podemos te ajudar primeiro.",
    opcoes: [
      "Folha e departamento pessoal tomam meu tempo",
      "Medo de multa — SST e eSocial",
      "Quero abrir ou regularizar a empresa",
      "Preciso de certificado digital",
    ],
  },
  {
    pergunta: "Quando você quer resolver isso?",
    legenda: "Pra priorizar o seu atendimento.",
    opcoes: ["O quanto antes", "Ainda este mês", "Só pesquisando por enquanto"],
  },
];

function montarLink(respostas: string[]) {
  const msg =
    "Olá! Fiz o diagnóstico no site e quero falar com um especialista.\n\n" +
    `• Empresa: ${respostas[0]}\n` +
    `• Principal necessidade: ${respostas[1]}\n` +
    `• Urgência: ${respostas[2]}`;
  return `https://wa.me/${TELEFONE}?text=${encodeURIComponent(msg)}`;
}

export default function Quiz() {
  const [passo, setPasso] = useState(0);
  const [respostas, setRespostas] = useState<string[]>([]);

  const total = STEPS.length;
  const concluido = passo >= total;
  const progresso = Math.round((Math.min(passo, total) / total) * 100);

  function escolher(opcao: string) {
    const novas = [...respostas];
    novas[passo] = opcao;
    setRespostas(novas);
    setPasso(passo + 1);
  }

  function voltar() {
    if (passo > 0) setPasso(passo - 1);
  }

  function reiniciar() {
    setPasso(0);
    setRespostas([]);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-brand-deep p-6 text-white shadow-2xl sm:p-10">
        {/* Progresso */}
        <div className="mb-6 flex items-center gap-4">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full rounded-full bg-[#7fb2d8]"
              animate={{ width: `${concluido ? 100 : progresso}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            />
          </div>
          <span className="text-xs font-medium text-white/60">
            {concluido ? "Pronto!" : `${passo + 1} / ${total}`}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {!concluido ? (
            <motion.div
              key={passo}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                {STEPS[passo].pergunta}
              </h3>
              <p className="mt-1 text-sm text-white/50">
                {STEPS[passo].legenda}
              </p>

              <div className="mt-6 grid gap-3">
                {STEPS[passo].opcoes.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => escolher(o)}
                    className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-left text-sm font-medium transition-all hover:border-[#7fb2d8]/60 hover:bg-white/10"
                  >
                    {o}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 shrink-0 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-[#7fb2d8]"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                ))}
              </div>

              {passo > 0 && (
                <button
                  type="button"
                  onClick={voltar}
                  className="mt-6 text-sm text-white/50 transition-colors hover:text-white"
                >
                  ← Voltar
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#7fb2d8]/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 text-[#7fb2d8]"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight sm:text-2xl">
                Tudo pronto! Um especialista já pode te atender.
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
                Suas respostas vão junto na conversa — sem precisar repetir nada.
                É só clicar e falar com a gente.
              </p>

              <a
                href={montarLink(respostas)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.02] sm:w-auto sm:px-10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l-.999 3.648 3.973-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                FALAR COM ESPECIALISTA
              </a>

              <button
                type="button"
                onClick={reiniciar}
                className="mt-4 block w-full text-sm text-white/50 transition-colors hover:text-white"
              >
                Refazer diagnóstico
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
