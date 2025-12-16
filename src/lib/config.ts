// Genesis Project Configuration

export const config = {
  site: {
    name: "Genesis",
    description: "Plataforma modular y personalizable",
    version: "1.0.0",
  },
  features: {
    auth: true,
    cms: true,
    ecommerce: false,
    booking: false,
    blog: false,
  },
  theme: {
    defaultPrimaryColor: "#3b82f6",
    defaultSecondaryColor: "#6b7280",
    defaultFontFamily: "Inter",
  },
} as const;

export type Config = typeof config;