import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface Product {
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

interface ProductsSectionProps {
  products: Product[];
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

// Placeholders enquanto o Sanity não tem conteúdo
const placeholders: Omit<Product, "_id">[] = [
  {
    title: "CuidoDeVocê",
    slug: { current: "cuidodevoce" },
    tagline:
      "Plataforma de serviços via WhatsApp para cidadãos e prefeituras. Implantação rápida, sem app.",
    status: "ready",
    targetAudience: ["governo", "empresas"],
    features: [
      { title: "Sem instalação", description: "Funciona 100% via WhatsApp" },
      {
        title: "Implantação rápida",
        description: "Configurado em dias, não meses",
      },
      {
        title: "Multi-serviços",
        description: "Vários serviços em um canal só",
      },
    ],
    liveUrl: "https://cuidodevoce.ai.br",
  },
  {
    title: "ArcadePulse",
    slug: { current: "arcadepulse" },
    tagline:
      "Hub de games white-label para empresas e eventos. Engajamento imediato para qualquer público.",
    status: "ready",
    targetAudience: ["empresas", "eventos"],
    features: [
      { title: "White-label", description: "Sua marca em todos os jogos" },
      { title: "Multi-empresa", description: "Um hub para várias empresas" },
      { title: "Pronto para usar", description: "Zero configuração técnica" },
    ],
    liveUrl: "https://arcadepulse.com.br",
  },
];

function ProductCard({
  product,
}: {
  product: Omit<Product, "_id"> & { _id?: string };
}) {
  const status = statusConfig[product.status] ?? statusConfig.dev;

  return (
    <div className="group relative bg-white border border-[rgba(0,112,140,0.12)] rounded-2xl p-8 hover:border-[#00708C] hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <Badge variant={status.variant} className="mb-3">
            {status.label}
          </Badge>
          <h3 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-2xl">
            {product.title}
          </h3>
        </div>
        {product.targetAudience && product.targetAudience.length > 0 && (
          <div className="flex flex-col gap-1 shrink-0">
            {product.targetAudience.slice(0, 2).map((a) => (
              <span
                key={a}
                className="text-xs px-2.5 py-1 rounded-full bg-[rgba(0,112,140,0.06)] text-[#00708C] font-medium font-(family-name:--font-dm-sans)"
              >
                {audienceLabels[a] ?? a}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Tagline */}
      <p className="text-[rgba(1,44,64,0.65)] leading-relaxed font-(family-name:--font-dm-sans) mb-6">
        {product.tagline}
      </p>

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {product.features.map((feature) => (
            <li key={feature.title} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#87DEB3] shrink-0 mt-0.5" />
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

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        {product.liveUrl ? (
          <a
            href={product.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-5 bg-linear-to-br from-[#00708C] to-[#012C40] text-white text-sm font-semibold rounded-xl hover:scale-105 hover:shadow-xl transition-all font-(family-name:--font-dm-sans)"
          >
            Acessar produto
            <ArrowRight className="w-4 h-4" />
          </a>
        ) : null}
        <Link
          href={`/produtos`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-5 border-2 border-[rgba(0,112,140,0.2)] text-[#012C40] text-sm font-semibold rounded-xl hover:border-[#00708C] hover:bg-[#f8fafb] transition-all font-(family-name:--font-dm-sans)"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}

export function ProductsSection({ products }: ProductsSectionProps) {
  const items = products && products.length > 0 ? products : placeholders;

  return (
    <section className="px-4 md:px-6 py-16 md:py-20 border-b border-[rgba(0,112,140,0.08)] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
            Produtos prontos para usar
          </div>
          <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-4xl mb-4">
            Implante hoje, escale amanhã
          </h2>
          <p className="text-[rgba(1,44,64,0.6)] max-w-xl mx-auto font-(family-name:--font-dm-sans)">
            Dois produtos prontos para empresas e cidades. Sem meses de
            desenvolvimento — em dias você já está operando.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((product, i) => (
            <ProductCard
              key={String("_id" in product ? product._id : product.title + i)}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
