import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/lib/sanity/fetch";
import { projectBySlugQuery, projectSlugsQuery } from "@/lib/sanity/queries";
import { CasePageClient } from "@/components/sections/CasePageClient";
import {
  getProjectPlaceholderBySlug,
  projectPlaceholderSlugs,
  type ProjectRecord,
} from "@/content/projectPlaceholders";

export const revalidate = false;

interface Props {
  params: Promise<{ slug: string }>;
}

async function getProjectBySlug(slug: string): Promise<ProjectRecord | null> {
  const project = await sanityFetch<ProjectRecord>({
    query: projectBySlugQuery,
    params: { slug },
    tags: ["projects"],
  });

  return project ?? getProjectPlaceholderBySlug(slug) ?? null;
}

// Gera as rotas estáticas para cada case
export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: projectSlugsQuery,
    tags: ["projects"],
  });

  return Array.from(
    new Set([...(slugs ?? []).map((item) => item.slug), ...projectPlaceholderSlugs]),
  ).map((slug) => ({ slug }));
}

// Gera metadata dinâmica por projeto
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) return { title: "Projeto não encontrado" };

  return {
    title: project.seo?.metaTitle ?? project.title,
    description: project.seo?.metaDescription ?? project.tagline,
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return <CasePageClient project={project} />;
}
