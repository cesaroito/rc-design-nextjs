import { cn } from "@/lib/utils";

type Variant = "default" | "teal" | "red" | "mint" | "navy" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variants: Record<Variant, string> = {
  default:
    "bg-[rgba(0,112,140,0.08)] border border-[rgba(0,112,140,0.12)] text-[#00708C]",
  teal: "bg-[rgba(0,112,140,0.08)] border border-[rgba(0,112,140,0.12)] text-[#00708C]",
  red: "bg-[rgba(255,64,76,0.08)] border border-[rgba(255,64,76,0.12)] text-[#FF404C]",
  mint: "bg-[rgba(135,222,179,0.15)] border border-[rgba(135,222,179,0.3)] text-[#085041]",
  navy: "bg-[#012C40] text-white border border-[#012C40]",
  outline: "bg-transparent border border-[rgba(0,112,140,0.3)] text-[#00708C]",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full",
        "px-3 py-1",
        "text-xs font-medium",
        "font-(family-name:--font-dm-sans)",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
