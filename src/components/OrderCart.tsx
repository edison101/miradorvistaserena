'use client';

import { useState } from 'react';
import { useOrderStore } from '@/store/orderStore';

export default function OrderCart() {
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const { items, updateQuantity, removeItem, clearOrder, getItemCount } = useOrderStore();
  const itemCount = getItemCount();

  const itemsWithPrice = items.filter(item => item.price > 0);
  const itemsWithoutPrice = items.filter(item => item.price === 0);
  const totalWithPrices = itemsWithPrice.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleSendOrder = () => {
    if (!customerName.trim() || !tableNumber.trim()) {
      alert('Por favor ingresa tu nombre y número de mesa');
      return;
    }

    let message = `*NUEVO PEDIDO - MIRADOR VISTA SERENA*\n\n`;
    message += `👤 *Cliente:* ${customerName}\n`;
    message += `🪑 *Mesa:* ${tableNumber}\n\n`;
    message += `📋 *PEDIDO:*\n`;

    items.forEach(item => {
      message += `\n• ${item.name}\n`;
      message += `  Cantidad: ${item.quantity}\n`;
      if (item.price > 0) {
        message += `  Precio: ${formatPrice(item.price)}\n`;
        message += `  Subtotal: ${formatPrice(item.price * item.quantity)}\n`;
      } else {
        message += `  ⚠️ *Confirmar precio con mesero*\n`;
      }
    });

    if (itemsWithoutPrice.length > 0) {
      message += `\n⚠️ *IMPORTANTE:* ${itemsWithoutPrice.length} producto(s) requieren confirmación de precio con el mesero.\n`;
    }

    if (totalWithPrices > 0) {
      message += `\n💰 *Total estimado:* ${formatPrice(totalWithPrices)}\n`;
      message += `(Solo productos con precio establecido)\n`;
    }

    message += `\n📝 *Nota:* El cliente debe confirmar el pedido con el mesero.\n`;
    message += `\n⚠️ Los precios y disponibilidad están sujetos a cambios debido a condiciones climáticas, sociales y de la cadena de suministro.`;

    const whatsappUrl = `https://wa.me/573229537651?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Clear form after sending
    clearOrder();
    setIsOpen(false);
    setCustomerName('');
    setTableNumber('');
  };

  const handleCopyNequi = async () => {
    try {
      await navigator.clipboard.writeText('3229537651');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110"
        aria-label="Ver mi pedido"
      >
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-full md:w-96 bg-white z-50 shadow-2xl overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Mi Pedido</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {items.length === 0 ? (
                <div className="text-center py-12">
                  <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-gray-500">Tu pedido está vacío</p>
                  <p className="text-sm text-gray-400 mt-2">Agrega productos del menú</p>
                </div>
              ) : (
                <>
                  {/* Customer Info Section */}
                  <div className="space-y-3 mb-6 bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800">Información del cliente</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 autofill:bg-white autofill:text-gray-900"
                        style={{
                          WebkitTextFillColor: '#111827',
                          WebkitBoxShadow: '0 0 0px 1000px white inset'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Número de mesa
                      </label>
                      <input
                        type="text"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        placeholder="Ej: 5"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 autofill:bg-white autofill:text-gray-900"
                        style={{
                          WebkitTextFillColor: '#111827',
                          WebkitBoxShadow: '0 0 0px 1000px white inset'
                        }}
                      />
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.category}</p>
                            {item.price > 0 ? (
                              <p className="text-sm font-semibold text-green-600">
                                {formatPrice(item.price)}
                              </p>
                            ) : (
                              <p className="text-sm font-semibold text-orange-600">
                                ⚠️ Confirmar precio con mesero
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center font-bold"
                            >
                              -
                            </button>
                            <span className="font-semibold min-w-[2rem] text-center text-gray-900">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"
                            >
                              +
                            </button>
                          </div>
                          {item.price > 0 && (
                            <p className="text-sm font-semibold text-gray-700">
                              Subtotal: {formatPrice(item.price * item.quantity)}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Warning for items without price */}
                  {itemsWithoutPrice.length > 0 && (
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-orange-800">
                            {itemsWithoutPrice.length} producto(s) sin precio establecido
                          </p>
                          <p className="text-xs text-orange-700 mt-1">
                            El mesero confirmará el precio final de estos productos
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Price Summary */}
                  <div className="border-t pt-4 mb-6 space-y-2">
                    {itemsWithPrice.length > 0 && (
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <span>Subtotal (productos con precio):</span>
                        <span className="font-semibold">{formatPrice(totalWithPrices)}</span>
                      </div>
                    )}
                    {itemsWithoutPrice.length > 0 && (
                      <div className="flex justify-between items-center text-sm text-orange-600">
                        <span>Productos a confirmar:</span>
                        <span className="font-semibold">{itemsWithoutPrice.reduce((sum, item) => sum + item.quantity, 0)} item(s)</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-xl font-bold pt-2 border-t">
                      <span>Total estimado:</span>
                      <span className="text-green-600">{formatPrice(totalWithPrices)}</span>
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      * Los precios pueden variar por eventos climáticos, sociales o de la cadena de suministro
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleSendOrder}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Enviar pedido por WhatsApp</span>
                    </button>

                    <div className="bg-blue-50 p-4 rounded-lg text-sm">
                      <p className="font-semibold text-gray-800 mb-3">💰 Métodos de pago:</p>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-blue-200">
                          <div>
                            <p className="font-medium text-gray-800">Nequi:</p>
                            <p className="text-base font-semibold text-blue-700">322 953 7651</p>
                          </div>
                          <button
                            onClick={handleCopyNequi}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-xs font-medium flex items-center gap-2"
                          >
                            {copySuccess ? (
                              <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Copiado
                              </>
                            ) : (
                              <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copiar
                              </>
                            )}
                          </button>
                        </div>
                        <p className="pl-2">• Efectivo (confirmar con el mesero)</p>
                      </div>
                    </div>

                    <button
                      onClick={clearOrder}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-colors"
                    >
                      Limpiar pedido
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
