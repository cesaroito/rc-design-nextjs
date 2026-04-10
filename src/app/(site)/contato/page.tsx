import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a RC Design sobre projetos personalizados, produtos, análise de dados, IA aplicada e experiências digitais.",
};

const whatsappHref = whatsappUrl(
  "5511999999999",
  "Olá! Vim pelo site da RC Design e quero conversar sobre um projeto.",
);

export default function ContatoPage() {
  return (
    <section className="px-4 md:px-6 py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
            Contato
          </div>
          <h1 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-5xl leading-tight mb-4">
            Vamos entender o
            <br className="hidden md:block" /> seu projeto
          </h1>
          <p className="text-[rgba(1,44,64,0.65)] text-lg max-w-2xl font-(family-name:--font-dm-sans)">
            Se você já tem uma ideia, um problema operacional ou uma oportunidade
            para explorar, o melhor próximo passo é conversar com contexto.
          </p>
        </div>

        <div className="rounded-3xl border border-[rgba(0,112,140,0.12)] bg-linear-to-br from-[#f8fafb] to-white p-8 space-y-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 rounded-2xl bg-linear-to-br from-[#012C40] to-[#00708C] text-white px-6 py-5"
          >
            <div>
              <div className="font-(family-name:--font-plus-jakarta) font-semibold text-xl mb-1">
                WhatsApp direto
              </div>
              <div className="text-sm text-white/70 font-(family-name:--font-dm-sans)">
                Conversa rápida para triagem inicial do desafio.
              </div>
            </div>
            <MessageCircle className="w-6 h-6 shrink-0" />
          </a>

          <a
            href="mailto:contato@rcdesign.com.br"
            className="flex items-center justify-between gap-4 rounded-2xl border border-[rgba(0,112,140,0.12)] px-6 py-5"
          >
            <div>
              <div className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-xl mb-1">
                E-mail
              </div>
              <div className="text-sm text-[rgba(1,44,64,0.6)] font-(family-name:--font-dm-sans)">
                contato@rcdesign.com.br
              </div>
            </div>
            <Mail className="w-6 h-6 shrink-0 text-[#00708C]" />
          </a>

          <div className="pt-2">
            <div className="text-xs font-semibold text-[rgba(1,44,64,0.4)] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
              Antes da conversa
            </div>
            <p className="text-sm text-[rgba(1,44,64,0.65)] leading-relaxed font-(family-name:--font-dm-sans)">
              Se preferir, você pode explorar primeiro os nossos serviços ou os
              cases já publicados para chegar na conversa com mais contexto.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-[rgba(0,112,140,0.2)] text-[#012C40] text-sm font-semibold font-(family-name:--font-dm-sans)"
              >
                Ver serviços
              </Link>
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-[rgba(0,112,140,0.2)] text-[#012C40] text-sm font-semibold font-(family-name:--font-dm-sans)"
              >
                Ver projetos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
