import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { bg: "var(--bg)", ink: "var(--ink)", muted: "var(--muted)", line: "var(--line)", unlit: "var(--unlit)", "bg-inverse": "var(--bg-inverse)", "ink-inverse": "var(--ink-inverse)" },
    fontFamily: {
      display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
    },
  } },
  plugins: [],
};
export default config;
