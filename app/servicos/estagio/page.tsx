import type { Metadata } from "next";
import Header from "../../Header";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import SplitText from "../../components/SplitText";
import EstagioSection from "../../components/EstagioSection";
import AbstractBG from "../../components/AbstractBG";

export const metadata: Metadata = {
  title:
    "Programa de Estágio em Goiânia | Prática Soluções Empresariais",
  description:
    "Estágio sem burocracia para empresas e estudantes. Anúncio de vagas, seleção, contrato (TCE), seguro obrigatório, integração com a instituição de ensino e gestão completa do recesso.",
  keywords: [
    "programa de estágio",
    "contratar estagiário",
    "vaga de estágio Goiânia",
    "Lei do Estágio",
    "Termo de Compromisso de Estágio",
    "TCE",
    "seguro de estágio",
    "recesso de estagiário",
    "estágio não obrigatório",
    "gestão de estagiários",
  ],
};

const WHATSAPP_ESTAGIO =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Quero%20contratar%20estagi%C3%A1rio(s)%20pela%20Pr%C3%A1tica.";

const BENEFICIOS_EMPRESA = [
  {
    titulo: "Sem vínculo empregatício",
    desc: "O estágio é regido pela Lei 11.788/2008. Não há FGTS, 13º nem INSS patronal sobre a bolsa, desde que todos os requisitos da lei sejam cumpridos.",
  },
  {
    titulo: "Burocracia zero",
    desc: "A Prática cuida do TCE, dos aditivos, da integração com a instituição de ensino, do seguro obrigatório e do controle de prazos e recesso.",
  },
  {
    titulo: "Seleção qualificada",
    desc: "Divulgamos a vaga nas redes, em grupos de estudantes e nas instituições de ensino, e enviamos candidatos pré-selecionados para você entrevistar.",
  },
  {
    titulo: "Gestão até o fim",
    desc: "Acompanhamos renovações, limite de 2 anos, relatórios semestrais de atividades e o acerto do recesso proporcional no encerramento.",
  },
];

const BENEFICIOS_ESTUDANTE = [
  {
    titulo: "Cadastro 100% gratuito",
    desc: "Você não paga nada para se cadastrar, concorrer às vagas ou ser contratado. O serviço é gratuito para o estudante.",
  },
  {
    titulo: "Vagas compatíveis",
    desc: "As vagas são filtradas pelo seu curso, período e horário das aulas, para que o estágio não atrapalhe os estudos.",
  },
  {
    titulo: "Contrato dentro da lei",
    desc: "Termo de Compromisso assinado por empresa, estudante e instituição de ensino, com seguro contra acidentes pessoais garantido.",
  },
  {
    titulo: "Acompanhamento completo",
    desc: "A Prática acompanha do início ao fim do estágio, incluindo recesso (férias do estagiário), renovações e relatórios.",
  },
];

const ETAPAS_CONTRATACAO = [
  {
    n: "01",
    titulo: "Divulgação da vaga",
    desc: "Você define o perfil e nós divulgamos a vaga nas redes sociais, em grupos de estudantes, nas instituições de ensino e no nosso banco de currículos.",
  },
  {
    n: "02",
    titulo: "Seleção do candidato",
    desc: "Enviamos candidatos pré-selecionados para você entrevistar. Já tem alguém em mente? Pulamos direto para o contrato.",
  },
  {
    n: "03",
    titulo: "Contrato e gestão",
    desc: "Emitimos o TCE, fazemos a integração com a instituição de ensino, contratamos o seguro e acompanhamos recesso, prazos e renovações até o fim.",
  },
];

