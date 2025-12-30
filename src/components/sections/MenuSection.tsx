'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useOrderStore } from '@/store/orderStore';
import { useAnalyticsStore } from '@/store/analyticsStore';

export default function MenuSection() {
  const t = useTranslations();
  const addItem = useOrderStore((state) => state.addItem);
  const { trackView, trackAddToCart, getTopItemsThisMonth, clearOldData } = useAnalyticsStore();
  const [notification, setNotification] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [topItems, setTopItems] = useState<{
    itemId: string;
    itemName: string;
    category: string;
    views: number;
    addedToCart: number;
    score: number;
    trend: 'hot' | 'rising' | 'popular';
  }[]>([]);

  useEffect(() => {
    clearOldData();
    const analyticsItems = getTopItemsThisMonth(6);

    // Si no hay datos del algoritmo, mostrar productos destacados por defecto
    if (analyticsItems.length === 0) {
      const defaultTopItems = [
        { itemId: 'pauli', itemName: t('drinks.specialPauli'), category: t('menu.micheladas'), views: 0, addedToCart: 0, score: 0, trend: 'hot' as const },
        { itemId: 'crema-cerveza', itemName: t('drinks.beerCream'), category: t('menu.micheladas'), views: 0, addedToCart: 0, score: 0, trend: 'hot' as const },
        { itemId: 'maracu-mango', itemName: t('drinks.maracuMango'), category: t('menu.coldDrinks'), views: 0, addedToCart: 0, score: 0, trend: 'popular' as const },
        { itemId: 'sangria', itemName: t('drinks.sangria'), category: t('menu.coldDrinks'), views: 0, addedToCart: 0, score: 0, trend: 'popular' as const },
        { itemId: 'canelazo', itemName: t('drinks.canelazo'), category: t('menu.hotDrinks'), views: 0, addedToCart: 0, score: 0, trend: 'rising' as const },
        { itemId: 'combo-chocolate', itemName: t('combos.cuajadaChocolate'), category: t('menu.combos'), views: 0, addedToCart: 0, score: 0, trend: 'popular' as const },
      ];
      setTopItems(defaultTopItems);
    } else {
      setTopItems(analyticsItems);
    }
  }, [clearOldData, getTopItemsThisMonth, t]);

  const drinkVideos = [
    { src: '/image/Mirador Vista serena/menu/Bebidas/Refresco de Maracuya.MP4', type: 'video' },
    { src: '/image/Mirador Vista serena/menu/Bebidas/Michelada pauli .MP4', type: 'video' },
    { src: '/image/Mirador Vista serena/menu/Bebidas/Postre de tres leches .MP4', type: 'video' },
  ];

  const drinkImages = [
    { src: '/image/Mirador Vista serena/menu/Bebidas/9efc18fb-bebd-4a24-8999-d72cbe665d25.jpg', alt: 'Bebida' },
    { src: '/image/Mirador Vista serena/menu/Bebidas/Cerezada.jpg', alt: 'Cerezada' },
    { src: '/image/Mirador Vista serena/menu/Bebidas/Combo aguapanela cuajada y arepa.JPG', alt: 'Combo aguapanela' },
    { src: '/image/Mirador Vista serena/menu/Bebidas/Crema de cerveza.jpg', alt: 'Crema de cerveza' },
    { src: '/image/Mirador Vista serena/menu/Bebidas/Michelada cencilla.jpg', alt: 'Michelada sencilla' },
  ];

  const foodVideos = [
    { src: '/image/Mirador Vista serena/menu/Comidas/Arroz con pollo.mov', type: 'video' },
    { src: '/image/Mirador Vista serena/menu/Comidas/Pinchos con arepa.mov', type: 'video' },
    { src: '/image/Mirador Vista serena/menu/Comidas/Filete de res salteado .MP4', type: 'video' },
    { src: '/image/Mirador Vista serena/menu/Comidas/Plato para evento especial .mov', type: 'video' },
    { src: '/image/Mirador Vista serena/menu/Comidas/Carne de res salteada .MP4', type: 'video' },
    { src: '/image/Mirador Vista serena/menu/Comidas/Sobre barriga.MP4', type: 'video' },
  ];

  const foodImages = [
    { src: '/image/Mirador Vista serena/menu/Comidas/Arepas rellenas de carne.jpg', alt: 'Arepas rellenas' },
    { src: '/image/Mirador Vista serena/menu/Comidas/Chori Yuca.jpg', alt: 'Chori Yuca' },
  ];

  const drinkItems = [
    { id: 'maracu-mango', name: t('drinks.maracuMango'), price: 14000, category: t('menu.coldDrinks') },
    { id: 'cerezada', name: t('drinks.cerezada'), price: 14000, category: t('menu.coldDrinks') },
    { id: 'sangria', name: t('drinks.sangria'), price: 15000, category: t('menu.coldDrinks') },
    { id: 'jugo-agua', name: t('drinks.naturalJuiceWater'), price: 10000, category: t('menu.coldDrinks') },
    { id: 'jugo-leche', name: t('drinks.naturalJuiceMilk'), price: 12000, category: t('menu.coldDrinks') },
    { id: 'granizado', name: t('drinks.fruitSlushies'), price: 12000, category: t('menu.coldDrinks') },
    { id: 'yogurt', name: t('drinks.homemadeYogurt'), price: 4000, category: t('menu.coldDrinks') },
    { id: 'milo-frio', name: 'Milo Frío', price: 12000, category: t('menu.coldDrinks') },
    { id: 'aromatica', name: t('drinks.herbalTea'), price: 5000, category: t('menu.hotDrinks') },
    { id: 'te', name: t('drinks.redFruitTea'), price: 6000, category: t('menu.hotDrinks') },
    { id: 'cafe-leche', name: t('drinks.milkCoffee'), price: 5000, category: t('menu.hotDrinks') },
    { id: 'cafe-negro', name: t('drinks.blackCoffee'), price: 4000, category: t('menu.hotDrinks') },
    { id: 'tinto', name: t('drinks.tinto'), price: 3000, category: t('menu.hotDrinks') },
    { id: 'agua-panela', name: t('drinks.panelWater'), price: 3000, category: t('menu.hotDrinks') },
    { id: 'leche-hierbabuena', name: t('drinks.mintMilk'), price: 3000, category: t('menu.hotDrinks') },
    { id: 'chocolate', name: t('drinks.hotChocolate'), price: 6000, category: t('menu.hotDrinks') },
    { id: 'milo-caliente', name: 'Milo Caliente', price: 6000, category: t('menu.hotDrinks') },
    { id: 'canelazo', name: t('drinks.canelazo'), price: 12000, category: t('menu.hotDrinks') },
    { id: 'poker', name: t('drinks.poker'), price: 5000, category: `${t('menu.beers')} - ${t('drinks.national')}` },
    { id: 'light', name: t('drinks.lightBeer'), price: 5000, category: `${t('menu.beers')} - ${t('drinks.national')}` },
    { id: 'costena', name: t('drinks.costena'), price: 5000, category: `${t('menu.beers')} - ${t('drinks.national')}` },
    { id: 'club-colombia', name: t('drinks.clubColombia'), price: 6000, category: `${t('menu.beers')} - ${t('drinks.national')}` },
    { id: 'budweiser', name: t('drinks.budweiser'), price: 5000, category: `${t('menu.beers')} - ${t('drinks.international')}` },
    { id: 'coronita', name: t('drinks.coronita'), price: 6000, category: `${t('menu.beers')} - ${t('drinks.international')}` },
    { id: 'corona-grande', name: t('drinks.coronaLarge'), price: 9000, category: `${t('menu.beers')} - ${t('drinks.international')}` },
    { id: 'michelada-sencilla', name: t('drinks.simpleMichelada'), price: 12000, category: t('menu.micheladas'), description: t('drinks.simpleDesc') },
    { id: 'crema-cerveza', name: t('drinks.beerCream'), price: 16000, category: t('menu.micheladas'), description: t('drinks.beerCreamDesc') },
    { id: 'cerveza-granizada', name: t('drinks.frozenBeer'), price: 18000, category: t('menu.micheladas'), description: t('drinks.frozenBeerDesc') },
    { id: 'samuelito', name: t('drinks.samuelito'), price: 18000, category: t('menu.micheladas'), description: t('drinks.samuelitoDesc') },
    { id: 'pauli', name: t('drinks.specialPauli'), price: 24000, category: t('menu.micheladas'), description: t('drinks.specialPauliDesc') },
    { id: 'combo-panela', name: t('combos.cuajadaPanel'), price: 12000, category: t('menu.combos') },
    { id: 'combo-cafe', name: t('combos.cuajadaCoffee'), price: 13000, category: t('menu.combos') },
    { id: 'combo-chocolate', name: t('combos.cuajadaChocolate'), price: 15000, category: t('menu.combos') },
    { id: 'pony-malta', name: t('drinks.ponyMalta'), price: 4000, category: t('menu.coldDrinks') },
    { id: 'coca-cola', name: t('drinks.cocaCola'), price: 4000, category: t('menu.coldDrinks') },
    { id: 'agua-pura', name: t('drinks.pureWater'), price: 3000, category: t('menu.coldDrinks') },
  ];

  const foodItems = {
    salt: [
      { id: 'arepas-rellenas', name: t('food.stuffedArepas') },
      { id: 'arepas-chorizo', name: t('food.chorizoArepas') },
      { id: 'pinchos', name: t('food.pinchos') },
      { id: 'chori-yuca', name: t('food.choriYuca') },
    ],
    special: [
      { id: 'arroz-pollo', name: t('food.chickenRice') },
      { id: 'arroz-atollado', name: t('food.atolladoRice') },
      { id: 'filete-res', name: t('food.beefFillet') },
      { id: 'sobre-barriga', name: t('food.grilledBelly') },
      { id: 'muchacho-relleno', name: t('food.stuffedBoy') },
      { id: 'pechuga-rellena', name: t('food.stuffedChickenBreast') },
    ]
  };

  const handleAddToCart = (item: typeof drinkItems[0]) => {
    trackView(item.id, item.name, item.category);
    trackAddToCart(item.id, item.name, item.category);
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
    });
    setNotification(`✓ ${item.name} ${t('menu.added')}`);
    setTimeout(() => {
      setNotification('');
      setTopItems(getTopItemsThisMonth(6));
    }, 3000);
  };

  const handleAddFoodItem = (item: { id: string; name: string }, category: string) => {
    trackView(item.id, item.name, category);
    trackAddToCart(item.id, item.name, category);
    addItem({
      id: item.id,
      name: item.name,
      price: 0,
      category,
    });
    setNotification(`✓ ${item.name} ${t('menu.added')} - ${t('menu.confirmWithWaiter')}`);
    setTimeout(() => {
      setNotification('');
      setTopItems(getTopItemsThisMonth(6));
    }, 3000);
  };

  return (
    <section id="menu" className="w-full py-16 bg-pattern">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Notification */}
          {notification && (
            <div className="fixed top-24 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
              {notification}
            </div>
          )}

          {/* BEBIDAS SECTION */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">{t('menu.drinks')}</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto rounded"></div>
            </div>

            {/* Galería de Bebidas */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {/* Fila 1 */}
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                  <video
                    src={drinkVideos[0].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-white text-xs font-semibold">
                    VIDEO
                  </div>
                </div>
                {drinkImages.slice(0, 3).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading="lazy"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}

                {/* Fila 2 */}
                {drinkImages.slice(3, 5).map((image, index) => (
                  <div
                    key={index + 3}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading="lazy"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                  <video
                    src={drinkVideos[1].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-white text-xs font-semibold">
                    VIDEO
                  </div>
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                  <video
                    src={drinkVideos[2].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-white text-xs font-semibold">
                    VIDEO
                  </div>
                </div>
              </div>
            </div>

            {/* Menú de Bebidas */}
            <div className="bg-white/95 rounded-2xl shadow-lg p-6 md:p-8">
              {[
                t('menu.coldDrinks'),
                t('menu.hotDrinks'),
                `${t('menu.beers')} - ${t('drinks.national')}`,
                `${t('menu.beers')} - ${t('drinks.international')}`,
                t('menu.micheladas'),
                t('menu.combos'),
              ].map((category) => {
                const items = drinkItems.filter(item => item.category === category);
                if (items.length === 0) return null;

                return (
                  <div key={category} className="mb-8 last:mb-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200 text-center">
                      {category}
                    </h3>
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{item.name}</p>
                            {item.description && (
                              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-4 ml-4">
                            <span className="text-lg font-bold text-green-600 whitespace-nowrap">
                              ${item.price.toLocaleString('es-CO')}
                            </span>
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition-colors text-sm font-medium"
                            >
                              {t('menu.addToCart')}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COMIDAS SECTION */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">{t('menu.food')}</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto rounded"></div>
            </div>

            {/* Galería de Comidas */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {/* Fila 1 */}
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                  <video
                    src={foodVideos[0].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-white text-xs font-semibold">
                    VIDEO
                  </div>
                </div>
                {foodImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading="lazy"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                  <video
                    src={foodVideos[1].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-white text-xs font-semibold">
                    VIDEO
                  </div>
                </div>

                {/* Fila 2 */}
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                  <video
                    src={foodVideos[2].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-white text-xs font-semibold">
                    VIDEO
                  </div>
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                  <video
                    src={foodVideos[3].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-white text-xs font-semibold">
                    VIDEO
                  </div>
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                  <video
                    src={foodVideos[4].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-white text-xs font-semibold">
                    VIDEO
                  </div>
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group">
                  <video
                    src={foodVideos[5].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-white text-xs font-semibold">
                    VIDEO
                  </div>
                </div>
              </div>
            </div>

            {/* Menú de Comidas */}
            <div className="bg-white/95 rounded-2xl shadow-lg p-6 md:p-8">
              {/* Comida de Sal */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200 text-center">
                  {t('menu.saltFood')}
                </h3>
                <div className="space-y-2">
                  {foodItems.salt.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500 italic">{t('menu.priceVariable')}</p>
                      </div>
                      <button
                        onClick={() => handleAddFoodItem(item, t('menu.saltFood'))}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        {t('menu.addToCart')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comidas Especiales */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 pb-2 border-b-2 border-gray-200 text-center">
                  {t('menu.specialFood')}
                </h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 px-4 py-3 rounded mb-4">
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">ℹ️ Nota:</span> {t('menu.lowAvailability')}
                  </p>
                </div>
                <div className="space-y-2">
                  {foodItems.special.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500 italic">{t('menu.priceVariable')}</p>
                      </div>
                      <button
                        onClick={() => handleAddFoodItem(item, t('menu.specialFood'))}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        {t('menu.addToCart')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TOP ITEMS SECTION - Siempre visible */}
          <div className="mt-16">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-orange-600 mb-2">
                🔥 {t('menu.topThisMonth')}
              </h2>
              <div className="w-12 h-1 bg-orange-500 mx-auto rounded"></div>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl">
                {topItems.map((item, index) => {
                const menuItem = drinkItems.find(d => d.id === item.itemId);
                if (!menuItem) return null;

                return (
                  <div
                    key={item.itemId}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-2xl">{['🥇', '🥈', '🥉', '🏆', '🏆', '🏆'][index]}</span>
                      <span className="text-lg">{item.trend === 'hot' ? '🔥' : item.trend === 'rising' ? '📈' : '⭐'}</span>
                    </div>

                    <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
                      {menuItem.name}
                    </h3>

                    {item.views > 0 || item.addedToCart > 0 ? (
                      <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                        <span>👁️ {item.views}</span>
                        <span>🛒 {item.addedToCart}</span>
                      </div>
                    ) : (
                      <div className="text-xs text-orange-600 mb-2 font-semibold">
                        ⭐ Destacado
                      </div>
                    )}

                    <div className="text-lg font-bold text-green-600 mb-3">
                      ${menuItem.price.toLocaleString('es-CO')}
                    </div>

                    <button
                      onClick={() => handleAddToCart(menuItem)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors text-xs font-semibold"
                    >
                      {t('menu.addToCart')}
                    </button>
                  </div>
                );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Vista ampliada"
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
