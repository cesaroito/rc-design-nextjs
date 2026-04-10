import Link from "next/link";
import Image from "next/image";
import { whatsappUrl } from "@/lib/utils";

interface SiteSettings {
  siteTitle?: string;
  logoDark?: { asset: { url: string }; alt?: string };
  contact?: {
    email?: string;
    whatsapp?: string;
    whatsappMessage?: string;
    city?: string;
  };
  social?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
}

interface FooterProps {
  settings?: SiteSettings | null;
}

const links = {
  servicos: [
    { href: "/servicos", label: "Projetos personalizados" },
    { href: "/servicos", label: "Análise de dados" },
    { href: "/servicos", label: "Painéis para clientes" },
    { href: "/servicos", label: "Games corporativos" },
    { href: "/servicos", label: "IA para o negócio" },
  ],
  produtos: [
    { href: "/produtos", label: "CuidoDeVocê" },
    { href: "/produtos", label: "ArcadePulse" },
  ],
  empresa: [
    { href: "/sobre", label: "Sobre a RC Design" },
    { href: "/projetos", label: "Cases e portfólio" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ],
};

export function Footer({ settings }: FooterProps) {
  const year = new Date().getFullYear();
  const siteTitle = settings?.siteTitle ?? "RC Design";
  const logoDarkUrl = settings?.logoDark?.asset?.url;
  const logoDarkAlt = settings?.logoDark?.alt ?? siteTitle;
  const city = settings?.contact?.city ?? "São Paulo, Brasil";
  const email = settings?.contact?.email;
  const whatsapp = settings?.contact?.whatsapp;
  const wpMessage =
    settings?.contact?.whatsappMessage ??
    "Olá! Vim pelo site e quero saber mais.";
  const linkedin = settings?.social?.linkedin;
  const github = settings?.social?.github;
  const instagram = settings?.social?.instagram;

  return (
    <footer className="bg-[#012C40] text-white">
      {/* Corpo principal */}
      <div className="container-rc py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coluna brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              {logoDarkUrl ? (
                <Image
                  src={logoDarkUrl}
                  alt={logoDarkAlt}
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain group-hover:opacity-80 transition-opacity"
                />
              ) : (
                <>
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#00708C] to-[#012C40] border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-white font-bold text-xs font-(family-name:--font-plus-jakarta)">
                      RC
                    </span>
                  </div>
                  <span className="font-semibold text-white font-(family-name:--font-plus-jakarta)">
                    {siteTitle}
                  </span>
                </>
              )}
            </Link>

            <p className="text-sm text-white/60 leading-relaxed mb-4 font-(family-name:--font-dm-sans)">
              Tecnologia que escala com o seu negócio. Projetos personalizados,
              IA aplicada e produtos prontos para usar.
            </p>

            {/* Contato */}
            <div className="flex flex-col gap-2 mb-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-xs text-white/50 hover:text-white/80 transition-colors font-(family-name:--font-dm-sans)"
                >
                  {email}
                </a>
              )}
              {whatsapp && (
                <a
                  href={whatsappUrl(whatsapp, wpMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/50 hover:text-white/80 transition-colors font-(family-name:--font-dm-sans)"
                >
                  WhatsApp
                </a>
              )}
            </div>

            {/* Redes sociais */}
            <div className="flex gap-3">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white/70 transition-colors font-(family-name:--font-dm-sans)"
                >
                  LinkedIn
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white/70 transition-colors font-(family-name:--font-dm-sans)"
                >
                  GitHub
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white/70 transition-colors font-(family-name:--font-dm-sans)"
                >
                  Instagram
                </a>
              )}
            </div>

            <p className="text-xs text-white/30 mt-4 font-(family-name:--font-dm-sans)">
              {city}
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
              Serviços
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-(family-name:--font-dm-sans)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
              Produtos
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links.produtos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-(family-name:--font-dm-sans)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4 font-(family-name:--font-dm-sans)">
              Empresa
            </h3>
            <ul className="flex flex-col gap-2.5">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-(family-name:--font-dm-sans)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-white/10">
        <div className="container-rc py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-(family-name:--font-dm-sans)">
            © {year} {siteTitle}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacidade"
              className="text-xs text-white/40 hover:text-white/70 transition-colors font-(family-name:--font-dm-sans)"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-xs text-white/40 hover:text-white/70 transition-colors font-(family-name:--font-dm-sans)"
            >
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
