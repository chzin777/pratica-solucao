import type { Metadata } from "next";
import Header from "../../Header";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import SplitText from "../../components/SplitText";

export const metadata: Metadata = {
  title: "Consultoria em SST em Goiânia | Prática Soluções Empresariais",
  description:
    "PGR com riscos psicossociais, PCMSO, LTCAT, laudos de insalubridade, PMOC e eventos de SST no eSocial (S-2210, S-2220 e S-2240). Prazos controlados e atendimento online.",
  keywords: [
    "consultoria em SST",
    "segurança do trabalho",
    "PGR",
    "PCMSO",
    "LTCAT",
    "NR-1 riscos psicossociais",
    "eSocial SST",
    "S-2210",
    "S-2220",
    "S-2240",
    "PMOC",
    "PGRSS",
    "laudo de insalubridade",
    "Goiânia",
  ],
};

const WHATSAPP_SST =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%3A%20Consultoria%20em%20SST.";

const SERVICOS = [
  {
    titulo: "PGR — Programa de Gerenciamento de Riscos",
    desc: "Inventário de riscos físicos, químicos, biológicos, ergonômicos e de acidentes, incluindo os riscos psicossociais exigidos pela NR-1 desde maio de 2026. Plano de ação com prioridades e prazos.",
  },
  {
    titulo: "PCMSO — Programa de Controle Médico",
    desc: "Definição dos exames obrigatórios por função, cronograma anual e emissão dos ASOs (admissional, periódico, retorno ao trabalho, mudança de risco e demissional).",
  },
  {
    titulo: "LTCAT e laudos de insalubridade",
    desc: "Levantamento técnico das condições ambientais para aposentadoria especial, adicional de insalubridade e PPP eletrônico no eSocial.",
  },
  {
    titulo: "Eventos de SST no eSocial",
    desc: "Envio dos eventos S-2210 (CAT), S-2220 (monitoramento da saúde) e S-2240 (condições ambientais), conferidos com a folha e os laudos.",
  },
  {
    titulo: "PMOC e PGRSS",
    desc: "Planos de manutenção de ar-condicionado e gerenciamento de resíduos de serviços de saúde, quando aplicáveis à atividade da empresa.",
  },
  {
    titulo: "Treinamentos e DDS",
    desc: "Indicação e organização dos treinamentos obrigatórios por NR e apoio aos diálogos de segurança no canteiro ou na operação.",
  },
];

const ENTREGAS = [
  {
    n: "01",
    titulo: "Calendário de vencimentos",
    desc: "Programas, laudos e exames de cada funcionário com data de validade, para você ser avisado antes de vencer.",
  },
  {
    n: "02",
    titulo: "Documentos prontos para apresentar",
    desc: "Programas e laudos elaborados e assinados por profissionais legalmente habilitados, organizados para quando o fiscal, o cliente ou um ex-funcionário pedir.",
  },
  {
    n: "03",
    titulo: "eSocial sem atraso",
    desc: "Eventos de SST enviados dentro do prazo e coerentes com os laudos, sem divergência com a folha.",
  },
];

const ETAPAS = [
  {
    titulo: "Diagnóstico",
    desc: "Levantamos a atividade, o grau de risco, as funções e o número de funcionários.",
  },
  {
    titulo: "Visita técnica",
    desc: "Avaliamos os ambientes quando o laudo exige inspeção ou medição no local.",
  },
  {
    titulo: "Elaboração",
    desc: "Montamos o PGR, o PCMSO e os laudos necessários, com o plano de ação.",
  },
  {
    titulo: "Exames e eSocial",
    desc: "Organizamos os exames ocupacionais e enviamos os eventos de SST.",
  },
  {
    titulo: "Acompanhamento",
    desc: "Revisamos os documentos quando algo muda e controlamos as renovações.",
  },
];

const SINAIS = [
  "Sua empresa tem funcionários registrados e nunca fez PGR ou PCMSO.",
  "O PGR foi feito antes de maio de 2026 e não trata dos riscos psicossociais.",
  "Você não sabe quando vencem os exames periódicos dos seus funcionários.",
  "Mudou o setor, a máquina, a função ou o endereço, e os laudos continuam os mesmos.",
  "Um ex-funcionário pediu o PPP ou entrou na Justiça pedindo insalubridade.",
  "Um cliente, uma construtora ou uma licitação exigiu documentos de SST que você não tinha.",
];

const FAQ = [
  {
    pergunta: "Minha empresa tem poucos funcionários. Preciso mesmo de SST?",
    resposta:
      "Sim. As obrigações de saúde e segurança do trabalho valem para toda empresa com empregado registrado. O que muda com o porte e o grau de risco é a extensão dos programas. Algumas micro e pequenas empresas têm tratamento diferenciado na NR-1, mas isso depende de condições específicas e precisa ser formalizado. No diagnóstico, verificamos o enquadramento da sua empresa.",
  },
  {
    pergunta: "Quem envia os eventos de SST ao eSocial?",
    resposta:
      "Nós. Os eventos S-2210, S-2220 e S-2240 são enviados com base nos laudos e exames que acompanhamos, conferidos com o que está na folha.",
  },
  {
    pergunta: "Preciso trocar de contabilidade para contratar?",
    resposta:
      "Não. A consultoria em SST é um serviço independente e funciona junto com a contabilidade que você já tem.",
  },
  {
    pergunta: "O atendimento é todo online?",
    resposta:
      "O acompanhamento, os documentos e o suporte são online. Quando um laudo exige avaliação no local de trabalho, agendamos a visita técnica com você.",
  },
  {
    pergunta: "O que fazer se um funcionário sofrer um acidente?",
    resposta:
      "Fale com a gente no mesmo dia. A comunicação do acidente de trabalho (CAT) deve ser enviada ao eSocial, no evento S-2210, até o primeiro dia útil seguinte ao acidente, e imediatamente em caso de morte.",
  },
  {
    pergunta: "Quanto custa?",
    resposta:
      "Depende do número de funcionários, da atividade e dos documentos necessários. Depois do diagnóstico, que não tem custo, você recebe a proposta com prazo e valor.",
  },
];

