import type { Metadata } from "next";
import Header from "../../Header";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import SplitText from "../../components/SplitText";
import AbstractBG from "../../components/AbstractBG";

export const metadata: Metadata = {
  title:
    "Certificado Digital e-CPF e e-CNPJ em Goiânia | Prática Soluções Empresariais",
  description:
    "Certificado digital e-CPF e e-CNPJ, modelos A1 e A3, emitido no mesmo dia com validação online ou presencial. Suporte humano na escolha, na emissão e na instalação.",
  keywords: [
    "certificado digital",
    "e-CPF",
    "e-CNPJ",
    "certificado A1",
    "certificado A3",
    "certificado digital Goiânia",
    "renovação de certificado digital",
    "certificado para NF-e",
    "ICP-Brasil",
  ],
};

const WHATSAPP_CERT =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%3A%20Certificado%20Digital.";

const MODELOS = [
  {
    titulo: "e-CPF (A1 ou A3)",
    desc: "Para pessoa física assinar documentos, acessar sistemas públicos e emitir notas como autônomo.",
  },
  {
    titulo: "e-CNPJ (A1 ou A3)",
    desc: "Para a empresa emitir NF-e, NFC-e, CT-e, acessar o e-CAC e enviar declarações obrigatórias.",
  },
  {
    titulo: "Modelo A1 — Arquivo",
    desc: "Fica instalado no computador ou no servidor. Ideal para quem usa emissor de notas ou sistema contábil.",
  },
  {
    titulo: "Modelo A3 — Token ou cartão",
    desc: "Portátil e com validade em qualquer máquina. Ideal para quem precisa levar o certificado consigo.",
  },
];

const USOS = [
  {
    titulo: "Notas fiscais",
    desc: "Emitir NF-e, NFC-e e CT-e, que precisam ser assinadas digitalmente.",
  },
  {
    titulo: "Receita Federal",
    desc: "Acessar o e-CAC, consultar pendências e enviar declarações.",
  },
  {
    titulo: "eSocial e FGTS",
    desc: "Enviar os eventos do eSocial e acessar o FGTS Digital pela empresa.",
  },
  {
    titulo: "Contratos e documentos",
    desc: "Assinar com validade jurídica, sem imprimir nem ir ao cartório.",
  },
  {
    titulo: "Licitações",
    desc: "Participar de pregões eletrônicos e portais de compras públicas.",
  },
  {
    titulo: "Junta Comercial e prefeituras",
    desc: "Assinar atos da empresa e acessar sistemas estaduais e municipais.",
  },
];

const ETAPAS = [
  {
    titulo: "Escolha do modelo",
    desc: "Você conta para que vai usar e indicamos o tipo e o modelo certos.",
  },
  {
    titulo: "Documentos",
    desc: "Você envia os documentos pessoais e, no e-CNPJ, os da empresa.",
  },
  {
    titulo: "Validação",
    desc: "Confirmamos sua identidade por videoconferência ou presencialmente.",
  },
  {
    titulo: "Emissão",
    desc: "O certificado é emitido e liberado para uso no mesmo dia.",
  },
  {
    titulo: "Instalação",
    desc: "Ajudamos a instalar no computador ou a configurar no emissor de notas.",
  },
];

const FAQ = [
  {
    pergunta: "Qual a diferença entre e-CPF e e-CNPJ?",
    resposta:
      "O e-CPF identifica a pessoa física e o e-CNPJ identifica a empresa. Para emitir notas e cumprir as obrigações da empresa, o normal é o e-CNPJ.",
  },
  {
    pergunta: "A1 ou A3: qual escolher?",
    resposta:
      "Se você vai usar o certificado em um emissor de notas ou em um sistema que assina automaticamente, o A1 costuma ser o mais prático. Se prefere levar o certificado com você em um dispositivo físico, o A3 é a opção. Indicamos o melhor para o seu uso.",
  },
  {
    pergunta: "Em quanto tempo o certificado fica pronto?",
    resposta:
      "Com os documentos corretos, a emissão sai no mesmo dia da validação.",
  },
  {
    pergunta: "Preciso ir pessoalmente?",
    resposta:
      "Não necessariamente. A validação pode ser feita por videoconferência, quando o seu cadastro permite, ou presencialmente.",
  },
  {
    pergunta: "Quais documentos preciso enviar?",
    resposta:
      "Para o e-CPF, um documento oficial com foto, como RG ou CNH. Para o e-CNPJ, também o ato constitutivo atualizado da empresa (contrato social, requerimento de empresário ou estatuto) e o documento do responsável legal. Confirmamos a lista completa no atendimento.",
  },
  {
    pergunta: "O MEI precisa de certificado digital?",
    resposta:
      "Nem sempre. Muitos serviços aceitam a conta gov.br. O certificado passa a ser necessário, por exemplo, quando o MEI emite NF-e por um emissor próprio, porque a nota precisa ser assinada digitalmente.",
  },
  {
    pergunta: "O que acontece quando o certificado vence?",
    resposta:
      "Ele deixa de funcionar para assinar notas e acessar os sistemas. Por isso vale renovar antes do vencimento.",
  },
];

