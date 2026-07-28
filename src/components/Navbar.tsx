"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Menu, Package, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col font-inter shadow-sm z-50 sticky top-0">
      {/* Nivel 1: Top Bar (Técnica / B2B) */}
      <div className="bg-gray-900 text-gray-300 text-[11px] font-medium py-1 px-4 border-b border-gray-700">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="cursor-default">Línea Directa: 55-345-678</span>
          </div>
        </div>
      </div>

      {/* Nivel 2: Main Header (Morado) */}
      <div className="bg-mosqueta-secondary py-3 px-4 text-white">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 sm:gap-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image 
              src="/Artboard 4 copy.png" 
              alt="Mosqueta Hogar & Oficina" 
              width={200} 
              height={50} 
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Buscador Masivo */}
          <div className="hidden md:flex flex-1 max-w-4xl mx-2">
            <div className="flex w-full rounded-sm overflow-hidden border border-gray-600 shadow-inner focus-within:ring-2 focus-within:ring-mosqueta-primary">
              <input 
                type="text" 
                placeholder="Buscar por SKU, muebles, electrónica..." 
                className="w-full px-4 py-2.5 text-gray-900 bg-white border-none focus:outline-none text-sm font-medium"
              />
              <button className="bg-mosqueta-primary hover:bg-[#b0164e] text-white px-6 font-bold uppercase text-sm tracking-wider flex items-center justify-center transition-colors">
                <Search className="w-4 h-4 mr-1.5" />
                Buscar
              </button>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden lg:flex items-center gap-2 hover:border-gray-400 border border-transparent p-1.5 rounded-sm transition-all">
              <MapPin className="w-5 h-5 text-gray-300" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] text-gray-300">Enviar a</span>
                <span className="text-xs font-bold">CDMX 06700</span>
              </div>
            </button>

            <Link href="/rastreo" className="flex items-center gap-2 hover:border-gray-400 border border-transparent p-1.5 rounded-sm transition-all">
              <Package className="w-6 h-6 text-white" />
              <div className="hidden sm:flex flex-col items-start leading-none">
                <span className="text-[10px] text-gray-300">Sigue tu envío</span>
                <span className="text-xs font-bold">Rastrear Pedido</span>
              </div>
            </Link>

            <Link href="/carrito" className="flex items-end gap-1 hover:border-gray-400 border border-transparent p-1.5 rounded-sm transition-all relative">
              <div className="relative">
                <ShoppingCart className="w-8 h-8 text-white" />
                <span className="absolute -top-1.5 -right-2 bg-mosqueta-primary text-white text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center border border-mosqueta-secondary shadow-sm">
                  2
                </span>
              </div>
              <span className="text-xs font-bold hidden sm:block pb-1">Carrito</span>
            </Link>
          </div>
        </div>

        {/* Buscador Móvil */}
        <div className="md:hidden mt-3 max-w-[1400px] mx-auto">
          <div className="flex w-full rounded-sm overflow-hidden shadow-inner">
            <input 
              type="text" 
              placeholder="Buscar por SKU..." 
              className="w-full px-3 py-2 text-gray-900 bg-white border-none focus:outline-none text-sm"
            />
            <button className="bg-mosqueta-primary text-white px-4 flex items-center justify-center">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Nivel 3: Categorías (Magenta) */}
      <div className="bg-mosqueta-primary text-white text-xs font-bold border-b-2 border-[#b0164e]">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center gap-1 sm:gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
          <Link href="/catalogo" className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-black/20 rounded-sm border border-transparent transition-colors">
            <Menu className="w-4 h-4" />
            <span className="uppercase tracking-wider">Todas</span>
          </Link>
          <Link href="/catalogo?categoria=linea-blanca" className="px-3 py-1.5 hover:bg-black/20 rounded-sm border border-transparent transition-colors uppercase tracking-wider">Línea Blanca</Link>
          <Link href="/catalogo?categoria=oficina" className="px-3 py-1.5 hover:bg-black/20 rounded-sm border border-transparent transition-colors uppercase tracking-wider">Muebles de Oficina</Link>
          <Link href="/catalogo?categoria=hogar" className="px-3 py-1.5 hover:bg-black/20 rounded-sm border border-transparent transition-colors uppercase tracking-wider">Hogar</Link>
          <Link href="/corporativo" className="px-3 py-1.5 hover:bg-black/20 rounded-sm border border-transparent transition-colors uppercase tracking-wider">Ventas Corporativas</Link>
          <Link href="/catalogo?ofertas=true" className="px-3 py-1.5 hover:bg-black/20 rounded-sm border border-transparent transition-colors uppercase tracking-wider font-black text-yellow-300">¡OFERTAS DEL MES!</Link>
        </div>
      </div>
    </nav>
  );
}
