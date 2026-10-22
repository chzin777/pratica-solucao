import type { Metadata } from "next";
import Header from "../../Header";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import SplitText from "../../components/SplitText";
import AbstractBG from "../../components/AbstractBG";

export const metadata: Metadata = {
  title:
    "Terceirização de Folha de Pagamento em Goiânia | Prática Soluções Empresariais",
  description:
    "Terceirize o departamento pessoal: folha, férias, 13º, rescisões, eSocial, FGTS Digital e DCTFWeb conferidos com a convenção coletiva. Para empresas e escritórios de contabilidade.",
  keywords: [
    "terceirização de folha de pagamento",
    "departamento pessoal terceirizado",
    "folha de pagamento Goiânia",
    "eSocial",
    "FGTS Digital",
    "DCTFWeb",
    "férias",
    "rescisão",
    "13º salário",
    "DP para contabilidade",
  ],
};

const WHATSAPP_FOLHA =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%3A%20Terceiriza%C3%A7%C3%A3o%20de%20Folha%20de%20Pagamento.";

const SERVICOS = [
  {
    titulo: "Folha de pagamento mensal",
    desc: "Cálculo de salários, horas extras, adicionais, comissões, DSR e reflexos, conferidos com a convenção coletiva da categoria.",
  },
  {
    titulo: "Férias, 13º e rescisões",
    desc: "Programação de férias individuais e coletivas, cálculo de 13º proporcional e integral, e rescisões com as guias e os acertos corretos.",
  },
  {
    titulo: "Admissões e desligamentos",
    desc: "Registro completo no eSocial (S-2200, S-2299), exame admissional organizado e documentação do funcionário conferida.",
  },
  {
    titulo: "Obrigações acessórias",
    desc: "Envio dos eventos do eSocial, DCTFWeb, FGTS Digital e RAIS dentro dos prazos, sem divergência entre as declarações.",
  },
  {
    titulo: "Holerites e relatórios",
    desc: "Recibos de pagamento digitais enviados aos funcionários e relatórios mensais claros para a diretoria ou para a contabilidade.",
  },
  {
    titulo: "Suporte ao funcionário",
    desc: "Canal direto para tirar dúvidas sobre holerite, férias, INSS e outros assuntos trabalhistas, sem sobrecarregar a sua equipe.",
  },
];

const ENTREGAS = [
  {
    n: "01",
    titulo: "Folha fechada no prazo",
    desc: "Holerites, guias e eventos do eSocial entregues na data combinada, todo mês, sem atraso nem pendência.",
  },
  {
    n: "02",
    titulo: "Conformidade com a CCT",
    desc: "Cada rubrica conferida com a convenção coletiva vigente, evitando passivo trabalhista por piso, adicional ou benefício não pago.",
  },
  {
    n: "03",
    titulo: "Relatórios para decidir",
    desc: "Resumo mensal de custos, provisionamentos de férias e 13º, e alertas de vencimentos para você planejar o caixa.",
  },
];

const ETAPAS = [
  {
    titulo: "Reunião inicial",
    desc: "Entendemos a atividade, o número de funcionários, o sindicato e os benefícios.",
  },
  {
    titulo: "Levantamento",
    desc: "Você envia os cadastros e o histórico. Conferimos férias vencidas, saldos e pendências.",
  },
  {
    titulo: "Transição",
    desc: "Assumimos a partir da competência combinada, sem deixar evento do eSocial para trás.",
  },
  {
    titulo: "Rotina mensal",
    desc: "Você envia as variáveis na data combinada e nós fechamos a folha, os holerites e as guias.",
  },
  {
    titulo: "Acompanhamento",
    desc: "Relatórios claros a cada fechamento e um especialista para as dúvidas.",
  },
];

const SINAIS = [
  "O DP depende de uma pessoa só, e as férias dela travam a empresa.",
  "Você já pagou multa ou juros por guia ou evento do eSocial em atraso.",
  "Ninguém confere se a folha segue a convenção coletiva atualizada.",
  "A empresa cresceu e a planilha ou o sistema não acompanham mais.",
  "Você só descobre um erro quando o funcionário reclama ou entra na Justiça.",
  "Seu escritório quer focar no fiscal e no contábil sem montar equipe de DP.",
];

