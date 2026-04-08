import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-05-01",
  // CDN para leitura em produção — desativa para preview/draft
  useCdn: process.env.NODE_ENV === "production",
});
