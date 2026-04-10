import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity/fetch";
import { activeTeamQuery } from "@/lib/sanity/queries";
import { AboutPageClient } from "@/components/sections/AboutPageClient";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a RC Design — tecnologia que resolve problemas reais para empresas e cidades. Nossa missão, valores e equipe.",
};

interface SanityTeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  expertise?: string[];
  linkedIn?: string;
  github?: string;
  photo?: {
    asset: { url: string };
    alt?: string;
  };
}

export default async function SobrePage() {
  const team = await sanityFetch<SanityTeamMember[]>({
    query: activeTeamQuery,
    tags: ["team"],
  });

  return (
    <>
      {/* Hero da página */}
      <div className="px-4 md:px-6 py-12 md:py-16 border-b border-[rgba(0,112,140,0.08)] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
            Quem somos
          </div>
          <h1 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-5xl leading-tight mb-4">
            Tecnologia que escala
            <br className="hidden md:block" /> com o seu negócio
          </h1>
          <p className="text-[rgba(1,44,64,0.65)] text-lg max-w-2xl font-(family-name:--font-dm-sans)">
            Somos uma startup brasileira de tecnologia focada em entregar
            soluções que fazem sentido — para empresas, prefeituras e pessoas.
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <AboutPageClient team={team ?? []} />
    </>
  );
}
