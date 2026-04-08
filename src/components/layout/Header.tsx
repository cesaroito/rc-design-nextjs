"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fechar menu ao redimensionar para desktop
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
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#00708C] to-[#012C40] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xs font-(family-name:--font-plus-jakarta)">
                RC
              </span>
            </div>
            <span className="font-semibold text-[#012C40] font-(family-name:--font-plus-jakarta) hidden sm:block">
              RC Design
            </span>
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
            <Button
              variant="primary"
              size="sm"
              onClick={() => (window.location.href = "/contato")}
            >
              Fale conosco
            </Button>
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
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "/contato";
              }}
            >
              Fale conosco
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
