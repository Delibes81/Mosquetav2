import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { StaggerItem } from './animations/Stagger';

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: 'Hogar' | 'Corporativo';
  msi: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(product.price);

  const listPrice = product.price * 1.20;
  const formattedListPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(listPrice);

  return (
    <StaggerItem className="h-full">
      <div className="group relative bg-white border border-gray-300 hover:border-gray-400 transition-colors flex flex-col h-full font-inter">
        
        {/* Imagen */}
        <div className="aspect-square w-full bg-white relative p-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain mix-blend-multiply p-4 group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        </div>

        {/* Contenido Denso */}
        <div className="px-3 pb-3 flex flex-col flex-grow bg-white border-t border-gray-100">
          
          <div className="flex items-center gap-1 mt-2 mb-1">
            <div className="flex text-yellow-400">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current text-gray-300" />
            </div>
            <span className="text-[10px] text-blue-600 font-medium hover:underline cursor-pointer">4.5 (128)</span>
          </div>

          <Link href={`/producto/${product.slug}`} className="block flex-grow">
            <h3 className="text-[13px] font-medium text-gray-900 leading-tight mb-1 group-hover:text-mosqueta-secondary transition-colors line-clamp-2">
              {product.name}
            </h3>
            <div className="text-[10px] text-gray-500 font-mono mb-2">SKU: MQ-{product.id}8830</div>
            
            <div className="mt-1 flex flex-col">
              <span className="text-[11px] text-gray-500 line-through">Precio de lista: {formattedListPrice}</span>
              <span className="text-2xl font-black text-mosqueta-secondary leading-none mt-0.5">{formattedPrice}</span>
            </div>

            <div className="mt-2">
              <span className="inline-block bg-green-50 text-green-700 text-[10px] font-bold px-1.5 py-0.5 border border-green-200 uppercase tracking-wide">
                Envío Gratis a CDMX
              </span>
            </div>
          </Link>
        </div>
        
        {/* Botón pegado al borde inferior */}
        <button className="w-full bg-mosqueta-primary text-white font-bold py-2.5 px-2 rounded-none flex items-center justify-center gap-1.5 hover:bg-[#b0164e] transition-colors active:bg-[#8f1240] text-xs uppercase tracking-widest mt-auto">
          <ShoppingCart className="w-4 h-4 flex-shrink-0" fill="currentColor" />
          <span className="truncate">Agregar al Carrito</span>
        </button>
      </div>
    </StaggerItem>
  );
}
