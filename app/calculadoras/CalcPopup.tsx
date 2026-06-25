"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { WHATSAPP } from "./ui";

const COUNT_KEY = "calc_count_v2";
const SHOWN_KEY = "calc_popup_shown_v2"; // thresholds já exibidos, ex: "1,7"
const THRESHOLDS = [1, 7];

type Ctx = { registrarCalculo: () => void };

const CalcPopupContext = createContext<Ctx | null>(null);

function lerShown(): Set<number> {
  if (typeof window === "undefined") return new Set();
  return new Set(
    (localStorage.getItem(SHOWN_KEY) ?? "")
      .split(",")
      .filter(Boolean)
      .map(Number),
  );
}

export function CalcPopupProvider({ children }: { children: React.ReactNode }) {
  const [aberto, setAberto] = useState(false);

  const registrarCalculo = useCallback(() => {
    const atual = Number(localStorage.getItem(COUNT_KEY) ?? "0") + 1;
    localStorage.setItem(COUNT_KEY, String(atual));

    // Mostra o menor limiar ainda não exibido que já foi alcançado.
    const shown = lerShown();
    const pendente = THRESHOLDS.find((t) => atual >= t && !shown.has(t));
    if (pendente != null) {
      shown.add(pendente);
      localStorage.setItem(SHOWN_KEY, [...shown].join(","));
      setAberto(true);
    }
  }, []);

  // Fecha com ESC.
  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberto]);

  return (
    <CalcPopupContext.Provider value={{ registrarCalculo }}>
      {children}
      <AnimatePresence>
        {aberto && <Popup onClose={() => setAberto(false)} />}
      </AnimatePresence>
    </CalcPopupContext.Provider>
  );
}

function Popup({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/60 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-brand-deep p-8 text-center text-white shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      >
        <button
          type="button"
          aria-label="Fechar"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold tracking-tight">
          Quer parar de calcular no chute?
        </h2>
        <p className="mx-auto mt-3 text-sky-50/90">
          A Prática Soluções assume folha, rescisões e rotinas trabalhistas da
          sua empresa. Fale agora com um especialista e receba um diagnóstico
          gratuito.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-7 inline-flex h-12 w-full animate-pulse-ring items-center justify-center rounded-full bg-white px-7 text-sm font-semibold tracking-wide text-brand-deep transition-colors hover:animate-none hover:bg-sky-50"
        >
          FALAR COM ESPECIALISTA
        </a>
        <button
          type="button"
          onClick={onClose}
          className="mt-3 text-sm text-sky-200/70 transition-colors hover:text-white"
        >
          Agora não
        </button>
      </motion.div>
    </motion.div>
  );
}

/**
 * Conta um "cálculo" quando o resultado assenta (debounce). Recebe uma
 * assinatura serializável do resultado; null = sem resultado válido.
 */
export function useCalcTracker(signature: string | null) {
  const ctx = useContext(CalcPopupContext);
  const last = useRef<string | null>(null);

  useEffect(() => {
    if (!ctx || !signature || signature === last.current) return;
    const t = setTimeout(() => {
      last.current = signature;
      ctx.registrarCalculo();
    }, 1200);
    return () => clearTimeout(t);
  }, [ctx, signature]);
}
