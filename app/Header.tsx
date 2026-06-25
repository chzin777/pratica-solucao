"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const NAV = [
  { href: "/#home", label: "HOME" },
  { href: "/#servicos", label: "SERVIÇOS" },
  { href: "/#solucoes", label: "SOLUÇÕES" },
  { href: "/calculadoras", label: "CALCULADORAS" },
  { href: "/#estagio", label: "ESTÁGIO" },
  { href: "/#contato", label: "CONTATO" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-16 items-center justify-between rounded-2xl border border-white/15 bg-[#04355a]/40 px-4 text-white backdrop-blur-md sm:px-5">
          <Link href="/#home" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Prática Soluções"
              width={240}
              height={120}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium tracking-wide text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#7fb2d8] to-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="absolute -inset-x-2 -inset-y-1 -z-10 scale-90 rounded-lg bg-white/0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 md:hidden"
          >
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#04355a]/95 backdrop-blur md:hidden"
            >
              <div className="flex flex-col px-5 py-2">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/10 py-3 text-sm font-medium tracking-wide text-white/80 last:border-0 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