const FAQ = [
  {
    pergunta: "Preciso trocar de contabilidade para terceirizar a folha?",
    resposta:
      "Não. Assumimos só o departamento pessoal. A sua contabilidade continua com a parte fiscal e contábil e recebe de nós os relatórios da folha que precisar.",
  },
  {
    pergunta: "Como eu envio as informações do mês?",
    resposta:
      "Pelo canal mais prático para você: WhatsApp, e-mail ou planilha. Combinamos uma data fixa para o envio de ponto, faltas, horas extras, comissões e outras variáveis.",
  },
  {
    pergunta: "Quem faz o pagamento dos funcionários?",
    resposta:
      "A sua empresa. Nós calculamos e enviamos os valores, os holerites e as guias com as datas de vencimento.",
  },
  {
    pergunta: "Vocês atendem empresas fora de Goiânia?",
    resposta:
      "Sim. O atendimento é 100% online, então atendemos empresas de qualquer cidade.",
  },
  {
    pergunta: "Vocês atendem escritórios de contabilidade?",
    resposta:
      "Sim. Assumimos a folha dos clientes do seu escritório, com rotina e prazos combinados, e você continua com o relacionamento com o cliente.",
  },
  {
    pergunta: "Os dados dos meus funcionários ficam seguros?",
    resposta:
      "Sim. As informações são tratadas com sigilo e usadas só para a prestação do serviço, conforme a LGPD.",
  },
  {
    pergunta: "Quanto custa?",
    resposta:
      "O valor depende principalmente do número de funcionários e da complexidade da folha. Depois da reunião inicial, que não tem custo, você recebe a proposta.",
  },
];

const PAINEL_FOLHA = [
  { item: "Folha mensal", status: "ok", label: "Em dia" },
  { item: "eSocial / DCTFWeb", status: "ok", label: "Enviado" },
  { item: "FGTS Digital", status: "warn", label: "Vence em 5 dias" },
  { item: "Férias programadas", status: "info", label: "3 em jan/2027" },
  { item: "Provisão 13º", status: "ok", label: "Atualizada" },
];

function PillStatus({ status, label }: { status: string; label: string }) {
  const styles: Record<string, string> = {
    ok: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
    warn:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
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

export default function TerceirizacaoFolhaPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0D243B] pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(135,177,215,0.22),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(31,175,90,0.12),transparent_50%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Reveal direction="down">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#87B1D7]">
                  Terceirização de Folha de Pagamento
                </p>
              </Reveal>
              <SplitText
                text="Departamento pessoal completo, sem montar equipe interna"
                tag="h1"
                textAlign="left"
                className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                splitType="words"
                delay={25}
                duration={0.7}
              />
              <Reveal delay={0.15}>
                <p className="max-w-xl text-lg text-[#B9CBDD]">
                  Folha, férias, 13º, rescisões, eSocial, FGTS Digital e
                  DCTFWeb conferidos com a convenção coletiva. Atendimento
                  online para empresas e escritórios de contabilidade.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={WHATSAPP_FOLHA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-[#87B1D7] px-6 text-sm font-bold uppercase tracking-wide text-[#0D243B] transition-colors hover:bg-[#a3c5e3]"
                  >
                    Agendar reunião gratuita
                  </a>
                  <a
                    href="#servicos"
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-[#244563] px-6 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-[#87B1D7] hover:text-[#87B1D7]"
                  >
                    Ver o que está incluso
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.2}>
              <div className="overflow-hidden rounded-xl border border-[#244563] bg-[#14314F] shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#244563] px-5 py-4">
                  <span className="text-sm font-bold">Painel do DP</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B9CBDD]">
                    Visão mensal
                  </span>
                </div>
                <div className="divide-y divide-[#244563]">
                  {PAINEL_FOLHA.map((row) => (
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
                  Cada obrigação com responsável, prazo e comprovante.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="relative overflow-hidden py-20 sm:py-24">
        <AbstractBG />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                O que está incluso
              </p>
            </Reveal>
            <SplitText
              text="Tudo o que o departamento pessoal precisa"
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
              text="Folha certa, no prazo e sem surpresas"
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
      <section className="relative overflow-hidden py-20 sm:py-24">
        <AbstractBG />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Como funciona
              </p>
            </Reveal>
            <SplitText
              text="Da transição à rotina de todo mês"
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
              text="Quando vale terceirizar a folha"
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
      <section className="relative overflow-hidden py-20 sm:py-24">
        <AbstractBG />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
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
                Tire o departamento pessoal das suas costas
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
                href={WHATSAPP_FOLHA}
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