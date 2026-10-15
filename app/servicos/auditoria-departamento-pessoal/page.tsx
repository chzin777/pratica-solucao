import type { Metadata } from "next";
import Header from "../../Header";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import SplitText from "../../components/SplitText";

export const metadata: Metadata = {
  title: "Auditoria em Departamento Pessoal em Goiânia",
  description:
    "Auditoria de folha de pagamento, eSocial e SST comparada com a convenção coletiva e a legislação. Relatório com erros, riscos de multas e ações trabalhistas e plano de ação.",
  keywords: [
    "auditoria departamento pessoal",
    "auditoria trabalhista",
    "auditoria folha de pagamento",
    "auditoria eSocial",
    "auditoria SST",
    "conformidade trabalhista",
    "Goiânia",
  ],
};

const WHATSAPP_AUDITORIA =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%3A%20Auditoria%20em%20Departamento%20Pessoal.";

const FRENTES = [
  {
    titulo: "Folha de pagamento",
    itens: [
      "Salários, pisos e reajustes",
      "Horas extras, adicionais e DSR",
      "Férias, 13º salário e rescisões",
      "Recolhimentos de INSS, FGTS e IRRF",
    ],
  },
  {
    titulo: "eSocial",
    itens: [
      "Admissões, desligamentos e afastamentos",
      "Remunerações e rubricas",
      "Prazos de envio dos eventos",
      "Divergências com a folha, a DCTFWeb e o FGTS Digital",
    ],
  },
  {
    titulo: "Saúde e segurança do trabalho",
    itens: [
      "Validade de PGR, PCMSO e LTCAT",
      "Exames ocupacionais (ASO) e entrega de EPI",
      "Insalubridade, periculosidade e CAT",
      "Eventos S-2210, S-2220 e S-2240",
    ],
  },
  {
    titulo: "Gestão de funcionários",
    itens: [
      "Contratos e registros",
      "Controle de jornada e banco de horas",
      "Enquadramento sindical",
      "Cotas de aprendiz e PcD, quando aplicáveis",
    ],
  },
];

const ENTREGAS = [
  {
    titulo: "Erros na gestão de funcionários e na legislação trabalhista",
    desc: "Cada erro encontrado, onde ele aparece, qual regra foi descumprida e a evidência que comprova.",
  },
  {
    titulo: "Riscos de multas e ações trabalhistas",
    desc: "Cada erro classificado como risco alto, médio ou baixo, com a exposição estimada quando for possível calcular.",
  },
  {
    titulo: "Plano de ação para reduzir os riscos",
    desc: "O que corrigir, em que ordem, quem deve fazer e em quanto tempo, começando pelo que pesa mais.",
  },
];

const ETAPAS = [
  {
    titulo: "Reunião inicial",
    desc: "Entendemos a atividade, o número de funcionários e o sindicato da categoria, e definimos o período auditado.",
  },
  {
    titulo: "Levantamento",
    desc: "Você envia os documentos e libera os acessos de consulta. Seus dados são tratados com sigilo.",
  },
  {
    titulo: "Análise",
    desc: "Conferimos folha, eSocial e SST e comparamos com a convenção e a legislação.",
  },
  {
    titulo: "Relatório",
    desc: "Entregamos os erros, os riscos e o plano de ação por escrito.",
  },
  {
    titulo: "Reunião de entrega",
    desc: "Apresentamos os resultados e combinamos as prioridades de correção.",
  },
];

const SINAIS = [
  "Você já recebeu notificação, multa ou ação trabalhista e não sabe se há outras a caminho.",
  "A convenção coletiva mudou e ninguém confirmou se a folha foi atualizada.",
  "A empresa cresceu e o DP continua sendo feito do mesmo jeito de quando eram poucos funcionários.",
  "Você trocou ou pretende trocar de contabilidade e quer saber o que está herdando.",
  "Os laudos de SST foram feitos há tempo e o ambiente de trabalho mudou desde então.",
  "Você vai vender a empresa, receber um sócio ou participar de licitação.",
];

const FAQ = [
  {
    pergunta: "Preciso trocar de contabilidade para fazer a auditoria?",
    resposta:
      "Não. A auditoria é um serviço independente. Você continua com quem faz a sua folha hoje e usa o relatório para cobrar as correções.",
  },
  {
    pergunta: "A auditoria atrapalha a rotina da empresa?",
    resposta:
      "Não. O trabalho é feito online, com documentos digitais e acessos de consulta. Sua equipe participa da reunião inicial e da entrega.",
  },
  {
    pergunta: "Quanto tempo leva e quanto custa?",
    resposta:
      "Depende do número de funcionários e do período auditado. Depois da reunião inicial, que não tem custo, você recebe a proposta com prazo e valor.",
  },
  {
    pergunta: "Os dados dos meus funcionários ficam seguros?",
    resposta:
      "Sim. As informações são tratadas com sigilo e usadas só para a auditoria, conforme a LGPD.",
  },
  {
    pergunta: "E depois do relatório?",
    resposta:
      "Você decide. O plano de ação pode ser executado pela sua equipe, pela sua contabilidade ou com o apoio da Prática.",
  },
];

