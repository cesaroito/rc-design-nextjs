"use client";

import { useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/utils";

interface SiteSettings {
  contact?: {
    email?: string;
    whatsapp?: string;
    whatsappMessage?: string;
    city?: string;
  };
  social?: {
    linkedin?: string;
    github?: string;
  };
}

interface ContactPageClientProps {
  settings?: SiteSettings | null;
}

type Step = 1 | 2 | 3;
type Status = "idle" | "loading" | "success" | "error";

const projectTypes = [
  { value: "projeto-personalizado", label: "Projeto personalizado" },
  { value: "analise-dados", label: "Análise de dados" },
  { value: "painel-cliente", label: "Painel para clientes" },
  { value: "game-corporativo", label: "Game corporativo" },
  { value: "ia-negocios", label: "IA para o negócio" },
  { value: "produto-pronto", label: "Produto pronto (SaaS)" },
  { value: "outro", label: "Outro" },
];

const budgetRanges = [
  { value: "ate-10k", label: "Até R$ 10.000" },
  { value: "10k-30k", label: "R$ 10.000 – R$ 30.000" },
  { value: "30k-100k", label: "R$ 30.000 – R$ 100.000" },
  { value: "acima-100k", label: "Acima de R$ 100.000" },
  { value: "nao-definido", label: "Ainda não definido" },
];

export function ContactPageClient({ settings }: ContactPageClientProps) {
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const whatsapp = settings?.contact?.whatsapp;
  const wpMessage =
    settings?.contact?.whatsappMessage ??
    "Olá! Vim pelo site da RC Design e quero conversar sobre um projeto.";
  const email = settings?.contact?.email;
  const city = settings?.contact?.city ?? "São Paulo, SP";
  const wpUrl = whatsapp
    ? whatsappUrl(whatsapp, wpMessage)
    : "https://wa.me/5511999999999";

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function canAdvance() {
    if (step === 1) return form.projectType !== "";
    if (step === 2) return form.name !== "" && form.email !== "";
    return true;
  }

  async function handleSubmit() {
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message ?? "Erro ao enviar mensagem");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Erro inesperado. Tente novamente.",
      );
    }
  }

  // Sucesso
  if (status === "success") {
    return (
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[rgba(135,222,179,0.15)] border border-[rgba(135,222,179,0.3)] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-[#87DEB3]" />
        </div>
        <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-2xl mb-3">
          Mensagem enviada!
        </h2>
        <p className="text-[rgba(1,44,64,0.6)] mb-8 font-(family-name:--font-dm-sans)">
          Recebemos seu contato, {form.name.split(" ")[0]}. Retornaremos em até
          4 horas nos dias úteis.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={wpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-br from-[#00708C] to-[#012C40] text-white text-sm font-semibold rounded-xl hover:scale-105 transition-all font-(family-name:--font-dm-sans)"
          >
            <MessageCircle className="w-4 h-4" />
            Falar pelo WhatsApp
          </a>
          <button
            onClick={() => {
              setStatus("idle");
              setStep(1);
              setForm({
                name: "",
                email: "",
                company: "",
                projectType: "",
                budget: "",
                message: "",
              });
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[rgba(0,112,140,0.2)] text-[#012C40] text-sm font-semibold rounded-xl hover:border-[#00708C] transition-all font-(family-name:--font-dm-sans)"
          >
            Enviar outra mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Formulário — 2/3 */}
        <div className="lg:col-span-2">
          {/* Progress steps */}
          <div className="flex items-center gap-3 mb-10">
            {([1, 2, 3] as Step[]).map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold font-(family-name:--font-dm-sans) transition-all ${
                    step === s
                      ? "bg-[#012C40] text-white"
                      : step > s
                        ? "bg-[#87DEB3] text-[#012C40]"
                        : "bg-[rgba(0,112,140,0.08)] text-[rgba(1,44,64,0.4)]"
                  }`}
                >
                  {step > s ? "✓" : s}
                </div>
                <span
                  className={`text-xs font-medium font-(family-name:--font-dm-sans) ${step === s ? "text-[#012C40]" : "text-[rgba(1,44,64,0.4)]"}`}
                >
                  {s === 1
                    ? "Tipo de projeto"
                    : s === 2
                      ? "Seus dados"
                      : "Mensagem"}
                </span>
                {s < 3 && (
                  <div className="w-8 h-px bg-[rgba(0,112,140,0.15)]" />
                )}
              </div>
            ))}
          </div>

          {/* Step 1 — Tipo de projeto */}
          {step === 1 && (
            <div>
              <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-2xl mb-2">
                O que você precisa?
              </h2>
              <p className="text-[rgba(1,44,64,0.6)] mb-8 font-(family-name:--font-dm-sans)">
                Selecione o tipo de projeto para começarmos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {projectTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => update("projectType", type.value)}
                    className={`text-left px-5 py-4 rounded-xl border-2 transition-all font-(family-name:--font-dm-sans) ${
                      form.projectType === type.value
                        ? "border-[#00708C] bg-[rgba(0,112,140,0.06)] text-[#012C40] font-semibold"
                        : "border-[rgba(0,112,140,0.15)] text-[rgba(1,44,64,0.7)] hover:border-[#00708C]"
                    }`}
                  >
                    <div className="text-sm">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Seus dados */}
          {step === 2 && (
            <div>
              <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-2xl mb-2">
                Seus dados
              </h2>
              <p className="text-[rgba(1,44,64,0.6)] mb-8 font-(family-name:--font-dm-sans)">
                Preencha suas informações para prosseguir.
              </p>
              {/* Add input fields for name, email, company, budget here */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,112,140,0.15)] rounded-xl focus:border-[#00708C] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,112,140,0.15)] rounded-xl focus:border-[#00708C] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Empresa (opcional)"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,112,140,0.15)] rounded-xl focus:border-[#00708C] focus:outline-none"
                />
                <select
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className="w-full px-4 py-3 border border-[rgba(0,112,140,0.15)] rounded-xl focus:border-[#00708C] focus:outline-none"
                >
                  <option value="">Selecione o orçamento</option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 3 — Mensagem */}
          {step === 3 && (
            <div>
              <h2 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-2xl mb-2">
                Mensagem
              </h2>
              <p className="text-[rgba(1,44,64,0.6)] mb-8 font-(family-name:--font-dm-sans)">
                Conte-nos mais sobre seu projeto.
              </p>
              <textarea
                placeholder="Descreva seu projeto..."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={5}
                className="w-full px-4 py-3 border border-[rgba(0,112,140,0.15)] rounded-xl focus:border-[#00708C] focus:outline-none resize-none"
              />
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button
                onClick={() => setStep((prev) => (prev - 1) as Step)}
                variant="secondary"
                className="px-6 py-3"
              >
                Voltar
              </Button>
            )}
            {step < 3 ? (
              <Button
                onClick={() => setStep((prev) => (prev + 1) as Step)}
                disabled={!canAdvance()}
                className="px-6 py-3 ml-auto"
              >
                Próximo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={status === "loading" || !canAdvance()}
                className="px-6 py-3 ml-auto"
              >
                {status === "loading" ? "Enviando..." : "Enviar mensagem"}
              </Button>
            )}
          </div>

          {status === "error" && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-700 font-(family-name:--font-dm-sans)">
                  {error}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Contact info — 1/3 */}
        <div className="lg:col-span-1">
          <h3 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-xl mb-6">
            Entre em contato
          </h3>
          <div className="space-y-4">
            {whatsapp && (
              <a
                href={wpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-[rgba(0,112,140,0.06)] rounded-xl hover:bg-[rgba(0,112,140,0.1)] transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#00708C]" />
                <span className="text-[#012C40] font-(family-name:--font-dm-sans)">
                  WhatsApp
                </span>
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 p-4 bg-[rgba(0,112,140,0.06)] rounded-xl hover:bg-[rgba(0,112,140,0.1)] transition-all"
              >
                <Mail className="w-5 h-5 text-[#00708C]" />
                <span className="text-[#012C40] font-(family-name:--font-dm-sans)">
                  E-mail
                </span>
              </a>
            )}
            <div className="flex items-center gap-3 p-4">
              <MapPin className="w-5 h-5 text-[#00708C]" />
              <span className="text-[#012C40] font-(family-name:--font-dm-sans)">
                {city}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