const FAQ_EMPRESA = [
  {
    pergunta: "Quem pode contratar estagiário?",
    resposta:
      "Empresas privadas de qualquer porte, órgãos públicos e profissionais liberais de nível superior com registro no seu conselho de classe.",
  },
  {
    pergunta: "Estagiário tem vínculo empregatício?",
    resposta:
      "Não, desde que a lei seja cumprida: matrícula e frequência regulares, Termo de Compromisso assinado por empresa, estudante e instituição de ensino, e atividades compatíveis com o curso.",
  },
  {
    pergunta: "Quais são os custos obrigatórios?",
    resposta:
      "No estágio não obrigatório, a bolsa e o auxílio-transporte são obrigatórios, e a empresa precisa garantir o seguro contra acidentes pessoais. Sobre a bolsa não incidem FGTS, 13º salário nem INSS patronal.",
  },
  {
    pergunta: "Qual é a jornada e por quanto tempo o estágio pode durar?",
    resposta:
      "Para ensino superior, técnico e ensino médio, a jornada é de até 6 horas por dia e 30 horas por semana. O estágio na mesma empresa pode durar até 2 anos, exceto para pessoa com deficiência.",
  },
  {
    pergunta: "Quantos estagiários a minha empresa pode ter?",
    resposta:
      "Para ensino superior e ensino médio profissionalizante, não há limite. Nos demais casos, o limite depende do número de empregados.",
  },
  {
    pergunta: "Estagiário tem férias?",
    resposta:
      "Tem direito a 30 dias de recesso a cada 12 meses de estágio (ou proporcional), de preferência durante as férias escolares. Quando há bolsa, o recesso é remunerado.",
  },
  {
    pergunta: "Posso encerrar o estágio antes do prazo?",
    resposta:
      "Sim. A lei não prevê multa nem aviso prévio. Basta formalizar o encerramento e acertar o recesso proporcional.",
  },
  {
    pergunta: "Quanto custa o serviço da Prática?",
    resposta:
      "Depende da quantidade de estagiários e do que você precisa. Chame no WhatsApp e receba uma proposta sem compromisso.",
  },
];

const FAQ_ESTUDANTE = [
  {
    pergunta: "Preciso pagar alguma coisa para me cadastrar?",
    resposta:
      "Não. O cadastro, a participação nos processos seletivos e a contratação são 100% gratuitos para o estudante.",
  },
  {
    pergunta: "Como sei se uma vaga é compatível com o meu curso?",
    resposta:
      "No cadastro, você informa o curso, o período e o turno das aulas. Só chamamos para vagas que respeitam esses dados e a Lei do Estágio.",
  },
  {
    pergunta: "O estágio conta como experiência profissional?",
    resposta:
      "Sim. O estágio é uma atividade educativa supervisionada que prepara você para o mercado de trabalho e pode ser incluído no currículo.",
  },
  {
    pergunta: "Tenho direito a férias?",
    resposta:
      "Sim. O estagiário tem direito a 30 dias de recesso a cada 12 meses de estágio (ou proporcional), de preferência durante as férias escolares. Quando há bolsa, o recesso é remunerado.",
  },
  {
    pergunta: "E se eu precisar trancar ou mudar de curso?",
    resposta:
      "Fale com a gente. O estágio exige matrícula e frequência regulares, então qualquer mudança precisa ser comunicada para ajustarmos o contrato ou formalizarmos o encerramento.",
  },
];

