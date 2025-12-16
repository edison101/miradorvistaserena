import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Simple check for auth token in cookies
  // In a real implementation, you would validate this token properly
  const hasAuthToken = req.cookies.has('sb-access-token') || req.cookies.has('supabase-auth-token');
  const session = hasAuthToken;

  // Rutas que requieren autenticación
  const protectedRoutes = ['/dashboard', '/admin', '/profile'];
  
  // Rutas de autenticación (solo para usuarios no autenticados)
  const authRoutes = ['/login', '/register'];

  const isProtectedRoute = protectedRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  );
  
  const isAuthRoute = authRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  );

  // Redirigir usuarios no autenticados de rutas protegidas
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Redirigir usuarios autenticados de rutas de auth
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};