const ACHADOS_EXEMPLO = [
  {
    achado: "Horas extras habituais sem reflexo no descanso semanal",
    risco: "alto" as const,
    detalhe: "Folha · Súmula 172 do TST · atinge todo o período",
  },
  {
    achado: "Piso salarial abaixo do valor da convenção coletiva",
    risco: "alto" as const,
    detalhe: "Folha · CCT da categoria, cláusula de piso",
  },
  {
    achado: "ASO periódico vencido de três funcionários",
    risco: "médio" as const,
    detalhe: "SST · NR-7 · evento S-2220 pendente",
  },
  {
    achado: "LTCAT não revisado após mudança no setor de produção",
    risco: "médio" as const,
    detalhe: "SST · evento S-2240 divergente do laudo",
  },
  {
    achado: "Admissões informadas ao eSocial fora do prazo",
    risco: "baixo" as const,
    detalhe: "eSocial · evento S-2200",
  },
];

function RiskBadge({ nivel }: { nivel: "alto" | "médio" | "baixo" }) {
  const cores = {
    alto: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200",
    médio: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
    baixo: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${cores[nivel]}`}
    >
      Risco {nivel}
    </span>
  );
}

export default function AuditoriaDPPage() {
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
                  Auditoria em Departamento Pessoal
                </p>
              </Reveal>
              <SplitText
                text="Descubra os erros do seu DP antes da fiscalização"
                tag="h1"
                textAlign="left"
                className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                splitType="words"
                delay={25}
                duration={0.7}
              />
              <Reveal delay={0.15}>
                <p className="max-w-xl text-lg text-[#B9CBDD]">
                  Levantamos toda a situação trabalhista da sua empresa,
                  comparamos com a convenção coletiva e a legislação e
                  entregamos um relatório com os erros, os riscos e o plano
                  para corrigir.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={WHATSAPP_AUDITORIA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-[#87B1D7] px-6 text-sm font-bold uppercase tracking-wide text-[#0D243B] transition-colors hover:bg-[#a3c5e3]"
                  >
                    Quero auditar minha empresa
                  </a>
                  <a
                    href="#escopo"
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-[#244563] px-6 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-[#87B1D7] hover:text-[#87B1D7]"
                  >
                    Ver o que analisamos
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.2}>
              <div className="overflow-hidden rounded-xl border border-[#244563] bg-[#14314F] shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#244563] px-5 py-4">
                  <span className="text-sm font-bold">
                    Relatório de auditoria · Achados
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B9CBDD]">
                    Exemplo ilustrativo
                  </span>
                </div>
                <div className="divide-y divide-[#244563]">
                  {ACHADOS_EXEMPLO.map((item) => (
                    <div
                      key={item.achado}
                      className="grid grid-cols-[1fr_auto] items-start gap-x-4 gap-y-1 px-5 py-3.5"
                    >
                      <span className="text-sm font-semibold leading-snug">
                        {item.achado}
                      </span>
                      <RiskBadge nivel={item.risco} />
                      <span className="col-span-2 font-mono text-xs text-[#B9CBDD]">
                        {item.detalhe}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#244563] bg-[#0D243B] px-5 py-3 text-xs text-[#B9CBDD]">
                  Cada achado vem com a evidência, a regra descumprida e a
                  correção indicada.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ESCOPO */}
      <section id="escopo" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                O que analisamos
              </p>
            </Reveal>
            <SplitText
              text="Quatro frentes, conferidas ponto a ponto"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg text-slate-600">
                O escopo é ajustado ao porte e à atividade da sua empresa. Uma
                construtora e um comércio têm convenções e riscos diferentes.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-0 border-t border-slate-200 sm:grid-cols-2">
            {FRENTES.map((f, i) => (
              <Reveal key={f.titulo} delay={i * 0.1}>
                <div
                  className={`border-b border-slate-200 p-7 ${i % 2 === 1 ? "sm:border-l" : ""}`}
                >
                  <h3 className="text-lg font-semibold text-brand-deep">
                    {f.titulo}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {f.itens.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-3 rounded-xl bg-[#E3ECF7] px-6 py-4 text-sm">
              <strong className="font-bold text-brand-deep">
                Tudo comparado com:
              </strong>
              <span className="text-slate-600">
                a convenção coletiva da sua categoria
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">
                a CLT e a legislação previdenciária
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">as Normas Regulamentadoras</span>
            </div>
          </Reveal>
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
              text="Um relatório completo, em linguagem de dono de empresa"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {ENTREGAS.map((e, i) => (
              <Reveal key={e.titulo} delay={i * 0.12}>
                <div className="h-full border-t-[3px] border-brand pt-6">
                  <h3 className="text-lg font-semibold text-brand-deep">
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
              text="Do primeiro contato à entrega do relatório"
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
              text="Quando vale a pena auditar o DP"
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
                Saiba hoje o que um fiscal encontraria amanhã
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-[#B9CBDD]">
                Fale com um especialista e agende a reunião inicial.
                Atendimento de segunda a sexta, das 08h às 18h.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={WHATSAPP_AUDITORIA}
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