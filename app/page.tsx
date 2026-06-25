import Link from "next/link";
import Image from "next/image";
import Header from "./Header";
import SplitText from "./components/SplitText";
import Reveal from "./components/Reveal";
import CountUp from "./components/CountUp";
import HeroGeometric from "./components/HeroGeometric";
import { Testimonials, type Testimonial } from "./components/Testimonials";
import SiteFooter from "./components/SiteFooter";
import AbstractBG from "./components/AbstractBG";
import Quiz from "./components/Quiz";

const WHATSAPP =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

/** Link de WhatsApp com mensagem de orçamento para um serviço específico. */
function orcamentoUrl(servico: string) {
  const msg = `Olá! Gostaria de solicitar um orçamento para: ${servico}.`;
  return `https://wa.me/5562982103699?text=${encodeURIComponent(msg)}`;
}

const SERVICES = [
  {
    title: "Consultoria em SST",
    desc: "Mantenha sua empresa em conformidade e protegida de multas. Cuidamos de toda a segurança e saúde do trabalho, do laudo ao envio no eSocial.",
    items: [
      "Laudos técnicos e envios mensais sem atraso",
      "PGR, PCMSO, LTCAT, PMOC, PGES e PGRSS",
      "eSocial SST: S-2210, S-2220 e S-2240",
    ],
  },
  {
    title: "Terceirização de Folha de Pagamento",
    desc: "Tire o peso do departamento pessoal das suas costas. Assumimos a folha da sua empresa ou contabilidade com precisão e prazos garantidos.",
    items: [
      "Cálculos de folha, férias e rescisões sem erro",
      "Gestão completa das rotinas e obrigações trabalhistas",
      "Relatórios claros e consultoria sempre que precisar",
    ],
  },
  {
    title: "Certificado Digital",
    desc: "Assine documentos e acesse serviços com total segurança. Emitimos seu certificado digital de forma rápida, online ou presencial.",
    items: [
      "Emissão no mesmo dia, online ou presencial",
      "e-CPF e e-CNPJ (modelos A1 e A3)",
      "Suporte humano em cada etapa do processo",
    ],
  },
];

const DEPOIMENTOS: Testimonial[] = [
  {
    name: "Mariana Alves",
    role: "Sócia · Mercado São José",
    text: "Terceirizamos a folha e o eSocial com a Prática e nunca mais tivemos dor de cabeça com prazos. Atendimento rápido e tudo certo todo mês.",
  },
  {
    name: "Rodrigo Teixeira",
    role: "Diretor · Construtora Horizonte",
    text: "O cadastro de obra e os laudos de SST saíram sem nenhum problema com a fiscalização. Equipe que realmente entende do assunto.",
  },
  {
    name: "Camila Nogueira",
    role: "Gerente de RH · Rede Bem Estar",
    text: "Migramos o departamento pessoal e a transição foi tranquila. Relatórios claros e consultoria sempre que precisamos.",
  },
  {
    name: "Felipe Andrade",
    role: "Proprietário · Oficina Andrade",
    text: "Abri minha empresa com eles do zero. Explicaram o melhor tipo societário e cuidaram de toda a burocracia.",
  },
  {
    name: "Patrícia Lima",
    role: "Contadora · Lima Contabilidade",
    text: "Indico a Prática para vários clientes. A terceirização do DP é precisa e me poupa muito tempo.",
  },
  {
    name: "Bruno Carvalho",
    role: "CEO · TechFlow Sistemas",
    text: "O certificado digital saiu no mesmo dia e o suporte foi excelente. Profissionais ágeis e atenciosos.",
  },
  {
    name: "Juliana Prado",
    role: "Administradora · Clínica Vida",
    text: "PGR, PCMSO e os envios mensais sempre em dia. Tirou um peso enorme da nossa rotina.",
  },
  {
    name: "Anderson Souza",
    role: "Gestor · Distribuidora Souza",
    text: "Suporte humano de verdade no WhatsApp. Resolvem rápido e sem enrolação.",
  },
];

