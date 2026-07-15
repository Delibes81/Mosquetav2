import Image from 'next/image';
import Link from 'next/link';
import { Timer, Zap } from 'lucide-react';

export default function DealOfTheDay() {
  const deals = [
    {
      id: 'd1',
      sku: 'MQ-9901',
      name: 'Combo Lavadora + Secadora 22kg Inverter',
      price: 15999,
      originalPrice: 24999,
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      soldPercent: 85,
    },
    {
      id: 'd2',
      sku: 'MQ-5520',
      name: 'Silla Ejecutiva Ergonómica Premium',
      price: 2499,
      originalPrice: 4999,
      image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      soldPercent: 92,
    },
    {
      id: 'd3',
      sku: 'MQ-3310',
      name: 'Microondas 1.1 p3 Acero Inoxidable',
      price: 1899,
      originalPrice: 2899,
      image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      soldPercent: 60,
    },
    {
      id: 'd4',
      sku: 'MQ-1105',
      name: 'Pantalla 65" 4K Smart TV',
      price: 11499,
      originalPrice: 16999,
      image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      soldPercent: 98,
    }
  ];

  return (
    <div className="bg-mosqueta-primary text-white py-6 mt-4 font-inter">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Header Ofertas */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-[#b0164e] pb-2 gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-yellow-300 fill-current" />
            <h2 className="text-2xl sm:text-3xl font-black font-montserrat uppercase tracking-tighter shadow-sm">
              Ofertas Relámpago
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-sm border border-[#b0164e]">
            <Timer className="w-5 h-5 text-yellow-300" />
            <span className="font-bold text-sm uppercase tracking-wide">Termina en:</span>
            <span className="font-black text-xl font-mono text-yellow-300">12:45:00</span>
          </div>
        </div>

        {/* Grid de Ofertas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deals.map(deal => (
            <Link key={deal.id} href="/catalogo" className="bg-white rounded-sm overflow-hidden flex flex-col group border-2 border-transparent hover:border-yellow-400 transition-colors shadow-md">
              <div className="relative aspect-square w-full bg-gray-100 p-4">
                <div className="absolute top-0 left-0 bg-red-600 text-white font-black text-xs px-2 py-1 rounded-br-sm z-10">
                  -{Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100)}%
                </div>
                <Image 
                  src={deal.image} 
                  alt={deal.name}
                  fill
                  className="object-contain p-2 mix-blend-multiply group-hover:scale-105 transition-transform"
                />
              </div>
              
              <div className="p-3 flex flex-col flex-grow text-gray-900 border-t border-gray-200 bg-gray-50">
                <div className="text-[10px] text-gray-500 font-mono mb-1">SKU: {deal.sku}</div>
                <h3 className="font-bold text-sm leading-tight line-clamp-2 mb-2 uppercase">{deal.name}</h3>
                
                <div className="mt-auto">
                  <div className="text-xs text-gray-500 line-through">
                    ${deal.originalPrice.toLocaleString('es-MX')}
                  </div>
                  <div className="text-xl font-black text-mosqueta-secondary leading-none">
                    ${deal.price.toLocaleString('es-MX')}
                  </div>
                  
                  {/* Barra de progreso */}
                  <div className="mt-3">
                    <div className="flex justify-between text-[9px] font-bold uppercase text-gray-600 mb-1">
                      <span>Vendido: {deal.soldPercent}%</span>
                      {deal.soldPercent > 90 && <span className="text-red-600">¡Por agotarse!</span>}
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${deal.soldPercent > 90 ? 'bg-red-600' : 'bg-mosqueta-secondary'}`}
                        style={{ width: `${deal.soldPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
