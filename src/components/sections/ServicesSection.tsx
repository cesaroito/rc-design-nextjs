import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Bot,
  Gamepad2,
  LayoutDashboard,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Projetos personalizados",
    description:
      "Do conceito ao deploy. Sistemas feitos para o seu contexto, sem templates prontos.",
    href: "/servicos",
    color: "from-[#00708C] to-[#012C40]",
  },
  {
    icon: BarChart2,
    title: "Análise de dados",
    description:
      "Transformamos dados brutos em decisões estratégicas para o seu negócio.",
    href: "/servicos",
    color: "from-[#012C40] to-[#00708C]",
  },
  {
    icon: LayoutDashboard,
    title: "Painéis para clientes",
    description:
      "Dashboards específicos com visibilidade total do que importa para você.",
    href: "/servicos",
    color: "from-[#00708C] to-[#87DEB3]",
  },
  {
    icon: Gamepad2,
    title: "Games corporativos",
    description:
      "Engajamento real para sua empresa ou evento com games personalizados.",
    href: "/servicos",
    color: "from-[#87DEB3] to-[#00708C]",
  },
  {
    icon: Bot,
    title: "IA para o seu negócio",
    description:
      "Automatize, entenda e evolua com inteligência artificial aplicada ao seu contexto.",
    href: "/servicos",
    color: "from-[#FF404C] to-[#012C40]",
  },
];

export function ServicesSection() {
  return (
    <section className="px-4 md:px-6 py-16 md:py-20 border-b border-[rgba(0,112,140,0.08)] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header da seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
              O que fazemos
            </div>
            <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-4xl leading-tight">
              Soluções que se adaptam
              <br className="hidden md:block" /> ao seu negócio
            </h2>
          </div>
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00708C] hover:text-[#012C40] transition-colors group font-(family-name:--font-dm-sans) shrink-0"
          >
            Ver todos os serviços
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-white border border-[rgba(0,112,140,0.12)] rounded-2xl p-6 hover:border-[#00708C] hover:shadow-xl transition-all duration-300"
              >
                {/* Ícone */}
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Conteúdo */}
                <h3 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-lg mb-2 group-hover:text-[#00708C] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[rgba(1,44,64,0.65)] leading-relaxed font-(family-name:--font-dm-sans) mb-4">
                  {service.description}
                </p>

                {/* CTA inline */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#00708C] group-hover:gap-2.5 transition-all font-(family-name:--font-dm-sans)">
                  Saiba mais
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}

          {/* Card CTA — falar com a equipe */}
          <div className="relative bg-linear-to-br from-[#012C40] to-[#00708C] rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
            <div>
              <h3 className="font-(family-name:--font-plus-jakarta) font-semibold !text-white text-lg mb-2">
                Tem um projeto em mente?
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-(family-name:--font-dm-sans)">
                Conte o desafio — a gente encontra a solução certa para o seu
                negócio.
              </p>
            </div>
            <Link
              href="/contato"
              className="mt-6 inline-flex items-center gap-2 bg-white text-[#012C40] text-sm font-semibold px-5 py-2.5 rounded-xl hover:scale-105 transition-all shadow-lg w-fit font-(family-name:--font-dm-sans)"
            >
              Falar com a equipe
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
