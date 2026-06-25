import Link from "next/link";
import Header from "./Header";
import SplitText from "./components/SplitText";
import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";

const WHATSAPP =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

const SERVICES = [
  {
    title: "Consultoria em SST",
    desc: "Orientações especializadas para garantir um ambiente laboral seguro, com avaliação de riscos e conformidade legal.",
    items: [
      "Elaboração de laudos e envios mensais",
      "PGR, PCMSO, LTCAT, PMOC, PGES e PGRSS",
      "eSocial: S-2210, S-2220 e S-2240",
    ],
  },
  {
    title: "Terceirização de Folha de Pagamento",
    desc: "Terceirize o departamento pessoal da sua empresa ou contabilidade e dê adeus à burocracia.",
    items: [
      "Responsabilidade nos processos e cálculos do DP",
      "Gestão completa das rotinas trabalhistas",
      "Relatórios atualizados e consultoria especializada",
    ],
  },
  {
    title: "Certificado Digital",
    desc: "O certificado digital é a identidade das pessoas e empresas no meio eletrônico.",
    items: [
      "Emissão online e presencial",
      "e-CPF A1 e e-CNPJ A1",
      "Atendimento ágil e seguro",
    ],
  },
];

const EXTRAS = [
  {
    title: "Abertura de Empresa",
    desc: "Indicação do tipo societário para otimização fiscal e execução completa do processo de abertura.",
  },
  {
    title: "Cadastro de Obra (CNO)",
    desc: "Abertura de CNO, folha de pagamento específica e aferição junto aos órgãos competentes.",
  },
  {
    title: "Endereço Fiscal",
    desc: "Escritório virtual com recebimento de correspondências, gestão online e redução de custos.",
  },
];

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="mt-0.5 h-5 w-5 shrink-0 text-brand"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-dark to-brand text-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <div className="max-w-2xl">
            <Reveal direction="down">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-200">
                Soluções empresariais
              </p>
            </Reveal>
            <SplitText
              text="Conheça nossas soluções para seu negócio"
              tag="h1"
              textAlign="left"
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
              splitType="words"
              delay={40}
              duration={0.9}
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
            />
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-sky-50/90">
                Consultoria especializada e muito mais soluções para seu
                negócio.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#servicos"
                  className="flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold tracking-wide text-brand-deep transition-colors hover:bg-sky-50"
                >
                  NOSSOS SERVIÇOS
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center rounded-full border border-white/40 px-7 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  FALAR NO WHATSAPP
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* MÉTRICAS */}
        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 text-center sm:grid-cols-3">
            {[
              { to: 6, suffix: "+", label: "Soluções empresariais" },
              { to: 3, suffix: "", label: "Áreas de atuação" },
              { to: 100, suffix: "%", label: "Atendimento online" },
            ].map((m, i) => (
              <Reveal key={m.label} delay={i * 0.1}>
                <div>
                  <p className="text-4xl font-bold text-white sm:text-5xl">
                    <CountUp to={m.to} duration={1.5} />
                    {m.suffix}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-widest text-sky-200">
                    {m.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SplitText
              text="Nossos Serviços"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg text-slate-600">
                Soluções completas para a gestão e a conformidade da sua empresa.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="text-xl font-semibold text-brand-deep">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-slate-600">{s.desc}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <Check />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {EXTRAS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.12} direction="up">
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
                  <h4 className="font-semibold text-slate-900">{e.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULADORAS */}
      <section id="calculadoras" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Ferramentas gratuitas
              </p>
            </Reveal>
            <SplitText
              text="Calculadoras Trabalhistas"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={25}
              duration={0.7}
            />
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg text-slate-600">
                Faça simulações grátis e atualizadas para 2026, sem cadastro.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/calculadoras/salario-liquido", t: "Salário Líquido" },
              { href: "/calculadoras/seguro-desemprego", t: "Seguro-Desemprego" },
              { href: "/calculadoras/rescisao", t: "Rescisão" },
              { href: "/calculadoras/custo-funcionario", t: "Custo de Funcionário" },
            ].map((c, i) => (
              <Reveal key={c.href} delay={i * 0.1}>
                <Link
                  href={c.href}
                  className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="font-semibold text-brand-deep group-hover:text-brand">
                    {c.t}
                  </span>
                  <span className="mt-2 block text-sm text-brand">
                    Calcular →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <Link
                href="/calculadoras"
                className="inline-flex h-12 items-center justify-center rounded-full border border-brand px-7 text-sm font-semibold tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
              >
                VER TODAS AS CALCULADORAS
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESTÁGIO */}
      <section id="estagio" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-brand-deep px-8 py-16 text-white sm:px-16">
              <div className="max-w-2xl">
                <SplitText
                  text="Programa de Estágio"
                  tag="h2"
                  textAlign="left"
                  className="text-3xl font-bold tracking-tight"
                  splitType="chars"
                  delay={25}
                  duration={0.7}
                />
                <Reveal delay={0.15}>
                  <p className="mt-4 text-lg text-sky-50/90">
                    Quer dar o primeiro passo na carreira? Faça parte do nosso
                    time. Buscamos estudantes dedicados para crescer junto com a
                    Prática Soluções nas áreas de departamento pessoal, SST e
                    administrativo.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold tracking-wide text-brand-deep transition-colors hover:bg-sky-50"
                  >
                    ENVIAR CURRÍCULO
                  </a>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SplitText
              text="Fale Conosco"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg text-slate-600">
                Entre em contato e descubra como podemos ajudar o seu negócio.
              </p>
            </Reveal>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-brand px-8 text-base font-semibold tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l-.999 3.648 3.973-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              (62) 98210-3699
            </a>
            <p className="mt-6 text-sm text-slate-500">
              Atendimento via WhatsApp de segunda a sexta.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-deep py-10 text-center text-sm text-sky-100">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-semibold tracking-wide text-white">
            PRÁTICA · SOLUÇÕES EMPRESARIAIS
          </p>
          <p className="mt-2 text-sky-200/80">© 2025 — Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
