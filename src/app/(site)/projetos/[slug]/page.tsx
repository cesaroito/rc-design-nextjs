import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/lib/sanity/fetch";
import { projectBySlugQuery, projectSlugsQuery } from "@/lib/sanity/queries";
import { CasePageClient } from "@/components/sections/CasePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

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
  challenge?: unknown[];
  solution?: unknown[];
  results?: { metric: string; value: string; description?: string }[];
  heroImage?: { asset: { url: string }; alt?: string };
  screenshots?: { asset: { url: string }; alt?: string; caption?: string }[];
  services?: { _id: string; title: string; slug: { current: string } }[];
  testimonial?: {
    quote: string;
    authorName: string;
    authorRole?: string;
    company?: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: projectSlugsQuery,
    tags: ["projects"],
  });

  return (slugs ?? []).map((item) => ({
    slug: typeof item.slug === "string" ? item.slug : item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = await sanityFetch<SanityProject>({
    query: projectBySlugQuery,
    params: { slug },
    tags: ["projects"],
  });

  if (!project) return { title: "Projeto não encontrado" };

  return {
    title: project.seo?.metaTitle ?? project.title,
    description: project.seo?.metaDescription ?? project.tagline,
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;

  const project = await sanityFetch<SanityProject>({
    query: projectBySlugQuery,
    params: { slug },
    tags: ["projects"],
  });

  if (!project) notFound();

  return <CasePageClient project={project} />;
}
