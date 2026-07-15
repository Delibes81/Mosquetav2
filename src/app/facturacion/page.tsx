import { FileText, Download, Calculator } from 'lucide-react';

export const metadata = {
  title: 'Facturación Electrónica | Mosqueta',
  description: 'Genera tu CFDI versión 4.0 al instante.',
};

export default function FacturacionPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      
      {/* Header Banner - Denso */}
      <div className="bg-gray-900 text-white border-b-4 border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-5xl font-black font-montserrat tracking-tight uppercase leading-none mb-2">
            Auto-Facturación
          </h1>
          <p className="text-sm text-gray-400 font-medium">
            Sistema de emisión de comprobantes fiscales (CFDI 4.0).
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Facturador (65%) */}
          <div className="w-full lg:w-[65%]">
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm h-full flex flex-col">
              <div className="bg-gray-100 border-b border-gray-300 px-6 py-4">
                <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Generador de CFDI</h2>
              </div>
              
              <div className="p-6">
                <form className="space-y-5 mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">RFC</label>
                      <input type="text" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium uppercase font-mono tracking-widest" placeholder="XAXX010101000" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Folio del Ticket / Compra</label>
                      <input type="text" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium uppercase font-mono tracking-widest" placeholder="M-12345" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Régimen Fiscal</label>
                      <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm font-bold bg-gray-50 focus:outline-none focus:border-mosqueta-primary text-gray-900">
                        <option>601 - General de Ley Personas Morales</option>
                        <option>612 - Personas Físicas con Actividades Empresariales</option>
                        <option>626 - Régimen Simplificado de Confianza</option>
                        <option>616 - Sin obligaciones fiscales</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Uso de CFDI</label>
                      <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm font-bold bg-gray-50 focus:outline-none focus:border-mosqueta-primary text-gray-900">
                        <option>G03 - Gastos en general</option>
                        <option>G01 - Adquisición de mercancias</option>
                        <option>I04 - Equipo de computo y accesorios</option>
                        <option>P01 - Por definir</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Código Postal Domicilio Fiscal</label>
                    <input type="text" className="w-full sm:w-1/2 border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium" placeholder="00000" />
                  </div>

                  <button type="button" className="w-full bg-mosqueta-primary text-white font-black py-3 px-8 rounded-none shadow-sm hover:bg-[#b0164e] transition-colors text-sm uppercase tracking-widest border-b-4 border-[#8f1240] flex items-center justify-center">
                    <FileText className="w-4 h-4 mr-2" /> Generar Factura
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Info Fiscal (35%) */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6">
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm flex-grow">
              <div className="bg-gray-900 px-6 py-4">
                <h2 className="text-sm font-black text-white uppercase tracking-widest">Avisos Fiscales</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="p-6 flex items-start gap-4">
                  <div className="bg-gray-100 p-2 border border-gray-300 flex-shrink-0">
                    <Calculator className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-1">Límite de Emisión</h3>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">
                      Tiene hasta el último día del mes en curso de su compra para generar su factura.
                    </p>
                  </div>
                </div>

                <div className="p-6 flex items-start gap-4">
                  <div className="bg-gray-100 p-2 border border-gray-300 flex-shrink-0">
                    <Download className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-1">Descarga Inmediata</h3>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">
                      Archivos XML y PDF se descargarán automáticamente y se enviarán al correo asociado a la compra.
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
