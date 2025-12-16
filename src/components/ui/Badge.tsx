import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Badge({ 
  className, 
  variant = 'default', 
  size = 'md', 
  children, 
  ...props 
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';
  
  const variants = {
    default: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    success: 'bg-accent text-white',
    warning: 'bg-yellow-500 text-white',
    destructive: 'bg-destructive text-white',
    outline: 'border border-border text-text-primary bg-transparent',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}