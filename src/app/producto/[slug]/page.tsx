import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, ShieldCheck, Truck, ChevronRight } from 'lucide-react';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const product = {
    id: '1',
    sku: 'MQ-10045-A',
    name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    price: 18499.00,
    listPrice: 24999.00,
    images: [
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    msi: true,
    description: 'Equipa tu espacio con la mejor tecnología y diseño. Este producto cuenta con materiales de alta durabilidad y eficiencia energética, ideal para el uso diario en hogares y corporativos.',
    specs: [
      { name: 'Dimensiones', value: '180cm x 90cm x 85cm' },
      { name: 'Peso Bruto', value: '95 kg' },
      { name: 'Voltaje', value: '110V / 60Hz' },
      { name: 'Material', value: 'Acero Inoxidable 304' },
      { name: 'Garantía', value: '5 años directo con Mosqueta' }
    ]
  };

  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(product.price);
  
  const formattedListPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(product.listPrice);

  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      {/* Breadcrumbs Técnico */}
      <div className="bg-white border-b border-gray-300 py-2">
        <nav aria-label="Breadcrumb" className="max-w-[1400px] mx-auto px-4">
          <ol role="list" className="flex items-center space-x-1 text-[11px] text-gray-500 font-bold uppercase tracking-wider">
            <li><Link href="/" className="hover:text-mosqueta-primary transition-colors">Inicio</Link></li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li><Link href="/catalogo" className="hover:text-mosqueta-primary transition-colors">Catálogo</Link></li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li className="text-gray-900" aria-current="page">{product.name}</li>
          </ol>
        </nav>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Columna Izquierda: Galería e Info Técnica (75%) */}
          <div className="w-full lg:w-[75%] flex flex-col gap-6">
            
            {/* Header del Producto (Título y Galería) */}
            <div className="bg-white border border-gray-300 p-6 flex flex-col md:flex-row gap-8 rounded-sm shadow-sm">
              {/* Galería Rígida */}
              <div className="w-full md:w-1/2 flex flex-col-reverse gap-2">
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, i) => (
                    <button key={i} className="relative aspect-square bg-gray-50 border border-gray-300 hover:border-mosqueta-primary focus:border-mosqueta-primary outline-none transition-colors">
                      <Image src={img} alt="" fill className="object-contain p-2 mix-blend-multiply" />
                    </button>
                  ))}
                </div>
                <div className="w-full aspect-square relative bg-white border border-gray-300">
                  <Image src={product.images[0]} alt={product.name} fill className="object-contain p-4 mix-blend-multiply" priority />
                </div>
              </div>

              {/* Info Central */}
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="mb-2">
                  <span className="text-mosqueta-primary font-bold text-xs uppercase tracking-widest bg-mosqueta-primary/10 px-2 py-1 rounded-sm border border-mosqueta-primary/20">Línea Hogar</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 font-montserrat uppercase leading-tight mt-2 mb-1">
                  {product.name}
                </h1>
                <p className="text-xs text-gray-500 font-mono mb-4 border-b border-gray-200 pb-4">SKU: {product.sku}</p>
                
                <p className="text-sm text-gray-700 font-medium leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="mt-auto grid grid-cols-2 gap-4">
                  <div className="flex items-center text-xs text-gray-700 font-bold border border-gray-300 p-2 bg-gray-50 rounded-sm">
                    <ShieldCheck className="flex-shrink-0 mr-2 h-5 w-5 text-green-600" />
                    Garantía 5 años
                  </div>
                  <div className="flex items-center text-xs text-gray-700 font-bold border border-gray-300 p-2 bg-gray-50 rounded-sm">
                    <Truck className="flex-shrink-0 mr-2 h-5 w-5 text-mosqueta-secondary" />
                    Envío 24-48hrs
                  </div>
                </div>
              </div>
            </div>

            {/* Especificaciones Técnicas (Tabla Densa) */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
              <div className="bg-gray-100 border-b border-gray-300 px-4 py-3">
                <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Especificaciones Técnicas</h2>
              </div>
              <div className="p-0">
                <table className="w-full text-sm text-left">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr key={spec.name} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 last:border-none`}>
                        <th className="py-2.5 px-4 font-bold text-gray-700 w-1/3 border-r border-gray-200">{spec.name}</th>
                        <td className="py-2.5 px-4 text-gray-600 font-medium">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Buy Box Rígido (25%) */}
          <div className="w-full lg:w-[25%] flex-shrink-0">
            <div className="bg-white border-2 border-gray-400 p-5 rounded-sm shadow-md sticky top-24">
              
              <div className="mb-4">
                <span className="text-xs text-gray-500 line-through font-bold">Precio de lista: {formattedListPrice}</span>
                <div className="text-4xl font-black text-mosqueta-secondary leading-none mt-1 mb-2 tracking-tighter">
                  {formattedPrice}
                </div>
                <div className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 uppercase border border-green-300 w-fit">
                  Ahorras: $6,500.00
                </div>
              </div>

              <div className="border-t border-b border-gray-200 py-4 mb-4">
                <div className="text-sm font-bold text-gray-900 mb-1">Disponible para envío</div>
                <div className="text-xs text-gray-600">Llega a CDMX entre el <span className="font-bold">Martes 20</span> y <span className="font-bold">Jueves 22</span></div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Cantidad</label>
                <select className="w-full border-2 border-gray-300 rounded-sm py-2 px-3 text-sm font-bold bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900">
                  <option value="1">1 Unidad</option>
                  <option value="2">2 Unidades</option>
                  <option value="3">3 Unidades</option>
                  <option value="4">4 Unidades</option>
                  <option value="5">5 Unidades</option>
                  <option value="10">10 Unidades (Mayoreo)</option>
                </select>
                <div className="text-[10px] text-gray-500 font-bold mt-1 text-right">+50 en Stock</div>
              </div>

              <button className="w-full bg-mosqueta-primary text-white font-black py-4 px-4 rounded-none shadow-sm hover:bg-[#b0164e] transition-colors active:bg-[#8f1240] text-sm uppercase tracking-widest flex justify-center items-center gap-2 mb-3 border-b-4 border-[#8f1240]">
                <ShoppingCart className="w-5 h-5" />
                Agregar al Carrito
              </button>
              
              <button className="w-full bg-gray-900 text-white font-black py-3 px-4 rounded-none hover:bg-black transition-colors active:bg-gray-800 text-sm uppercase tracking-widest flex justify-center items-center">
                Comprar Ahora
              </button>
              
              <div className="mt-4 text-[10px] text-gray-400 font-medium text-center uppercase tracking-wide">
                Transacción Segura (SSL)
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
