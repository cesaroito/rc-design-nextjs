"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { formatDate } from "@/lib/utils";

interface Author {
  name: string;
  role?: string;
  bio?: string;
  linkedIn?: string;
  photo?: { asset: { url: string }; alt?: string };
}

interface RelatedPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage?: { asset: { url: string }; alt?: string };
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
  body?: unknown[];
  relatedPosts?: RelatedPost[];
}

interface BlogPostClientProps {
  post: Post;
}

const categoryLabels: Record<string, string> = {
  ia: "Inteligência Artificial",
  dados: "Análise de Dados",
  dev: "Desenvolvimento",
  inovacao: "Inovação",
  cases: "Cases",
  produtos: "Produtos",
};

// Componentes customizados do Portable Text
const portableTextComponents = {
  types: {
    image: ({
      value,
    }: {
      value: { asset?: { url?: string }; alt?: string; caption?: string };
    }) => {
      if (!value.asset?.url) return null;

      return (
        <figure className="my-8">
          <Image
            src={value.asset.url}
            alt={value.alt ?? ""}
            width={1600}
            height={900}
            sizes="(min-width: 1024px) 768px, 100vw"
            className="w-full h-auto rounded-xl border border-[rgba(0,112,140,0.12)] shadow-md"
          />
          {value.caption && (
            <figcaption className="text-center text-xs text-[rgba(1,44,64,0.5)] mt-2 font-(family-name:--font-dm-sans)">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }: { value: { type: string; text: string } }) => {
      const styles: Record<string, string> = {
        info: "border-[#00708C] bg-[rgba(0,112,140,0.06)] text-[#012C40]",
        warning: "border-[#FF404C] bg-[rgba(255,64,76,0.06)] text-[#012C40]",
        tip: "border-[#87DEB3] bg-[rgba(135,222,179,0.1)] text-[#012C40]",
        success: "border-[#87DEB3] bg-[rgba(135,222,179,0.15)] text-[#085041]",
      };
      const icons: Record<string, string> = {
        info: "ℹ️",
        warning: "⚠️",
        tip: "💡",
        success: "✅",
      };
      return (
        <div
          className={`border-l-4 rounded-r-xl p-4 my-6 ${styles[value.type] ?? styles.info}`}
        >
          <div className="flex items-start gap-3">
            <span className="text-lg">{icons[value.type] ?? icons.info}</span>
            <p className="text-sm leading-relaxed font-(family-name:--font-dm-sans)">
              {value.text}
            </p>
          </div>
        </div>
      );
    },
    codeBlock: ({
      value,
    }: {
      value: { language?: string; filename?: string; code: string };
    }) => (
      <div className="my-6 rounded-xl overflow-hidden border border-[rgba(0,112,140,0.12)]">
        {value.filename && (
          <div className="bg-[#012C40] px-4 py-2 flex items-center justify-between">
            <span className="text-xs text-white/60 font-mono">
              {value.filename}
            </span>
            {value.language && (
              <span className="text-xs text-[#87DEB3] font-mono">
                {value.language}
              </span>
            )}
          </div>
        )}
        <pre className="bg-[#012C40]/95 p-4 overflow-x-auto">
          <code className="text-sm text-white/90 font-mono">{value.code}</code>
        </pre>
      </div>
    ),
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-2xl mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-xl mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-[rgba(1,44,64,0.75)] leading-relaxed mb-4 font-(family-name:--font-dm-sans)">
        {children}
      </p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[#00708C] pl-5 my-6 italic text-[rgba(1,44,64,0.7)] font-(family-name:--font-dm-sans)">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-[#012C40]">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({
      value,
      children,
    }: {
      value?: { href?: string };
      children?: React.ReactNode;
    }) => {
      const href = value?.href;

      if (!href) return <>{children}</>;

      const isExternal =
        href.startsWith("http://") || href.startsWith("https://");

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-[#00708C] underline underline-offset-2 hover:text-[#012C40] transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-[rgba(1,44,64,0.75)] font-(family-name:--font-dm-sans)">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-[rgba(1,44,64,0.75)] font-(family-name:--font-dm-sans)">
        {children}
      </ol>
    ),
  },
};

export function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <div>
      {/* Hero */}
      <div className="px-4 md:px-6 py-12 md:py-16 border-b border-[rgba(0,112,140,0.08)] bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[rgba(1,44,64,0.5)] hover:text-[#00708C] transition-colors mb-8 font-(family-name:--font-dm-sans)"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>

          {/* Categorias */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs px-3 py-1 rounded-full bg-[rgba(0,112,140,0.08)] border border-[rgba(0,112,140,0.12)] text-[#00708C] font-medium font-(family-name:--font-dm-sans)"
                >
                  {categoryLabels[cat] ?? cat}
                </span>
              ))}
            </div>
          )}

          {/* Título */}
          <h1 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-balance">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-[rgba(1,44,64,0.65)] leading-relaxed mb-8 font-(family-name:--font-dm-sans)">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-6 flex-wrap pt-6 border-t border-[rgba(0,112,140,0.08)]">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.photo?.asset?.url ? (
                  <Image
                    src={post.author.photo.asset.url}
                    alt={post.author.photo.alt ?? post.author.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#00708C] to-[#012C40] flex items-center justify-center">
                    <span className="text-white font-bold text-sm font-(family-name:--font-plus-jakarta)">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold text-[#012C40] font-(family-name:--font-dm-sans)">
                    {post.author.name}
                  </div>
                  {post.author.role && (
                    <div className="text-xs text-[rgba(1,44,64,0.5)] font-(family-name:--font-dm-sans)">
                      {post.author.role}
                    </div>
                  )}
                </div>
              </div>
            )}
            {post.publishedAt && (
              <div className="flex items-center gap-2 text-sm text-[rgba(1,44,64,0.5)] font-(family-name:--font-dm-sans)">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Imagem de capa */}
      {post.coverImage?.asset?.url && (
        <div className="px-4 md:px-6 py-8 bg-[#f8fafb] border-b border-[rgba(0,112,140,0.08)]">
          <div className="max-w-4xl mx-auto">
            <Image
              src={post.coverImage.asset.url}
              alt={post.coverImage.alt ?? post.title}
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="w-full h-auto rounded-2xl border border-[rgba(0,112,140,0.12)] shadow-xl"
            />
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <div className="px-4 md:px-6 py-12 bg-white">
        <div className="max-w-3xl mx-auto">
          {post.body && post.body.length > 0 ? (
            <PortableText
              value={post.body as PortableTextBlock[]}
              components={portableTextComponents}
            />
          ) : (
            <p className="text-[rgba(1,44,64,0.5)] font-(family-name:--font-dm-sans)">
              Conteúdo em breve.
            </p>
          )}
        </div>
      </div>

      {/* Posts relacionados */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <div className="px-4 md:px-6 py-12 bg-[#f8fafb] border-t border-[rgba(0,112,140,0.08)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-2xl mb-8">
              Artigos relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.map((related) => (
                <Link
                  key={related._id}
                  href={`/blog/${related.slug.current}`}
                  className="group bg-white border border-[rgba(0,112,140,0.12)] rounded-2xl p-6 hover:border-[#00708C] hover:shadow-lg transition-all"
                >
                  <h3 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-lg mb-2 group-hover:text-[#00708C] transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-[rgba(1,44,64,0.6)] leading-relaxed line-clamp-2 font-(family-name:--font-dm-sans)">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="px-4 md:px-6 py-12 border-t border-[rgba(0,112,140,0.08)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-xl mb-1">
              Gostou do conteúdo?
            </div>
            <div className="text-sm text-[rgba(1,44,64,0.5)] font-(family-name:--font-dm-sans)">
              Fale com a gente sobre o seu projeto.
            </div>
          </div>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-br from-[#00708C] to-[#012C40] text-white text-sm font-semibold rounded-xl hover:scale-105 hover:shadow-xl transition-all font-(family-name:--font-dm-sans) shrink-0"
          >
            Falar com a equipe
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
