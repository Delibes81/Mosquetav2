export const metadata = {
  title: 'Política de Devoluciones | Mosqueta',
  description: 'Términos y condiciones para devoluciones y garantías.',
};

export default function DevolucionesPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      <div className="bg-gray-900 text-white border-b-4 border-gray-700">
        <div className="max-w-[1000px] mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-5xl font-black font-montserrat tracking-tight uppercase leading-none mb-2">
            Garantías y Devoluciones
          </h1>
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
            Términos Comerciales y Soporte Post-Venta
          </p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 mt-6">
        <div className="bg-white border border-gray-300 rounded-sm shadow-sm p-8 md:p-12">
          
          <div className="prose prose-sm max-w-none prose-headings:font-black prose-headings:font-montserrat prose-headings:uppercase prose-headings:tracking-widest prose-h2:text-gray-900 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 prose-p:text-gray-700 prose-p:font-medium prose-p:leading-relaxed">
            <h2>1. Condiciones Generales</h2>
            <p>
              Por la naturaleza industrial y de volumen de nuestros productos, no se aceptan devoluciones por "cambio de opinión" o errores de medición por parte del cliente. Toda devolución debe estar sustentada en un defecto de fabricación o daño logístico comprobable.
            </p>

            <h2>2. Daños en el Transporte (Logística)</h2>
            <p>
              Si el empaque de su producto llega visiblemente maltratado, debe anotarlo en la hoja de remisión del transportista ANTES de firmar. Cuenta con un plazo estricto de <strong>48 horas hábiles</strong> tras la recepción para reportar cualquier daño físico (golpes, abolladuras, piezas rotas) a <code>soporte@mosqueta.com.mx</code> anexando evidencia fotográfica y folio de pedido.
            </p>

            <h2>3. Garantías de Fabricación</h2>
            <p>
              Todos nuestros muebles corporativos (sillería y escritorios) cuentan con una garantía de <strong>1 año</strong> contra defectos estructurales. La línea blanca ampara garantías directas con el fabricante original según su póliza respectiva.
            </p>

            <h2>4. Proceso de Ticket de Soporte</h2>
            <p>
              Para iniciar un reclamo:
            </p>
            <ol>
              <li>Genere un ticket en nuestro portal de Soporte o envíe correo a Soporte Técnico.</li>
              <li>Nuestro equipo técnico emitirá un dictamen en un lapso no mayor a 72 horas hábiles.</li>
              <li>De ser procedente, se le emitirá una guía de retorno prepagada o se agendará recolección técnica.</li>
            </ol>
          </div>
          
        </div>
      </div>
    </div>
  );
}
