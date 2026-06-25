// Cálculos trabalhistas — tabelas vigentes em 2026.
// Fontes: Receita Federal (Lei 15.270/2025), MTE, Previdência Social.
// Todas as funções são puras; valores monetários em reais (number).

export const SALARIO_MINIMO_2026 = 1621.0;
export const FGTS_ALIQUOTA = 0.08;

// ---------- INSS (tabela progressiva 2026) ----------
// Cada faixa incide apenas sobre a parte do salário que se enquadra nela.
const INSS_FAIXAS = [
  { ate: 1621.0, aliquota: 0.075 },
  { ate: 2902.84, aliquota: 0.09 },
  { ate: 4354.27, aliquota: 0.12 },
  { ate: 8475.55, aliquota: 0.14 }, // teto
];

/** Desconto de INSS sobre o salário de contribuição (progressivo, com teto). */
export function calcularINSS(salarioBruto: number): number {
  let inss = 0;
  let anterior = 0;
  for (const faixa of INSS_FAIXAS) {
    if (salarioBruto > anterior) {
      const base = Math.min(salarioBruto, faixa.ate) - anterior;
      inss += base * faixa.aliquota;
      anterior = faixa.ate;
    } else {
      break;
    }
  }
  return arred(inss);
}

// ---------- IRRF (tabela mensal 2026) ----------
const IRRF_FAIXAS = [
  { ate: 2428.8, aliquota: 0, deduzir: 0 },
  { ate: 2826.65, aliquota: 0.075, deduzir: 182.16 },
  { ate: 3751.05, aliquota: 0.15, deduzir: 394.16 },
  { ate: 4664.68, aliquota: 0.225, deduzir: 675.49 },
  { ate: Infinity, aliquota: 0.275, deduzir: 908.73 },
];

export const DEDUCAO_DEPENDENTE = 189.59;

/**
 * IRRF mensal 2026, já com o redutor da Lei 15.270/2025.
 * O redutor usa o rendimento bruto tributável (salário bruto).
 */
export function calcularIRRF(
  salarioBruto: number,
  inss: number,
  dependentes = 0,
  pensao = 0,
): { irrf: number; base: number } {
  const base = Math.max(
    0,
    salarioBruto - inss - dependentes * DEDUCAO_DEPENDENTE - pensao,
  );

  let imposto = 0;
  for (const faixa of IRRF_FAIXAS) {
    if (base <= faixa.ate) {
      imposto = base * faixa.aliquota - faixa.deduzir;
      break;
    }
  }
  imposto = Math.max(0, imposto);

  // Redutor 2026 sobre o rendimento bruto tributável.
  if (salarioBruto <= 5000) {
    imposto = 0;
  } else if (salarioBruto <= 7350) {
    const redutor = Math.max(0, 978.62 - 0.133145 * salarioBruto);
    imposto = Math.max(0, imposto - redutor);
  }

  return { irrf: arred(imposto), base: arred(base) };
}

// ---------- Salário líquido ----------
export interface SalarioLiquido {
  bruto: number;
  inss: number;
  irrf: number;
  baseIRRF: number;
  outrosDescontos: number;
  liquido: number;
}

export function calcularSalarioLiquido(
  bruto: number,
  dependentes = 0,
  outrosDescontos = 0,
  pensao = 0,
): SalarioLiquido {
  const inss = calcularINSS(bruto);
  const { irrf, base } = calcularIRRF(bruto, inss, dependentes, pensao);
  const liquido = arred(bruto - inss - irrf - outrosDescontos - pensao);
  return {
    bruto: arred(bruto),
    inss,
    irrf,
    baseIRRF: base,
    outrosDescontos: arred(outrosDescontos),
    liquido,
  };
}

// ---------- Seguro-desemprego (2026) ----------
const SD_FAIXA1 = 2222.17;
const SD_FAIXA2 = 3703.99;
const SD_TETO = 2518.65;

/** Número de parcelas conforme meses trabalhados (solicitação padrão). */
export function parcelasSeguroDesemprego(
  mesesTrabalhados: number,
  solicitacao: 1 | 2 | 3 = 1,
): { parcelas: number; elegivel: boolean; motivo?: string } {
  // Requisito mínimo de meses por nº da solicitação.
  const minimo = solicitacao === 1 ? 12 : solicitacao === 2 ? 9 : 6;
  if (mesesTrabalhados < minimo) {
    return {
      parcelas: 0,
      elegivel: false,
      motivo: `Para a ${solicitacao}ª solicitação são exigidos no mínimo ${minimo} meses trabalhados.`,
    };
  }
  let parcelas: number;
  if (mesesTrabalhados <= 11) parcelas = 3;
  else if (mesesTrabalhados <= 23) parcelas = 4;
  else parcelas = 5;
  return { parcelas, elegivel: true };
}

