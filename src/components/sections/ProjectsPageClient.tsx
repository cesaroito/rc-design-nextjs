"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

interface Project {
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
}

interface ProjectsPageClientProps {
  projects: Project[];
}

const tagLabels: Record<string, string> = {
  "analise-dados": "Análise de dados",
  ia: "IA",
  painel: "Painel",
  games: "Games",
  whatsapp: "WhatsApp",
  gov: "Gov",
  b2b: "B2B",
  saas: "SaaS",
};

function ProjectCard({ project }: { project: Project }) {
  const brandColor = project.brandColor ?? "#00708C";
  const projectHref = `/projetos/${project.slug.current}`;

  return (
    <article className="group relative bg-white border border-[rgba(0,112,140,0.12)] rounded-2xl overflow-hidden hover:border-[#00708C] hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Imagem / placeholder */}
      <Link href={projectHref} className="block">
        <div
          className="relative w-full aspect-4/3 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${brandColor}20, ${brandColor}08)`,
          }}
        >
          {project.heroImage?.asset?.url ? (
            <Image
              src={project.heroImage.asset.url}
              alt={project.heroImage.alt ?? project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${brandColor}, #012C40)`,
                }}
              >
                <span className="text-white font-bold text-3xl font-(family-name:--font-plus-jakarta)">
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
                  {tagLabels[tag] ?? tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-1">
        {project.client && (
          <div className="text-xs text-[rgba(1,44,64,0.5)] font-medium mb-1 font-(family-name:--font-dm-sans)">
            {project.client}
          </div>
        )}
        <h3 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-xl mb-2 group-hover:text-[#00708C] transition-colors">
          <Link href={projectHref}>{project.title}</Link>
        </h3>
        <p className="text-sm text-[rgba(1,44,64,0.65)] leading-relaxed mb-4 font-(family-name:--font-dm-sans) flex-1">
          {project.tagline}
        </p>

        {/* Tech stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-md bg-[rgba(0,112,140,0.06)] text-[#00708C] font-medium font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-4 pt-4 border-t border-[rgba(0,112,140,0.08)]">
          <Link
            href={projectHref}
            className="flex items-center gap-2 text-sm font-semibold text-[#00708C] group-hover:gap-3 transition-all font-(family-name:--font-dm-sans)"
          >
            Ver case completo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[rgba(1,44,64,0.4)] hover:text-[#00708C] transition-colors font-(family-name:--font-dm-sans)"
            >
              Ver site ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const items = projects;

  // Coletar todas as tags únicas
  const allTags = Array.from(new Set(items.flatMap((p) => p.tags ?? [])));

  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? items.filter((p) => p.tags?.includes(activeTag))
    : items;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* Filtros */}
      {allTags.length > 0 && (
        <div className="flex items-center gap-3 flex-wrap mb-10">
          <span className="text-xs font-semibold text-[rgba(1,44,64,0.4)] uppercase tracking-widest font-(family-name:--font-dm-sans)">
            Filtrar
          </span>
          <button
            onClick={() => setActiveTag(null)}
            className={`text-xs px-4 py-2 rounded-full border transition-all font-(family-name:--font-dm-sans) font-medium ${
              activeTag === null
                ? "border-[#00708C] bg-[rgba(0,112,140,0.08)] text-[#012C40]"
                : "border-[rgba(0,112,140,0.15)] text-[rgba(1,44,64,0.6)] hover:border-[#00708C]"
            }`}
          >
            Todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`text-xs px-4 py-2 rounded-full border transition-all font-(family-name:--font-dm-sans) font-medium flex items-center gap-1.5 ${
                activeTag === tag
                  ? "border-[#00708C] bg-[rgba(0,112,140,0.08)] text-[#012C40]"
                  : "border-[rgba(0,112,140,0.15)] text-[rgba(1,44,64,0.6)] hover:border-[#00708C]"
              }`}
            >
              {tagLabels[tag] ?? tag}
              {activeTag === tag && <X className="w-3 h-3" />}
            </button>
          ))}
        </div>
      )}

      {/* Contador */}
      <div className="text-xs text-[rgba(1,44,64,0.4)] mb-6 font-(family-name:--font-dm-sans)">
        {filtered.length} {filtered.length === 1 ? "projeto" : "projetos"}
        {activeTag ? ` em "${tagLabels[activeTag] ?? activeTag}"` : ""}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {/* Vazio */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[rgba(1,44,64,0.4)] font-(family-name:--font-dm-sans)">
            Nenhum projeto encontrado para este filtro.
          </p>
          <button
            onClick={() => setActiveTag(null)}
            className="mt-4 text-sm text-[#00708C] font-semibold hover:underline font-(family-name:--font-dm-sans)"
          >
            Ver todos os projetos
          </button>
        </div>
      )}
    </div>
  );
}
