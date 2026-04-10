import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { sanityFetch } from "@/lib/sanity/fetch";
import { siteSettingsQuery } from "@/lib/sanity/queries";

interface SiteSettings {
  siteTitle?: string;
  logo?: { asset: { url: string }; alt?: string };
  logoDark?: { asset: { url: string }; alt?: string };
  contact?: {
    email?: string;
    whatsapp?: string;
    whatsappMessage?: string;
    city?: string;
  };
  social?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await sanityFetch<SiteSettings>({
    query: siteSettingsQuery,
    tags: ["settings"],
  });

  return (
    <>
      <Header settings={settings} />
      <main className="min-h-dvh">{children}</main>
      <Footer settings={settings} />
    </>
  );
}
