import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity/fetch";
import { allServicesQuery } from "@/lib/sanity/queries";
import { ServicesPageClient } from "@/components/sections/ServicesPageClient";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Projetos personalizados, análise de dados, painéis, games corporativos e IA aplicada. Soluções que se adaptam ao seu negócio.",
};

export const revalidate = false;

interface SanityService {
  _id: string;
  title: string;
  slug: { current: string };
  order: number;
  icon?: string;
  tagline: string;
  benefits?: { title: string; description: string }[];
  techStack?: string[];
  faq?: { question: string; answer: string }[];
  relatedProjects?: {
    _id: string;
    title: string;
    slug: { current: string };
    tags?: string[];
  }[];
}

export default async function ServicosPage() {
  const services = await sanityFetch<SanityService[]>({
    query: allServicesQuery,
    tags: ["services"],
  });

  return (
    <>
      {/* Hero da página */}
      <div className="px-4 md:px-6 py-12 md:py-16 border-b border-[rgba(0,112,140,0.08)] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
            O que fazemos
          </div>
          <h1 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-5xl leading-tight mb-4">
            Soluções que se adaptam
            <br className="hidden md:block" /> ao seu negócio
          </h1>
          <p className="text-[rgba(1,44,64,0.65)] text-lg max-w-2xl font-(family-name:--font-dm-sans)">
            Da análise de dados à construção de games corporativos — cada
            serviço é desenhado para escalar junto com você.
          </p>
        </div>
      </div>

      {/* Conteúdo interativo */}
      <ServicesPageClient services={services ?? []} />
    </>
  );
}
