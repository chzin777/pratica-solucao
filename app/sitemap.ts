import type { MetadataRoute } from "next";

const SITE_URL = "https://praticasolucoes.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = [
    { path: "/", priority: 1, freq: "weekly" as const },
    { path: "/calculadoras", priority: 0.8, freq: "monthly" as const },
    {
      path: "/calculadoras/salario-liquido",
      priority: 0.7,
      freq: "monthly" as const,
    },
    {
      path: "/calculadoras/seguro-desemprego",
      priority: 0.7,
      freq: "monthly" as const,
    },
    { path: "/calculadoras/rescisao", priority: 0.7, freq: "monthly" as const },
    {
      path: "/calculadoras/custo-funcionario",
      priority: 0.7,
      freq: "monthly" as const,
    },
  ];

  return rotas.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
