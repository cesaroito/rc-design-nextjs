import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Combina classes Tailwind sem conflitos
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formata data para pt-BR
export function formatDate(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions,
) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  }).format(new Date(date));
}

// Trunca texto com reticências
export function truncate(str: string, length: number) {
  return str.length > length ? `${str.slice(0, length)}…` : str;
}

// Delay para animações encadeadas
export function staggerDelay(index: number, base = 0.1) {
  return index * base;
}

// Gera URL do WhatsApp com mensagem pré-preenchida
export function whatsappUrl(phone: string, message?: string) {
  const base = `https://wa.me/${phone.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
