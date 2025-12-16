'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={closeOnOverlayClick ? onClose : undefined}
        />

        {/* Modal */}
        <div
          className={cn(
            'relative bg-card rounded-lg shadow-xl w-full transform transition-all',
            sizeClasses[size]
          )}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0"
              >
                <span className="sr-only">Close</span>
                ✕
              </Button>
            </div>
          )}

          {/* Content */}
          <div className={cn('p-6', title && 'pt-0')}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ModalHeaderProps {
  children: React.ReactNode;
}

export function ModalHeader({ children }: ModalHeaderProps) {
  return (
    <div className="pb-4">
      {children}
    </div>
  );
}

interface ModalFooterProps {
  children: React.ReactNode;
}

export function ModalFooter({ children }: ModalFooterProps) {
  return (
    <div className="flex justify-end gap-3 pt-4 border-t border-border">
      {children}
    </div>
  );
}