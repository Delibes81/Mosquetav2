export const metadata = {
  title: 'Aviso de Privacidad | Mosqueta',
  description: 'Política de protección de datos personales.',
};

export default function PrivacidadPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      <div className="bg-gray-900 text-white border-b-4 border-gray-700">
        <div className="max-w-[1000px] mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-5xl font-black font-montserrat tracking-tight uppercase leading-none mb-2">
            Aviso de Privacidad
          </h1>
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
            Cumplimiento LFPDPPP
          </p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 mt-6">
        <div className="bg-white border border-gray-300 rounded-sm shadow-sm p-8 md:p-12">
          
          <div className="prose prose-sm max-w-none prose-headings:font-black prose-headings:font-montserrat prose-headings:uppercase prose-headings:tracking-widest prose-h2:text-gray-900 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-p:text-gray-700 prose-p:font-medium prose-p:leading-relaxed">
            <h2>1. Identidad y Domicilio</h2>
            <p>
              Mosqueta S.A. de C.V. ("La Empresa"), con domicilio en Calle Mosqueta, Col. Guerrero, Cuauhtémoc, CDMX, es el responsable del tratamiento y protección de sus datos personales.
            </p>

            <h2>2. Finalidades del Tratamiento</h2>
            <p>
              Sus datos personales, corporativos y fiscales serán utilizados estrictamente para las siguientes finalidades primarias:
            </p>
            <ul>
              <li>Procesamiento, seguimiento y entrega de pedidos (B2B y B2C).</li>
              <li>Emisión de Comprobantes Fiscales Digitales por Internet (CFDI).</li>
              <li>Otorgamiento de líneas de crédito corporativo (cuando aplique).</li>
              <li>Atención a garantías y soporte post-venta.</li>
            </ul>

            <h2>3. Datos Personales Recabados</h2>
            <p>
              Recabamos nombre, RFC, domicilio de facturación, domicilio de entrega, teléfono directo y correo electrónico corporativo. Todas las transacciones financieras son procesadas mediante pasarelas de pago externas cifradas (PCI DSS); Mosqueta no almacena números de tarjeta de crédito.
            </p>

            <h2>4. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a conocer qué datos personales tenemos, para qué los utilizamos y las condiciones de su uso. Puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO) enviando un requerimiento formal al correo <code>privacidad@mosqueta.com.mx</code>.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
