import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { sanityFetch } from "@/lib/sanity/fetch";
import { siteSettingsQuery } from "@/lib/sanity/queries";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

interface SiteSettings {
  siteTitle?: string;
  siteDescription?: string;
  siteUrl?: string;
  gtmId?: string;
  logo?: { asset: { url: string } };
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
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SiteSettings>({
    query: siteSettingsQuery,
    tags: ["settings"],
  });

  const title = settings?.siteTitle ?? "RC Design";
  const description =
    settings?.siteDescription ?? "Tecnologia que escala com o seu negócio.";
  const url = settings?.siteUrl ?? "https://rcdesign.com.br";

  return {
    metadataBase: new URL(url),
    title: {
      default: `${title} — Tecnologia que escala com o seu negócio`,
      template: `%s | ${title}`,
    },
    description,
    authors: [{ name: title, url }],
    creator: title,
    keywords: [
      "desenvolvimento web",
      "análise de dados",
      "inteligência artificial",
      "dashboard",
      "games corporativos",
      "São Paulo",
    ],
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: title,
      title: `${title} — Tecnologia que escala com o seu negócio`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@rcdesign",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#012C40",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await sanityFetch<SiteSettings>({
    query: siteSettingsQuery,
    tags: ["settings"],
  });

  const gtmId = settings?.gtmId;

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <OrganizationJsonLd
          siteTitle={settings?.siteTitle}
          siteUrl={settings?.siteUrl}
          logoUrl={settings?.logo?.asset?.url}
          email={settings?.contact?.email}
          city={settings?.contact?.city}
          social={settings?.social}
        />
        <WebSiteJsonLd
          siteTitle={settings?.siteTitle}
          siteUrl={settings?.siteUrl}
          siteDescription={settings?.siteDescription}
        />
        {children}
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      </body>
    </html>
  );
}
