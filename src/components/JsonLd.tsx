interface OrganizationJsonLdProps {
  siteTitle?: string;
  siteUrl?: string;
  logoUrl?: string;
  email?: string;
  city?: string;
  social?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export function OrganizationJsonLd({
  siteTitle = "RC Design",
  siteUrl = "https://rcdesign.com.br",
  logoUrl,
  email,
  city,
  social,
}: OrganizationJsonLdProps) {
  const sameAs = [social?.linkedin, social?.github, social?.instagram].filter(
    Boolean,
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteTitle,
    url: siteUrl,
    ...(logoUrl && { logo: logoUrl }),
    ...(email && { email }),
    address: {
      "@type": "PostalAddress",
      addressLocality: city ?? "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebSiteJsonLdProps {
  siteTitle?: string;
  siteUrl?: string;
  siteDescription?: string;
}

export function WebSiteJsonLd({
  siteTitle = "RC Design",
  siteUrl = "https://rcdesign.com.br",
  siteDescription = "Tecnologia que escala com o seu negócio.",
}: WebSiteJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    url: siteUrl,
    description: siteDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
