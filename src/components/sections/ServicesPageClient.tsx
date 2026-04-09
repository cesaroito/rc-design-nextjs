"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

interface Benefit {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface RelatedProject {
  _id: string;
  title: string;
  slug: { current: string };
  tags?: string[];
}

interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  order: number;
  icon?: string;
  tagline: string;
  description?: unknown[];
  benefits?: Benefit[];
  techStack?: string[];
  faq?: FaqItem[];
  relatedProjects?: RelatedProject[];
}

interface ServicesPageClientProps {
  services: Service[];
}

// Dados estáticos enquanto o Sanity não tem conteúdo
const placeholderServices: Service[] = [
  {
    _id: "1",
    title: "Projetos personalizados",
    slug: { current: "projetos-personalizados" },
    order: 1,
    tagline: "Do conceito ao deploy. Sistemas feitos para o seu contexto.",
    benefits: [
      {
        title: "Levantamento de requisitos",
        description:
          "Entendemos o problema antes de propor qualquer tecnologia.",
      },
      {
        title: "Arquitetura escalável",
        description: "Sistemas que crescem com o negócio sem reescritas.",
      },
      {
        title: "Entrega iterativa",
        description: "Deploy contínuo com feedback a cada sprint quinzenal.",
      },
      {
        title: "Documentação completa",
        description: "O time do cliente herda o projeto com autonomia total.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Supabase", "Vercel"],
    faq: [
      {
        question: "Quanto tempo leva um projeto personalizado?",
        answer:
          "Depende da complexidade. MVPs simples levam de 4 a 8 semanas. Produtos completos, de 3 a 6 meses.",
      },
      {
        question: "Vocês trabalham com empresas de que tamanho?",
        answer:
          "Atendemos desde startups em fase inicial até empresas consolidadas. O importante é o desafio, não o tamanho.",
      },
      {
        question: "É possível começar com um MVP enxuto?",
        answer:
          "Sim — e recomendamos isso. Validar antes de escalar é sempre a abordagem mais inteligente.",
      },
    ],
  },
  {
    _id: "2",
    title: "Análise de dados",
    slug: { current: "analise-dados" },
    order: 2,
    tagline: "Transformamos dados brutos em decisões estratégicas.",
    benefits: [
      {
        title: "Coleta e estruturação",
        description:
          "Organizamos dados dispersos em uma fonte única de verdade.",
      },
      {
        title: "Visualizações claras",
        description: "Dashboards que qualquer pessoa da empresa consegue usar.",
      },
      {
        title: "Alertas automáticos",
        description: "Notificações quando métricas importantes mudam.",
      },
      {
        title: "Relatórios periódicos",
        description: "Resumos automáticos para decisões executivas.",
      },
    ],
    techStack: ["Python", "SQL", "Metabase", "Supabase", "AWS"],
    faq: [
      {
        question: "Quais fontes de dados vocês conseguem integrar?",
        answer:
          "Trabalhamos com APIs, planilhas, bancos de dados, plataformas de marketing e sistemas legados.",
      },
      {
        question: "Precisamos ter um banco de dados próprio?",
        answer:
          "Não necessariamente. Avaliamos a melhor solução para o seu volume e frequência de dados.",
      },
    ],
  },
  {
    _id: "3",
    title: "Painéis para clientes",
    slug: { current: "paineis-clientes" },
    order: 3,
    tagline: "Dashboards específicos com visibilidade total do seu negócio.",
    benefits: [
      {
        title: "Design sob medida",
        description: "Interface pensada para o perfil do usuário final.",
      },
      {
        title: "Dados em tempo real",
        description: "Informações atualizadas sem precisar recarregar.",
      },
      {
        title: "Acesso por perfil",
        description: "Cada usuário vê apenas o que precisa ver.",
      },
      {
        title: "Exportação de relatórios",
        description: "PDF e Excel com um clique.",
      },
    ],
    techStack: ["Next.js", "React", "Recharts", "Supabase", "Tailwind"],
    faq: [
      {
        question: "O painel pode ter a nossa identidade visual?",
        answer:
          "Sim. Desenvolvemos completamente dentro da identidade da sua marca.",
      },
      {
        question: "É possível integrar com sistemas que já usamos?",
        answer:
          "Sim. Trabalhamos com APIs REST, webhooks e integrações diretas com banco de dados.",
      },
    ],
  },
  {
    _id: "4",
    title: "Games corporativos",
    slug: { current: "games-corporativos" },
    order: 4,
    tagline:
      "Engajamento real para sua empresa ou evento com games personalizados.",
    benefits: [
      {
        title: "Mecânicas customizadas",
        description: "Jogos criados para os objetivos da sua empresa.",
      },
      {
        title: "Multiplayer em tempo real",
        description: "Competição e colaboração simultânea.",
      },
      {
        title: "Ranking e premiação",
        description: "Sistema de pontos e recompensas configurável.",
      },
      {
        title: "White-label",
        description: "Toda a experiência com a sua marca.",
      },
    ],
    techStack: ["Next.js", "WebSockets", "Supabase", "ArcadePulse"],
    faq: [
      {
        question: "Os games funcionam em eventos presenciais?",
        answer:
          "Sim. Funcionam em qualquer dispositivo com browser — celular, tablet ou computador.",
      },
      {
        question: "É possível usar o ArcadePulse para o meu evento?",
        answer:
          "Sim. O ArcadePulse é nossa plataforma pronta para isso. Entre em contato para uma demonstração.",
      },
    ],
  },
  {
    _id: "5",
    title: "IA para o seu negócio",
    slug: { current: "ia-negocios" },
    order: 5,
    tagline:
      "Automatize, entenda e evolua com inteligência artificial aplicada.",
    benefits: [
      {
        title: "Automação de processos",
        description:
          "Tarefas repetitivas executadas por IA sem intervenção humana.",
      },
      {
        title: "Análise de sentimento",
        description: "Entenda o que clientes e usuários pensam sobre você.",
      },
      {
        title: "Chatbots inteligentes",
        description: "Atendimento automático com contexto e personalidade.",
      },
      {
        title: "Geração de conteúdo",
        description: "Relatórios, resumos e textos gerados automaticamente.",
      },
    ],
    techStack: ["OpenAI", "Python", "LangChain", "Supabase", "Vercel AI SDK"],
    faq: [
      {
        question: "Preciso ter dados históricos para implementar IA?",
        answer:
          "Não necessariamente. Avaliamos o que é possível com o que você já tem e planejamos a evolução.",
      },
      {
        question: "A IA vai substituir pessoas na minha equipe?",
        answer:
          "Nossa abordagem é aumentar a capacidade da equipe, não substituí-la. IA cuida do repetitivo para as pessoas focarem no estratégico.",
      },
    ],
  },
];

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-[rgba(0,112,140,0.12)] rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[rgba(0,112,140,0.04)] transition-colors"
          >
            <span className="text-sm font-semibold text-[#012C40] font-(family-name:--font-dm-sans)">
              {item.question}
            </span>
            <span
              className="text-[#00708C] text-lg shrink-0 transition-transform duration-200"
              style={{
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-4">
              <p className="text-sm text-[rgba(1,44,64,0.65)] leading-relaxed font-(family-name:--font-dm-sans)">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function ServicesPageClient({ services }: ServicesPageClientProps) {
  const items = services.length > 0 ? services : placeholderServices;
  const [activeId, setActiveId] = useState(items[0]?._id ?? "");
  const active = items.find((s) => s._id === activeId) ?? items[0];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
        {/* Lista lateral */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="text-xs font-semibold text-[rgba(1,44,64,0.4)] uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
            {items.length} serviços
          </div>
          <nav className="flex flex-col">
            {items.map((service) => (
              <button
                key={service._id}
                onClick={() => setActiveId(service._id)}
                className={`flex items-center justify-between gap-3 px-4 py-3.5 text-left transition-all border-l-2 ${
                  activeId === service._id
                    ? "border-[#00708C] bg-[rgba(0,112,140,0.05)] text-[#012C40] font-semibold"
                    : "border-transparent text-[rgba(1,44,64,0.6)] hover:text-[#012C40] hover:bg-[rgba(0,112,140,0.03)]"
                }`}
              >
                <span className="text-sm font-(family-name:--font-dm-sans)">
                  {service.title}
                </span>
                {activeId === service._id && (
                  <ArrowRight className="w-4 h-4 text-[#00708C] shrink-0" />
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Painel de conteúdo */}
        {active && (
          <div key={active._id}>
            {/* Header */}
            <div className="mb-8">
              <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-2 font-(family-name:--font-dm-sans)">
                Serviço {String(active.order).padStart(2, "0")} de{" "}
                {String(items.length).padStart(2, "0")}
              </div>
              <h1 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-4xl mb-3">
                {active.title}
              </h1>
              <p className="text-lg text-[rgba(1,44,64,0.65)] font-(family-name:--font-dm-sans)">
                {active.tagline}
              </p>
            </div>

            {/* Benefícios */}
            {active.benefits && active.benefits.length > 0 && (
              <div className="mb-10">
                <div className="text-xs font-semibold text-[rgba(1,44,64,0.4)] uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
                  O que entregamos
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {active.benefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="border border-[rgba(0,112,140,0.12)] rounded-xl p-5 hover:border-[#00708C] hover:shadow-md transition-all"
                    >
                      <div className="font-semibold text-[#012C40] text-sm mb-1 font-(family-name:--font-dm-sans)">
                        {benefit.title}
                      </div>
                      <div className="text-sm text-[rgba(1,44,64,0.6)] leading-relaxed font-(family-name:--font-dm-sans)">
                        {benefit.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech stack */}
            {active.techStack && active.techStack.length > 0 && (
              <div className="mb-10">
                <div className="text-xs font-semibold text-[rgba(1,44,64,0.4)] uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
                  Tecnologias comuns
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.techStack.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Projetos relacionados */}
            {active.relatedProjects && active.relatedProjects.length > 0 && (
              <div className="mb-10">
                <div className="text-xs font-semibold text-[rgba(1,44,64,0.4)] uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
                  Cases relacionados
                </div>
                <div className="flex flex-wrap gap-3">
                  {active.relatedProjects.map((project) => (
                    <Link
                      key={project._id}
                      href={`/projetos/${project.slug.current}`}
                      className="flex items-center gap-2 px-4 py-2.5 border border-[rgba(0,112,140,0.15)] rounded-xl hover:border-[#00708C] hover:shadow-md transition-all"
                    >
                      <div className="w-6 h-6 rounded-md bg-linear-to-br from-[#00708C] to-[#012C40]" />
                      <span className="text-sm font-semibold text-[#012C40] font-(family-name:--font-dm-sans)">
                        {project.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            {active.faq && active.faq.length > 0 && (
              <div className="mb-10">
                <div className="text-xs font-semibold text-[rgba(1,44,64,0.4)] uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
                  Perguntas frequentes
                </div>
                <FaqAccordion items={active.faq} />
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[rgba(0,112,140,0.08)]">
              <Link href="/contato">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto group"
                >
                  Falar sobre meu projeto
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/projetos">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Ver todos os cases
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
