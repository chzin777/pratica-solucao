import type { Metadata } from "next";
import Header from "../../Header";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import SplitText from "../../components/SplitText";
import HeroEventos from "./HeroEventos";

export const metadata: Metadata = {
  title: "Eventos Corporativos em Goiânia",
  description:
    "Organização de eventos corporativos: convenções, workshops, treinamentos e confraternizações. Planejamento completo, gestão de fornecedores e execução impecável.",
  keywords: [
    "eventos corporativos",
    "organização de eventos empresariais",
    "convenções corporativas",
    "workshops empresariais",
    "treinamentos in company",
    "confraternização empresarial",
    "Goiânia",
  ],
};

const WHATSAPP_EVENTOS =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%3A%20Eventos%20Corporativos.";

const TIPOS = [
  {
    titulo: "Convenções e encontros",
    itens: [
      "Convenções anuais de vendas e metas",
      "Encontros de líderes e gestores",
      "Lançamentos de produtos e serviços",
      "Assembleias e reuniões estratégicas",
    ],
  },
  {
    titulo: "Treinamentos e workshops",
    itens: [
      "Treinamentos in company e capacitações",
      "Workshops de liderança e equipe",
      "Palestras motivacionais e técnicas",
      "Programas de integração e onboarding",
    ],
  },
  {
    titulo: "Confraternizações",
    itens: [
      "Festas de fim de ano e aniversário da empresa",
      "Happy hours e ações de relacionamento",
      "Eventos de reconhecimento e premiação",
      "Ações de bem-estar e qualidade de vida",
    ],
  },
  {
    titulo: "Feiras e exposições",
    itens: [
      "Stands e ativações em feiras setoriais",
      "Exposições internas e mostras de resultados",
      "Eventos de networking e relacionamento",
      "Roadshows e apresentações itinerantes",
    ],
  },
];

const DIFERENCIAIS = [
  {
    titulo: "Planejamento sob medida",
    desc: "Cada evento é desenhado para os objetivos da sua empresa, sem pacotes genéricos.",
  },
  {
    titulo: "Gestão completa de fornecedores",
    desc: "Selecionamos, contratamos e coordenamos buffet, som, iluminação, decoração e logística.",
  },
  {
    titulo: "Execução no dia",
    desc: "Equipe dedicada presente do início ao fim, garantindo que tudo saia como planejado.",
  },
  {
    titulo: "Relatório pós-evento",
    desc: "Entregamos fotos, vídeos, feedback dos participantes e análise de resultados.",
  },
];

const ETAPAS = [
  {
    titulo: "Briefing",
    desc: "Entendemos o objetivo, público, data e orçamento disponível.",
  },
  {
    titulo: "Proposta",
    desc: "Apresentamos conceito, escopo, cronograma e investimento detalhado.",
  },
  {
    titulo: "Planejamento",
    desc: "Gerenciamos fornecedores, logística, comunicação e materiais.",
  },
  {
    titulo: "Execução",
    desc: "Coordenamos tudo no dia do evento, do setup ao encerramento.",
  },
  {
    titulo: "Encerramento",
    desc: "Entregamos relatório final com fotos, vídeos e avaliação dos participantes.",
  },
];

const FAQ = [
  {
    pergunta: "Vocês organizam eventos de qualquer tamanho?",
    resposta:
      "Sim. Atendemos desde workshops para 20 pessoas até convenções com centenas de participantes.",
  },
  {
    pergunta: "É possível contratar apenas parte do serviço?",
    resposta:
      "Sim. Podemos cuidar apenas da produção no dia, da gestão de fornecedores ou do planejamento completo.",
  },
  {
    pergunta: "Como funciona o orçamento?",
    resposta:
      "Depois do briefing, enviamos uma proposta detalhada com todos os custos. Sem surpresas.",
  },
  {
    pergunta: "Vocês atendem fora de Goiânia?",
    resposta:
      "Sim. Atendemos em todo o estado de Goiás e podemos avaliar eventos em outras regiões.",
  },
];

export default function EventosCorporativosPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <HeroEventos />

      {/* TIPOS DE EVENTOS */}
      <section id="tipos" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Tipos de eventos
              </p>
            </Reveal>
            <SplitText
              text="Do workshop à grande convenção"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {TIPOS.map((t, i) => (
              <Reveal key={t.titulo} delay={i * 0.1}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-deep">
                    {t.titulo}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {t.itens.map((it) => (
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
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Por que escolher a Prática
              </p>
            </Reveal>
            <SplitText
              text="Mais do que organizar, entregamos resultados"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {DIFERENCIAIS.map((d, i) => (
              <Reveal key={d.titulo} delay={i * 0.1}>
                <div className="h-full border-t-[3px] border-brand pt-6">
                  <h3 className="text-base font-semibold text-brand-deep">
                    {d.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {d.desc}
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
              text="Do primeiro contato ao evento perfeito"
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

      {/* FAQ */}
      <section className="bg-slate-50 py-20 sm:py-24">
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
                Vamos criar um evento inesquecível
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-[#B9CBDD]">
                Conte-nos sobre o seu próximo evento e receba uma proposta
                personalizada. Atendimento de segunda a sexta, das 08h às 18h.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={WHATSAPP_EVENTOS}
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