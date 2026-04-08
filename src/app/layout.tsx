import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://rcdesign.com.br",
  ),
  title: {
    default: "RC Design — Tecnologia que escala com o seu negócio",
    template: "%s | RC Design",
  },
  description:
    "Projetos personalizados, análise de dados, painéis, games corporativos e IA aplicada. Entendemos cada cliente e entregamos resultados.",
  keywords: [
    "desenvolvimento web",
    "análise de dados",
    "inteligência artificial",
    "dashboard",
    "games corporativos",
    "São Paulo",
  ],
  authors: [{ name: "RC Design", url: "https://rcdesign.com.br" }],
  creator: "RC Design",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://rcdesign.com.br",
    siteName: "RC Design",
    title: "RC Design — Tecnologia que escala com o seu negócio",
    description:
      "Projetos personalizados, análise de dados, painéis, games corporativos e IA aplicada.",
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

export const viewport: Viewport = {
  themeColor: "#012C40",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
