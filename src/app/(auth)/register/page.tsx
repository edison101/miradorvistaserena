import { RegisterForm } from '@/features/auth/components/RegisterForm';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <RegisterForm />
        
        <div className="mt-6 text-center">
          <p className="text-text-secondary">
            ¿Ya tienes una cuenta?{' '}
            <Link
              href="/login"
              className="text-primary hover:text-primary-hover font-medium"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}