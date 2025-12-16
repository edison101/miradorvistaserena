'use client';

import { createContext, useContext, ReactNode } from 'react';
import { User, AuthError } from '@supabase/supabase-js';
import { useAuth } from '../hooks/useAuth';

type AuthReturn = {
  data: {
    user: User | null;
    session: unknown;
  } | {
    user: null;
    session: null;
  };
  error: AuthError | null;
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<AuthReturn>;
  signIn: (email: string, password: string) => Promise<AuthReturn>;
  signOut: () => Promise<{ error: AuthError | null }>;
  resetPassword: (email: string) => Promise<{ data: unknown; error: AuthError | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}