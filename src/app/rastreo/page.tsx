import { Search, Package, MapPin, Truck } from 'lucide-react';

export const metadata = {
  title: 'Rastreo de Pedidos | Mosqueta',
  description: 'Rastrea el estatus de tu pedido en tiempo real.',
};

export default function RastreoPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      
      {/* Header Banner - Denso */}
      <div className="bg-gray-900 text-white border-b-4 border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-5xl font-black font-montserrat tracking-tight uppercase leading-none mb-2">
            Rastreo de Pedido
          </h1>
          <p className="text-sm text-gray-400 font-medium">
            Ingresa tu número de guía o folio de compra para conocer el estatus de tu entrega.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Rastreador (65%) */}
          <div className="w-full lg:w-[65%]">
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm h-full flex flex-col">
              <div className="bg-gray-100 border-b border-gray-300 px-6 py-4">
                <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Localizador en Tiempo Real</h2>
              </div>
              
              <div className="p-6">
                <form className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex-grow">
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Número de Guía / Folio</label>
                    <input type="text" className="w-full border border-gray-300 rounded-sm py-3 px-4 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium font-mono uppercase tracking-widest" placeholder="EJ: MOSQ-12345678" />
                  </div>
                  <button type="button" className="sm:mt-[22px] bg-mosqueta-primary text-white font-black py-3 px-8 rounded-none shadow-sm hover:bg-[#b0164e] transition-colors text-sm uppercase tracking-widest border-b-4 border-[#8f1240] flex items-center justify-center">
                    <Search className="w-4 h-4 mr-2" /> Rastrear
                  </button>
                </form>

                <div className="border border-gray-200 bg-gray-50 p-6 flex flex-col items-center justify-center text-center min-h-[300px]">
                  <Package className="w-16 h-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-widest mb-2">Esperando Consulta</h3>
                  <p className="text-xs text-gray-500 font-medium max-w-sm">
                    Ingresa el folio de 12 dígitos que recibiste en tu correo de confirmación para ver la ruta de tu paquete.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Logística (35%) */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6">
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm flex-grow">
              <div className="bg-gray-900 px-6 py-4">
                <h2 className="text-sm font-black text-white uppercase tracking-widest">Información Logística</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="p-6 flex items-start gap-4">
                  <div className="bg-gray-100 p-2 border border-gray-300 flex-shrink-0">
                    <Truck className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-1">Flota Propia CDMX</h3>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">
                      Envíos en la zona metropolitana son realizados por nuestras propias unidades, garantizando cuidado y puntualidad.
                    </p>
                  </div>
                </div>

                <div className="p-6 flex items-start gap-4">
                  <div className="bg-gray-100 p-2 border border-gray-300 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-1">Cobertura Nacional</h3>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">
                      Para el interior de la república, utilizamos transportistas certificados. Tu guía mostrará la paquetería asignada.
                    </p>
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