/** Valor de cada parcela a partir da média dos 3 últimos salários. */
export function valorParcelaSeguroDesemprego(mediaSalarial: number): number {
  let valor: number;
  if (mediaSalarial <= SD_FAIXA1) {
    valor = mediaSalarial * 0.8;
  } else if (mediaSalarial <= SD_FAIXA2) {
    valor = (mediaSalarial - SD_FAIXA1) * 0.5 + 1777.74;
  } else {
    valor = SD_TETO;
  }
  // Nunca inferior ao salário mínimo, nem superior ao teto.
  valor = Math.max(SALARIO_MINIMO_2026, Math.min(valor, SD_TETO));
  return arred(valor);
}

export interface SeguroDesemprego {
  elegivel: boolean;
  motivo?: string;
  parcelas: number;
  valorParcela: number;
  total: number;
}

export function calcularSeguroDesemprego(
  mediaSalarial: number,
  mesesTrabalhados: number,
  solicitacao: 1 | 2 | 3 = 1,
): SeguroDesemprego {
  const { parcelas, elegivel, motivo } = parcelasSeguroDesemprego(
    mesesTrabalhados,
    solicitacao,
  );
  if (!elegivel) {
    return { elegivel, motivo, parcelas: 0, valorParcela: 0, total: 0 };
  }
  const valorParcela = valorParcelaSeguroDesemprego(mediaSalarial);
  return {
    elegivel,
    parcelas,
    valorParcela,
    total: arred(valorParcela * parcelas),
  };
}

// ---------- Rescisão ----------
export type TipoRescisao =
  | "sem_justa_causa"
  | "pedido_demissao"
  | "acordo"
  | "justa_causa"
  | "fim_contrato";

export interface DadosRescisao {
  salario: number;
  tipo: TipoRescisao;
  /** Anos completos de empresa (para dias extras de aviso prévio). */
  anosTrabalho: number;
  /** Dias trabalhados no mês da rescisão (saldo de salário). */
  diasTrabalhadosMes: number;
  /** Meses trabalhados no ano vigente (avos de 13º e férias proporcionais). */
  mesesNoAno: number;
  /** Há férias vencidas não gozadas? */
  feriasVencidas: boolean;
  /** Aviso prévio será trabalhado? (senão, indenizado pela empresa). */
  avisoTrabalhado: boolean;
  /** Saldo atual do FGTS depositado (para a multa rescisória). */
  saldoFGTS: number;
  dependentes: number;
}

export interface VerbaRescisao {
  label: string;
  valor: number;
  desconto?: boolean;
}

export interface ResultadoRescisao {
  verbas: VerbaRescisao[];
  totalBruto: number;
  totalDescontos: number;
  totalLiquido: number;
  multaFGTS: number;
  sacaFGTS: boolean;
}

/** Dias de aviso prévio: 30 + 3 por ano completo, limitado a 90. */
export function diasAvisoPrevio(anos: number): number {
  return Math.min(90, 30 + 3 * Math.max(0, Math.floor(anos)));
}

export function calcularRescisao(d: DadosRescisao): ResultadoRescisao {
  const verbas: VerbaRescisao[] = [];
  const salDia = d.salario / 30;
  const mesesAvos = Math.min(12, Math.max(0, d.mesesNoAno));

  // Saldo de salário — sempre devido.
  const saldoSalario = arred(salDia * d.diasTrabalhadosMes);
  verbas.push({ label: "Saldo de salário", valor: saldoSalario });

  const temAvisoIndenizado =
    (d.tipo === "sem_justa_causa" || d.tipo === "acordo") && !d.avisoTrabalhado;
  const dias = diasAvisoPrevio(d.anosTrabalho);

  // Aviso prévio indenizado.
  if (d.tipo === "sem_justa_causa" && temAvisoIndenizado) {
    verbas.push({
      label: `Aviso prévio indenizado (${dias} dias)`,
      valor: arred(salDia * dias),
    });
  } else if (d.tipo === "acordo" && !d.avisoTrabalhado) {
    // No acordo (art. 484-A) o aviso indenizado é pago pela metade.
    verbas.push({
      label: `Aviso prévio indenizado 50% (${dias} dias)`,
      valor: arred(salDia * dias * 0.5),
    });
  } else if (d.tipo === "pedido_demissao" && !d.avisoTrabalhado) {
    // Pedido de demissão sem cumprir aviso: desconto do empregado.
    verbas.push({
      label: `Aviso prévio não cumprido (${dias} dias)`,
      valor: arred(salDia * dias),
      desconto: true,
    });
  }

  // 13º proporcional — exceto justa causa.
  if (d.tipo !== "justa_causa") {
    verbas.push({
      label: `13º salário proporcional (${mesesAvos}/12)`,
      valor: arred((d.salario / 12) * mesesAvos),
    });
  }

  // Férias vencidas + 1/3 — devidas em qualquer hipótese se existirem.
  if (d.feriasVencidas) {
    const fv = d.salario;
    verbas.push({ label: "Férias vencidas + 1/3", valor: arred(fv * (4 / 3)) });
  }

  // Férias proporcionais + 1/3 — exceto justa causa.
  if (d.tipo !== "justa_causa") {
    const fp = (d.salario / 12) * mesesAvos;
    verbas.push({
      label: `Férias proporcionais + 1/3 (${mesesAvos}/12)`,
      valor: arred(fp * (4 / 3)),
    });
  }

  // Descontos de INSS e IRRF incidem sobre saldo de salário e 13º.
  const inssSaldo = calcularINSS(saldoSalario);
  const baseDescontavel13 = d.tipo !== "justa_causa" ? (d.salario / 12) * mesesAvos : 0;
  const inss13 = calcularINSS(baseDescontavel13);
  if (inssSaldo > 0) verbas.push({ label: "INSS sobre saldo", valor: inssSaldo, desconto: true });
  if (inss13 > 0) verbas.push({ label: "INSS sobre 13º", valor: inss13, desconto: true });

  const { irrf: irrfSaldo } = calcularIRRF(saldoSalario, inssSaldo, d.dependentes);
  if (irrfSaldo > 0)
    verbas.push({ label: "IRRF sobre saldo", valor: irrfSaldo, desconto: true });

  // Multa do FGTS.
  let multaFGTS = 0;
  let sacaFGTS = false;
  if (d.tipo === "sem_justa_causa") {
    multaFGTS = arred(d.saldoFGTS * 0.4);
    sacaFGTS = true;
  } else if (d.tipo === "acordo") {
    multaFGTS = arred(d.saldoFGTS * 0.2);
    sacaFGTS = true; // saca até 80%
  }
  if (multaFGTS > 0)
    verbas.push({ label: "Multa FGTS", valor: multaFGTS });

  const totalBruto = arred(
    verbas.filter((v) => !v.desconto).reduce((s, v) => s + v.valor, 0),
  );
  const totalDescontos = arred(
    verbas.filter((v) => v.desconto).reduce((s, v) => s + v.valor, 0),
  );

  return {
    verbas,
    totalBruto,
    totalDescontos,
    totalLiquido: arred(totalBruto - totalDescontos),
    multaFGTS,
    sacaFGTS,
  };
}

