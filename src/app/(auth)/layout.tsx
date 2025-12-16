import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autenticación - Genesis',
  description: 'Inicia sesión o regístrate en Genesis',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}