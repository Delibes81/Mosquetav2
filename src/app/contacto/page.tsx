import { Mail, MapPin, Phone, Clock, FileText } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata = {
  title: 'Contacto y Soporte | Mosqueta',
  description: 'Comunícate con Mosqueta. Estamos listos para atenderte y ayudarte a equipar tu hogar u oficina.',
};

export default function ContactoPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      
      {/* Header Banner - Denso */}
      <div className="bg-gray-900 text-white border-b-4 border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-5xl font-black font-montserrat tracking-tight uppercase leading-none mb-2">
            Centro de Soporte y Contacto
          </h1>
          <p className="text-sm text-gray-400 font-medium">
            Líneas de atención técnica, ventas corporativas y seguimiento de pedidos B2C.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Formulario (65%) */}
          <div className="w-full lg:w-[65%]">
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm h-full flex flex-col">
              <div className="bg-gray-100 border-b border-gray-300 px-6 py-4">
                <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Generar Ticket de Atención</h2>
              </div>
              
              <form className="p-6 space-y-5 flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Nombre de Contacto</label>
                    <input type="text" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium" placeholder="Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Correo Electrónico</label>
                    <input type="email" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium" placeholder="juan@ejemplo.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Área de Atención</label>
                  <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm font-bold bg-gray-50 focus:outline-none focus:border-mosqueta-primary text-gray-900">
                    <option>Seguimiento de Pedido (B2C)</option>
                    <option>Soporte Técnico / Garantías</option>
                    <option>Facturación</option>
                    <option>Cotizaciones Corporativas</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="flex-grow">
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Mensaje / Detalles del Requerimiento</label>
                  <textarea rows={6} className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium resize-none" placeholder="Incluye números de orden o SKUs si aplica..."></textarea>
                </div>

                <button type="button" className="w-full sm:w-auto bg-mosqueta-primary text-white font-black py-3 px-8 rounded-none hover:bg-[#b0164e] transition-colors shadow-sm text-sm uppercase tracking-widest border-b-4 border-[#8f1240]">
                  Abrir Ticket
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info (35%) */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6">
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm flex-grow">
              <div className="bg-gray-900 px-6 py-4">
                <h2 className="text-sm font-black text-white uppercase tracking-widest">Directorio Operativo</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="p-6 flex items-start gap-4">
                  <div className="bg-gray-100 p-2 border border-gray-300">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-1">Sede Central y Almacén</h3>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      Calle Mosqueta, Col. Guerrero<br />
                      Cuauhtémoc, CDMX, 06300
                    </p>
                  </div>
                </div>

                <div className="p-6 flex items-start gap-4">
                  <div className="bg-gray-100 p-2 border border-gray-300">
                    <Phone className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-1">Línea Directa Nacional</h3>
                    <p className="text-sm font-bold text-mosqueta-primary hover:underline cursor-pointer">
                      (55) 1234 5678
                    </p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Ext. 1 Ventas, Ext. 2 Soporte</p>
                  </div>
                </div>

                <div className="p-6 flex items-start gap-4">
                  <div className="bg-gray-100 p-2 border border-gray-300">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-1">Correos Oficiales</h3>
                    <p className="text-sm font-medium text-gray-600">soporte@mosqueta.com.mx</p>
                    <p className="text-sm font-medium text-gray-600">ventas@mosqueta.com.mx</p>
                  </div>
                </div>

                <div className="p-6 flex items-start gap-4">
                  <div className="bg-gray-100 p-2 border border-gray-300">
                    <Clock className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-1">Horarios de Operación</h3>
                    <p className="text-sm font-medium text-gray-600">Lunes a Viernes: 09:00 - 18:00hrs</p>
                    <p className="text-sm font-medium text-gray-600">Sábados: 09:00 - 14:00hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mapa Rígido */}
        <div className="mt-6 w-full border border-gray-300 rounded-sm shadow-sm p-2 bg-white">
          <div className="relative h-64 w-full bg-gray-200">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Mosqueta%20132,%20Guerrero,%20Cuauht%C3%A9moc,%20Ciudad%20de%20M%C3%A9xico,%20CDMX+(Mosqueta)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Mapa de ubicación Mosqueta 132"
              className="absolute inset-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
