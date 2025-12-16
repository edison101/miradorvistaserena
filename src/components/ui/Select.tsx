import React from 'react';
import { cn } from '@/lib/utils';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string; disabled?: boolean }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, ...props }, ref) => {
    const selectId = React.useId();

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-text-secondary"
          >
            {label}
            {props.required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        
        <select
          id={selectId}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-destructive focus:ring-destructive',
            className
          )}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
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

Select.displayName = 'Select';