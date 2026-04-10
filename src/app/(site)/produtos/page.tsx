import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { sanityFetch } from "@/lib/sanity/fetch";
import { allProductsQuery } from "@/lib/sanity/queries";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "CuidoDeVocê e ArcadePulse — produtos prontos para empresas e cidades. Implante hoje, escale amanhã.",
};

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
  heroImage?: { asset: { url: string }; alt?: string };
}

const statusConfig = {
  ready: { label: "Pronto para uso", variant: "mint" as const },
  beta: { label: "Beta", variant: "teal" as const },
  dev: { label: "Em desenvolvimento", variant: "default" as const },
};

const audienceLabels: Record<string, string> = {
  empresas: "Empresas privadas",
  governo: "Prefeituras / Gov",
  eventos: "Eventos",
  startups: "Startups",
};

const placeholders: SanityProduct[] = [
  {
    _id: "1",
    title: "CuidoDeVocê",
    slug: { current: "cuidodevoce" },
    tagline:
      "Plataforma de serviços via WhatsApp para cidadãos e prefeituras. Implantação rápida, sem app, sem fricção.",
    status: "ready",
    targetAudience: ["governo", "empresas"],
    features: [
      {
        title: "Sem instalação",
        description:
          "Funciona 100% via WhatsApp — zero fricção para o cidadão.",
      },
      {
        title: "Implantação em dias",
        description: "Configurado e operando em dias, não em meses.",
      },
      {
        title: "Multi-serviços",
        description: "Vários serviços em um único canal.",
      },
      {
        title: "Painel de gestão",
        description: "Dashboard completo para a prefeitura ou empresa.",
      },
      {
        title: "Relatórios automáticos",
        description: "Dados de uso e performance em tempo real.",
      },
      {
        title: "Suporte dedicado",
        description: "Acompanhamento durante toda a implantação.",
      },
    ],
    liveUrl: "https://cuidodevoce.ai.br",
  },
  {
    _id: "2",
    title: "ArcadePulse",
    slug: { current: "arcadepulse" },
    tagline:
      "Hub de games white-label para empresas e eventos. Engajamento imediato para qualquer público.",
    status: "ready",
    targetAudience: ["empresas", "eventos"],
    features: [
      {
        title: "White-label completo",
        description: "Sua marca em todos os jogos e interfaces.",
      },
      {
        title: "Multi-empresa",
        description: "Um hub para várias empresas e eventos simultâneos.",
      },
      {
        title: "Pronto para usar",
        description: "Zero configuração técnica necessária.",
      },
      {
        title: "Ranking em tempo real",
        description: "Placar ao vivo com atualização instantânea.",
      },
      {
        title: "Analytics de engajamento",
        description: "Métricas de participação e performance.",
      },
      {
        title: "Games variados",
        description: "Biblioteca de jogos corporativos e de eventos.",
      },
    ],
    liveUrl: "https://arcadepulse.com.br",
  },
];

function ProductHero({
  product,
  index,
}: {
  product: SanityProduct;
  index: number;
}) {
  const status = statusConfig[product.status] ?? statusConfig.dev;
  const isEven = index % 2 === 0;
  const colors = isEven
    ? { from: "#00708C", to: "#012C40" }
    : { from: "#012C40", to: "#FF404C" };

  return (
    <section
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-20 border-b border-[rgba(0,112,140,0.08)] ${
        !isEven ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <Badge variant={status.variant} className="mb-4">
          {status.label}
        </Badge>

        <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-4xl mb-4">
          {product.title}
        </h2>

        <p className="text-lg text-[rgba(1,44,64,0.65)] leading-relaxed mb-6 font-(family-name:--font-dm-sans)">
          {product.tagline}
        </p>

        {product.targetAudience && product.targetAudience.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {product.targetAudience.map((audience) => (
              <span
                key={audience}
                className="text-xs px-3 py-1.5 rounded-full bg-[rgba(0,112,140,0.06)] border border-[rgba(0,112,140,0.12)] text-[#00708C] font-medium font-(family-name:--font-dm-sans)"
              >
                {audienceLabels[audience] ?? audience}
              </span>
            ))}
          </div>
        )}

        {product.features && product.features.length > 0 && (
          <ul className="space-y-3 mb-8">
            {product.features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#87DEB3] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-[#012C40] font-(family-name:--font-dm-sans)">
                    {feature.title}
                  </span>
                  <span className="text-sm text-[rgba(1,44,64,0.6)] font-(family-name:--font-dm-sans)">
                    {" "}
                    — {feature.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-3">
          {product.liveUrl ? (
            <a
              href={product.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-br from-[#00708C] to-[#012C40] text-white text-sm font-semibold rounded-xl hover:scale-105 hover:shadow-xl transition-all font-(family-name:--font-dm-sans)"
            >
              Acessar produto
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : null}
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[rgba(0,112,140,0.2)] text-[#012C40] text-sm font-semibold rounded-xl hover:border-[#00708C] hover:bg-[#f8fafb] transition-all font-(family-name:--font-dm-sans)"
          >
            Solicitar demonstração
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div
        className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${colors.from}20, ${colors.to}10)`,
        }}
      >
        {product.heroImage?.asset?.url ? (
          <Image
            src={product.heroImage.asset.url}
            alt={product.heroImage.alt ?? product.title}
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
            }}
          >
            <span className="text-white font-bold text-5xl font-(family-name:--font-plus-jakarta)">
              {product.title.charAt(0)}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default async function ProdutosPage() {
  const products = await sanityFetch<SanityProduct[]>({
    query: allProductsQuery,
    tags: ["products"],
  });

  const items = products && products.length > 0 ? products : placeholders;

  return (
    <>
      <div className="px-4 md:px-6 py-12 md:py-16 border-b border-[rgba(0,112,140,0.08)] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
            Produtos prontos para usar
          </div>
          <h1 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-5xl leading-tight mb-4">
            Implante hoje,
            <br className="hidden md:block" /> escale amanhã
          </h1>
          <p className="text-[rgba(1,44,64,0.65)] text-lg max-w-2xl font-(family-name:--font-dm-sans)">
            Dois produtos prontos para empresas e cidades. Sem meses de
            desenvolvimento — em dias você já está operando.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {items.map((product, index) => (
            <ProductHero key={product._id} product={product} index={index} />
          ))}
        </div>
      </div>

      <div className="px-4 md:px-6 py-16 bg-[#f8fafb] border-t border-[rgba(0,112,140,0.08)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-4xl mb-4">
            Quer avaliar qual produto encaixa melhor?
          </h2>
          <p className="text-[rgba(1,44,64,0.65)] text-lg mb-8 font-(family-name:--font-dm-sans)">
            A gente mostra o cenário ideal, o esforço de implantação e o caminho
            mais rápido para colocar a operação no ar.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-br from-[#012C40] to-[#00708C] text-white text-sm font-semibold rounded-xl hover:scale-105 hover:shadow-xl transition-all font-(family-name:--font-dm-sans)"
            >
              Falar com a equipe
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[rgba(0,112,140,0.2)] text-[#012C40] text-sm font-semibold rounded-xl hover:border-[#00708C] hover:bg-white transition-all font-(family-name:--font-dm-sans)"
            >
              Ver projetos relacionados
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