const CERT_PANEL = {
  tipo: "e-CNPJ A1",
  titular: "Prática Soluções Empresariais LTDA",
  cnpj: "00.000.000/0001-00",
  validade: "22/10/2027",
  autoridade: "ICP-Brasil",
  etapas: ["Docs enviados", "Validação OK", "Emitido", "Instalado"],
};

export default function CertificadoDigitalPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0D243B] pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(135,177,215,0.25),transparent_55%),radial-gradient(circle_at_15%_85%,rgba(31,175,90,0.1),transparent_50%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Reveal direction="down">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#87B1D7]">
                  Certificado Digital
                </p>
              </Reveal>
              <SplitText
                text="e-CPF e e-CNPJ emitidos no mesmo dia, com suporte humano"
                tag="h1"
                textAlign="left"
                className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                splitType="words"
                delay={25}
                duration={0.7}
              />
              <Reveal delay={0.15}>
                <p className="max-w-xl text-lg text-[#B9CBDD]">
                  Modelos A1 e A3 com validação online ou presencial. Ajudamos
                  na escolha, na emissão e na instalação no seu computador ou
                  emissor de notas.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={WHATSAPP_CERT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-[#87B1D7] px-6 text-sm font-bold uppercase tracking-wide text-[#0D243B] transition-colors hover:bg-[#a3c5e3]"
                  >
                    Emitir meu certificado
                  </a>
                  <a
                    href="#modelos"
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-[#244563] px-6 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-[#87B1D7] hover:text-[#87B1D7]"
                  >
                    Ver modelos e preços
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.2}>
              <div className="overflow-hidden rounded-xl border border-[#244563] bg-gradient-to-br from-[#14314F] to-[#1D4B7A] p-6 shadow-2xl">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#87B1D7]">
                      {CERT_PANEL.tipo}
                    </span>
                    <p className="mt-1 text-xl font-extrabold text-white">
                      {CERT_PANEL.titular}
                    </p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      CNPJ
                    </dt>
                    <dd className="mt-0.5 font-bold text-white">
                      {CERT_PANEL.cnpj}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      Validade
                    </dt>
                    <dd className="mt-0.5 font-bold text-white">
                      {CERT_PANEL.validade}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      Autoridade
                    </dt>
                    <dd className="mt-0.5 font-bold text-white">
                      {CERT_PANEL.autoridade}
                    </dd>
                  </div>
                </dl>
                <div className="mt-5 grid grid-cols-4 gap-2">
                  {CERT_PANEL.etapas.map((etapa, i) => (
                    <div key={etapa} className="text-center">
                      <div className="mx-auto mb-1.5 h-1.5 w-full rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-bold uppercase tracking-wide text-white/80">
                        {etapa}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MODELOS */}
      <section id="modelos" className="relative overflow-hidden py-20 sm:py-24">
        <AbstractBG />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Modelos disponíveis
              </p>
            </Reveal>
            <SplitText
              text="e-CPF, e-CNPJ, A1 e A3: o certo para o seu caso"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {MODELOS.map((m, i) => (
              <Reveal key={m.titulo} delay={i * 0.1}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-deep">
                    {m.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {m.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUE SERVE */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
        <AbstractBG />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal direction="down">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                Para que serve
              </p>
            </Reveal>
            <SplitText
              text="Uma assinatura com validade jurídica"
              tag="h2"
              className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl"
              splitType="chars"
              delay={30}
              duration={0.7}
            />
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg text-slate-600">
                O certificado digital ICP-Brasil comprova quem assinou e que o
                documento não foi alterado, e dá acesso aos serviços que exigem
                identificação segura.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {USOS.map((u, i) => (
              <Reveal key={u.titulo} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-deep">
                    {u.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {u.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* NFe promo */}
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="max-w-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-brand">
                  Emissão de NFe
                </p>
                <h3 className="mt-2 text-xl font-bold text-brand-deep">
                  Já tem o certificado? Emita suas notas com a gente
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Use a plataforma online da Prática para emitir notas fiscais
                  eletrônicas de forma simples.
                </p>
              </div>
              <a
                href="https://easy-nfe-twam.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-brand px-6 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-deep"
              >
                Acessar plataforma
              </a>
            </div>
          </Reveal>
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
              text="Do pedido à instalação, no mesmo dia"
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

      {/* RENOVAÇÃO CALLOUT */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border-l-[6px] border-brand bg-white p-8 shadow-sm sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
                    Renovação
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-brand-deep">
                    Certificado perto de vencer? Renove antes
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Quando o certificado vence, a emissão de notas e o acesso
                    aos sistemas param até um novo ser emitido. Programe a
                    renovação com antecedência e evite ficar sem faturar.
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Confira a data de validade no próprio certificado ou no emissor de notas",
                    "Fale com a gente com alguns dias de folga",
                    "Emitimos o novo e ajudamos a trocar no seu sistema",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-700">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
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
              text="Antes de emitir"
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
                Emita seu certificado digital hoje
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-[#B9CBDD]">
                Fale com a gente no WhatsApp e tire suas dúvidas antes de
                comprar. Atendimento de segunda a sexta, das 08h às 18h.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={WHATSAPP_CERT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-[#87B1D7] px-8 text-base font-bold tracking-wide text-[#0D243B] transition-colors hover:bg-[#a3c5e3]"
              >
                Emitir meu certificado
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