'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { error } = await signIn(data.email, data.password);
      
      if (error) {
        setError(error.message);
      }
    } catch {
      setError('Error inesperado al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-card p-6 rounded-lg border border-border">
      <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
        Iniciar Sesión
      </h2>
      
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-1">
            Contraseña
          </label>
          <input
            {...register('password')}
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-destructive">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <a
          href="#"
          className="text-sm text-primary hover:text-primary-hover"
          onClick={(e) => {
            e.preventDefault();
            // TODO: Implementar modal de recuperación de contraseña
          }}
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
}