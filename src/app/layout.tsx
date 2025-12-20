import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mirador Vista Serena | Cubará, Boyacá",
  description: "Descubre la belleza natural de Cubará, Boyacá. Gastronomía, vistas panorámicas y experiencias únicas en el Mirador Vista Serena.",
  keywords: "Mirador Vista Serena, Cubará, Boyacá, Colombia, turismo, gastronomía, camping, eventos",
  authors: [{ name: "BYTSE Solutions", url: "https://www.bytsesolutions.com/es/" }],
  openGraph: {
    title: "Mirador Vista Serena",
    description: "Un espacio único donde la gastronomía se encuentra con paisajes inolvidables",
    type: "website",
    locale: "es_CO",
    siteName: "Mirador Vista Serena",
  },
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
