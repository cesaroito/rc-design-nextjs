"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { Button } from "@/components/ui/Button";
import { cn, whatsappUrl } from "@/lib/utils";

interface SiteSettings {
  siteTitle?: string;
  logo?: { asset: { url: string }; alt?: string };
  contact?: {
    whatsapp?: string;
    whatsappMessage?: string;
  };
}

interface HeaderProps {
  settings?: SiteSettings | null;
}

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
];

export function Header({ settings }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const siteTitle = settings?.siteTitle ?? "RC Design";
  const logoUrl = settings?.logo?.asset?.url;
  const logoAlt = settings?.logo?.alt ?? siteTitle;
  const whatsapp = settings?.contact?.whatsapp;
  const wpMessage =
    settings?.contact?.whatsappMessage ??
    "Olá! Vim pelo site e quero saber mais.";
  const ctaHref = whatsapp ? whatsappUrl(whatsapp, wpMessage) : "/contato";
  const ctaIsExternal = !!whatsapp;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[rgba(0,112,140,0.1)] shadow-sm"
          : "bg-white border-b border-[rgba(0,112,140,0.08)]",
      )}
    >
      <div className="container-rc">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={logoAlt}
                width={120}
                height={32}
                className="h-8 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            ) : (
              <>
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#00708C] to-[#012C40] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                  <span className="text-white font-bold text-xs font-(family-name:--font-plus-jakarta)">
                    RC
                  </span>
                </div>
                <span className="font-semibold text-[#012C40] font-(family-name:--font-plus-jakarta) hidden sm:block">
                  {siteTitle}
                </span>
              </>
            )}
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {ctaIsExternal ? (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm">
                  Fale conosco
                </Button>
              </a>
            ) : (
              <Link href={ctaHref}>
                <Button variant="primary" size="sm">
                  Fale conosco
                </Button>
              </Link>
            )}
          </div>

          {/* Botão menu mobile */}
          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-[#012C40] hover:bg-[rgba(0,112,140,0.08)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          menuOpen
            ? "max-h-96 border-t border-[rgba(0,112,140,0.08)]"
            : "max-h-0",
        )}
      >
        <nav className="container-rc py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-[rgba(0,112,140,0.06)] last:border-0"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-3">
            {ctaIsExternal ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <Button variant="primary" size="md" className="w-full">
                  Fale conosco
                </Button>
              </a>
            ) : (
              <Link href={ctaHref} onClick={() => setMenuOpen(false)}>
                <Button variant="primary" size="md" className="w-full">
                  Fale conosco
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
