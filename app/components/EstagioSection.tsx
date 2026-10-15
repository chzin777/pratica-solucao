"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";

const WHATSAPP = "5562982103699";
const MAX_MB = 5;

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (!d) return "";
  let out = "(" + d.slice(0, 2);
  if (d.length < 3) return out;
  out += ") ";
  const mid = d.length > 10 ? 5 : 4;
  out += d.slice(2, 2 + mid);
  if (d.length > 2 + mid) out += "-" + d.slice(2 + mid);
  return out;
}

export default function EstagioSection() {
  const [tab, setTab] = useState<"estudante" | "empresa">("estudante");
  const [enviado, setEnviado] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  // Check hash on mount and hashchange
  useEffect(() => {
    const checkHash = () => {
      const h = (location.hash || "").slice(1);
      if (h === "estagio-empresa") setTab("empresa");
      else if (h === "estagio-estudante") setTab("estudante");
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);

    // Check if returning from form submission
    const params = new URLSearchParams(location.search);
    if (params.get("estagio") === "enviado") {
      setTab("estudante");
      setEnviado(true);
      params.delete("estagio");
      const q = params.toString();
      const newUrl =
        location.pathname + (q ? "?" + q : "") + "#estagio";
      history.replaceState(null, "", newUrl);
    }

    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const switchTab = (t: "estudante" | "empresa") => {
    setTab(t);
    history.replaceState(null, "", `#estagio-${t}`);
    setTimeout(() => {
      rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 30);
  };

  // Student form file validation
  const [cvError, setCvError] = useState("");
  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    let msg = "";
    if (f) {
      const okType = /\.(pdf|docx?)$/i.test(f.name);
      if (!okType) msg = "Envie o currículo em PDF ou Word (.doc ou .docx).";
      else if (f.size > MAX_MB * 1024 * 1024)
        msg = `O arquivo tem ${(f.size / 1048576).toFixed(1).replace(".", ",")} MB. O limite é ${MAX_MB} MB. Tente salvar o PDF em tamanho menor.`;
    }
    setCvError(msg);
    e.target.setCustomValidity(msg);
  };

  // Company form WhatsApp redirect
  const [empError, setEmpError] = useState("");
  const handleEmpresaSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nome = String(fd.get("nome") || "").trim();
    const empresa = String(fd.get("empresa") || "").trim();
    if (!nome || !empresa) {
      setEmpError("Preencha o seu nome e o nome da empresa.");
      return;
    }
    setEmpError("");
    const linhas = ["Olá! Quero contratar estagiário(s) pela Prática.", ""];
    (
      [
        ["nome", "Nome"],
        ["empresa", "Empresa"],
        ["cidade", "Cidade"],
        ["vagas", "Quantidade"],
        ["area", "Área da vaga"],
        ["escolhido", "Estagiário já escolhido"],
        ["mensagem", "Mensagem"],
      ] as const
    ).forEach(([key, label]) => {
      const v = String(fd.get(key) || "").trim();
      if (v) linhas.push(`*${label}:* ${v}`);
    });
    const url =
      `https://wa.me/${WHATSAPP}?text=` + encodeURIComponent(linhas.join("\n"));
    const w = window.open(url, "_blank");
    if (!w) location.href = url;
  };

  return (
    <section
      id="estagio"
      ref={rootRef}
      className="pe-section scroll-mt-20 bg-[#f4f7fb] py-20 sm:py-24"
    >
      {/* Scoped styles */}
      <style>{`
        .pe-section { font-family: inherit; color: #334255; line-height: 1.6; }
        .pe-section *, .pe-section *::before, .pe-section *::after { box-sizing: border-box; }
        .pe-section h2, .pe-section h3, .pe-section h4 { color: #0D243B; margin: 0; line-height: 1.2; font-weight: 800; }
        .pe-section p { margin: 0; }
        .pe-section a:not(.pe-btn) { color: #2f6aa3; }

        .pe-head { text-align: center; max-width: 860px; margin: 0 auto 40px; }
        .pe-eyebrow { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: #2f6aa3; background: #eaf2fa; border: 1px solid #d3e3f3; padding: 6px 14px; border-radius: 999px; margin-bottom: 16px; }
        .pe-section h2.pe-title { font-size: clamp(28px, 4.2vw, 42px); margin-bottom: 16px; letter-spacing: -.01em; }
        .pe-lead { font-size: 17px; margin: 0 auto 22px; max-width: 800px; }
        .pe-promise { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 28px; font-weight: 700; color: #0D243B; font-size: 15px; }
        .pe-promise span { display: inline-flex; align-items: center; gap: 8px; }

        .pe-tabs { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 880px; margin: 0 auto 36px; }
        .pe-tab { appearance: none; font: inherit; text-align: left; cursor: pointer; display: flex; gap: 16px; align-items: flex-start; padding: 20px 22px; border-radius: 18px; background: #fff; color: #334255; border: 2px solid #dbe4ee; box-shadow: 0 6px 20px rgba(13,36,59,.05); transition: border-color .2s, background .2s, transform .2s, box-shadow .2s; }
        .pe-tab:hover { border-color: #87B1D7; transform: translateY(-2px); box-shadow: 0 10px 26px rgba(13,36,59,.09); }
        .pe-tab:focus-visible { outline: 3px solid #87B1D7; outline-offset: 3px; }
        .pe-tab-icon { flex: none; width: 48px; height: 48px; border-radius: 14px; display: grid; place-items: center; background: #eaf2fa; color: #0D243B; transition: background .2s, color .2s; }
        .pe-tab-label { display: block; font-weight: 800; font-size: 16px; letter-spacing: .06em; color: #0D243B; margin-bottom: 2px; }
        .pe-tab-sub { display: block; font-size: 14px; line-height: 1.45; color: #5f6f82; }
        .pe-tab[aria-selected="true"] { background: #0D243B; border-color: #0D243B; box-shadow: 0 14px 30px rgba(13,36,59,.22); }
        .pe-tab[aria-selected="true"] .pe-tab-label { color: #fff; }
        .pe-tab[aria-selected="true"] .pe-tab-sub { color: #c9dbee; }
        .pe-tab[aria-selected="true"] .pe-tab-icon { background: rgba(135,177,215,.18); color: #87B1D7; }

        .pe-panel { animation: peFade .35s ease; }
        @keyframes peFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .pe-grid { display: grid; grid-template-columns: 1fr; gap: 28px; align-items: start; }
        @media (min-width: 920px) { .pe-grid { grid-template-columns: 1fr 1.05fr; gap: 40px; } }
        .pe-card { background: #fff; border: 1px solid #dbe4ee; border-radius: 20px; padding: 28px; box-shadow: 0 12px 32px rgba(13,36,59,.06); }
        .pe-info h3 { font-size: clamp(24px, 3vw, 30px); margin-bottom: 12px; }
        .pe-info > p { font-size: 16px; margin-bottom: 20px; }
        .pe-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; color: #14633a; background: #e3f6eb; border: 1px solid #bfe6cf; padding: 5px 12px; border-radius: 999px; margin-bottom: 14px; }
        .pe-section h4 { font-size: 17px; margin: 26px 0 12px; }

        .pe-checks { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
        .pe-checks li { position: relative; padding-left: 32px; }
        .pe-checks li::before { content: ""; position: absolute; left: 0; top: 2px; width: 22px; height: 22px; border-radius: 50%; background: #dcebf8 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230D243B' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12.5l4.5 4.5L19 7.5'/%3E%3C/svg%3E") center/13px no-repeat; }
        .pe-checks.two { grid-template-columns: 1fr; }
        @media (min-width: 560px) { .pe-checks.two { grid-template-columns: 1fr 1fr; gap: 10px 22px; } }

        .pe-mini-steps { list-style: none; padding: 0; margin: 0; display: grid; gap: 14px; counter-reset: pe; }
        .pe-mini-steps li { counter-increment: pe; position: relative; padding-left: 46px; min-height: 32px; }
        .pe-mini-steps li::before { content: counter(pe); position: absolute; left: 0; top: -2px; width: 32px; height: 32px; border-radius: 50%; background: #0D243B; color: #fff; font-weight: 800; font-size: 14px; display: grid; place-items: center; }

        .pe-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 6px; }
        .pe-chip { background: #fff; border: 1px solid #dbe4ee; border-radius: 999px; padding: 6px 12px; font-size: 13px; font-weight: 700; color: #0D243B; }

        .pe-switch { margin-top: 24px; font-size: 15px; }
        .pe-switch a { font-weight: 700; text-decoration: none; }
        .pe-switch a:hover { text-decoration: underline; }

        .pe-form-title { font-size: 21px; margin-bottom: 4px; }
        .pe-form-sub { font-size: 14px; color: #5f6f82; margin-bottom: 20px; }
        .pe-form { display: grid; gap: 14px; }
        .pe-row { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 560px) { .pe-row.two { grid-template-columns: 1fr 1fr; } }
        .pe-field label, .pe-fieldset legend { display: block; font-size: 14px; font-weight: 700; color: #0D243B; margin-bottom: 6px; padding: 0; }
        .pe-req { color: #b42318; }
        .pe-field input, .pe-field select, .pe-field textarea { width: 100%; font: inherit; font-size: 16px; color: #334255; background: #fff; border: 1px solid #c9d6e3; border-radius: 10px; padding: 11px 14px; transition: border-color .15s, box-shadow .15s; }
        .pe-field textarea { min-height: 92px; resize: vertical; }
        .pe-field input:focus, .pe-field select:focus, .pe-field textarea:focus { outline: none; border-color: #2f6aa3; box-shadow: 0 0 0 3px rgba(135,177,215,.35); }
        .pe-field input[type=file] { padding: 10px; background: #eaf2fa; border-style: dashed; cursor: pointer; font-size: 14px; }
        .pe-field input[type=file]::file-selector-button { font: inherit; font-weight: 700; font-size: 14px; border: 0; border-radius: 8px; background: #0D243B; color: #fff; padding: 8px 14px; margin-right: 12px; cursor: pointer; }
        .pe-hint { font-size: 13px; color: #5f6f82; margin-top: 6px; }
        .pe-error { font-size: 13px; color: #b42318; margin-top: 6px; font-weight: 600; }
        .pe-fieldset { border: 0; margin: 0; padding: 0; }
        .pe-radios { display: flex; flex-wrap: wrap; gap: 8px; }
        .pe-radios label { display: inline-flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 600; color: #334255; border: 1px solid #c9d6e3; border-radius: 10px; padding: 9px 14px; cursor: pointer; margin: 0; }
        .pe-radios label:has(input:checked) { border-color: #0D243B; background: #eaf2fa; }
        .pe-radios input { accent-color: #0D243B; width: 16px; height: 16px; margin: 0; }
        .pe-consent { display: flex; gap: 10px; align-items: flex-start; font-size: 13px; line-height: 1.5; color: #5f6f82; }
        .pe-consent input { accent-color: #0D243B; width: 18px; height: 18px; margin-top: 1px; flex: none; }

        .pe-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 15px 24px; border-radius: 12px; font: inherit; font-weight: 800; font-size: 15px; letter-spacing: .04em; text-transform: uppercase; border: 0; cursor: pointer; text-decoration: none; transition: background .2s, transform .2s; }
        .pe-btn:hover { transform: translateY(-1px); }
        .pe-btn:focus-visible { outline: 3px solid #87B1D7; outline-offset: 3px; }
        .pe-btn[disabled] { opacity: .7; cursor: wait; transform: none; }
        .pe-btn-primary { background: #0D243B; color: #fff; }
        .pe-btn-primary:hover { background: #173a5e; }
        .pe-btn-wa { background: #1a9e4b; color: #fff; }
        .pe-btn-wa:hover { background: #158540; }
        .pe-btn-block { width: 100%; }
        .pe-note { font-size: 13px; color: #5f6f82; text-align: center; }

        .pe-alert { background: #e7f7ee; border: 1px solid #b9e3c9; color: #14532d; padding: 14px 16px; border-radius: 12px; margin-bottom: 18px; font-size: 15px; }
        .pe-alert strong { display: block; font-size: 16px; }

        .pe-block { margin-top: 56px; }
        .pe-block-head { text-align: center; max-width: 680px; margin: 0 auto 26px; }
        .pe-block-head h3 { font-size: clamp(22px, 2.8vw, 28px); margin-bottom: 8px; }
        .pe-block-head p { color: #5f6f82; }
        .pe-steps { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 780px) { .pe-steps { grid-template-columns: repeat(3, 1fr); } }
        .pe-step { background: #fff; border: 1px solid #dbe4ee; border-radius: 18px; padding: 24px; }
        .pe-step-n { display: inline-block; font-size: 13px; font-weight: 800; letter-spacing: .1em; color: #2f6aa3; margin-bottom: 8px; }
        .pe-step h4 { margin: 0 0 8px; font-size: 18px; }
        .pe-step p { font-size: 15px; }

        .pe-faq { max-width: 840px; margin: 0 auto; background: #fff; border: 1px solid #dbe4ee; border-radius: 20px; padding: 6px 26px; }
        .pe-faq details { border-bottom: 1px solid #dbe4ee; }
        .pe-faq details:last-child { border-bottom: 0; }
        .pe-faq summary { cursor: pointer; list-style: none; padding: 18px 40px 18px 0; font-weight: 700; color: #0D243B; position: relative; font-size: 16px; }
        .pe-faq summary::-webkit-details-marker { display: none; }
        .pe-faq summary::after { content: "+"; position: absolute; right: 2px; top: 50%; transform: translateY(-50%); width: 28px; height: 28px; border-radius: 50%; background: #eaf2fa; color: #0D243B; display: grid; place-items: center; font-size: 20px; font-weight: 700; line-height: 1; }
        .pe-faq details[open] summary::after { content: "−"; }
        .pe-faq summary:focus-visible { outline: 3px solid #87B1D7; outline-offset: 2px; border-radius: 6px; }
        .pe-faq details p { padding: 0 8px 18px 0; font-size: 15px; }

        .pe-cta { margin-top: 48px; background: #0D243B; border-radius: 22px; padding: 34px 32px; display: flex; flex-wrap: wrap; gap: 22px; align-items: center; justify-content: space-between; background-image: radial-gradient(circle at 100% 0, rgba(135,177,215,.25), transparent 55%); }
        .pe-cta h3 { color: #fff; font-size: clamp(22px, 2.6vw, 27px); margin-bottom: 6px; }
        .pe-cta p { color: #c9dbee; }

        @media (max-width: 640px) {
          .pe-tabs { gap: 10px; }
          .pe-tab { flex-direction: column; gap: 10px; padding: 16px; }
          .pe-tab-icon { width: 40px; height: 40px; border-radius: 12px; }
          .pe-tab-label { font-size: 14px; }
          .pe-tab-sub { font-size: 13px; }
          .pe-card { padding: 22px 18px; }
          .pe-faq { padding: 4px 18px; }
          .pe-cta { padding: 26px 22px; }
          .pe-cta .pe-btn { width: 100%; }
        }
      `}</style>

      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        {/* Header */}
        <header className="pe-head">
          <span className="pe-eyebrow">Programa de Estágio</span>
          <h2 className="pe-title">Estágio sem burocracia, do anúncio ao contrato</h2>
          <p className="pe-lead">
            Simplificamos o estágio para empresas e estudantes. Anunciamos a vaga e fazemos toda a integração entre estudante, empresa e instituição de ensino, além da gestão completa do seguro, dos contratos e do recesso (as férias do estagiário).
          </p>
          <div className="pe-promise">
            <span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f6aa3" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M7.5 12.5l3 3 6-6"/></svg>
              Vagas gratuitas para quem procura estágio
            </span>
            <span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f6aa3" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M7.5 12.5l3 3 6-6"/></svg>
              Contratação sem burocracia para quem quer estagiários
            </span>
          </div>
        </header>

        {/* Tabs */}
        <div className="pe-tabs" role="tablist" aria-label="Escolha o seu perfil">
          <button
            type="button"
            className="pe-tab"
            role="tab"
            aria-selected={tab === "estudante"}
            tabIndex={tab === "estudante" ? 0 : -1}
            onClick={() => switchTab("estudante")}
          >
            <span className="pe-tab-icon" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/><path d="M22 10v5"/></svg>
            </span>
            <span>
              <span className="pe-tab-label">SOU ESTUDANTE</span>
              <span className="pe-tab-sub">Quero me candidatar a vagas de estágio. Cadastro 100% gratuito.</span>
            </span>
          </button>
          <button
            type="button"
            className="pe-tab"
            role="tab"
            aria-selected={tab === "empresa"}
            tabIndex={tab === "empresa" ? 0 : -1}
            onClick={() => switchTab("empresa")}
          >
            <span className="pe-tab-icon" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>
            </span>
            <span>
              <span className="pe-tab-label">SOU EMPRESÁRIO</span>
              <span className="pe-tab-sub">Quero contratar estagiários sem burocracia.</span>
            </span>
          </button>
        </div>

        {/* ===== PANEL: ESTUDANTE ===== */}
        {tab === "estudante" && (
          <div className="pe-panel" role="tabpanel">
            <div className="pe-grid">
              <div className="pe-info">
                <span className="pe-badge">Cadastro 100% gratuito</span>
                <h3>Quero me candidatar a vagas de estágio</h3>
                <p>Cadastre-se uma vez e concorra às vagas de estágio que a Prática divulga para empresas de Goiânia e região. Você não paga nada, nem no cadastro, nem na contratação.</p>
                <ul className="pe-checks">
                  <li>Cadastro e participação totalmente gratuitos</li>
                  <li>Vagas compatíveis com o seu curso e com o horário das suas aulas</li>
                  <li>Contrato dentro da Lei do Estágio, com seguro e recesso garantidos</li>
                  <li>Acompanhamento da Prática do início ao fim do estágio</li>
                </ul>
                <h4>Como funciona</h4>
                <ol className="pe-mini-steps">
                  <li>Preencha o cadastro e anexe o seu currículo.</li>
                  <li>Quando surgir uma vaga com o seu perfil, chamamos você no WhatsApp.</li>
                  <li>Aprovado na entrevista, a Prática cuida do contrato com a empresa e com a sua instituição de ensino.</li>
                </ol>
                <p className="pe-switch">É empresário e quer contratar? <a href="#estagio-empresa" onClick={(e) => { e.preventDefault(); switchTab("empresa"); }}>Veja como funciona para empresas →</a></p>
              </div>

              <div className="pe-card">
                {enviado && (
                  <div className="pe-alert" role="status">
                    <strong>Cadastro enviado com sucesso!</strong>
                    Recebemos seus dados e o seu currículo. Quando surgir uma vaga com o seu perfil, entraremos em contato.
                  </div>
                )}
                <h3 className="pe-form-title">Cadastro de estudante</h3>
                <p className="pe-form-sub">Campos com <span className="pe-req">*</span> são obrigatórios.</p>

                <form
                  className="pe-form"
                  action="https://formsubmit.co/contato@praticasolucao.com.br"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <input type="hidden" name="_subject" value="Novo cadastro de estudante — Programa de Estágio" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://www.praticasolucao.com.br/?estagio=enviado#estagio" />
                  <input type="hidden" name="_autoresponse" value="Olá! Recebemos o seu cadastro no Programa de Estágio da Prática Soluções Empresariais. Quando surgir uma vaga compatível com o seu perfil, entraremos em contato pelo WhatsApp. Boa sorte!" />
                  <div className="sr-only" aria-hidden="true"><input type="text" name="_honey" tabIndex={-1} autoComplete="off" /></div>

                  <div className="pe-field">
                    <label htmlFor="pe-nome">Nome completo <span className="pe-req">*</span></label>
                    <input id="pe-nome" name="Nome completo" type="text" autoComplete="name" required />
                  </div>
                  <div className="pe-row two">
                    <div className="pe-field">
                      <label htmlFor="pe-email">E-mail <span className="pe-req">*</span></label>
                      <input id="pe-email" name="email" type="email" autoComplete="email" required />
                    </div>
                    <div className="pe-field">
                      <label htmlFor="pe-whats">WhatsApp <span className="pe-req">*</span></label>
                      <input
                        id="pe-whats"
                        name="WhatsApp"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="(62) 9 0000-0000"
                        required
                        onInput={(e) => { (e.target as HTMLInputElement).value = maskPhone((e.target as HTMLInputElement).value); }}
                      />
                    </div>
                  </div>
                  <div className="pe-row two">
                    <div className="pe-field">
                      <label htmlFor="pe-cidade">Cidade onde mora <span className="pe-req">*</span></label>
                      <input id="pe-cidade" name="Cidade" type="text" autoComplete="address-level2" placeholder="Ex.: Goiânia" required />
                    </div>
                    <div className="pe-field">
                      <label htmlFor="pe-nivel">Nível de ensino <span className="pe-req">*</span></label>
                      <select id="pe-nivel" name="Nível de ensino" required defaultValue="">
                        <option value="" disabled>Selecione</option>
                        <option>Ensino superior</option>
                        <option>Curso técnico</option>
                        <option>Ensino médio</option>
                      </select>
                    </div>
                  </div>
                  <div className="pe-row two">
                    <div className="pe-field">
                      <label htmlFor="pe-curso">Curso <span className="pe-req">*</span></label>
                      <input id="pe-curso" name="Curso" type="text" placeholder="Ex.: Ciências Contábeis" required />
                    </div>
                    <div className="pe-field">
                      <label htmlFor="pe-ies">Instituição de ensino <span className="pe-req">*</span></label>
                      <input id="pe-ies" name="Instituição de ensino" type="text" required />
                    </div>
                  </div>
                  <div className="pe-row two">
                    <div className="pe-field">
                      <label htmlFor="pe-periodo">Período / ano atual <span className="pe-req">*</span></label>
                      <input id="pe-periodo" name="Período atual" type="text" placeholder="Ex.: 3º período" required />
                    </div>
                    <div className="pe-field">
                      <label htmlFor="pe-turno">Turno das aulas <span className="pe-req">*</span></label>
                      <select id="pe-turno" name="Turno das aulas" required defaultValue="">
                        <option value="" disabled>Selecione</option>
                        <option>Matutino</option>
                        <option>Vespertino</option>
                        <option>Noturno</option>
                        <option>EAD</option>
                      </select>
                    </div>
                  </div>
                  <div className="pe-row two">
                    <div className="pe-field">
                      <label htmlFor="pe-area">Área de interesse</label>
                      <select id="pe-area" name="Área de interesse" defaultValue="">
                        <option value="">Selecione</option>
                        <option>Administrativo</option>
                        <option>Financeiro / Contábil / Fiscal</option>
                        <option>Departamento Pessoal / RH</option>
                        <option>Comercial / Vendas</option>
                        <option>Marketing</option>
                        <option>Tecnologia</option>
                        <option>Outra</option>
                      </select>
                    </div>
                    <div className="pe-field">
                      <label htmlFor="pe-disp">Disponibilidade para estagiar</label>
                      <select id="pe-disp" name="Disponibilidade" defaultValue="">
                        <option value="">Selecione</option>
                        <option>Manhã</option>
                        <option>Tarde</option>
                        <option>Manhã ou tarde</option>
                      </select>
                    </div>
                  </div>
                  <div className="pe-field">
                    <label htmlFor="pe-cv">Currículo <span className="pe-req">*</span></label>
                    <input
                      id="pe-cv"
                      name="Currículo"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      required
                      onChange={handleCvChange}
                    />
                    <p className="pe-hint">PDF ou Word, até {MAX_MB} MB.</p>
                    {cvError && <p className="pe-error">{cvError}</p>}
                  </div>
                  <div className="pe-field">
                    <label htmlFor="pe-msg">Quer contar algo sobre você? (opcional)</label>
                    <textarea id="pe-msg" name="Mensagem" placeholder="Experiências, cursos, o que você procura no estágio..." />
                  </div>
                  <label className="pe-consent">
                    <input type="checkbox" name="Autorização LGPD" value="Sim, autorizo" required />
                    <span>Autorizo a Prática Soluções Empresariais a guardar meus dados e a compartilhar meu currículo com empresas parceiras, apenas para fins de recrutamento de estágio. <span className="pe-req">*</span></span>
                  </label>
                  <button type="submit" className="pe-btn pe-btn-primary pe-btn-block">Enviar meu cadastro</button>
                  <p className="pe-note">Cadastro 100% gratuito. Você não paga nada para participar.</p>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ===== PANEL: EMPRESA ===== */}
        {tab === "empresa" && (
          <div className="pe-panel" role="tabpanel">
            <div className="pe-grid">
              <div className="pe-info">
                <h3>Contrate estagiários sem burocracia</h3>
                <p>Você conta o perfil que precisa e a Prática faz o resto: divulga a vaga, pré-seleciona os candidatos e cuida de toda a parte legal do estágio, da assinatura do contrato ao encerramento, conforme a Lei do Estágio (Lei 11.788/2008).</p>
                <div className="pe-chips">
                  <span className="pe-chip">Contratação 100% online</span>
                  <span className="pe-chip">Sem multa no encerramento</span>
                  <span className="pe-chip">Sem FGTS e 13º sobre a bolsa</span>
                  <span className="pe-chip">Atendimento humano no WhatsApp</span>
                </div>
                <h4>A Prática cuida de tudo isso por você</h4>
                <ul className="pe-checks two">
                  <li>Anúncio da vaga e pré-seleção</li>
                  <li>Termo de Compromisso (TCE) e aditivos</li>
                  <li>Integração com a instituição de ensino</li>
                  <li>Seguro obrigatório contra acidentes pessoais</li>
                  <li>Controle de prazos, renovações e limite de 2 anos</li>
                  <li>Controle do recesso (férias do estagiário)</li>
                  <li>Relatórios semestrais de atividades</li>
                  <li>Encerramento e acerto do recesso proporcional</li>
                </ul>
              </div>

              <div className="pe-card">
                <h3 className="pe-form-title">Quero contratar estagiários</h3>
                <p className="pe-form-sub">Preencha e fale direto com a gente no WhatsApp, com a mensagem já pronta.</p>
                <form className="pe-form" onSubmit={handleEmpresaSubmit} noValidate>
                  <div className="pe-row two">
                    <div className="pe-field">
                      <label htmlFor="pe-e-nome">Seu nome <span className="pe-req">*</span></label>
                      <input id="pe-e-nome" name="nome" type="text" autoComplete="name" required />
                    </div>
                    <div className="pe-field">
                      <label htmlFor="pe-e-empresa">Empresa <span className="pe-req">*</span></label>
                      <input id="pe-e-empresa" name="empresa" type="text" autoComplete="organization" required />
                    </div>
                  </div>
                  <div className="pe-row two">
                    <div className="pe-field">
                      <label htmlFor="pe-e-cidade">Cidade</label>
                      <input id="pe-e-cidade" name="cidade" type="text" placeholder="Ex.: Goiânia" />
                    </div>
                    <div className="pe-field">
                      <label htmlFor="pe-e-vagas">Quantos estagiários?</label>
                      <select id="pe-e-vagas" name="vagas" defaultValue="">
                        <option value="">Selecione</option>
                        <option>1 estagiário</option>
                        <option>2 a 3 estagiários</option>
                        <option>4 a 5 estagiários</option>
                        <option>Mais de 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="pe-field">
                    <label htmlFor="pe-e-area">Área da vaga</label>
                    <select id="pe-e-area" name="area" defaultValue="">
                      <option value="">Selecione</option>
                      <option>Administrativo</option>
                      <option>Financeiro / Contábil / Fiscal</option>
                      <option>Departamento Pessoal / RH</option>
                      <option>Comercial / Vendas</option>
                      <option>Marketing</option>
                      <option>Tecnologia</option>
                      <option>Outra</option>
                    </select>
                  </div>
                  <fieldset className="pe-fieldset pe-field">
                    <legend>Já tem o estagiário escolhido?</legend>
                    <div className="pe-radios">
                      <label><input type="radio" name="escolhido" value="Não, quero divulgar a vaga" defaultChecked /> Não, quero divulgar a vaga</label>
                      <label><input type="radio" name="escolhido" value="Sim, só preciso formalizar o contrato" /> Sim, só falta o contrato</label>
                    </div>
                  </fieldset>
                  <div className="pe-field">
                    <label htmlFor="pe-e-msg">Mensagem (opcional)</label>
                    <textarea id="pe-e-msg" name="mensagem" placeholder="Curso desejado, horário, valor da bolsa..." />
                  </div>
                  {empError && <p className="pe-error">{empError}</p>}
                  <button type="submit" className="pe-btn pe-btn-wa pe-btn-block">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z"/></svg>
                    Enviar pelo WhatsApp
                  </button>
                  <p className="pe-note">Você será levado ao WhatsApp da Prática com a mensagem preenchida.</p>
                </form>
              </div>
            </div>

            {/* Como funciona */}
            <div className="pe-block">
              <div className="pe-block-head">
                <h3>Como funciona a contratação</h3>
                <p>Do anúncio da vaga ao fim do contrato, cada etapa fica com a gente.</p>
              </div>
              <div className="pe-steps">
                <div className="pe-step">
                  <span className="pe-step-n">01 · DIVULGAÇÃO</span>
                  <h4>Anunciamos a sua vaga</h4>
                  <p>Você define o perfil e nós divulgamos a vaga nas redes sociais, em grupos de estudantes, nas instituições de ensino e no nosso banco de currículos.</p>
                </div>
                <div className="pe-step">
                  <span className="pe-step-n">02 · SELEÇÃO</span>
                  <h4>Você escolhe o candidato</h4>
                  <p>Enviamos candidatos pré-selecionados para você entrevistar. Já tem alguém em mente? Pulamos direto para o contrato.</p>
                </div>
                <div className="pe-step">
                  <span className="pe-step-n">03 · CONTRATO E GESTÃO</span>
                  <h4>Cuidamos de toda a burocracia</h4>
                  <p>Emitimos o TCE, fazemos a integração com a instituição de ensino, contratamos o seguro e acompanhamos recesso, prazos e renovações até o fim.</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="pe-block">
              <div className="pe-block-head">
                <h3>Dúvidas de quem vai contratar estagiário</h3>
                <p>O básico da Lei do Estágio, sem juridiquês.</p>
              </div>
              <div className="pe-faq">
                <details>
                  <summary>Quem pode contratar estagiário?</summary>
                  <p>Empresas privadas de qualquer porte, órgãos públicos e profissionais liberais de nível superior com registro no seu conselho de classe.</p>
                </details>
                <details>
                  <summary>Estagiário tem vínculo empregatício?</summary>
                  <p>Não, desde que a lei seja cumprida: matrícula e frequência regulares, Termo de Compromisso assinado por empresa, estudante e instituição de ensino, e atividades compatíveis com o curso. Se algum desses pontos falhar, o estágio pode ser reconhecido como emprego. Por isso a gestão correta dos documentos é o que protege a sua empresa.</p>
                </details>
                <details>
                  <summary>Quais são os custos obrigatórios?</summary>
                  <p>No estágio não obrigatório, a bolsa e o auxílio-transporte são obrigatórios, e a empresa precisa garantir o seguro contra acidentes pessoais. Sobre a bolsa não incidem FGTS, 13º salário nem INSS patronal.</p>
                </details>
                <details>
                  <summary>Qual é a jornada e por quanto tempo o estágio pode durar?</summary>
                  <p>Para ensino superior, técnico e ensino médio, a jornada é de até 6 horas por dia e 30 horas por semana, compatível com o horário das aulas. O estágio na mesma empresa pode durar até 2 anos, exceto para pessoa com deficiência.</p>
                </details>
                <details>
                  <summary>Quantos estagiários a minha empresa pode ter?</summary>
                  <p>Para ensino superior e ensino médio profissionalizante, não há limite. Nos demais casos, o limite depende do número de empregados: de 1 a 5 empregados, 1 estagiário; de 6 a 10, até 2; de 11 a 25, até 5; acima de 25, até 20% do quadro.</p>
                </details>
                <details>
                  <summary>Estagiário tem férias?</summary>
                  <p>Tem direito a 30 dias de recesso a cada 12 meses de estágio (ou proporcional, se o contrato for menor), de preferência durante as férias escolares. Quando há bolsa, o recesso é remunerado. A Prática controla esses prazos para você.</p>
                </details>
                <details>
                  <summary>Posso encerrar o estágio antes do prazo?</summary>
                  <p>Sim. A lei não prevê multa nem aviso prévio. Basta formalizar o encerramento e acertar o recesso proporcional, e a Prática cuida disso para você.</p>
                </details>
                <details>
                  <summary>Quanto custa o serviço da Prática?</summary>
                  <p>Depende da quantidade de estagiários e do que você precisa: só a divulgação da vaga ou a gestão completa do contrato. Chame no WhatsApp e receba uma proposta sem compromisso.</p>
                </details>
              </div>
            </div>

            {/* CTA final */}
            <div className="pe-cta">
              <div>
                <h3>Pronto para contratar o seu estagiário?</h3>
                <p>Fale com um especialista da Prática e receba uma proposta sem compromisso.</p>
              </div>
              <a
                className="pe-btn pe-btn-wa"
                href="https://wa.me/5562982103699?text=Ol%C3%A1!%20Quero%20contratar%20estagi%C3%A1rio(s)%20pela%20Pr%C3%A1tica."
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z"/></svg>
                Falar no WhatsApp
              </a>
            </div>
            <p className="pe-switch" style={{ textAlign: "center" }}>É estudante? <a href="#estagio-estudante" onClick={(e) => { e.preventDefault(); switchTab("estudante"); }}>Faça seu cadastro gratuito →</a></p>
          </div>
        )}
      </div>
    </section>
  );
}