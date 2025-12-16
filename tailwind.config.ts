import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background))",
        foreground: "rgb(var(--color-foreground))",
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          hover: "rgb(var(--color-primary-hover))",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary))",
          hover: "rgb(var(--color-secondary-hover))",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent))",
          hover: "rgb(var(--color-accent-hover))",
        },
        destructive: {
          DEFAULT: "rgb(var(--color-destructive))",
          hover: "rgb(var(--color-destructive-hover))",
        },
        muted: "rgb(var(--color-muted))",
        card: "rgb(var(--color-card))",
        popover: "rgb(var(--color-popover))",
        border: "rgb(var(--color-border))",
        input: "rgb(var(--color-input))",
        ring: "rgb(var(--color-ring))",
        text: {
          primary: "rgb(var(--color-text-primary))",
          secondary: "rgb(var(--color-text-secondary))",
          muted: "rgb(var(--color-text-muted))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;