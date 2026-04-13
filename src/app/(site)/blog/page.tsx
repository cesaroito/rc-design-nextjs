import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity/fetch";
import { allPostsQuery } from "@/lib/sanity/queries";
import { BlogPageClient } from "@/components/sections/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre tecnologia, dados, IA e inovação. Conteúdo da RC Design para empresas e gestores.",
};

interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  excerpt: string;
  categories?: string[];
  coverImage?: { asset: { url: string }; alt?: string };
  author?: {
    name: string;
    role?: string;
    photo?: { asset: { url: string }; alt?: string };
  };
}

export default async function BlogPage() {
  const posts = await sanityFetch<SanityPost[]>({
    query: allPostsQuery,
    tags: ["posts"],
  });

  return (
    <>
      {/* Hero da página */}
      <div className="px-4 md:px-6 py-12 md:py-16 border-b border-[rgba(0,112,140,0.08)] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
            Conteúdo & insights
          </div>
          <h1 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-5xl leading-tight mb-4">
            Tecnologia aplicada
            <br className="hidden md:block" /> ao seu negócio
          </h1>
          <p className="text-[rgba(1,44,64,0.65)] text-lg max-w-2xl font-(family-name:--font-dm-sans)">
            Artigos sobre dados, IA, desenvolvimento e inovação — escritos por
            quem constrói soluções reais.
          </p>
        </div>
      </div>

      {/* Lista de posts */}
      <BlogPageClient posts={posts ?? []} />
    </>
  );
}
