"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "3+", label: "Produtos em produção" },
  { value: "2", label: "Prontos para sua cidade" },
  { value: "5", label: "Tipos de solução" },
];

function AnimatedStat({ value, label }: Stat) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const numericValue = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(numericValue)) {
      el.textContent = value;
      return;
    }

    const suffix = value.replace(/[0-9]/g, "");
    const duration = 1200;
    const steps = 40;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const timer = setInterval(() => {
          step++;
          current = Math.min(Math.round(increment * step), numericValue);
          if (el) el.textContent = current + suffix;
          if (step >= steps) clearInterval(timer);
        }, duration / steps);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span
      ref={ref}
      className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-4xl"
    >
      {value}
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative px-4 md:px-6 py-16 md:py-24 border-b border-[rgba(0,112,140,0.08)] overflow-hidden bg-linear-to-br from-white via-[#f8fafb] to-white">
      {/* Círculos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-[rgba(0,112,140,0.04)] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-[rgba(255,64,76,0.03)] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda */}
          <div className="max-w-xl animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[rgba(0,112,140,0.2)] rounded-full px-4 py-2 mb-6 bg-white shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#87DEB3] animate-pulse" />
              <span className="text-xs font-medium text-[rgba(1,44,64,0.8)] font-(family-name:--font-dm-sans)">
                IA · Dados · Experiências digitais
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight text-balance">
              Transformamos
              <br />
              dados em{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#00708C]">resultado</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[rgba(0,112,140,0.12)] z-0 rounded-sm" />
              </span>
              <br />
              para o seu negócio
            </h1>

            {/* Subtítulo */}
            <p className="text-[rgba(1,44,64,0.7)] text-base md:text-lg mb-8 leading-relaxed font-(family-name:--font-dm-sans)">
              Projetos personalizados, IA aplicada e produtos prontos para
              escalar. Entendemos o que o seu negócio precisa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link href="/projetos">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto group"
                >
                  Ver nossos projetos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/produtos">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Conheça os produtos
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label} className="relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#00708C] to-transparent rounded-full" />
                  <AnimatedStat value={stat.value} label={stat.label} />
                  <div className="text-xs text-[rgba(1,44,64,0.6)] font-medium font-(family-name:--font-dm-sans) mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita — card visual */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card principal */}
              <div className="bg-white border border-[rgba(0,112,140,0.12)] rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#00708C] to-[#012C40] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[rgba(1,44,64,0.5)] font-(family-name:--font-dm-sans)">
                      RC Design
                    </div>
                    <div className="text-sm font-semibold text-[#012C40] font-(family-name:--font-plus-jakarta)">
                      Precision Intelligence
                    </div>
                  </div>
                </div>

                {/* Barras de dados simuladas */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: "Projetos entregues", value: 85 },
                    { label: "Satisfação dos clientes", value: 98 },
                    { label: "Uptime dos produtos", value: 99 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1 font-(family-name:--font-dm-sans)">
                        <span className="text-[rgba(1,44,64,0.6)]">
                          {item.label}
                        </span>
                        <span className="font-medium text-[#012C40]">
                          {item.value}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-[rgba(0,112,140,0.08)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-[#00708C] to-[#87DEB3] rounded-full transition-all duration-1000"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Botão WhatsApp */}
                <a
                  href={whatsappUrl(
                    "5511999999999",
                    "Olá! Vim pelo site da RC Design e quero saber mais.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[rgba(0,112,140,0.06)] border border-[rgba(0,112,140,0.12)] text-sm font-medium text-[#00708C] hover:bg-[rgba(0,112,140,0.1)] transition-colors font-(family-name:--font-dm-sans)"
                >
                  Falar pelo WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Badge flutuante */}
              <div className="absolute -top-4 -right-4 bg-[#FF404C] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg font-(family-name:--font-dm-sans)">
                Disponível agora
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
