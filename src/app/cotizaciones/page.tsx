import { ClipboardList, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Cotizaciones | Mosqueta',
  description: 'Solicita una cotización comercial.',
};

export default function CotizacionesPage() {
  return (
    <div className="bg-gray-100 min-h-[80vh] font-inter flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white border border-gray-300 shadow-sm flex flex-col md:flex-row">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-[#b0164e]">
          <ClipboardList className="w-12 h-12 text-mosqueta-primary mb-6" />
          <h1 className="text-3xl font-black font-montserrat uppercase tracking-tight mb-4 leading-tight">
            Solicitud de Cotización
          </h1>
          <p className="text-sm text-gray-300 font-medium leading-relaxed mb-6">
            Cotizaciones formales para compras institucionales, licitaciones y proyectos B2B.
          </p>
          <div className="bg-white/10 p-4 border border-white/20">
            <p className="text-[10px] font-bold uppercase tracking-widest text-mosqueta-primary">Importante</p>
            <p className="text-xs text-gray-200 mt-1">El monto mínimo para cotización formal B2B es de $50,000 MXN o más de 10 unidades. Para compras menores, por favor utilice nuestro carrito de compras B2C.</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6">Canalización Automática</h2>
          <p className="text-sm text-gray-600 mb-8 font-medium">
            Las solicitudes de cotización se procesan a través de nuestro Portal Corporativo. Allí podrá cargar su listado de requerimientos o anexar catálogos técnicos.
          </p>
          <Link href="/corporativo#contacto-b2b" className="w-full bg-mosqueta-primary text-white font-black py-4 px-4 rounded-none shadow-sm hover:bg-[#b0164e] transition-colors active:bg-[#8f1240] text-sm uppercase tracking-widest border-b-4 border-[#8f1240] flex items-center justify-center">
            Ir al Portal Corporativo <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </div>
  );
}
