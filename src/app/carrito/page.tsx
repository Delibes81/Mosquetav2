import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ArrowRight, ShieldCheck, Truck, ShoppingCart } from 'lucide-react';

// Mock data para el carrito
const cartItems = [
  {
    id: '1',
    sku: 'MQ-2291',
    name: 'Refrigerador Inverter Family Size 22p3',
    price: 18499.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Línea Blanca',
  },
  {
    id: '3',
    sku: 'MQ-4422',
    name: 'Silla Ergonómica Executive Mesh',
    price: 4599.00,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Corporativo',
  }
];

export const metadata = {
  title: 'Carrito de Compras | Mosqueta',
  description: 'Revisa los productos en tu carrito y procede al pago seguro.',
};

export default function CarritoPage() {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const envio = 0; // Envío gratis CDMX
  const total = subtotal + envio;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(price);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 font-inter">
      <div className="max-w-[1400px] mx-auto px-4">
        
        <div className="flex items-center gap-3 mb-6 border-b border-gray-300 pb-4">
          <ShoppingCart className="w-8 h-8 text-mosqueta-secondary" />
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 font-montserrat uppercase tracking-tight">
            Carrito de Compras
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items (70%) */}
          <div className="w-full lg:w-[70%]">
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
              {/* Header Tabla */}
              <div className="hidden sm:grid sm:grid-cols-6 bg-gray-900 px-4 py-2 border-b border-gray-700 text-[11px] font-bold text-gray-200 uppercase tracking-widest">
                <div className="col-span-3">Producto</div>
                <div className="col-span-1 text-center">Precio Unitario</div>
                <div className="col-span-1 text-center">Cantidad</div>
                <div className="col-span-1 text-right">Subtotal</div>
              </div>
              
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-4 sm:p-5 flex flex-col sm:grid sm:grid-cols-6 sm:items-center gap-4 hover:bg-gray-50 transition-colors">
                    {/* Producto Info */}
                    <div className="col-span-3 flex items-start gap-4">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-sm overflow-hidden flex-shrink-0 border border-gray-300 bg-white p-2">
                        <Image src={item.image} alt={item.name} fill className="object-contain mix-blend-multiply" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">SKU: {item.sku}</span>
                        <Link href={`/producto/${item.id}`} className="text-sm font-bold text-gray-900 hover:text-mosqueta-secondary transition-colors line-clamp-2 leading-tight uppercase">
                          {item.name}
                        </Link>
                        <button className="text-[11px] text-gray-500 font-bold mt-3 flex items-center gap-1 hover:text-red-600 uppercase tracking-wider w-fit">
                          <Trash2 className="w-3 h-3" /> Eliminar
                        </button>
                      </div>
                    </div>
                    
                    {/* Precio Unitario */}
                    <div className="hidden sm:block col-span-1 text-center font-bold text-gray-900 text-sm">
                      {formatPrice(item.price)}
                    </div>
                    
                    {/* Cantidad */}
                    <div className="col-span-1 flex justify-between sm:justify-center items-center">
                      <span className="sm:hidden font-bold text-gray-700 text-[11px] uppercase tracking-wider">Cantidad:</span>
                      <div className="flex items-center border border-gray-300 rounded-sm bg-white overflow-hidden">
                        <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors bg-gray-50 font-bold border-r border-gray-300">-</button>
                        <span className="w-10 text-center text-sm font-bold text-gray-900">{item.quantity}</span>
                        <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors bg-gray-50 font-bold border-l border-gray-300">+</button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-1 flex justify-between sm:block text-right font-black text-mosqueta-secondary text-lg">
                      <span className="sm:hidden font-bold text-gray-700 text-[11px] uppercase tracking-wider mt-1">Subtotal:</span>
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <Link href="/catalogo" className="text-sm font-bold text-gray-600 hover:text-mosqueta-primary uppercase tracking-widest transition-colors flex items-center gap-2 bg-white px-4 py-2 border border-gray-300 rounded-sm">
                &larr; Continuar comprando
              </Link>
            </div>
          </div>

          {/* Order Summary (30%) */}
          <div className="w-full lg:w-[30%]">
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm sticky top-24">
              <div className="bg-gray-100 border-b border-gray-300 px-6 py-4">
                <h2 className="text-base font-black text-gray-900 uppercase tracking-widest">Resumen de Compra</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 text-sm font-medium text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} artículos)</span>
                    <span className="font-bold text-gray-900">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span>Costo de Envío</span>
                    <span className="font-black text-green-700 bg-green-50 px-2 py-0.5 border border-green-200 text-xs uppercase tracking-wider">Gratis (CDMX)</span>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">Total</span>
                    <div className="text-right">
                      <span className="block text-3xl font-black text-mosqueta-secondary leading-none">{formatPrice(total)}</span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">IVA incluido</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-mosqueta-primary text-white font-black py-4 px-4 rounded-none hover:bg-[#b0164e] transition-colors shadow-sm text-sm uppercase tracking-widest flex items-center justify-center gap-2 mb-4 border-b-4 border-[#8f1240]">
                  Proceder al Pago Seguro <ArrowRight className="w-5 h-5" />
                </button>

                {/* Trust Indicators */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide leading-tight">Procesamiento 100% seguro y encriptado.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-mosqueta-secondary flex-shrink-0" />
                    <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wide leading-tight">Envíos directos con logística propia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
