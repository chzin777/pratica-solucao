import { cn } from "@/lib/utils";

/**
 * Fundo abstrato (branco + #04355a): faixa diagonal de destaque, círculos/anéis
 * e pontos. Para preencher o espaço de uma ou mais sections.
 * Envolva em um container `relative`.
 */
export function AbstractBG({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-white",
        className,
      )}
    >
      {/* Faixa diagonal de destaque */}
      <div className="absolute -left-1/4 top-1/3 h-44 w-[150%] -rotate-6 bg-gradient-to-r from-[#04355a]/[0.06] via-[#04355a]/[0.10] to-[#7fb2d8]/[0.08]" />
      <div className="absolute -left-1/4 top-1/3 mt-44 h-2 w-[150%] -rotate-6 bg-[#04355a]/15" />

      {/* Anéis (círculos vazados) */}
      <div className="absolute -left-20 -top-16 h-72 w-72 rounded-full border-2 border-[#04355a]/10" />
      <div className="absolute -left-8 -top-4 h-44 w-44 rounded-full border border-[#04355a]/10" />
      <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full border-2 border-[#7fb2d8]/25" />
      <div className="absolute right-10 top-20 h-24 w-24 rounded-full border border-[#04355a]/10" />

      {/* Círculos preenchidos suaves */}
      <div className="absolute right-1/4 top-10 h-32 w-32 rounded-full bg-[#7fb2d8]/15 blur-2xl" />
      <div className="absolute left-1/4 bottom-0 h-40 w-40 rounded-full bg-[#04355a]/[0.07] blur-2xl" />

      {/* Pontos */}
      <div className="absolute right-16 top-1/2 h-28 w-28 opacity-50 [background-image:radial-gradient(rgba(4,53,90,0.25)_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
      <div className="absolute left-12 top-12 h-24 w-32 opacity-40 [background-image:radial-gradient(rgba(4,53,90,0.25)_1.5px,transparent_1.5px)] [background-size:14px_14px]" />

      {/* Fade nas bordas para transição suave */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white" />
    </div>
  );
}

export default AbstractBG;
