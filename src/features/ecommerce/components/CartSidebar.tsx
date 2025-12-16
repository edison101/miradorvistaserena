'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '../store/cartStore';

export function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    items, 
    subtotal, 
    tax, 
    shipping, 
    total, 
    item_count,
    updateQuantity,
    removeItem,
    clearCart
  } = useCartStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-hover transition-colors"
      >
        <div className="relative">
          🛒
          {item_count > 0 && (
            <span className="absolute -top-2 -right-2 bg-destructive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {item_count}
            </span>
          )}
        </div>
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          
          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-lg font-semibold text-text-primary">
                  Carrito ({item_count})
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-text-secondary hover:text-text-primary"
                >
                  ✕
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">🛒</div>
                    <p className="text-text-secondary">Tu carrito está vacío</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border border-border rounded-lg">
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                          {item.product.image_url ? (
                            <Image
                              src={item.product.image_url}
                              alt={item.product.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-text-muted">
                              📦
                            </div>
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-text-primary text-sm line-clamp-2">
                            {item.product.name}
                          </h4>
                          <p className="text-primary font-semibold">
                            {formatPrice(item.price)}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                              className="w-6 h-6 rounded border border-border flex items-center justify-center text-text-secondary hover:bg-muted"
                            >
                              −
                            </button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                              className="w-6 h-6 rounded border border-border flex items-center justify-center text-text-secondary hover:bg-muted"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeItem(item.product_id)}
                              className="ml-2 text-destructive hover:text-destructive-hover text-sm"
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>

                        {/* Item Total */}
                        <div className="text-right flex-shrink-0">
                          <p className="font-semibold text-text-primary">
                            {formatPrice(item.total)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer with totals and checkout */}
              {items.length > 0 && (
                <div className="border-t border-border p-6 space-y-4">
                  {/* Totals */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Subtotal:</span>
                      <span className="text-text-primary">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Impuestos:</span>
                      <span className="text-text-primary">{formatPrice(tax)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Envío:</span>
                      <span className="text-text-primary">
                        {shipping === 0 ? 'Gratis' : formatPrice(shipping)}
                      </span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg border-t border-border pt-2">
                      <span className="text-text-primary">Total:</span>
                      <span className="text-primary">{formatPrice(total)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button
                      className="w-full"
                      onClick={() => {
                        // TODO: Implement checkout
                        alert('Función de checkout próximamente disponible');
                      }}
                    >
                      Proceder al Checkout
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        clearCart();
                        setIsOpen(false);
                      }}
                    >
                      Vaciar Carrito
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}