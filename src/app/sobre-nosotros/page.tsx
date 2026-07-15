import Image from 'next/image';
import { History, ShieldCheck, Truck, Store, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata = {
  title: 'Sobre Nosotros | Mosqueta',
  description: 'Conoce la historia de Mosqueta, una empresa 100% mexicana con más de 60 años de tradición equipando hogares y corporativos.',
};

export default function SobreNosotrosPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      
      {/* Header Banner */}
      <section className="relative bg-gray-900 text-white border-b-4 border-[#b0164e]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1542341065-288251e7a57a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Historia de Mosqueta"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 py-16">
          <span className="bg-mosqueta-secondary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-3 inline-block border border-gray-600 shadow-sm">Desde 1971</span>
          <h1 className="text-4xl md:text-6xl font-black font-montserrat tracking-tight uppercase leading-none mb-4">
            Legado e Historia
          </h1>
          <p className="max-w-2xl text-sm text-gray-300 font-medium leading-relaxed">
            Empresa 100% familiar, con raíces profundas en la Ciudad de México y una sólida trayectoria de 60 años equipando los corporativos más importantes del país. Hoy, abrimos nuestras puertas a tu hogar.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Main Content (75%) */}
          <div className="w-full lg:w-[75%] flex flex-col gap-6">
            
            {/* Historia - Layout Denso */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 border-b border-gray-200 pb-2 mb-4">
                  <History className="w-4 h-4 text-mosqueta-primary" />
                  <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Nuestros Orígenes</h2>
                </div>
                <p className="text-sm text-gray-700 font-medium mb-4 leading-relaxed">
                  Nuestra historia formal comenzó el <span className="font-bold text-gray-900">15 de enero de 1971</span>, pero nuestro legado se remonta a más de seis décadas atrás. Nuestra sede histórica y origen de operaciones se encuentra en el vibrante corazón de la capital: la <span className="font-bold text-gray-900">Calle Mosqueta, en la emblemática Colonia Guerrero</span>.
                </p>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  Desde entonces, el nombre Mosqueta se ha convertido en sinónimo de confiabilidad, solidez y un servicio cálido que entiende y valora al trabajador y las familias mexicanas.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-gray-100 p-2 border border-gray-300 relative min-h-[250px]">
                <Image 
                  src="https://images.unsplash.com/photo-1512813195386-6cf811ad3542?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Centro Histórico CDMX" 
                  fill 
                  className="object-cover mix-blend-multiply opacity-80"
                />
                <div className="absolute bottom-4 left-4 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                  Col. Guerrero, CDMX
                </div>
              </div>
            </div>

            {/* Evolución B2B -> B2C */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
              <div className="bg-gray-100 border-b border-gray-300 px-6 py-4 flex items-center gap-2">
                <Store className="w-4 h-4 text-mosqueta-primary" />
                <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Evolución B2B a B2C</h2>
              </div>
              
              <div className="p-6 flex flex-col lg:flex-row-reverse gap-6">
                <div className="w-full lg:w-1/2">
                  <p className="text-sm text-gray-700 font-medium mb-4 leading-relaxed">
                    Durante décadas, nuestro fuerte ha sido el equipamiento por volumen. Contamos con una prestigiosa cartera de clientes que incluye a titanes de la industria como <span className="font-bold text-gray-900">Grupo Martí, Desarrollos Residenciales ARA, Nestlé, Televisa</span> y múltiples proyectos del sector gobierno.
                  </p>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed mb-4">
                    Hoy, Mosqueta da el salto al mundo digital creando nuestra "sucursal en línea". Nuestro objetivo es claro: llevar la misma calidad, durabilidad y seriedad corporativa que exigen las grandes empresas, directamente a los hogares de la clase media mexicana. Al eliminar intermediarios, te garantizamos un precio justo por un valor inigualable.
                  </p>
                </div>
                
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2">
                  <div className="relative aspect-square bg-gray-100 border border-gray-300">
                    <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Corporativo" fill className="object-cover mix-blend-multiply opacity-90" />
                  </div>
                  <div className="relative aspect-square bg-gray-100 border border-gray-300">
                    <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Hogar Mexicano" fill className="object-cover mix-blend-multiply opacity-90" />
                  </div>
                  <div className="relative aspect-square bg-gray-100 border border-gray-300">
                    <Image src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Electrodomésticos" fill className="object-cover mix-blend-multiply opacity-90" />
                  </div>
                  <div className="relative aspect-square bg-gray-100 border border-gray-300">
                    <Image src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Mobiliario" fill className="object-cover mix-blend-multiply opacity-90" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pilares */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white border border-gray-300 p-6 flex flex-col shadow-sm rounded-sm">
                <Award className="w-8 h-8 text-mosqueta-primary mb-3" />
                <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-2 pb-2 border-b border-gray-200">Alto Valor Funcional</h3>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  Comercializamos productos diseñados para resistir el ritmo de vida actual, tanto en grandes oficinas como en los hogares más dinámicos.
                </p>
              </div>

              <div className="bg-white border border-gray-300 p-6 flex flex-col shadow-sm rounded-sm">
                <ShieldCheck className="w-8 h-8 text-mosqueta-primary mb-3" />
                <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-2 pb-2 border-b border-gray-200">Garantía Directa</h3>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  Al ser un proveedor institucional con décadas de respaldo, te ofrecemos trato directo, respuesta rápida y la seriedad que te mereces.
                </p>
              </div>

              <div className="bg-white border border-gray-300 p-6 flex flex-col shadow-sm rounded-sm">
                <Truck className="w-8 h-8 text-mosqueta-primary mb-3" />
                <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-2 pb-2 border-b border-gray-200">Logística Propia</h3>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  No dependemos de terceros. Manejamos nuestros propios envíos en la CDMX y Área Metropolitana con personal capacitado.
                </p>
              </div>

            </div>
          </div>

          {/* Sidebar Derecha (25%) */}
          <div className="w-full lg:w-[25%] flex-shrink-0">
            <div className="bg-gray-900 text-white border-2 border-gray-700 p-6 rounded-sm shadow-md sticky top-24">
              
              <h2 className="text-xl font-black font-montserrat uppercase leading-tight mb-4 tracking-tight">¿Listo para renovar tus espacios?</h2>
              <p className="text-xs text-gray-400 font-medium mb-6">
                Descubre nuestro catálogo en línea o contáctanos para proyectos institucionales. Estamos listos para atenderte con la misma solidez de siempre.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-xs text-gray-300 font-bold">
                  <CheckCircle className="w-4 h-4 text-mosqueta-primary mr-2" />
                  +5,000 SKUs Disponibles
                </li>
                <li className="flex items-center text-xs text-gray-300 font-bold">
                  <CheckCircle className="w-4 h-4 text-mosqueta-primary mr-2" />
                  Stock Físico Garantizado
                </li>
                <li className="flex items-center text-xs text-gray-300 font-bold">
                  <CheckCircle className="w-4 h-4 text-mosqueta-primary mr-2" />
                  Asesoría B2B/B2C
                </li>
              </ul>

              <div className="flex flex-col gap-3">
                <Link href="/catalogo" className="w-full bg-mosqueta-primary text-white font-black py-3 px-4 text-center rounded-none shadow-sm hover:bg-[#b0164e] transition-colors text-xs uppercase tracking-widest border-b-4 border-[#8f1240]">
                  Explorar Catálogo
                </Link>
                <Link href="/corporativo" className="w-full bg-white text-gray-900 font-black py-3 px-4 text-center rounded-none shadow-sm hover:bg-gray-200 transition-colors text-xs uppercase tracking-widest border border-gray-300">
                  Portal Corporativo
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
