import type { Metadata } from "next";
import Header from "../../Header";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import SplitText from "../../components/SplitText";
import HeroEndomarketing from "./HeroEndomarketing";

export const metadata: Metadata = {
  title: "Endomarketing Terceirizado em Goiânia",
  description:
    "Endomarketing terceirizado para empresas que querem engajar colaboradores sem sobrecarregar o RH. Planejamento, execução e mensuração de campanhas internas.",
  keywords: [
    "endomarketing terceirizado",
    "endomarketing empresarial",
    "comunicação interna",
    "engajamento de colaboradores",
    "cultura organizacional",
    "Goiânia",
  ],
};

const WHATSAPP_ENDOMARKETING =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%3A%20Endomarketing%20Terceirizado.";

const SERVICOS = [
  {
    titulo: "Diagnóstico de clima e cultura",
    itens: [
      "Pesquisa de satisfação e engajamento",
      "Mapeamento de pontos de atrito e oportunidade",
      "Relatório com prioridades de ação",
    ],
  },
  {
    titulo: "Planejamento de comunicação interna",
    itens: [
      "Calendário editorial mensal ou trimestral",
      "Definição de canais, tom de voz e frequência",
      "Alinhamento com objetivos de negócio e RH",
    ],
  },
  {
    titulo: "Criação e distribuição de conteúdo",
    itens: [
      "Newsletters, murais digitais e vídeos internos",
      "Campanhas de reconhecimento e datas comemorativas",
      "Comunicados institucionais claros e humanizados",
    ],
  },
  {
    titulo: "Eventos e ações de engajamento",
    itens: [
      "Workshops, palestras e dinâmicas de equipe",
      "Programas de integração e onboarding",
      "Ações de bem-estar e qualidade de vida",
    ],
  },
];

const BENEFICIOS = [
  {
    titulo: "Mais engajamento, menos turnover",
    desc: "Colaboradores informados e reconhecidos permanecem mais tempo e produzem melhor.",
  },
  {
    titulo: "RH focado no estratégico",
    desc: "Sua equipe deixa de apagar incêndios operacionais e cuida de gente e cultura.",
  },
  {
    titulo: "Comunicação consistente",
    desc: "Fim dos comunicados improvisados. Tudo tem planejamento, tom e prazo.",
  },
  {
    titulo: "Resultados mensuráveis",
    desc: "Relatórios de alcance, adesão e impacto em cada campanha entregue.",
  },
];

const ETAPAS = [
  {
    titulo: "Briefing",
    desc: "Entendemos seus objetivos, público interno e desafios atuais de comunicação.",
  },
  {
    titulo: "Diagnóstico",
    desc: "Analisamos o cenário atual e identificamos gaps de comunicação e engajamento.",
  },
  {
    titulo: "Plano de ação",
    desc: "Apresentamos um cronograma com ações, canais, responsáveis e métricas.",
  },
  {
    titulo: "Execução",
    desc: "Produzimos e distribuímos o conteúdo, gerenciamos os canais e realizamos as ações.",
  },
  {
    titulo: "Mensuração",
    desc: "Entregamos relatórios periódicos com resultados e ajustes recomendados.",
  },
];

const FAQ = [
  {
    pergunta: "Preciso ter uma equipe de comunicação interna para contratar?",
    resposta:
      "Não. O endomarketing terceirizado substitui ou complementa sua equipe. Você define o nível de suporte necessário.",
  },
  {
    pergunta: "Como funciona a aprovação do conteúdo?",
    resposta:
      "Todo material passa por aprovação antes da publicação. Você mantém controle total sobre a mensagem.",
  },
  {
    pergunta: "É possível começar com um projeto pontual?",
    resposta:
      "Sim. Podemos iniciar com uma campanha específica ou diagnóstico e evoluir para um contrato recorrente.",
  },
  {
    pergunta: "Os dados dos colaboradores ficam seguros?",
    resposta:
      "Sim. Seguimos a LGPD e tratamos informações pessoais com sigilo absoluto.",
  },
];

export default function EndomarketingPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <HeroEndomarketing />

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Nossos serviços
              </p>
            </Reveal>
            <SplitText
              text="Tudo o que sua comunicação interna precisa"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {SERVICOS.map((s, i) => (
              <Reveal key={s.titulo} delay={i * 0.1}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-deep">
                    {s.titulo}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {s.itens.map((it) => (
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

      {/* BENEFÍCIOS */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Por que terceirizar
              </p>
            </Reveal>
            <SplitText
              text="Resultados que aparecem na prática"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {BENEFICIOS.map((b, i) => (
              <Reveal key={b.titulo} delay={i * 0.1}>
                <div className="h-full border-t-[3px] border-brand pt-6">
                  <h3 className="text-base font-semibold text-brand-deep">
                    {b.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {b.desc}
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
              text="Do briefing aos resultados"
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
                Transforme a comunicação da sua empresa
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-[#B9CBDD]">
                Fale com um especialista e descubra como o endomarketing pode
                aumentar o engajamento da sua equipe.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={WHATSAPP_ENDOMARKETING}
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