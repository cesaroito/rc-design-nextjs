import { groq } from "next-sanity";

// ── Fragmentos reutilizáveis ──────────────────────────────
const img = groq`
  asset->{ url, metadata { dimensions, lqip } },
  alt, caption, hotspot, crop
`;

const seo = groq`
  seo {
    metaTitle,
    metaDescription,
    noIndex,
    ogImage { asset->{ url } }
  }
`;

// ── Site Settings ─────────────────────────────────────────
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteTitle,
    siteDescription,
    siteUrl,
    ogImage { ${img} },
    contact,
    social,
    maintenanceMode
  }
`;

// ── Projects ──────────────────────────────────────────────
export const allProjectsQuery = groq`
  *[_type == "project"] | order(featured desc, publishedAt desc){
    _id, title, slug, client, tagline, featured,
    publishedAt, brandColor, tags, techStack, liveUrl,
    heroImage { ${img} },
    services[]->{ _id, title, slug }
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true]
  | order(publishedAt desc)[0...3]{
    _id, title, slug, client, tagline,
    brandColor, tags,
    heroImage { ${img} },
    services[]->{ _id, title, slug }
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    _id, title, slug, client, tagline,
    brandColor, tags, techStack, liveUrl,
    heroImage { ${img} },
    screenshots[]{ ${img} },
    challenge, solution, results,
    services[]->{ _id, title, slug, icon },
    testimonial->{
      quote, authorName, authorRole, company,
      authorPhoto { ${img} }
    },
    ${seo}
  }
`;

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)]{
    "slug": slug.current
  }
`;

// ── Services ──────────────────────────────────────────────
export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc){
    _id, title, slug, order, icon, tagline,
    description, benefits, techStack, faq,
    relatedProjects[]->{ _id, title, slug, heroImage { ${img} }, tags }
  }
`;

// ── Products ──────────────────────────────────────────────
export const allProductsQuery = groq`
  *[_type == "product"] | order(_createdAt asc){
    _id, title, slug, tagline, status,
    targetAudience, features, liveUrl, demoUrl,
    heroImage { ${img} },
    ${seo}
  }
`;

// ── Blog Posts ────────────────────────────────────────────
export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc){
    _id, title, slug, publishedAt, excerpt, categories,
    coverImage { ${img} },
    author->{ name, role, photo { ${img} } }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id, title, slug, publishedAt, excerpt, categories,
    coverImage { ${img} },
    author->{ name, role, bio, photo { ${img} }, linkedIn },
    body,
    relatedPosts[]->{ _id, title, slug, excerpt, coverImage { ${img} } },
    ${seo}
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }
`;

// ── Team & Testimonials ───────────────────────────────────
export const activeTeamQuery = groq`
  *[_type == "teamMember" && isActive == true] | order(name asc){
    _id, name, role, bio, expertise, linkedIn,
    photo { ${img} }
  }
`;

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true][0...6]{
    _id, quote, authorName, authorRole, company,
    authorPhoto { ${img} },
    project->{ title, slug }
  }
`;
