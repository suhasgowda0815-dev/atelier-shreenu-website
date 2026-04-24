import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#F5F1EA",
        ivory: "#EDE7DA",
        ink: "#1C1A17",
        terracotta: "#B5634A",
        sandstone: "#C9B79C",
        moss: "#4A5240",
        ochre: "#C8985C",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        micro: "0.14em",
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        "soft-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
