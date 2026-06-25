import Link from "next/link";
import Image from "next/image";

const WHATSAPP =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

const NAV = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#solucoes", label: "Soluções" },
  { href: "/calculadoras", label: "Calculadoras" },
  { href: "/#estagio", label: "Estágio" },
  { href: "/#contato", label: "Contato" },
];

const SERVICOS = [
  "Consultoria em SST",
  "Folha de Pagamento",
  "Certificado Digital",
  "Abertura de Empresa",
  "Cadastro de Obra (CNO)",
];

function IconWhats() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l-.999 3.648 3.973-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-sky-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Link href="/#home" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Prática Soluções"
                width={240}
                height={120}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-sky-200/70">
              Departamento pessoal, SST e soluções empresariais para manter a sua
              empresa em dia, sem burocracia.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              <IconWhats />
              Falar no WhatsApp
            </a>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sky-200/70 transition-colors hover:text-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Serviços
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-sky-200/70">
              {SERVICOS.map((s) => (
                <li key={s}>
                  <a
                    href={`https://wa.me/5562982103699?text=${encodeURIComponent(
                      `Olá! Gostaria de saber mais sobre: ${s}.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-sky-200/70">
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 text-sky-300">
                    <IconWhats />
                  </span>
                  (62) 98210-3699
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-sky-300">
                  <IconMail />
                </span>
                contato@praticasolucoes.com.br
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-sky-300">
                  <IconPin />
                </span>
                Goiânia · GO — Atendimento online
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-xs text-sky-200/60 sm:flex-row sm:justify-between sm:text-left">
          <p>© 2026 Prática Soluções Empresariais. Todos os direitos reservados.</p>
          <p>Segunda a sexta · 08h às 18h</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
