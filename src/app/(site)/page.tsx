import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { CTASection } from "@/components/sections/CTASection";
import { sanityFetch } from "@/lib/sanity/fetch";
import { featuredProjectsQuery, allProductsQuery } from "@/lib/sanity/queries";

interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  client?: string;
  tagline: string;
  brandColor?: string;
  tags?: string[];
  heroImage?: {
    asset: { url: string };
    alt?: string;
  };
}

interface SanityProduct {
  _id: string;
  title: string;
  slug: { current: string };
  tagline: string;
  status: "ready" | "dev" | "beta";
  targetAudience?: string[];
  features?: { title: string; description: string }[];
  liveUrl?: string;
  demoUrl?: string;
}

export default async function HomePage() {
  const [projects, products] = await Promise.all([
    sanityFetch<SanityProject[]>({
      query: featuredProjectsQuery,
      tags: ["projects"],
    }),
    sanityFetch<SanityProduct[]>({
      query: allProductsQuery,
      tags: ["products"],
    }),
  ]);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects projects={projects} />
      <ProductsSection products={products} />
      <CTASection />
    </>
  );
}
