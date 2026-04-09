import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity/fetch";
import { allProjectsQuery } from "@/lib/sanity/queries";
import { ProjectsPageClient } from "@/components/sections/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Cases e portfólio da RC Design. Veja como transformamos desafios reais em produtos que escalam.",
};

export const revalidate = false;

interface SanityProject {
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

export default async function ProjetosPage() {
  const projects = await sanityFetch<SanityProject[]>({
    query: allProjectsQuery,
    tags: ["projects"],
  });

  return (
    <>
      {/* Hero da página */}
      <div className="px-4 md:px-6 py-12 md:py-16 border-b border-[rgba(0,112,140,0.08)] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
            Cases & portfólio
          </div>
          <h1 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-5xl leading-tight mb-4">
            Projetos que entregam
            <br className="hidden md:block" /> resultados reais
          </h1>
          <p className="text-[rgba(1,44,64,0.65)] text-lg max-w-2xl font-(family-name:--font-dm-sans)">
            Cada projeto começa com escuta. Veja como transformamos desafios
            reais em produtos que escalam.
          </p>
        </div>
      </div>

      {/* Grid com filtros */}
      <ProjectsPageClient projects={projects ?? []} />
    </>
  );
}
