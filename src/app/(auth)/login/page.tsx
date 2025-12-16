import { LoginForm } from '@/features/auth/components/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <LoginForm />
        
        <div className="mt-6 text-center">
          <p className="text-text-secondary">
            ¿No tienes una cuenta?{' '}
            <Link
              href="/register"
              className="text-primary hover:text-primary-hover font-medium"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}