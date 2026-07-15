import { HelpCircle, FileText, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Soporte Técnico | Mosqueta',
  description: 'Centro de ayuda y soporte técnico.',
};

export default function SoportePage() {
  return (
    <div className="bg-gray-100 min-h-[80vh] font-inter flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white border border-gray-300 shadow-sm flex flex-col md:flex-row">
        
        {/* Left Side - Info */}
        <div className="w-full md:w-1/2 bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-gray-700">
          <HelpCircle className="w-12 h-12 text-mosqueta-primary mb-6" />
          <h1 className="text-3xl font-black font-montserrat uppercase tracking-tight mb-4 leading-tight">
            Centro de Soporte
          </h1>
          <p className="text-sm text-gray-300 font-medium leading-relaxed mb-6">
            Estamos listos para ayudarte. Selecciona una opción para canalizar tu solicitud al departamento adecuado.
          </p>
          
          <div className="space-y-3">
            <Link href="/rastreo" className="block p-4 border border-gray-700 hover:border-mosqueta-primary hover:bg-gray-800 transition-colors">
              <p className="text-xs font-bold uppercase tracking-widest text-mosqueta-primary mb-1">Dudas de Entrega</p>
              <p className="text-xs text-gray-400 font-medium">Ir al rastreador de envíos</p>
            </Link>
            <Link href="/devoluciones" className="block p-4 border border-gray-700 hover:border-mosqueta-primary hover:bg-gray-800 transition-colors">
              <p className="text-xs font-bold uppercase tracking-widest text-mosqueta-primary mb-1">Garantías</p>
              <p className="text-xs text-gray-400 font-medium">Consultar política de devoluciones</p>
            </Link>
          </div>
        </div>

        {/* Right Side - Ticket Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6">Levantar Ticket</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Folio de Compra</label>
              <input type="text" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium uppercase" placeholder="MOSQ-0000" />
            </div>
            
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Motivo</label>
              <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm font-bold bg-gray-50 focus:outline-none focus:border-mosqueta-primary text-gray-900">
                <option>Falla de fábrica (Línea Blanca)</option>
                <option>Daño logístico (Mobiliario)</option>
                <option>Faltante en pedido</option>
                <option>Asesoría de instalación</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Descripción del Problema</label>
              <textarea rows={4} className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium resize-none" placeholder="Detalle el incidente..."></textarea>
            </div>

            <button type="button" className="w-full bg-mosqueta-primary text-white font-black py-3 px-4 rounded-none shadow-sm hover:bg-[#b0164e] transition-colors active:bg-[#8f1240] text-sm uppercase tracking-widest mt-2 border-b-4 border-[#8f1240]">
              Enviar Ticket
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
