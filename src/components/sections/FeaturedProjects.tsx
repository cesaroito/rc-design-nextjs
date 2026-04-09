import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  client?: string;
  tagline: string;
  brandColor?: string;
  tags?: string[];
  heroImage?: {
    asset: { url: string };
    alt?: string;
  };
}

interface FeaturedProjectsProps {
  projects: Project[];
}

// Card individual de projeto
function ProjectCard({ project }: { project: Project }) {
  const brandColor = project.brandColor ?? "#00708C";

  return (
    <Link
      href={`/projetos/${project.slug.current}`}
      className="group relative bg-white border border-[rgba(0,112,140,0.12)] rounded-2xl overflow-hidden hover:border-[#00708C] hover:shadow-2xl transition-all duration-300"
    >
      {/* Imagem / placeholder */}
      <div
        className="relative w-full aspect-4/3 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${brandColor}20, ${brandColor}08)`,
        }}
      >
        {project.heroImage?.asset?.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.heroImage.asset.url}
            alt={project.heroImage.alt ?? project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${brandColor}, #012C40)`,
              }}
            >
              <span className="text-white font-bold text-xl font-(family-name:--font-plus-jakarta)">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#012C40]/60 via-transparent to-transparent" />

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/90 text-[#012C40] font-medium font-(family-name:--font-dm-sans)"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        {project.client && (
          <div className="text-xs text-[rgba(1,44,64,0.5)] font-medium mb-1 font-(family-name:--font-dm-sans)">
            {project.client}
          </div>
        )}
        <h3 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-xl mb-2 group-hover:text-[#00708C] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[rgba(1,44,64,0.65)] leading-relaxed mb-4 font-(family-name:--font-dm-sans)">
          {project.tagline}
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold text-[#00708C] group-hover:gap-3 transition-all font-(family-name:--font-dm-sans)">
          Ver case completo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

// Fallback quando não há projetos no Sanity ainda
function ProjectCardPlaceholder({
  title,
  tagline,
  color,
}: {
  title: string;
  tagline: string;
  color: string;
}) {
  return (
    <div className="relative bg-white border border-[rgba(0,112,140,0.12)] rounded-2xl overflow-hidden">
      <div
        className="w-full aspect-4/3 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
          style={{ background: `linear-gradient(135deg, ${color}, #012C40)` }}
        >
          <span className="text-white font-bold text-xl font-(family-name:--font-plus-jakarta)">
            {title.charAt(0)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-xl mb-2">
          {title}
        </h3>
        <p className="text-sm text-[rgba(1,44,64,0.65)] leading-relaxed font-(family-name:--font-dm-sans)">
          {tagline}
        </p>
        <Badge variant="default" className="mt-4">
          Em breve
        </Badge>
      </div>
    </div>
  );
}

const placeholders = [
  {
    title: "DeOlhoEmVocê",
    tagline:
      "Plataforma de análise política e social para monitoramento em tempo real.",
    color: "#00708C",
  },
  {
    title: "CuidoDeVocê",
    tagline:
      "Serviços para prefeituras e cidadãos via WhatsApp. Sem app, sem fricção.",
    color: "#012C40",
  },
  {
    title: "ArcadePulse",
    tagline:
      "Hub de games white-label para empresas e eventos. Engajamento imediato.",
    color: "#FF404C",
  },
];

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const hasProjects = projects && projects.length > 0;

  return (
    <section className="px-4 md:px-6 py-16 md:py-20 border-b border-[rgba(0,112,140,0.08)] bg-[#f8fafb]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
              Cases em destaque
            </div>
            <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-4xl leading-tight">
              Projetos que entregam
              <br className="hidden md:block" /> resultados reais
            </h2>
          </div>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00708C] hover:text-[#012C40] transition-colors group font-(family-name:--font-dm-sans) shrink-0"
          >
            Ver todos os projetos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasProjects
            ? projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))
            : placeholders.map((p) => (
                <ProjectCardPlaceholder key={p.title} {...p} />
              ))}
        </div>
      </div>
    </section>
  );
}
