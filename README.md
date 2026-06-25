<div align="center">

# Prática Soluções Empresariais

**Landing page de geração de leads para um escritório de soluções empresariais**
(departamento pessoal, SST, folha de pagamento, certificado digital e mais)

Next.js 16 · React 19 · Tailwind CSS 4 · Motion

</div>

---

## Sobre o projeto

Site de página única (LP) cujo objetivo central é **coletar leads e levar contatos quentes ao WhatsApp**. Cada bloco da página é desenhado em torno desse funil: o usuário entende a oferta, ganha confiança (prova social, comparativos, diferenciais), interage com ferramentas gratuitas (calculadoras trabalhistas) e é conduzido a falar com um especialista com o contexto já preenchido.

Além da home, o projeto inclui um conjunto de **calculadoras trabalhistas** (salário líquido, seguro-desemprego, rescisão e custo de funcionário) que funcionam como isca de tráfego e ponto de captura.

O número de WhatsApp `5562982103699` é o destino de conversão recorrente em todo o site.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | **Next.js 16.2.9** (App Router) |
| UI | **React 19.2** |
| Estilo | **Tailwind CSS 4** (config via `@theme` no CSS, sem `tailwind.config`) |
| Animação | **Motion** (`motion/react`) + **GSAP** (`@gsap/react`) |
| Linguagem | **TypeScript 5** |
| Lint | ESLint 9 (`eslint-config-next`) |

> ⚠️ Este projeto usa Next.js 16, que tem mudanças de API em relação a versões anteriores. A documentação relevante vive em `node_modules/next/dist/docs/` — consulte antes de mexer em APIs de framework.

---

## Arquitetura

```
app/
├── layout.tsx              # Root: fontes, metadata, viewport, <FloatingWhats/> global
├── page.tsx                # Home — todas as sections da LP
├── globals.css             # Tailwind 4 + tokens de cor + keyframes (pulse-ring)
├── Header.tsx              # Navbar fixa, logo, menu mobile animado
│
├── components/             # Componentes da home e blocos reutilizáveis
│   ├── HeroGeometric.tsx     # Hero com parallax, shapes flutuantes e BlurText
│   ├── BlurText.tsx          # Texto que entra desfocado, palavra a palavra
│   ├── TextType.tsx          # Efeito "digitando" rotativo
│   ├── SplitText.tsx         # Títulos animados caractere/palavra (GSAP)
│   ├── Reveal.tsx            # Wrapper de entrada por scroll (Motion / viewport)
│   ├── CountUp.tsx           # Contador numérico animado (métricas)
│   ├── Quiz.tsx              # Quiz qualificador → WhatsApp pré-preenchido
│   ├── Testimonials.tsx      # Grade de depoimentos com "ver mais"
│   ├── AbstractBG.tsx        # Fundo abstrato (faixas, anéis, pontos) entre sections
│   ├── SiteFooter.tsx        # Rodapé completo, compartilhado entre páginas
│   └── FloatingWhats.tsx     # Botão flutuante de WhatsApp com pulso
│
└── calculadoras/          # Sub-app das calculadoras trabalhistas
    ├── layout.tsx            # Header + footer + provider do popup de lead
    ├── page.tsx              # Índice das calculadoras + CTA
    ├── lib.ts                # TODA a lógica de cálculo (funções puras, tabelas 2026)
    ├── ui.tsx                # CalcShell, campos de formulário, exibição de resultado
    ├── CalcPopup.tsx         # Popup de captura disparado por nº de cálculos
    └── <calculadora>/
        ├── page.tsx          # Server Component: metadata + render do client
        └── client.tsx        # Estado, inputs e chamada da função de cálculo

lib/
└── utils.ts               # cn() — concatenação de classes condicionais
```

---

## A home (`app/page.tsx`)

Ordem das sections e o papel de cada uma no funil:

| # | Section | Papel |
|---|---|---|
| 1 | **Hero** | Proposta de valor + CTA primário (diagnóstico) e secundário (WhatsApp) |
| 2 | **Métricas** | Números de credibilidade (`CountUp`) |
| 3 | **Diferenciais** | "Por que a Prática" — 4 pilares com ícones |
| 4 | **Serviços** | 3 serviços-núcleo, cada um com botão **Solicitar orçamento** |
| 5 | **Comparativo** | "Com x Sem a Prática" — quebra de objeção visual |
| 6 | **Soluções** | Serviços extras (NFe, abertura de empresa, CNO, endereço fiscal) |
| 7 | **Depoimentos** | Prova social |
| 8 | **Certificado Digital** | Section dedicada com imagem + CTA |
| 9 | **Diagnóstico (Quiz)** | Qualificação interativa → WhatsApp com respostas |
| 10 | **Calculadoras** | Vitrine das ferramentas gratuitas |
| 11 | **Estágio** | Recrutamento |
| 12 | **Contato** | CTA final de WhatsApp |
| — | **Footer** | `SiteFooter`: navegação + serviços (links p/ WhatsApp) + contato |

### Mecânica de geração de lead

