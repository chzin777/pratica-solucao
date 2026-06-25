"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  /** Iniciais opcionais; derivadas do nome se omitidas. */
  initials?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  title?: string;
  description?: string;
  maxDisplayed?: number;
}

function iniciais(nome: string) {
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function Testimonials({
  testimonials,
  className,
  title = "O que dizem sobre nossos serviços",
  description = "Empresas que confiam na Prática Soluções para o departamento pessoal, SST e mais.",
  maxDisplayed = 6,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={className}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      </div>

      <div className="relative mt-14">
        <div
          className={cn(
            "flex flex-wrap items-stretch justify-center gap-6",
            !showAll &&
              testimonials.length > maxDisplayed &&
              "max-h-[760px] overflow-hidden",
          )}
        >
          {testimonials
            .slice(0, showAll ? undefined : maxDisplayed)
            .map((t, index) => (
              <Reveal
                key={index}
                delay={(index % 3) * 0.1}
                className="w-full sm:w-80"
              >
                <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <figcaption className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 font-semibold text-brand">
                      {t.initials ?? iniciais(t.name)}
                    </span>
                    <span className="flex flex-col">
                      <span className="font-semibold text-slate-900">
                        {t.name}
                      </span>
                      <span className="text-sm text-slate-500">{t.role}</span>
                    </span>
                  </figcaption>
                  <blockquote className="mt-5 text-slate-700">
                    “{t.text}”
                  </blockquote>
                </figure>
              </Reveal>
            ))}
        </div>

        {testimonials.length > maxDisplayed && !showAll && (
          <>
            <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-slate-50 to-transparent" />
            <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="inline-flex h-11 items-center justify-center rounded-full border border-brand bg-white px-6 text-sm font-semibold tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Ver mais
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
