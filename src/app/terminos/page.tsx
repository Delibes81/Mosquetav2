export const metadata = {
  title: 'Términos y Condiciones | Mosqueta',
  description: 'Términos de uso del portal y comercio electrónico.',
};

export default function TerminosPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      <div className="bg-gray-900 text-white border-b-4 border-gray-700">
        <div className="max-w-[1000px] mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-5xl font-black font-montserrat tracking-tight uppercase leading-none mb-2">
            Términos y Condiciones
          </h1>
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
            Acuerdo Comercial
          </p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 mt-6">
        <div className="bg-white border border-gray-300 rounded-sm shadow-sm p-8 md:p-12">
          
          <div className="prose prose-sm max-w-none prose-headings:font-black prose-headings:font-montserrat prose-headings:uppercase prose-headings:tracking-widest prose-h2:text-gray-900 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-p:text-gray-700 prose-p:font-medium prose-p:leading-relaxed">
            <h2>1. Aceptación del Acuerdo</h2>
            <p>
              Al acceder y utilizar el portal de e-commerce de Mosqueta, usted acepta estar sujeto a los siguientes términos y condiciones corporativos, aplicables tanto para transacciones B2C como compras consolidadas B2B.
            </p>

            <h2>2. Precios e Inventario</h2>
            <p>
              Todos los precios están expresados en Moneda Nacional (MXN). Los precios publicados están sujetos a cambio sin previo aviso, especialmente en importaciones tasadas en dólares. El inventario físico se sincroniza cada 24 horas; en caso de ruptura de stock en compras confirmadas, se ofrecerá un producto similar o reembolso total.
            </p>

            <h2>3. Facturación</h2>
            <p>
              La factura debe solicitarse durante el mes en curso de la compra. En transacciones B2B con línea de crédito, aplican las penalizaciones moratorias estipuladas en su contrato comercial.
            </p>

            <h2>4. Propiedad Intelectual</h2>
            <p>
              Las marcas, logotipos, imágenes de producto, fichas técnicas y diseño de interfaz son propiedad exclusiva de Mosqueta S.A. de C.V. o sus fabricantes asociados. Queda estrictamente prohibida la extracción automatizada de datos (scraping) o el uso no autorizado de nuestros activos digitales.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