// ---------- Custo de funcionário para a empresa ----------
export type Regime = "simples" | "presumido_real";

export interface CustoFuncionario {
  salario: number;
  fgts: number;
  decimoTerceiro: number;
  ferias: number;
  inssPatronal: number;
  terceiros: number;
  rat: number;
  fgtsProvisoes: number;
  multaProvisao: number;
  custoMensal: number;
  custoAnual: number;
  percentualEncargos: number;
}

/**
 * Custo mensal de um empregado CLT, com provisões de 13º, férias e multa de FGTS.
 * Empresas do Simples não recolhem INSS patronal/terceiros sobre a folha.
 */
export function calcularCustoFuncionario(
  salario: number,
  regime: Regime = "simples",
  ratPercent = 2, // RAT/GIIL-RAT típico (1% a 3%)
): CustoFuncionario {
  const fgts = arred(salario * FGTS_ALIQUOTA);
  const decimoTerceiro = arred(salario / 12); // provisão 8,33%
  const ferias = arred((salario / 12) * (4 / 3)); // férias + 1/3 → 11,11%

  let inssPatronal = 0;
  let terceiros = 0;
  let rat = 0;
  if (regime === "presumido_real") {
    inssPatronal = arred(salario * 0.2); // 20%
    terceiros = arred(salario * 0.058); // Sistema S ~5,8%
    rat = arred(salario * (ratPercent / 100));
  }

  // FGTS também incide sobre as provisões de 13º e férias.
  const fgtsProvisoes = arred((decimoTerceiro + ferias) * FGTS_ALIQUOTA);
  // Provisão da multa de 40% do FGTS para rescisão futura.
  const multaProvisao = arred((fgts + fgtsProvisoes) * 0.4);

  const custoMensal = arred(
    salario +
      fgts +
      decimoTerceiro +
      ferias +
      inssPatronal +
      terceiros +
      rat +
      fgtsProvisoes +
      multaProvisao,
  );

  return {
    salario: arred(salario),
    fgts,
    decimoTerceiro,
    ferias,
    inssPatronal,
    terceiros,
    rat,
    fgtsProvisoes,
    multaProvisao,
    custoMensal,
    custoAnual: arred(custoMensal * 12),
    percentualEncargos:
      salario > 0 ? arred(((custoMensal - salario) / salario) * 100) : 0,
  };
}

// ---------- Utilidades ----------
function arred(v: number): number {
  return Math.round((v + Number.EPSILON) * 100) / 100;
}

const BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatBRL(v: number): string {
  return BRL.format(v);
}

/** Converte texto digitado (com vírgula ou ponto) em número. */
export function parseNumero(texto: string): number {
  if (!texto) return 0;
  const limpo = texto
    .replace(/[^\d,.-]/g, "")
    .replace(/\.(?=\d{3}(\D|$))/g, "")
    .replace(",", ".");
  const n = parseFloat(limpo);
  return Number.isFinite(n) ? n : 0;
}
