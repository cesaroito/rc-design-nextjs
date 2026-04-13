import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/lib/sanity/fetch";
import { postBySlugQuery, postSlugsQuery } from "@/lib/sanity/queries";
import { BlogPostClient } from "@/components/sections/BlogPostClient";

interface Props {
  params: Promise<{ slug: string }>;
}

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
    bio?: string;
    linkedIn?: string;
    photo?: { asset: { url: string }; alt?: string };
  };
  body?: unknown[];
  relatedPosts?: {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    coverImage?: { asset: { url: string }; alt?: string };
  }[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: postSlugsQuery,
    tags: ["posts"],
  });

  return (slugs ?? []).map((item) => ({
    slug: typeof item.slug === "string" ? item.slug : item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await sanityFetch<SanityPost>({
    query: postBySlugQuery,
    params: { slug },
    tags: ["posts"],
  });

  if (!post) return { title: "Post não encontrado" };

  return {
    title: post.seo?.metaTitle ?? post.title,
    description: post.seo?.metaDescription ?? post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = await sanityFetch<SanityPost>({
    query: postBySlugQuery,
    params: { slug },
    tags: ["posts"],
  });

  if (!post) notFound();

  return <BlogPostClient post={post} />;
}
