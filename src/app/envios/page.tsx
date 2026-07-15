export const metadata = {
  title: 'Política de Envíos | Mosqueta',
  description: 'Términos y condiciones de nuestras entregas.',
};

export default function EnviosPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      <div className="bg-gray-900 text-white border-b-4 border-gray-700">
        <div className="max-w-[1000px] mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-5xl font-black font-montserrat tracking-tight uppercase leading-none mb-2">
            Políticas de Envío
          </h1>
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
            Última actualización: Agosto 2024
          </p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 mt-6">
        <div className="bg-white border border-gray-300 rounded-sm shadow-sm p-8 md:p-12">
          
          <div className="prose prose-sm max-w-none prose-headings:font-black prose-headings:font-montserrat prose-headings:uppercase prose-headings:tracking-widest prose-h2:text-gray-900 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-p:text-gray-700 prose-p:font-medium prose-p:leading-relaxed">
            <h2>1. Cobertura Logística</h2>
            <p>
              En Mosqueta operamos una red logística híbrida para garantizar la seguridad de su mercancía. 
              En la <strong>Ciudad de México y Área Metropolitana</strong>, las entregas se realizan con nuestra flota propia. 
              Para el resto de la República Mexicana, colaboramos con transportistas especializados en carga pesada y voluminosa.
            </p>

            <h2>2. Tiempos de Entrega</h2>
            <p>
              Los tiempos estimados son:
            </p>
            <ul>
              <li><strong>CDMX y Área Metropolitana:</strong> 2 a 5 días hábiles.</li>
              <li><strong>Interior de la República:</strong> 5 a 10 días hábiles.</li>
              <li><strong>Zonas Extendidas:</strong> Hasta 15 días hábiles (sujeto a disponibilidad de ruta).</li>
            </ul>

            <h2>3. Maniobras y Entrega a Pie de Camión</h2>
            <p>
              Por políticas de seguridad, las entregas de mobiliario pesado y línea blanca se realizan exclusivamente a <strong>pie de camión o puerta principal a nivel de calle</strong>. Nuestro personal logístico no está autorizado para volar muebles, subir más de dos pisos por escaleras estrechas, ni retirar puertas o ventanas del domicilio.
            </p>

            <h2>4. Recepción de Mercancía</h2>
            <p>
              Es indispensable que una persona mayor de edad reciba el pedido y presente una identificación oficial (INE). Al firmar de recibido, el cliente acepta que el empaque exterior no presenta violaciones o daños graves. Recomendamos revisar físicamente el producto en las primeras 24 horas.
            </p>

            <h2>5. Tarifas B2B vs B2C</h2>
            <p>
              Los pedidos de mayoreo (B2B) están sujetos a tarifas logísticas especiales calculadas por volumen (CBM) y peso. Consulte a su ejecutivo de cuenta para tabuladores de carga consolidada o camión completo.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
