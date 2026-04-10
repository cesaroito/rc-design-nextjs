export interface ProjectRecord {
  _id: string;
  title: string;
  slug: { current: string };
  client?: string;
  tagline: string;
  brandColor?: string;
  tags?: string[];
  techStack?: string[];
  liveUrl?: string;
  heroImage?: {
    asset: { url: string };
    alt?: string;
  };
  services?: {
    _id: string;
    title: string;
    slug: { current: string };
  }[];
}

export const projectPlaceholders: ProjectRecord[] = [
  {
    _id: "1",
    title: "DeOlhoEmVocê",
    slug: { current: "deolhoemvoce" },
    client: "RC Design",
    tagline:
      "Plataforma de análise política e social para monitoramento em tempo real de candidatos, partidos e sentimento público.",
    brandColor: "#00708C",
    tags: ["analise-dados", "ia", "painel"],
    techStack: ["Next.js", "Python", "OpenAI", "Supabase"],
    liveUrl: "https://deolhoemvoce.com.br",
  },
  {
    _id: "2",
    title: "CuidoDeVocê",
    slug: { current: "cuidodevoce" },
    client: "RC Design",
    tagline:
      "Plataforma para cidadãos e prefeituras oferecerem seus serviços através do WhatsApp. Sem app, sem fricção.",
    brandColor: "#012C40",
    tags: ["whatsapp", "ia", "gov"],
    techStack: ["Node.js", "WhatsApp API", "Supabase", "AWS"],
    liveUrl: "https://cuidodevoce.ai.br",
  },
  {
    _id: "3",
    title: "ArcadePulse",
    slug: { current: "arcadepulse" },
    client: "RC Design",
    tagline:
      "Hub de games white-label para empresas e eventos. Engajamento imediato para qualquer público.",
    brandColor: "#FF404C",
    tags: ["games", "b2b", "saas"],
    techStack: ["Next.js", "WebSockets", "Supabase", "Vercel"],
    liveUrl: "https://arcadepulse.com.br",
  },
];

// Slugs disponíveis nos placeholders
export const projectPlaceholderSlugs = projectPlaceholders.map((p) => ({
  slug: p.slug.current,
}));

// Buscar placeholder por slug
export function getProjectPlaceholderBySlug(
  slug: string,
): ProjectRecord | null {
  return projectPlaceholders.find((p) => p.slug.current === slug) ?? null;
}
