import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Paleta RC Design ──────────────────────────────────
      colors: {
        brand: {
          navy: "#012C40",
          teal: "#00708C",
          ice: "#DAEBF2",
          red: "#FF404C",
          mint: "#87DEB3",
          bg: "#F8FAFB",
        },
      },

      // ── Tipografia ────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },

      // ── Border radius ─────────────────────────────────────
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },

      // ── Transições ────────────────────────────────────────
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
      },

      // ── Larguras máximas ──────────────────────────────────
      maxWidth: {
        "screen-xl": "1280px",
        "screen-2xl": "1440px",
        "prose-lg": "72ch",
      },
    },
  },
  plugins: [typography],
};

export default config;
