"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Result {
  metric: string;
  value: string;
  description?: string;
}

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
  challenge?: unknown[];
  solution?: unknown[];
  results?: Result[];
  heroImage?: {
    asset: { url: string };
    alt?: string;
  };
  screenshots?: {
    asset: { url: string };
    alt?: string;
    caption?: string;
  }[];
  services?: {
    _id: string;
    title: string;
    slug: { current: string };
  }[];
  testimonial?: {
    quote: string;
    authorName: string;
    authorRole?: string;
    company?: string;
  };
}

interface CasePageClientProps {
  project: Project;
}

const tabs = [
  { id: "overview", label: "Visão geral" },
  { id: "challenge", label: "Desafio" },
  { id: "solution", label: "Solução" },
  { id: "results", label: "Resultados" },
];

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

export function CasePageClient({ project }: CasePageClientProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const brandColor = project.brandColor ?? "#00708C";

  return (
    <div>
      {/* Hero */}
      <div
        className="relative px-4 md:px-6 py-16 md:py-24 border-b border-[rgba(0,112,140,0.08)]"
        style={{
          background: `linear-gradient(135deg, ${brandColor}12, ${brandColor}04, #ffffff)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm text-[rgba(1,44,64,0.5)] hover:text-[#00708C] transition-colors mb-8 font-(family-name:--font-dm-sans)"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar aos projetos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Esquerda */}
            <div>
              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="teal">
                      {tagLabels[tag] ?? tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Título */}
              <h1 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-5xl leading-tight mb-4">
                {project.title}
              </h1>

              {/* Cliente */}
              {project.client && (
                <div className="text-sm text-[rgba(1,44,64,0.5)] mb-4 font-(family-name:--font-dm-sans)">
                  Cliente:{" "}
                  <span className="font-medium text-[#012C40]">
                    {project.client}
                  </span>
                </div>
              )}

              {/* Tagline */}
              <p className="text-lg text-[rgba(1,44,64,0.65)] leading-relaxed mb-8 font-(family-name:--font-dm-sans)">
                {project.tagline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-br from-[#00708C] to-[#012C40] text-white text-sm font-semibold rounded-xl hover:scale-105 hover:shadow-xl transition-all font-(family-name:--font-dm-sans)"
                  >
                    Ver projeto ao vivo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : null}
                <Link href="/contato">
                  <Button variant="secondary" size="md">
                    Projeto similar
                  </Button>
                </Link>
              </div>
            </div>

            {/* Direita — imagem */}
            <div
              className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${brandColor}20, ${brandColor}08)`,
              }}
            >
              {project.heroImage?.asset?.url ? (
                <Image
                  src={project.heroImage.asset.url}
                  alt={project.heroImage.alt ?? project.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${brandColor}, #012C40)`,
                    }}
                  >
                    <span className="text-white font-bold text-4xl font-(family-name:--font-plus-jakarta)">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-[rgba(0,112,140,0.08)] bg-white sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all font-(family-name:--font-dm-sans) ${
                  activeTab === tab.id
                    ? "border-[#00708C] text-[#012C40]"
                    : "border-transparent text-[rgba(1,44,64,0.5)] hover:text-[#012C40]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo das tabs */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Overview */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Serviços aplicados */}
              {project.services && project.services.length > 0 && (
                <div>
                  <div className="text-xs font-semibold text-[rgba(1,44,64,0.4)] uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
                    Serviços aplicados
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.services?.map((s) => (
                      <Link
                        key={s._id}
                        href={`/servicos`}
                        className="text-sm px-4 py-2 border border-[rgba(0,112,140,0.15)] rounded-xl text-[#012C40] hover:border-[#00708C] transition-colors font-(family-name:--font-dm-sans)"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div>
                  <div className="text-xs font-semibold text-[rgba(1,44,64,0.4)] uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
                    Stack tecnológica
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-lg border border-[rgba(0,112,140,0.15)] text-[#00708C] font-medium font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Depoimento */}
              {project.testimonial && (
                <div
                  className="border-l-4 rounded-r-2xl p-6"
                  style={{
                    borderColor: brandColor,
                    background: `${brandColor}08`,
                  }}
                >
                  <p className="text-[#012C40] text-lg leading-relaxed mb-4 font-(family-name:--font-dm-sans) italic">
                    <span aria-hidden="true">&ldquo;</span>
                    {project.testimonial?.quote}
                    <span aria-hidden="true">&rdquo;</span>
                  </p>
                  <div className="text-sm font-semibold text-[#012C40] font-(family-name:--font-dm-sans)">
                    {project.testimonial?.authorName}
                    {project.testimonial?.authorRole && (
                      <span className="font-normal text-[rgba(1,44,64,0.5)]">
                        {" "}
                        · {project.testimonial.authorRole}
                      </span>
                    )}
                    {project.testimonial?.company && (
                      <span className="font-normal text-[rgba(1,44,64,0.5)]">
                        {" "}
                        · {project.testimonial.company}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar — resultados resumidos */}
            {project.results && project.results.length > 0 && (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-[rgba(1,44,64,0.4)] uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
                  Resultados
                </div>
                {project.results?.map((result) => (
                  <div
                    key={result.metric}
                    className="bg-[#f8fafb] border border-[rgba(0,112,140,0.08)] rounded-xl p-5"
                  >
                    <div
                      className="font-(family-name:--font-plus-jakarta) font-semibold text-2xl mb-1"
                      style={{ color: brandColor }}
                    >
                      {result.value}
                    </div>
                    <div className="text-sm font-medium text-[#012C40] font-(family-name:--font-dm-sans)">
                      {result.metric}
                    </div>
                    {result.description && (
                      <div className="text-xs text-[rgba(1,44,64,0.5)] mt-1 font-(family-name:--font-dm-sans)">
                        {result.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Desafio */}
        {activeTab === "challenge" && (
          <div className="max-w-3xl">
            <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-2xl mb-6">
              O desafio
            </h2>
            {Array.isArray(project.challenge) &&
            project.challenge.length > 0 ? (
              <div className="prose prose-lg max-w-none text-[rgba(1,44,64,0.7)] font-(family-name:--font-dm-sans)">
                <p>
                  Conteúdo do desafio disponível após preenchimento no Sanity
                  Studio.
                </p>
              </div>
            ) : (
              <p className="text-[rgba(1,44,64,0.5)] font-(family-name:--font-dm-sans)">
                Conteúdo em breve. Preencha o campo &ldquo;Desafio&rdquo; no
                Sanity Studio para exibir aqui.
              </p>
            )}
          </div>
        )}

        {/* Solução */}
        {activeTab === "solution" && (
          <div className="max-w-3xl">
            <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-2xl mb-6">
              A solução
            </h2>
            {Array.isArray(project.solution) && project.solution.length > 0 ? (
              <div className="prose prose-lg max-w-none text-[rgba(1,44,64,0.7)] font-(family-name:--font-dm-sans)">
                <p>
                  Conteúdo da solução disponível após preenchimento no Sanity
                  Studio.
                </p>
              </div>
            ) : (
              <p className="text-[rgba(1,44,64,0.5)] font-(family-name:--font-dm-sans)">
                Conteúdo em breve. Preencha o campo &ldquo;Solução&rdquo; no
                Sanity Studio para exibir aqui.
              </p>
            )}
          </div>
        )}

        {/* Resultados */}
        {activeTab === "results" && (
          <div>
            <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-2xl mb-8">
              Resultados mensuráveis
            </h2>
            {project.results && project.results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.results.map((result) => (
                  <div
                    key={result.metric}
                    className="bg-white border border-[rgba(0,112,140,0.12)] rounded-2xl p-8 text-center hover:shadow-lg transition-all"
                  >
                    <div
                      className="font-(family-name:--font-plus-jakarta) font-semibold text-4xl mb-2"
                      style={{ color: brandColor }}
                    >
                      {result.value}
                    </div>
                    <div className="text-base font-semibold text-[#012C40] mb-2 font-(family-name:--font-dm-sans)">
                      {result.metric}
                    </div>
                    {result.description && (
                      <div className="text-sm text-[rgba(1,44,64,0.5)] font-(family-name:--font-dm-sans)">
                        {result.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[rgba(1,44,64,0.5)] font-(family-name:--font-dm-sans)">
                Resultados em breve. Preencha o campo
                {" "}
                &ldquo;Resultados&rdquo; no Sanity Studio para exibir aqui.
              </p>
            )}
          </div>
        )}

        {/* CTA final */}
        <div className="mt-16 pt-10 border-t border-[rgba(0,112,140,0.08)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-xl mb-1">
              Quer um projeto similar?
            </div>
            <div className="text-sm text-[rgba(1,44,64,0.5)] font-(family-name:--font-dm-sans)">
              Conte o seu desafio — a gente encontra a solução certa.
            </div>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/contato">
              <Button variant="primary" size="md" className="group">
                Falar com a equipe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/projetos">
              <Button variant="secondary" size="md">
                Ver mais projetos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
