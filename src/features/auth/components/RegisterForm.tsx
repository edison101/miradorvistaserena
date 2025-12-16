'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';

const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(null);
      
      const { error } = await signUp(data.email, data.password);
      
      if (error) {
        setError(error.message);
      } else {
        setSuccess('¡Registro exitoso! Revisa tu email para confirmar tu cuenta.');
      }
    } catch {
      setError('Error inesperado al registrarse');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-card p-6 rounded-lg border border-border">
      <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
        Crear Cuenta
      </h2>
      
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-accent/10 border border-accent/20 text-accent px-4 py-3 rounded mb-4">
          {success}
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

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-secondary mb-1">
            Confirmar Contraseña
          </label>
          <input
            {...register('confirmPassword')}
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-destructive">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
        </button>
      </form>
    </div>
  );
}