import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'destructive' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = [
      'inline-flex items-center justify-center rounded-md font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      'disabled:pointer-events-none disabled:opacity-50',
    ];

    const variants = {
      primary: [
        'bg-primary text-white',
        'hover:bg-primary-hover',
        'active:bg-primary-hover',
      ],
      secondary: [
        'bg-secondary text-white',
        'hover:bg-secondary-hover',
        'active:bg-secondary-hover',
      ],
      accent: [
        'bg-accent text-white',
        'hover:bg-accent-hover',
        'active:bg-accent-hover',
      ],
      destructive: [
        'bg-destructive text-white',
        'hover:bg-destructive-hover',
        'active:bg-destructive-hover',
      ],
      outline: [
        'border border-border bg-transparent text-text-primary',
        'hover:bg-muted',
        'active:bg-muted',
      ],
      ghost: [
        'bg-transparent text-text-primary',
        'hover:bg-muted',
        'active:bg-muted',
      ],
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
    };

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };