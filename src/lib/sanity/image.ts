import { createImageUrlBuilder } from "@sanity/image-url";

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
});

// Helper base — retorna o builder para encadeamento
export function urlFor(source: Parameters<typeof imageBuilder.image>[0]) {
  return imageBuilder.image(source);
}

// Helper para uso direto com next/image
export function sanityImage(
  source: Parameters<typeof imageBuilder.image>[0],
  options: {
    width?: number;
    height?: number;
    quality?: number;
  } = {},
) {
  const { width = 1200, height, quality = 85 } = options;

  let builder = imageBuilder
    .image(source)
    .width(width)
    .quality(quality)
    .auto("format");

  if (height) builder = builder.height(height);

  return builder.url();
}
