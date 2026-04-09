import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="relative px-4 md:px-6 py-20 md:py-28 text-center overflow-hidden bg-linear-to-br from-[#012C40] via-[#00708C] to-[#012C40]">
      {/* Círculos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgba(255,64,76,0.08)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[rgba(135,222,179,0.08)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 mb-8 bg-white/10">
          <div className="w-2 h-2 rounded-full bg-[#87DEB3] animate-pulse" />
          <span className="text-xs font-medium text-white/80 font-(family-name:--font-dm-sans)">
            Disponível para novos projetos
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-white text-3xl md:text-5xl leading-tight mb-6 text-balance">
          Pronto para escalar
          <br className="hidden md:block" /> o seu projeto?
        </h2>

        {/* Subtítulo */}
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto font-(family-name:--font-dm-sans)">
          Entendemos o seu negócio antes de escrever uma linha de código. Conte
          o desafio — a gente encontra a solução certa.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contato"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#012C40] text-base font-semibold rounded-xl hover:scale-105 hover:shadow-2xl transition-all font-(family-name:--font-dm-sans)"
          >
            Falar com a equipe
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={whatsappUrl(
              "5511999999999",
              "Olá! Vim pelo site da RC Design e quero conversar sobre um projeto.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/30 text-white text-base font-semibold rounded-xl hover:bg-white/20 transition-all font-(family-name:--font-dm-sans)"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp direto
          </a>
        </div>

        {/* Rodapé da seção */}
        <p className="text-white/40 text-xs mt-10 font-(family-name:--font-dm-sans)">
          Resposta em até 4 horas nos dias úteis · São Paulo, Brasil
        </p>
      </div>
    </section>
  );
}
