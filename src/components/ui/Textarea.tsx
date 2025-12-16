import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    const textareaId = React.useId();

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-text-secondary"
          >
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        
        <textarea
          id={textareaId}
          className={cn(
            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm',
            'placeholder:text-text-muted',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'resize-vertical',
            error && 'border-destructive focus:ring-destructive',
            className
          )}
          ref={ref}
          {...props}
        />
        
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-text-muted">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';