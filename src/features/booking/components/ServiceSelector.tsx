import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui';
import { formatDuration } from '../utils/timeSlots';
import type { Service } from '@/types/booking';

interface ServiceSelectorProps {
  services: Service[];
  selectedService?: Service | null;
  onSelect: (service: Service) => void;
  loading?: boolean;
}

export function ServiceSelector({ services, selectedService, onSelect, loading }: ServiceSelectorProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text-primary">Selecciona un servicio</h3>
        <div className="grid gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-muted rounded"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-3 bg-muted rounded w-1/2"></div>
                      <div className="h-4 bg-muted rounded w-1/4"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-text-primary">Selecciona un servicio</h3>
      
      {services.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">💼</div>
            <p className="text-text-secondary">No hay servicios disponibles</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                selectedService?.id === service.id
                  ? 'ring-2 ring-primary bg-primary/5'
                  : 'hover:bg-muted/50'
              }`}
              onClick={() => onSelect(service)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  {/* Service Image */}
                  <div className="w-16 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                    {service.image_url ? (
                      <Image
                        src={service.image_url}
                        alt={service.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-text-muted">
                        ✂️
                      </div>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-text-primary mb-1">
                      {service.name}
                    </h4>
                    
                    {service.description && (
                      <p className="text-sm text-text-secondary mb-2 line-clamp-2">
                        {service.description}
                      </p>
                    )}

                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-text-secondary">
                        ⏱️ {formatDuration(service.duration_minutes)}
                      </span>
                      <span className="font-semibold text-primary">
                        {formatPrice(service.price)}
                      </span>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {selectedService?.id === service.id && (
                    <div className="text-primary">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}