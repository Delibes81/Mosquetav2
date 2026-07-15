import Image from 'next/image';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Proyectos Especiales | Mosqueta',
  description: 'Galería de proyectos corporativos de Mosqueta.',
};

const proyectos = [
  {
    id: 1,
    cliente: 'Corporativo Santa Fe',
    tipo: 'Equipamiento Oficinas',
    unidades: '+500 estaciones',
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    cliente: 'Hotel Riviera',
    tipo: 'Línea Blanca Comercial',
    unidades: '120 habitaciones',
    img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    cliente: 'Torre Reforma',
    tipo: 'Salas de Juntas',
    unidades: '15 niveles',
    img: 'https://images.unsplash.com/photo-1542341065-288251e7a57a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function ProyectosPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      
      {/* Header Banner */}
      <div className="bg-gray-900 text-white border-b-4 border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-5xl font-black font-montserrat tracking-tight uppercase leading-none mb-2">
            Proyectos Ejecutados
          </h1>
          <p className="text-sm text-gray-400 font-medium">
            Casos de éxito y capacidad logística instalada.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((p) => (
            <div key={p.id} className="bg-white border border-gray-300 rounded-sm shadow-sm flex flex-col">
              <div className="relative h-64 w-full border-b border-gray-300">
                <Image src={p.img} alt={p.cliente} fill className="object-cover mix-blend-multiply opacity-90" />
                <div className="absolute top-4 left-4 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-sm border border-gray-700">
                  Caso de Éxito
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-1">{p.cliente}</h3>
                  <p className="text-sm font-bold text-mosqueta-primary uppercase tracking-wide mb-3">{p.tipo}</p>
                </div>
                <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Volumen:</span>
                  <span className="text-sm font-black text-gray-900">{p.unidades}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white border border-gray-300 rounded-sm shadow-sm p-8 text-center flex flex-col items-center">
          <Briefcase className="w-12 h-12 text-gray-300 mb-4" />
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-2">¿Tienes un proyecto en puerta?</h2>
          <p className="text-sm text-gray-600 font-medium max-w-lg mb-6">
            Nuestro equipo de ingenieros comerciales está listo para estructurar una propuesta técnica y económica adaptada a tus necesidades.
          </p>
          <Link href="/corporativo" className="bg-mosqueta-primary text-white font-black py-3 px-8 rounded-none shadow-sm hover:bg-[#b0164e] transition-colors text-sm uppercase tracking-widest border-b-4 border-[#8f1240]">
            Solicitar Asesoría
          </Link>
        </div>

      </div>
    </div>
  );
}