const EXTRAS: {
  title: string;
  desc: string;
  href?: string;
  cta?: string;
}[] = [
  {
    title: "Emissão de NFe",
    desc: "Emita suas notas fiscais eletrônicas de forma simples e rápida com a nossa plataforma online.",
    href: "https://easy-nfe-twam.vercel.app",
    cta: "Acessar plataforma",
  },
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

const DIFERENCIAIS: { titulo: string; desc: string; paths: string[] }[] = [
  {
    titulo: "Suporte humano de verdade",
    desc: "Você fala com gente que entende, no WhatsApp, sem robô e sem enrolação.",
    paths: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],
  },
  {
    titulo: "Prazos sempre cumpridos",
    desc: "Folha, eSocial e laudos entregues no prazo. Nada de correria de última hora.",
    paths: ["M12 6v6l4 2", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"],
  },
  {
    titulo: "Especialistas em DP e SST",
    desc: "Equipe que domina folha, rotinas trabalhistas e segurança do trabalho.",
    paths: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "m9 12 2 2 4-4"],
  },
  {
    titulo: "100% online e sem burocracia",
    desc: "Atendemos a sua empresa de onde você estiver, com tudo digital.",
    paths: [
      "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
      "M2 12h20",
      "M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z",
    ],
  },
];

const COMPARATIVO = {
  sem: [
    "Folha e eSocial atrasam e geram multa",
    "Dúvida trabalhista sem ninguém pra responder",
    "Risco de processo por erro no DP",
    "Tempo perdido com burocracia em vez do negócio",
    "Laudos de SST vencidos sem você perceber",
  ],
  com: [
    "Folha, férias e eSocial sempre em dia",
    "Especialista no WhatsApp quando você precisa",
    "Cálculos conferidos — sem passivo trabalhista",
    "Você foca em vender, a gente cuida do resto",
    "SST monitorada e dentro da lei o ano todo",
  ],
};

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
      <HeroGeometric />

      {/* MÉTRICAS */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 px-5 py-12 text-center sm:gap-8 sm:px-6 sm:py-16">
          {[
            { to: 6, suffix: "+", label: "Soluções empresariais" },
            { to: 3, suffix: "", label: "Áreas de atuação" },
            { to: 100, suffix: "%", label: "Atendimento online" },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1}>
              <div>
                <p className="text-3xl font-bold text-white sm:text-5xl">
                  <CountUp to={m.to} duration={1.5} />
                  {m.suffix}
                </p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-sky-200 sm:text-sm sm:tracking-widest">
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <AbstractBG />
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Por que a Prática
              </p>
            </Reveal>
            <SplitText
              text="O que faz a diferença"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={25}
              duration={0.7}
            />
            <Reveal delay={0.15}>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Mais que serviço contábil: um time que cuida da sua empresa como
                se fosse a própria.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {DIFERENCIAIS.map((d, i) => (
              <Reveal key={d.titulo} delay={i * 0.1} direction="up">
                <div className="h-full rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-brand"
                      aria-hidden="true"
                    >
                      {d.paths.map((p) => (
                        <path key={p} d={p} />
                      ))}
                    </svg>
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-deep">
                    {d.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {d.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
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
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
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
                  <div className="mt-auto pt-8">
                    <a
                      href={orcamentoUrl(s.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-full items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-dark"
                    >
                      Solicitar orçamento
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="bg-brand-deep py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <SplitText
              text="A diferença no dia a dia"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              splitType="chars"
              delay={25}
              duration={0.7}
            />
            <Reveal delay={0.15}>
              <p className="mt-4 text-base text-sky-100/80 sm:text-lg">
                Veja como a rotina da sua empresa muda com a Prática cuidando de
                tudo.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2">
            {/* SEM */}
            <Reveal direction="right">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-rose-200">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-400/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </span>
                  Sem a Prática
                </h3>
                <ul className="mt-5 space-y-3">
                  {COMPARATIVO.sem.map((t) => (
                    <li key={t} className="flex gap-3 text-sm text-sky-100/70">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="mt-0.5 h-4 w-4 shrink-0 text-rose-300/70" aria-hidden="true">
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* COM */}
            <Reveal direction="left">
              <div className="h-full rounded-2xl border border-[#7fb2d8]/40 bg-[#7fb2d8]/10 p-6 shadow-lg shadow-black/20 sm:p-8">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-[#9ecbe8]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7fb2d8]/30">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  Com a Prática
                </h3>
                <ul className="mt-5 space-y-3">
                  {COMPARATIVO.com.map((t) => (
                    <li key={t} className="flex gap-3 text-sm text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-[#7fb2d8]" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <a
                href="#diagnostico"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold tracking-wide text-brand-deep transition-colors hover:bg-sky-50"
              >
                QUERO ESSA TRANQUILIDADE
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUÇÕES + DEPOIMENTOS sobre fundo abstrato */}
      <div className="relative overflow-hidden">
      <AbstractBG />

      {/* SOLUÇÕES */}
      <section id="solucoes" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Vai além da folha
              </p>
            </Reveal>
            <SplitText
              text="Outras Soluções"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg text-slate-600">
                Serviços extras para tirar do papel e manter a sua empresa em dia.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXTRAS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.12} direction="up">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="text-xl font-semibold text-brand-deep">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-slate-600">{e.desc}</p>
                  {e.href && (
                    <div className="mt-auto pt-6">
                      <a
                        href={e.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-dark"
                      >
                        {e.cta ?? "Acessar"}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="M7 17 17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-dark"
              >
                FALAR COM ESPECIALISTA
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Testimonials testimonials={DEPOIMENTOS} maxDisplayed={6} />
        </div>
      </section>
      </div>

      {/* CERTIFICADO DIGITAL */}
      <section id="certificado" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/certificado-digital.webp"
                  alt="Certificado digital e-CPF e e-CNPJ"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 to-transparent" />
              </div>
            </Reveal>

            <div>
              <Reveal direction="down">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                  Certificado Digital
                </p>
              </Reveal>
              <SplitText
                text="Sua identidade digital, sem complicação"
                tag="h2"
                textAlign="left"
                className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
                splitType="words"
                delay={30}
                duration={0.7}
              />
              <Reveal delay={0.15}>
                <p className="mt-4 text-base text-slate-600 sm:text-lg">
                  Emita seu e-CPF ou e-CNPJ com agilidade e segurança. Assine
                  documentos, acesse o eSocial e a Receita e mantenha tudo em
                  conformidade — online ou presencial.
                </p>
              </Reveal>

              <ul className="mt-6 space-y-3 text-sm text-slate-700 sm:text-base">
                {[
                  "Emissão no mesmo dia, online ou presencial",
                  "e-CPF e e-CNPJ (modelos A1 e A3)",
                  "Suporte humano em cada etapa",
                ].map((it) => (
                  <Reveal key={it}>
                    <li className="flex gap-2">
                      <Check />
                      <span>{it}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.2}>
                <a
                  href={orcamentoUrl("Certificado Digital")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-dark"
                >
                  Emitir meu certificado
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO (QUIZ) */}
      <section id="diagnostico" className="relative overflow-hidden py-20 sm:py-24">
        <AbstractBG />
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Diagnóstico grátis em 30 segundos
              </p>
            </Reveal>
            <SplitText
              text="Descubra como podemos ajudar"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={25}
              duration={0.7}
            />
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg text-slate-600">
                Responda 3 perguntas rápidas e fale com um especialista já
                sabendo da sua situação — sem repetir nada.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12">
              <Quiz />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CALCULADORAS */}
      <section id="calculadoras" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
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
      <section id="estagio" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
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
      <section id="contato" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
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
      <SiteFooter />
    </>
  );
}
