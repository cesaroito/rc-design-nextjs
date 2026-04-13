import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity/fetch";
import { siteSettingsQuery } from "@/lib/sanity/queries";
import { ContactPageClient } from "@/components/sections/ContactPageClient";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a RC Design. Conte o seu desafio e receba uma proposta personalizada em até 4 horas.",
};

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

export default async function ContatoPage() {
  const settings = await sanityFetch<SiteSettings>({
    query: siteSettingsQuery,
    tags: ["settings"],
  });

  return (
    <>
      {/* Hero da página */}
      <div className="px-4 md:px-6 py-12 md:py-16 border-b border-[rgba(0,112,140,0.08)] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#00708C] uppercase tracking-widest mb-3 font-(family-name:--font-dm-sans)">
            Fale conosco
          </div>
          <h1 className="font-(family-name:--font-plus-jakarta) font-semibold text-[#012C40] text-3xl md:text-5xl leading-tight mb-4">
            Vamos construir
            <br className="hidden md:block" /> algo juntos?
          </h1>
          <p className="text-[rgba(1,44,64,0.65)] text-lg max-w-2xl font-(family-name:--font-dm-sans)">
            Conte o desafio — respondemos em até 4 horas nos dias úteis com uma
            proposta personalizada.
          </p>
        </div>
      </div>

      {/* Formulário */}
      <ContactPageClient settings={settings} />
    </>
  );
}
