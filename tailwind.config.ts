import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./writing/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        link: "var(--text-color-link)",
        underline: "var(--text-color-underline)",
        heading: "var(--text-color-heading)",
        body: "var(--text-color-body)",
        muted: "var(--text-color-muted)",
        border: "var(--border-color)",
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "serif"],
        sans: ["var(--text-sans)", "sans-serif"],
        serif: ["var(--text-serif)", "serif"],
      },
      fontSize: {
        vs: "10.5px",
      },
      letterSpacing: {
        tight: "1.5px",
      },
    },
  },
  plugins: [typography],
};
export default config;
