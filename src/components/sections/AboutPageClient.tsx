"use client";

import {
  LinkedinIcon,
  GithubIcon,
  ArrowRight,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  expertise?: string[];
  linkedIn?: string;
  github?: string;
  photo?: {
    asset: { url: string };
    alt?: string;
  };
}

interface AboutPageClientProps {
  team: TeamMember[];
}

const placeholderTeam: TeamMember[] = [
  {
    _id: "1",
    name: "Cesar Rodrigues",
    role: "Fundador & CEO",
    bio: "Especialista em tecnologia aplicada a negócios. Fundou a RC Design com o objetivo de tornar soluções digitais acessíveis e escaláveis para empresas e cidades.",
    expertise: [
      "Estratégia de produto",
      "IA aplicada",
      "Desenvolvimento web",
      "Dados",
    ],
    linkedIn: "https://linkedin.com/in/cesarrodrigues",
    github: "https://github.com/cesaroito",
  },
];

const values = [
  {
    title: "Escuta antes do código",
    description:
      "Entendemos o problema a fundo antes de propor qualquer solução tecnológica.",
  },
  {
    title: "Entrega com autonomia",
    description:
      "O cliente herda o projeto com documentação completa e capacidade de evoluir sozinho.",
  },
  {
    title: "Tecnologia com propósito",
    description:
      "Cada linha de código existe para resolver um problema real, não para impressionar.",
  },
  {
    title: "Iteração contínua",
    description:
      "Preferimos entregar rápido, aprender com o uso e evoluir do que acertar tudo na primeira tentativa.",
  },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white border border-[rgba(0,112,140,0.12)] rounded-2xl p-6 hover:border-[#00708C] hover:shadow-xl transition-all duration-300">
      {/* Avatar */}
      <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-linear-to-br from-[#00708C] to-[#012C40] flex items-center justify-center mb-5 shadow-md">
        {member.photo?.asset?.url ? (
          <Image
            src={member.photo.asset.url}
            alt={member.photo.alt ?? member.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        ) : (
          <span className="text-white font-bold text-2xl font-(family-name:--font-plus-jakarta)">
            {member.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Info */}
      <h3 className="font-(family-name:--font-plus-jakarta)-semibold text-[#012C40] text-xl mb-1">
        {member.name}
      </h3>
      <div className="text-sm font-medium text-[#00708C] mb-3 font-(family-name:--font-dm-sans)">
        {member.role}
      </div>

      {member.bio && (
        <p className="text-sm text-[rgba(1,44,64,0.65)] leading-relaxed mb-4 font-(family-name:--font-dm-sans)">
          {member.bio}
        </p>
      )}

      {/* Expertise */}
      {member.expertise && member.expertise.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {member.expertise.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 rounded-full bg-[rgba(0,112,140,0.06)] border border-[rgba(0,112,140,0.12)] text-[#00708C] font-medium font-(family-name:--font-dm-sans)"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Links sociais */}
      <div className="flex gap-3 pt-4 border-t border-[rgba(0,112,140,0.08)]">
        {member.linkedIn ? (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[rgba(1,44,64,0.5)] hover:text-[#00708C] transition-colors font-(family-name:--font-dm-sans)"
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        ) : null}
        {member.github ? (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[rgba(1,44,64,0.5)] hover:text-[#00708C] transition-colors font-(family-name:--font-dm-sans)"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        ) : null}
      </div>
    </div>
  );
}

export function AboutPageClient({ team }: AboutPageClientProps) {
  const members = team.length > 0 ? team : placeholderTeam;

  return (
    <div>
      {/* Missão */}
      <div className="px-4 md:px-6 py-16 md:py-20 border-b border-[rgba(0,112,140,0.08)] bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
              Nossa missão
            </div>
            <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-4xl leading-tight mb-6">
              Tecnologia que resolve problemas reais
            </h2>
            <p className="text-[rgba(1,44,64,0.65)] leading-relaxed mb-4 font-(family-name:--font-dm-sans)">
              A RC Design nasceu da convicção de que tecnologia bem aplicada
              transforma negócios e cidades. Não construímos software por
              construir — cada projeto começa com escuta e termina com resultado
              mensurável.
            </p>
            <p className="text-[rgba(1,44,64,0.65)] leading-relaxed font-(family-name:--font-dm-sans)">
              Trabalhamos com empresas que precisam de soluções personalizadas e
              com cidades que querem servir melhor seus cidadãos — sempre com
              tecnologia que escala junto com o crescimento.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "3+", label: "Produtos em produção" },
              { value: "5", label: "Tipos de solução" },
              { value: "2", label: "Cidades atendidas" },
              { value: "100%", label: "Projetos entregues" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#f8fafb] border border-[rgba(0,112,140,0.08)] rounded-2xl p-6 text-center"
              >
                <div className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[rgba(1,44,64,0.5)] font-medium font-(family-name:--font-dm-sans)">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="px-4 md:px-6 py-16 md:py-20 border-b border-[rgba(0,112,140,0.08)] bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
            Como trabalhamos
          </div>
          <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-4xl mb-12">
            Nossos valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="bg-white border border-[rgba(0,112,140,0.12)] rounded-2xl p-6 hover:border-[#00708C] hover:shadow-lg transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#00708C] to-[#012C40] flex items-center justify-center mb-4 text-white text-xs font-bold font-mono">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-base mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[rgba(1,44,64,0.6)] leading-relaxed font-(family-name:--font-dm-sans)">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipe */}
      <div className="px-4 md:px-6 py-16 md:py-20 border-b border-[rgba(0,112,140,0.08)] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
            Quem faz acontecer
          </div>
          <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-4xl mb-12">
            A equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <MemberCard key={member._id} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 md:px-6 py-16 bg-[#f8fafb] border-t border-[rgba(0,112,140,0.08)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-2xl md:text-3xl mb-4">
            Vamos construir algo juntos?
          </h2>
          <p className="text-[rgba(1,44,64,0.6)] mb-8 font-(family-name:--font-dm-sans)">
            Conte o seu desafio — a gente encontra a solução certa para o seu
            negócio.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-br from-[#00708C] to-[#012C40] text-white text-base font-semibold rounded-xl hover:scale-105 hover:shadow-xl transition-all font-(family-name:--font-dm-sans)"
          >
            Falar com a equipe
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