const CHECKLIST_PANEL = [
  { item: "PGR + PCMSO", status: "ok", label: "Em dia" },
  { item: "Riscos psicossociais", status: "warn", label: "NR-1 · mai/2026" },
  { item: "ASO periódicos", status: "risk", label: "3 vencidos" },
  { item: "Eventos eSocial", status: "ok", label: "S-2220 enviado" },
  { item: "LTCAT / PPP", status: "info", label: "Revisão pendente" },
];

function PillStatus({ status, label }: { status: string; label: string }) {
  const styles: Record<string, string> = {
    ok: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
    warn: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
    risk: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${styles[status] || styles.info}`}
    >
      {label}
    </span>
  );
}

export default function ConsultoriaSSTPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0D243B] pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Reveal direction="down">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#87B1D7]">
                  Consultoria em SST
                </p>
              </Reveal>
              <SplitText
                text="Saúde e segurança do trabalho organizada e sem multa"
                tag="h1"
                textAlign="left"
                className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                splitType="words"
                delay={25}
                duration={0.7}
              />
              <Reveal delay={0.15}>
                <p className="max-w-xl text-lg text-[#B9CBDD]">
                  PGR com riscos psicossociais, PCMSO, LTCAT, laudos de
                  insalubridade, PMOC e eventos de SST no eSocial. Prazos
                  controlados e atendimento online para empresas de Goiânia e de
                  todo o Brasil.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={WHATSAPP_SST}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-[#87B1D7] px-6 text-sm font-bold uppercase tracking-wide text-[#0D243B] transition-colors hover:bg-[#a3c5e3]"
                  >
                    Diagnóstico gratuito
                  </a>
                  <a
                    href="#servicos"
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-[#244563] px-6 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-[#87B1D7] hover:text-[#87B1D7]"
                  >
                    Ver serviços de SST
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.2}>
              <div className="overflow-hidden rounded-xl border border-[#244563] bg-[#14314F] shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#244563] px-5 py-4">
                  <span className="text-sm font-bold">Painel de SST</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B9CBDD]">
                    Visão geral
                  </span>
                </div>
                <div className="divide-y divide-[#244563]">
                  {CHECKLIST_PANEL.map((row) => (
                    <div
                      key={row.item}
                      className="flex items-center justify-between px-5 py-3.5"
                    >
                      <span className="text-sm font-semibold">{row.item}</span>
                      <PillStatus status={row.status} label={row.label} />
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#244563] bg-[#0D243B] px-5 py-3 text-xs text-[#B9CBDD]">
                  Cada documento com data de validade e responsável definido.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                O que fazemos
              </p>
            </Reveal>
            <SplitText
              text="Tudo o que a sua empresa precisa em SST"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICOS.map((s, i) => (
              <Reveal key={s.titulo} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-deep">
                    {s.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENTREGAS */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                O que você recebe
              </p>
            </Reveal>
            <SplitText
              text="SST organizada para a fiscalização e para o dia a dia"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {ENTREGAS.map((e, i) => (
              <Reveal key={e.n} delay={i * 0.12}>
                <div className="h-full border-t-[3px] border-brand pt-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">
                    {e.n}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-brand-deep">
                    {e.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {e.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Como funciona
              </p>
            </Reveal>
            <SplitText
              text="Do diagnóstico ao acompanhamento"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 space-y-6">
            {ETAPAS.map((etapa, i) => (
              <Reveal key={etapa.titulo} delay={i * 0.1}>
                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-brand-deep">
                      {etapa.titulo}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{etapa.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SINAIS */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Sinais de alerta
              </p>
            </Reveal>
            <SplitText
              text="Quando a SST da sua empresa precisa de atenção"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SINAIS.map((sinal, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-3 rounded-lg bg-white p-5 shadow-sm">
                  <svg
                    className="h-5 w-5 shrink-0 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <p className="text-sm text-slate-700">{sinal}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Dúvidas comuns
              </p>
            </Reveal>
            <SplitText
              text="Antes de contratar"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 space-y-4">
            {FAQ.map((faq, i) => (
              <Reveal key={faq.pergunta} delay={i * 0.1}>
                <details className="group rounded-xl border border-slate-200 bg-white p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-brand-deep">
                    {faq.pergunta}
                    <span className="shrink-0 text-brand transition-transform group-open:rotate-180">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {faq.resposta}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#0D243B] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Coloque a SST da sua empresa em dia
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-[#B9CBDD]">
                Fale com um especialista e receba o diagnóstico sem custo.
                Atendimento de segunda a sexta, das 08h às 18h.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={WHATSAPP_SST}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-[#87B1D7] px-8 text-base font-bold tracking-wide text-[#0D243B] transition-colors hover:bg-[#a3c5e3]"
              >
                Falar no WhatsApp
              </a>
            </Reveal>
            <p className="mt-6 text-sm text-[#B9CBDD]">
              (62) 98210-3699 · contato@praticasolucao.com.br
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}