import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ItemView {
  itemId: string;
  itemName: string;
  category: string;
  timestamp: number;
}

export interface ItemAddToCart {
  itemId: string;
  itemName: string;
  category: string;
  timestamp: number;
}

interface AnalyticsStore {
  views: ItemView[];
  addedToCart: ItemAddToCart[];
  trackView: (itemId: string, itemName: string, category: string) => void;
  trackAddToCart: (itemId: string, itemName: string, category: string) => void;
  getTopItemsThisMonth: (limit?: number) => {
    itemId: string;
    itemName: string;
    category: string;
    views: number;
    addedToCart: number;
    score: number;
    trend: 'hot' | 'rising' | 'popular';
  }[];
  clearOldData: () => void;
}

export const useAnalyticsStore = create<AnalyticsStore>()(
  persist(
    (set, get) => ({
      views: [],
      addedToCart: [],

      trackView: (itemId, itemName, category) => {
        set((state) => ({
          views: [
            ...state.views,
            {
              itemId,
              itemName,
              category,
              timestamp: Date.now(),
            },
          ],
        }));
      },

      trackAddToCart: (itemId, itemName, category) => {
        set((state) => ({
          addedToCart: [
            ...state.addedToCart,
            {
              itemId,
              itemName,
              category,
              timestamp: Date.now(),
            },
          ],
        }));
      },

      getTopItemsThisMonth: (limit = 5) => {
        const now = Date.now();
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0, 0, 0, 0);
        const monthStart = startOfMonth.getTime();

        // Filtrar vistas y agregados al carrito del mes actual
        const thisMonthViews = get().views.filter(
          (view) => view.timestamp >= monthStart && view.timestamp <= now
        );

        const thisMonthCart = get().addedToCart.filter(
          (item) => item.timestamp >= monthStart && item.timestamp <= now
        );

        // Últimos 7 días para tendencias
        const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
        const recentViews = thisMonthViews.filter(v => v.timestamp >= sevenDaysAgo);
        const recentCart = thisMonthCart.filter(c => c.timestamp >= sevenDaysAgo);

        // Contar vistas y agregados al carrito por item
        const itemStats = thisMonthViews.reduce((acc, view) => {
          const key = view.itemId;
          if (!acc[key]) {
            acc[key] = {
              itemId: view.itemId,
              itemName: view.itemName,
              category: view.category,
              views: 0,
              addedToCart: 0,
              recentViews: 0,
              recentCart: 0,
            };
          }
          acc[key].views++;
          return acc;
        }, {} as Record<string, {
          itemId: string;
          itemName: string;
          category: string;
          views: number;
          addedToCart: number;
          recentViews: number;
          recentCart: number;
        }>);

        // Agregar conteos de carrito
        thisMonthCart.forEach(item => {
          if (itemStats[item.itemId]) {
            itemStats[item.itemId].addedToCart++;
          }
        });

        // Agregar conteos recientes
        recentViews.forEach(view => {
          if (itemStats[view.itemId]) {
            itemStats[view.itemId].recentViews++;
          }
        });

        recentCart.forEach(item => {
          if (itemStats[item.itemId]) {
            itemStats[item.itemId].recentCart++;
          }
        });

        // Calcular score ponderado y determinar tendencia
        const scoredItems = Object.values(itemStats).map(item => {
          // Score ponderado:
          // - Agregar al carrito vale 3x más que ver
          // - Actividad reciente (últimos 7 días) vale 1.5x
          const baseScore = (item.views * 1) + (item.addedToCart * 3);
          const recentScore = (item.recentViews * 1.5) + (item.recentCart * 4.5);
          const totalScore = baseScore + recentScore;

          // Determinar tendencia
          const recentActivity = item.recentViews + item.recentCart;
          const totalActivity = item.views + item.addedToCart;
          const recentRatio = totalActivity > 0 ? recentActivity / totalActivity : 0;

          let trend: 'hot' | 'rising' | 'popular';
          if (item.recentCart >= 3 && recentRatio > 0.6) {
            trend = 'hot'; // Muy popular recientemente
          } else if (recentRatio > 0.4 && recentActivity >= 2) {
            trend = 'rising'; // Creciendo en popularidad
          } else {
            trend = 'popular'; // Consistentemente popular
          }

          return {
            itemId: item.itemId,
            itemName: item.itemName,
            category: item.category,
            views: item.views,
            addedToCart: item.addedToCart,
            score: totalScore,
            trend,
          };
        });

        // Ordenar por score y retornar top items
        return scoredItems
          .sort((a, b) => b.score - a.score)
          .slice(0, limit);
      },

      clearOldData: () => {
        const now = Date.now();
        const threeMonthsAgo = now - 90 * 24 * 60 * 60 * 1000;

        set((state) => ({
          views: state.views.filter((view) => view.timestamp >= threeMonthsAgo),
          addedToCart: state.addedToCart.filter((item) => item.timestamp >= threeMonthsAgo),
        }));
      },
    }),
    {
      name: 'mirador-analytics',
    }
  )
);
