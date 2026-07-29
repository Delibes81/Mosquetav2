import Image from 'next/image';
import { Building2, Users, Truck, HeadphonesIcon, Briefcase, BadgeCheck, FileText } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata = {
  title: 'Ventas Corporativas para Empresas | Mosqueta',
  description: 'Soluciones integrales de equipamiento para empresas, hoteles, restaurantes y corporativos.',
};

export default function CorporativoPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      
      {/* Header Banner - Ultra Denso */}
      <div className="bg-gray-900 text-white border-b-4 border-[#b0164e]">
        <div className="max-w-[1400px] mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-[60%]">
            <span className="bg-[#b0164e] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-3 inline-block">División Empresas</span>
            <h1 className="text-3xl md:text-5xl font-black font-montserrat tracking-tight uppercase leading-none mb-4">
              Portal Empresarial
            </h1>
            <p className="text-sm text-gray-400 font-medium max-w-2xl leading-relaxed">
              Equipamiento por volumen directo de fábrica. Precios especiales, facturación simplificada y ejecutivos de cuenta dedicados para tu proyecto.
            </p>
          </div>
          <div className="w-full md:w-[40%] flex flex-col sm:flex-row gap-3 justify-end">
            <a href="#contacto-empresas" className="bg-mosqueta-primary text-white px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-[#b0164e] transition-colors shadow-sm text-center border-b-4 border-[#8f1240]">
              Solicitar Cotización
            </a>
            <Link href="/catalogo" className="bg-white text-gray-900 px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors shadow-sm text-center border border-gray-300">
              Ver Catálogo
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Main Content (75%) */}
          <div className="w-full lg:w-[75%] flex flex-col gap-6">
            
            {/* Beneficios - Grid Cuadrado */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
              <div className="bg-gray-100 border-b border-gray-300 px-4 py-3">
                <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Ventajas de la Cuenta Empresarial</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                
                <div className="p-6 flex items-start gap-4">
                  <div className="bg-gray-900 p-3 flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-2">Precios de Mayoreo</h3>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">Esquemas escalonados de descuento. Compra más volumen, paga menos por unidad.</p>
                  </div>
                </div>

                <div className="p-6 flex items-start gap-4">
                  <div className="bg-gray-900 p-3 flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-2">Asesoría Dedicada</h3>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">Ejecutivo de cuenta asignado para seguimiento de pedidos, garantías y facturación.</p>
                  </div>
                </div>

                <div className="p-6 flex items-start gap-4 border-t border-gray-200">
                  <div className="bg-gray-900 p-3 flex-shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-2">Logística Escalonada</h3>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">Entregas programadas en CDMX y envíos consolidados a nivel nacional con flota propia.</p>
                  </div>
                </div>

                <div className="p-6 flex items-start gap-4 border-t border-gray-200">
                  <div className="bg-gray-900 p-3 flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-2">Crédito y Facturación</h3>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">Posibilidad de crédito a 30 días para clientes frecuentes y portal de auto-facturación.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Sectores - Tabla Visual */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
              <div className="bg-gray-900 px-4 py-3 flex justify-between items-center">
                <h2 className="text-sm font-black text-white uppercase tracking-widest">Sectores Atendidos</h2>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-gray-50 transition-colors cursor-default">
                  <Briefcase className="w-8 h-8 text-mosqueta-primary mb-4" />
                  <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-2">Corporativos</h4>
                  <p className="text-xs text-gray-600 font-medium">Equipamiento integral de oficinas, sillería ergonómica y salas de juntas.</p>
                </div>
                <div className="w-full md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-gray-50 transition-colors cursor-default">
                  <BadgeCheck className="w-8 h-8 text-mosqueta-primary mb-4" />
                  <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-2">Hotelería & HORECA</h4>
                  <p className="text-xs text-gray-600 font-medium">Línea blanca industrial, mobiliario de habitaciones y áreas comunes.</p>
                </div>
                <div className="w-full md:w-1/3 p-6 hover:bg-gray-50 transition-colors cursor-default">
                  <Building2 className="w-8 h-8 text-mosqueta-primary mb-4" />
                  <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-2">Desarrollos</h4>
                  <p className="text-xs text-gray-600 font-medium">Paquetes de electrodomésticos para entrega llave en mano.</p>
                </div>
              </div>
            </div>

            {/* Clientes Corporativos */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
              <div className="bg-gray-100 border-b border-gray-300 px-4 py-3">
                <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest text-center">Nuestros Clientes Corporativos</h2>
              </div>
              <div className="p-6 md:p-8 bg-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
                  <Image src="/clientes/marti.svg" alt="Grupo Martí" width={140} height={56} className="w-auto h-10 md:h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300" />
                  <Image src="/clientes/ara.svg" alt="Desarrollos Residenciales ARA" width={140} height={56} className="w-auto h-10 md:h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300" />
                  <Image src="/clientes/nestle.svg" alt="Nestlé" width={140} height={56} className="w-auto h-10 md:h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300" />
                  <Image src="/clientes/televisa.svg" alt="Televisa" width={140} height={56} className="w-auto h-10 md:h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300" />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Derecho: Formulario de Cotización (25%) */}
          <div className="w-full lg:w-[25%] flex-shrink-0" id="contacto-empresas">
            <div className="bg-white border-2 border-gray-400 p-5 rounded-sm shadow-md sticky top-24">
              
              <div className="border-b border-gray-200 pb-4 mb-5">
                <h2 className="text-lg font-black text-gray-900 uppercase tracking-widest leading-none">Abrir Cuenta</h2>
                <p className="text-[10px] text-gray-500 font-bold uppercase mt-2 tracking-wide">Atención inmediata (L-V 9 a 18h)</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Razón Social o Nombre</label>
                  <input type="text" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium" placeholder="Empresa S.A. de C.V." />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Correo Corporativo</label>
                  <input type="email" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium" placeholder="compras@empresa.com" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Teléfono Directo</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium" placeholder="55 0000 0000" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Volumen Estimado (Unidades)</label>
                  <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm font-bold bg-gray-50 focus:outline-none focus:border-mosqueta-primary text-gray-900">
                    <option>Menos de 10</option>
                    <option>11 a 50</option>
                    <option>51 a 200</option>
                    <option>Más de 200</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Requerimientos</label>
                  <textarea rows={3} className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium resize-none" placeholder="SKUs o categorías de interés..."></textarea>
                </div>
                
                <button type="button" className="w-full bg-gray-900 text-white font-black py-4 px-4 rounded-none shadow-sm hover:bg-black transition-colors active:bg-gray-800 text-sm uppercase tracking-widest flex justify-center items-center mt-2 border-b-4 border-gray-700">
                  Enviar Solicitud
                </button>
                
                <div className="text-[9px] text-gray-400 font-bold text-center uppercase tracking-wider mt-3">
                  Tus datos están encriptados
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