- **CTAs → WhatsApp:** quase todo botão monta um link `wa.me` com mensagem pré-preenchida e contexto (serviço, orçamento, etc.).
- **Quiz qualificador (`Quiz.tsx`):** 3 perguntas (tamanho, dor, urgência); a tela final gera um link de WhatsApp com as respostas embutidas — o lead chega já qualificado.
- **Popup das calculadoras (`CalcPopup.tsx`):** conta cálculos "assentados" (debounce) em `localStorage` e abre um convite no **1º** e no **7º** cálculo (cada limiar uma única vez).
- **Botão flutuante (`FloatingWhats.tsx`):** presente em todas as páginas via root layout.

---

## Calculadoras trabalhistas

Sub-app em `app/calculadoras`. Cada calculadora segue o mesmo padrão:

- **`page.tsx`** (Server Component): exporta `metadata` (SEO) e renderiza o client.
- **`client.tsx`** (Client Component): gerencia inputs com `useState`, deriva o resultado com `useMemo` e o passa para os componentes de exibição.
- **`lib.ts`**: concentra toda a lógica de cálculo como **funções puras**, com as tabelas vigentes em **2026** (INSS, IRRF, FGTS, salário mínimo, faixas do seguro-desemprego). É a fonte única de verdade dos números.
- **`ui.tsx`**: `CalcShell` (casca: título, voltar, resultado, CTA, disclaimer) e os campos (`CampoMoeda`, `CampoNumero`, `CampoOpcoes`, `Checkbox`, `Destaque`, `Linha`).

Calculadoras disponíveis:

| Rota | O que calcula |
|---|---|
| `/calculadoras/salario-liquido` | Líquido após INSS e IRRF |
| `/calculadoras/seguro-desemprego` | Valor e nº de parcelas (3 salários → média automática e editável) |
| `/calculadoras/rescisao` | Verbas rescisórias por tipo de desligamento |
| `/calculadoras/custo-funcionario` | Custo real de um CLT para a empresa |

> Os resultados são estimativas com base nas tabelas de 2026 — não substituem o cálculo oficial do departamento pessoal.

---

## Sistema de design

### Cores (tokens em `globals.css`)

| Token | Valor | Uso |
|---|---|---|
| `--brand` | `#04355a` | Cor principal da marca |
| `--brand-dark` | `#05406d` | Hover de botões |
| `--brand-deep` | `#022a47` | Fundos escuros, hero, footer |
| Destaque | `#7fb2d8` | Acento claro (links, realces, gradientes) |

Definidos como variáveis CSS e expostos ao Tailwind via `@theme inline` — usar como `bg-brand`, `text-brand-deep`, etc.

### Animação

- **Entrada por scroll:** `Reveal` envolve blocos e anima **uma vez** ao entrar na viewport (`viewport.once = true`) — evita flicker no limiar. Respeita `prefers-reduced-motion`.
- **Hero:** parallax via `useScroll`/`useTransform` (camadas em velocidades diferentes); shapes geométricos flutuantes; `BlurText` no título e `TextType` na lista rotativa.
- **Títulos:** `SplitText` anima por caractere/palavra usando GSAP.
- **Keyframe custom:** `pulse-ring` (anel pulsante de CTA) registrado dentro de `@theme` no `globals.css` — necessário no Tailwind 4 para não ser removido pelo tree-shake.

### Responsividade

- `overflow-x-hidden` em `html`/`body` e `overflow-hidden` em todo container que hospeda `AbstractBG` (os blobs extrapolam de propósito).
- Viewport configurado em `layout.tsx` (`export const viewport`).
- Padrão de espaçamento: `py-20 sm:py-24` e `px-5 sm:px-6` nas sections.
- Menu mobile com hambúrguer que anima para "X" e itens em cascata.

---

## Convenções

- **Copy em português (pt-BR)**, voltada a conversão — clara, sem jargão.
- **Comentários e nomes de domínio em português** (`calcularRescisao`, `CampoMoeda`, `orcamentoUrl`).
- **`cn()`** (`lib/utils.ts`) para classes condicionais — não há `clsx`/`tailwind-merge`.
- **Server vs Client:** páginas são Server Components por padrão; interatividade isolada em arquivos `client.tsx`/componentes com `"use client"`.
- **Sem `tailwind.config`:** toda a configuração de tema vive em `app/globals.css` (Tailwind 4).
- **Lógica de cálculo separada da UI:** funções puras em `lib.ts`, testáveis isoladamente.

---

## Estrutura de rotas

| Rota | Conteúdo |
|---|---|
| `/` | Landing page completa |
| `/calculadoras` | Índice das calculadoras |
| `/calculadoras/salario-liquido` | Calculadora de salário líquido |
| `/calculadoras/seguro-desemprego` | Calculadora de seguro-desemprego |
| `/calculadoras/rescisao` | Calculadora de rescisão |
| `/calculadoras/custo-funcionario` | Calculadora de custo de funcionário |

Âncoras da home: `#home`, `#servicos`, `#solucoes`, `#certificado`, `#diagnostico`, `#calculadoras`, `#estagio`, `#contato`.
