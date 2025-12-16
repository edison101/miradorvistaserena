import React from 'react';
import Image from 'next/image';
import { Button, Card, CardContent, CardFooter } from '@/components/ui';
import { useCartStore } from '../store/cartStore';
import type { Product } from '@/types/ecommerce';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="aspect-square bg-muted overflow-hidden">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-muted">
            <div className="text-center">
              <div className="text-4xl mb-2">📦</div>
              <p className="text-sm">Sin imagen</p>
            </div>
          </div>
        )}
      </div>

      <CardContent className="flex-1 flex flex-col">
        {/* Product Name */}
        <h3 className="font-semibold text-text-primary mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Product Description */}
        {product.description && (
          <p className="text-sm text-text-secondary mb-3 line-clamp-3 flex-1">
            {product.description}
          </p>
        )}

        {/* Stock Status */}
        {product.stock !== undefined && (
          <div className="mb-3">
            {product.stock > 0 ? (
              <span className="text-xs text-accent font-medium">
                {product.stock} en stock
              </span>
            ) : (
              <span className="text-xs text-destructive font-medium">
                Sin stock
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="mt-auto">
          <p className="text-2xl font-bold text-primary">
            {formatPrice(product.price)}
          </p>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full"
          variant={product.stock === 0 ? 'outline' : 'primary'}
        >
          {product.stock === 0 ? 'Sin stock' : 'Añadir al carrito'}
        </Button>
      </CardFooter>
    </Card>
  );
}