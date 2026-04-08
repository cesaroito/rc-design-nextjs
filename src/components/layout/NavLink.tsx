"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative text-sm font-medium transition-colors duration-200",
        "font-(family-name:--font-dm-sans)",
        // Estado ativo
        isActive
          ? "text-[#012C40]"
          : "text-[rgba(1,44,64,0.6)] hover:text-[#012C40]",
        // Underline animado
        "after:absolute after:-bottom-0.5 after:left-0",
        "after:h-0.5 after:rounded-full after:bg-[#00708C]",
        "after:transition-all after:duration-300",
        isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
        className,
      )}
    >
      {children}
    </Link>
  );
}
