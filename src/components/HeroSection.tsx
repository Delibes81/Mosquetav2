import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const categories = [
    "Refrigeradores y Congeladores",
    "Estufas y Parrillas",
    "Lavado y Secado",
    "Microondas y Hornos",
    "Muebles de Oficina",
    "Sillas y Sillones",
    "Salas y Sofás",
    "Colchones y Recámaras",
    "Electrónica y TV",
    "Climatización"
  ];

  return (
    <div className="bg-gray-100 py-4 font-inter">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row gap-4">
        
        {/* Columna Izquierda: Menú Departamental (25%) */}
        <div className="hidden md:flex flex-col w-[25%] bg-white border border-gray-300 shadow-sm rounded-sm overflow-hidden">
          <div className="bg-gray-100 border-b border-gray-300 px-4 py-3 font-bold text-gray-900 text-sm">
            Categorías Principales
          </div>
          <ul className="flex flex-col">
            {categories.map((cat, idx) => (
              <li key={idx} className="border-b border-gray-100 last:border-none">
                <Link href="/catalogo" className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-mosqueta-primary transition-colors">
                  <span>{cat}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna Derecha: Banner Promocional (75%) */}
        <div className="w-full md:w-[75%] relative h-[350px] sm:h-[450px] flex items-center bg-gray-900 overflow-hidden border border-gray-300 rounded-sm">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Almacén de Liquidación"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mosqueta-secondary/90 via-mosqueta-secondary/70 to-transparent"></div>
          
          <div className="relative z-10 p-8 sm:p-12 max-w-2xl">
            <div className="inline-block bg-yellow-400 text-gray-900 font-black px-3 py-1 text-xs uppercase tracking-widest mb-4 shadow-sm border border-yellow-500">
              Solo por tiempo limitado
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white font-montserrat uppercase leading-none tracking-tighter mb-4 shadow-black drop-shadow-md">
              Liquidación de Inventario:
              <span className="block text-mosqueta-primary mt-2">De la Fábrica a tu Oficina.</span>
            </h1>
            <p className="text-gray-200 font-medium text-sm sm:text-base mb-8 max-w-md line-clamp-2">
              Aprovecha precios de mayoreo en más de 5,000 SKUs. Equipamiento directo sin intermediarios.
            </p>
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center px-10 py-4 font-black text-white bg-mosqueta-primary hover:bg-[#b0164e] transition-colors rounded-none shadow-lg text-lg uppercase tracking-wider border-2 border-transparent hover:border-white"
            >
              Comprar Ahora &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
