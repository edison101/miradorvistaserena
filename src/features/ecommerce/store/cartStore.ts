import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Cart, CartItem, Product } from '@/types/ecommerce';

interface CartStore extends Cart {
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  calculateTotals: () => void;
}

const TAX_RATE = 0.1; // 10% tax
const SHIPPING_RATE = 10; // $10 flat shipping
const FREE_SHIPPING_THRESHOLD = 100; // Free shipping over $100

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      subtotal: 0,
      tax: 0,
      shipping: 0,
      total: 0,
      item_count: 0,

      addItem: (product: Product, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(item => item.product_id === product.id);

        if (existingItem) {
          // Update quantity if item already exists
          get().updateQuantity(product.id, existingItem.quantity + quantity);
        } else {
          // Add new item
          const newItem: CartItem = {
            id: `cart_${product.id}_${Date.now()}`,
            product_id: product.id,
            product,
            quantity,
            price: product.price,
            total: product.price * quantity,
          };

          set(state => ({
            items: [...state.items, newItem]
          }));
          
          get().calculateTotals();
        }
      },

      removeItem: (productId: string) => {
        set(state => ({
          items: state.items.filter(item => item.product_id !== productId)
        }));
        
        get().calculateTotals();
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set(state => ({
          items: state.items.map(item =>
            item.product_id === productId
              ? { ...item, quantity, total: item.price * quantity }
              : item
          )
        }));
        
        get().calculateTotals();
      },

      clearCart: () => {
        set({
          items: [],
          subtotal: 0,
          tax: 0,
          shipping: 0,
          total: 0,
          item_count: 0,
        });
      },

      calculateTotals: () => {
        const { items } = get();
        
        const subtotal = items.reduce((sum, item) => sum + item.total, 0);
        const tax = subtotal * TAX_RATE;
        const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_RATE;
        const total = subtotal + tax + shipping;
        const item_count = items.reduce((sum, item) => sum + item.quantity, 0);

        set({
          subtotal: Math.round(subtotal * 100) / 100,
          tax: Math.round(tax * 100) / 100,
          shipping: Math.round(shipping * 100) / 100,
          total: Math.round(total * 100) / 100,
          item_count,
        });
      },
    }),
    {
      name: 'genesis-cart-storage',
      partialize: (state) => ({
        items: state.items,
        subtotal: state.subtotal,
        tax: state.tax,
        shipping: state.shipping,
        total: state.total,
        item_count: state.item_count,
      }),
    }
  )
);