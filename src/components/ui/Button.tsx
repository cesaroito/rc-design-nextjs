import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  primary: [
    "bg-gradient-to-br from-[#012C40] to-[#00708C]",
    "text-white",
    "hover:scale-105 hover:shadow-xl",
    "active:scale-100",
  ].join(" "),

  accent: [
    "bg-[#FF404C]",
    "text-white",
    "hover:bg-[#e63643]",
    "shadow-lg shadow-[rgba(255,64,76,0.25)]",
    "hover:shadow-xl hover:shadow-[rgba(255,64,76,0.35)]",
    "hover:-translate-y-0.5",
  ].join(" "),

  secondary: [
    "bg-white",
    "border-2 border-[rgba(0,112,140,0.2)]",
    "text-[#012C40]",
    "hover:border-[#00708C] hover:bg-[#f8fafb]",
  ].join(" "),

  ghost: ["text-[#00708C]", "hover:bg-[rgba(0,112,140,0.08)]"].join(" "),
};

const sizes: Record<Size, string> = {
  sm: "h-9  px-4  text-xs  rounded-xl",
  md: "h-11 px-6  text-sm  rounded-xl",
  lg: "h-13 px-8  text-base rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        // Base
        "inline-flex items-center justify-center gap-2",
        "font-semibold font-[family-name:var(--font-dm-sans)]",
        "transition-all duration-300",
        // Focus
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-[#00708C] focus-visible:ring-offset-2",
        // Disabled
        "disabled:pointer-events-none disabled:opacity-50",
        // Variant e size
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  ),
);

Button.displayName = "Button";
