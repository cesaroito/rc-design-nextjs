"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Author {
  name: string;
  role?: string;
  photo?: { asset: { url: string }; alt?: string };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  excerpt: string;
  categories?: string[];
  coverImage?: { asset: { url: string }; alt?: string };
  author?: Author;
}

interface BlogPageClientProps {
  posts: Post[];
}

const categoryLabels: Record<string, string> = {
  ia: "Inteligência Artificial",
  dados: "Análise de Dados",
  dev: "Desenvolvimento",
  inovacao: "Inovação",
  cases: "Cases",
  produtos: "Produtos",
};

function PostCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className={`group relative bg-white border border-[rgba(0,112,140,0.12)] rounded-2xl overflow-hidden hover:border-[#00708C] hover:shadow-2xl transition-all duration-300 flex flex-col ${featured ? "lg:flex-row" : ""}`}
    >
      {/* Imagem */}
      <div
        className={`relative overflow-hidden bg-[#f8fafb] ${featured ? "lg:w-1/2 aspect-video lg:aspect-auto" : "aspect-video"}`}
      >
        {post.coverImage?.asset?.url ? (
          <Image
            src={post.coverImage.asset.url}
            alt={post.coverImage.alt ?? post.title}
            fill
            sizes={
              featured
                ? "(min-width: 1024px) 50vw, 100vw"
                : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            }
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center min-h-48">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#00708C] to-[#012C40] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl font-(family-name:--font-plus-jakarta)">
                {post.title.charAt(0)}
              </span>
            </div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#012C40]/40 via-transparent to-transparent" />

        {/* Categorias */}
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-4 left-4 flex gap-2">
            {post.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="text-xs px-2.5 py-1 rounded-full bg-white/90 text-[#012C40] font-medium font-(family-name:--font-dm-sans)"
              >
                {categoryLabels[cat] ?? cat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div
        className={`p-6 flex flex-col flex-1 ${featured ? "lg:p-8 lg:justify-center" : ""}`}
      >
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-[rgba(1,44,64,0.5)] mb-3 font-(family-name:--font-dm-sans)">
          {post.author && (
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {post.author.name}
            </span>
          )}
          {post.publishedAt && (
            <>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatDate(post.publishedAt)}
              </span>
            </>
          )}
        </div>

        {/* Título */}
        <h2
          className={`font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] group-hover:text-[#00708C] transition-colors mb-3 ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-[rgba(1,44,64,0.65)] leading-relaxed font-(family-name:--font-dm-sans) mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-semibold text-[#00708C] group-hover:gap-3 transition-all font-(family-name:--font-dm-sans) pt-4 border-t border-[rgba(0,112,140,0.08)]">
          Ler artigo completo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export function BlogPageClient({ posts }: BlogPageClientProps) {
  const allCategories = Array.from(
    new Set(posts.flatMap((p) => p.categories ?? [])),
  );

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const hasPosts = posts.length > 0;

  const filtered = activeCategory
    ? posts.filter((p) => p.categories?.includes(activeCategory))
    : posts;

  const hasFilteredPosts = filtered.length > 0;
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* Filtros */}
      {allCategories.length > 0 && (
        <div className="flex items-center gap-3 flex-wrap mb-10">
          <span className="text-xs font-semibold text-[rgba(1,44,64,0.4)] uppercase tracking-widest font-(family-name:--font-dm-sans)">
            Filtrar
          </span>
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`text-xs px-4 py-2 rounded-full border transition-all font-(family-name:--font-dm-sans) font-medium ${
              activeCategory === null
                ? "border-[#00708C] bg-[rgba(0,112,140,0.08)] text-[#012C40]"
                : "border-[rgba(0,112,140,0.15)] text-[rgba(1,44,64,0.6)] hover:border-[#00708C]"
            }`}
          >
            Todos
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              className={`text-xs px-4 py-2 rounded-full border transition-all font-(family-name:--font-dm-sans) font-medium ${
                activeCategory === cat
                  ? "border-[#00708C] bg-[rgba(0,112,140,0.08)] text-[#012C40]"
                  : "border-[rgba(0,112,140,0.15)] text-[rgba(1,44,64,0.6)] hover:border-[#00708C]"
              }`}
            >
              {categoryLabels[cat] ?? cat}
            </button>
          ))}
        </div>
      )}

      {/* Contador */}
      <div className="text-xs text-[rgba(1,44,64,0.4)] mb-8 font-(family-name:--font-dm-sans)">
        {filtered.length} {filtered.length === 1 ? "artigo" : "artigos"}
        {activeCategory
          ? ` em "${categoryLabels[activeCategory] ?? activeCategory}"`
          : ""}
      </div>

      {/* Estado vazio */}
      {hasPosts && !hasFilteredPosts && (
        <div className="text-center py-20">
          <p className="text-[rgba(1,44,64,0.4)] font-(family-name:--font-dm-sans) mb-4">
            Nenhum artigo encontrado.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className="text-sm text-[#00708C] font-semibold hover:underline font-(family-name:--font-dm-sans)"
          >
            Ver todos os artigos
          </button>
        </div>
      )}

      {/* Post em destaque */}
      {featured && (
        <div className="mb-10">
          <PostCard post={featured} featured />
        </div>
      )}

      {/* Grid de posts */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}

      {/* Estado sem posts */}
      {!hasPosts && (
        <div className="text-center py-24 border border-[rgba(0,112,140,0.08)] rounded-2xl bg-[#f8fafb]">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#00708C] to-[#012C40] flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white font-bold text-2xl">✍️</span>
          </div>
          <h3 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-xl mb-2">
            Em breve
          </h3>
          <p className="text-[rgba(1,44,64,0.5)] font-(family-name:--font-dm-sans)">
            Os primeiros artigos estão sendo preparados.
          </p>
        </div>
      )}
    </div>
  );
}
