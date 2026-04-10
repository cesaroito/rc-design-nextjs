export interface ProjectResult {
  metric: string;
  value: string;
  description?: string;
}

export interface ProjectService {
  _id: string;
  title: string;
  slug: { current: string };
}

export interface ProjectTestimonial {
  quote: string;
  authorName: string;
  authorRole?: string;
  company?: string;
}

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
  challenge?: unknown[];
  solution?: unknown[];
  results?: ProjectResult[];
  heroImage?: {
    asset: { url: string };
    alt?: string;
  };
  screenshots?: {
    asset: { url: string };
    alt?: string;
    caption?: string;
  }[];
  services?: ProjectService[];
  testimonial?: ProjectTestimonial;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export const projectPlaceholders: ProjectRecord[] = [
  {
    _id: "placeholder-deolhoemvoce",
    title: "DeOlhoEmVocê",
    slug: { current: "deolhoemvoce" },
    client: "RC Design",
    tagline:
      "Plataforma de análise política e social para monitoramento em tempo real de candidatos, partidos e sentimento público.",
    brandColor: "#00708C",
    tags: ["analise-dados", "ia", "painel"],
    techStack: ["Next.js", "Python", "OpenAI", "Supabase"],
    liveUrl: "https://deolhoemvoce.com.br",
    challenge: [{}],
    solution: [{}],
    results: [
      {
        metric: "Fontes monitoradas",
        value: "20+",
        description: "Monitoramento consolidado em um único painel analítico.",
      },
      {
        metric: "Tempo de análise",
        value: "-68%",
        description: "Leitura mais rápida de cenário político e social.",
      },
      {
        metric: "Alertas críticos",
        value: "Tempo real",
        description: "Detecção imediata de mudanças em sentimento e narrativa.",
      },
    ],
    services: [
      {
        _id: "service-analise-dados",
        title: "Análise de dados",
        slug: { current: "analise-dados" },
      },
      {
        _id: "service-paineis-clientes",
        title: "Painéis para clientes",
        slug: { current: "paineis-clientes" },
      },
      {
        _id: "service-ia-negocios",
        title: "IA para o seu negócio",
        slug: { current: "ia-negocios" },
      },
    ],
    testimonial: {
      quote:
        "Conseguimos sair da coleta manual para uma leitura contínua do cenário, com sinais mais rápidos e acionáveis.",
      authorName: "Equipe RC Design",
      authorRole: "Produto e dados",
      company: "RC Design",
    },
    seo: {
      metaTitle: "DeOlhoEmVocê",
      metaDescription:
        "Case da plataforma de análise política e social da RC Design.",
    },
  },
  {
    _id: "placeholder-cuidodevoce",
    title: "CuidoDeVocê",
    slug: { current: "cuidodevoce" },
    client: "RC Design",
    tagline:
      "Plataforma para cidadãos e prefeituras oferecerem seus serviços através do WhatsApp. Sem app, sem fricção.",
    brandColor: "#012C40",
    tags: ["whatsapp", "ia", "gov"],
    techStack: ["Node.js", "WhatsApp API", "Supabase", "AWS"],
    liveUrl: "https://cuidodevoce.ai.br",
    challenge: [{}],
    solution: [{}],
    results: [
      {
        metric: "Canal único",
        value: "100%",
        description: "Atendimento centralizado diretamente no WhatsApp.",
      },
      {
        metric: "Tempo de implantação",
        value: "Dias",
        description: "Entrada em operação sem ciclo longo de desenvolvimento.",
      },
      {
        metric: "Acesso do cidadão",
        value: "Sem app",
        description: "Uso imediato, sem depender de instalação.",
      },
    ],
    services: [
      {
        _id: "service-projetos-personalizados",
        title: "Projetos personalizados",
        slug: { current: "projetos-personalizados" },
      },
      {
        _id: "service-ia-negocios",
        title: "IA para o seu negócio",
        slug: { current: "ia-negocios" },
      },
    ],
    testimonial: {
      quote:
        "O diferencial foi reduzir atrito para o cidadão e acelerar a implantação sem depender de um aplicativo próprio.",
      authorName: "Equipe RC Design",
      authorRole: "Produto e automação",
      company: "RC Design",
    },
    seo: {
      metaTitle: "CuidoDeVocê",
      metaDescription:
        "Case da plataforma de atendimento via WhatsApp para cidadãos e prefeituras.",
    },
  },
  {
    _id: "placeholder-arcadepulse",
    title: "ArcadePulse",
    slug: { current: "arcadepulse" },
    client: "RC Design",
    tagline:
      "Hub de games white-label para empresas e eventos. Engajamento imediato para qualquer público.",
    brandColor: "#FF404C",
    tags: ["games", "b2b", "saas"],
    techStack: ["Next.js", "WebSockets", "Supabase", "Vercel"],
    liveUrl: "https://arcadepulse.com.br",
    challenge: [{}],
    solution: [{}],
    results: [
      {
        metric: "Tempo para ativação",
        value: "Rápido",
        description: "Eventos e campanhas ativados com baixa dependência técnica.",
      },
      {
        metric: "Engajamento",
        value: "4.2x",
        description: "Maior interação média em ações comparadas a landing pages estáticas.",
      },
      {
        metric: "Modelo",
        value: "White-label",
        description: "Experiência adaptada para diferentes marcas e operações.",
      },
    ],
    services: [
      {
        _id: "service-games-corporativos",
        title: "Games corporativos",
        slug: { current: "games-corporativos" },
      },
      {
        _id: "service-projetos-personalizados",
        title: "Projetos personalizados",
        slug: { current: "projetos-personalizados" },
      },
    ],
    testimonial: {
      quote:
        "Transformamos uma necessidade de engajamento em uma plataforma replicável para marcas, eventos e campanhas.",
      authorName: "Equipe RC Design",
      authorRole: "Produto e experiência",
      company: "RC Design",
    },
    seo: {
      metaTitle: "ArcadePulse",
      metaDescription:
        "Case do hub de games white-label para empresas e eventos.",
    },
  },
];

export const projectPlaceholderSlugs = projectPlaceholders.map(
  (project) => project.slug.current,
);

export function getProjectPlaceholderBySlug(slug: string) {
  return projectPlaceholders.find((project) => project.slug.current === slug);
}
