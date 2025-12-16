import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export function Table({ className, children, ...props }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn(
          'w-full border-collapse bg-card text-text-primary',
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ className, children, ...props }: TableHeaderProps) {
  return (
    <thead
      className={cn(
        'border-b border-border bg-muted/50',
        className
      )}
      {...props}
    >
      {children}
    </thead>
  );
}

export function TableBody({ className, children, ...props }: TableBodyProps) {
  return (
    <tbody className={cn('divide-y divide-border', className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ className, children, ...props }: TableRowProps) {
  return (
    <tr
      className={cn(
        'hover:bg-muted/50 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
}

export function TableHead({ className, children, ...props }: TableHeadProps) {
  return (
    <th
      className={cn(
        'px-4 py-3 text-left text-sm font-medium text-text-primary',
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({ className, children, ...props }: TableCellProps) {
  return (
    <td
      className={cn(
        'px-4 py-3 text-sm text-text-secondary',
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}