export default function EstagioPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0D243B] text-white">
        {/* Background decorativo */}
        <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-60 -top-60 h-[700px] w-[700px] rounded-full bg-[#87B1D7]/8 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#1FAF5A]/6 blur-3xl" />
          <div className="absolute right-1/3 top-1/4 h-80 w-80 rounded-full border border-white/[0.03]" />
          <div className="absolute left-20 top-32 h-40 w-40 rounded-full border border-[#87B1D7]/[0.06]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D243B] via-[#0D243B]/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-32 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Conteúdo esquerdo */}
            <div className="flex flex-col gap-7">
              <Reveal direction="down">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#87B1D7]/30 bg-[#87B1D7]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#87B1D7]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#87B1D7]" aria-hidden="true" />
                  Programa de Estágio
                </span>
              </Reveal>

              <SplitText
                text="Estágio sem burocracia, do anúncio ao contrato"
                tag="h1"
                textAlign="left"
                className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
                splitType="words"
                delay={25}
                duration={0.7}
              />

              <Reveal delay={0.15}>
                <p className="max-w-lg text-lg leading-relaxed text-[#B9CBDD] sm:text-xl">
                  Do anúncio ao contrato assinado: seleção, seguro, integração e gestão completa do recesso.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-4 pt-1">
                  <a
                    href={WHATSAPP_ESTAGIO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#87B1D7] px-8 text-sm font-bold uppercase tracking-wide text-[#0D243B] transition-all hover:bg-[#a3c5e3] hover:shadow-lg hover:shadow-[#87B1D7]/25"
                  >
                    Quero contratar estagiário
                  </a>
                  <a
                    href="#formularios"
                    className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white/50 hover:bg-white/5"
                  >
                    Sou estudante
                  </a>
                </div>
              </Reveal>

              {/* Mini badges de confiança */}
              <Reveal delay={0.35}>
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-xs font-medium text-[#B9CBDD]/70">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Lei 11.788/2008
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Seguro obrigatório incluso
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Gestão completa do recesso
                  </span>
                </div>
              </Reveal>
            </div>

            {/* GIF lado direito */}
            <Reveal direction="left" delay={0.2}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Glow atrás do GIF */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#87B1D7]/20 via-[#87B1D7]/10 to-transparent blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
                  <img
                    src="https://cdn.dribbble.com/userupload/32144834/file/original-1f3c6796fbe16ccabe3f07be227f51d9.gif"
                    alt="Ilustração animada de estágio e contratação"
                    className="w-full object-cover"
                    loading="eager"
                  />
                  {/* Overlay sutil para harmonizar com o tema escuro */}
                  <div className="pointer-events-none absolute inset-0 bg-[#0D243B]/10" aria-hidden="true" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PARA EMPRESAS */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <AbstractBG />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Para empresas
              </p>
            </Reveal>
            <SplitText
              text="Contrate estagiários sem dor de cabeça"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {BENEFICIOS_EMPRESA.map((b, i) => (
              <Reveal key={b.titulo} delay={i * 0.1}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-deep">
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

      {/* COMO FUNCIONA A CONTRATAÇÃO */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
        <AbstractBG className="opacity-60" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Como funciona
              </p>
            </Reveal>
            <SplitText
              text="Do anúncio da vaga ao fim do contrato"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {ETAPAS_CONTRATACAO.map((e, i) => (
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

      {/* PARA ESTUDANTES */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <AbstractBG />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Para estudantes
              </p>
            </Reveal>
            <SplitText
              text="Cadastre-se e concorra a vagas gratuitas"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {BENEFICIOS_ESTUDANTE.map((b, i) => (
              <Reveal key={b.titulo} delay={i * 0.1}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-deep">
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

      {/* FORMULÁRIOS INTERATIVOS (CLIENT COMPONENT) */}
      <div id="formularios">
        <EstagioSection />
      </div>

      {/* FAQ EMPRESA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Dúvidas da empresa
              </p>
            </Reveal>
            <SplitText
              text="O básico da Lei do Estágio, sem juridiquês"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 space-y-4">
            {FAQ_EMPRESA.map((faq, i) => (
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

      {/* FAQ ESTUDANTE */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Dúvidas do estudante
              </p>
            </Reveal>
            <SplitText
              text="Antes de se candidatar"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 space-y-4">
            {FAQ_ESTUDANTE.map((faq, i) => (
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
                Pronto para contratar o seu estagiário?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-[#B9CBDD]">
                Fale com um especialista da Prática e receba uma proposta
                sem compromisso. Atendimento de segunda a sexta, das 08h
                às 18h.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={WHATSAPP_ESTAGIO}
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