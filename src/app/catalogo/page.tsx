import ProductCard, { Product } from '@/components/ProductCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer } from '@/components/animations/Stagger';

export const metadata = {
  title: 'Catálogo | Mosqueta',
  description: 'Explora nuestro catálogo completo de productos para el hogar y la oficina.',
};

const catalogProducts: Product[] = [
  {
    id: '1',
    slug: 'refrigerador-inverter-family',
    name: 'Refrigerador Inverter Family Size 22p3',
    price: 18499.00,
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Hogar',
    msi: true,
  },
  {
    id: '2',
    slug: 'estufa-gas-profesional',
    name: 'Estufa a Gas Profesional 6 Quemadores',
    price: 14500.00,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Hogar',
    msi: true,
  },
  {
    id: '3',
    slug: 'silla-ergonomica-executive',
    name: 'Silla Ergonómica Executive Mesh',
    price: 4599.00,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Corporativo',
    msi: true,
  },
  {
    id: '4',
    slug: 'escritorio-directivo-l',
    name: 'Escritorio Directivo en L Minimal',
    price: 8250.00,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Corporativo',
    msi: false,
  },
  {
    id: '5',
    slug: 'sala-modular-confort',
    name: 'Sala Modular Confort Plus',
    price: 24999.00,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Hogar',
    msi: true,
  },
  {
    id: '6',
    slug: 'archivero-metalico-4-gavetas',
    name: 'Archivero Metálico 4 Gavetas',
    price: 3200.00,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Corporativo',
    msi: false,
  },
  {
    id: '7',
    slug: 'lavadora-carga-frontal',
    name: 'Lavadora Carga Frontal 22kg',
    price: 15999.00,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Hogar',
    msi: true,
  },
  {
    id: '8',
    slug: 'mesa-juntas-cristal',
    name: 'Mesa de Juntas de Cristal Templado',
    price: 12500.00,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Corporativo',
    msi: true,
  },
];



export default function CatalogoPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-inter pb-12">
      {/* Header Banner - Más denso */}
      <div className="bg-gray-900 text-white py-6 border-b border-gray-700">
        <FadeIn className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black font-montserrat tracking-tight uppercase">Catálogo Principal</h1>
            <p className="text-sm text-gray-400 font-medium">Equipamiento directo de fábrica. Más de 5,000 SKUs disponibles.</p>
          </div>
          <div className="hidden sm:block text-right">
            <span className="bg-mosqueta-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Atención Especial B2B</span>
          </div>
        </FadeIn>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 mt-6 flex flex-col md:flex-row gap-6">
        
        {/* Sidebar de Filtros (20%) */}
        <aside className="w-full md:w-[20%] flex-shrink-0 bg-white border border-gray-300 p-4 rounded-sm h-fit sticky top-24 shadow-sm">
          <h3 className="font-black text-gray-900 uppercase tracking-widest text-sm mb-4 pb-2 border-b border-gray-200">
            Filtrar Resultados
          </h3>
          
          <div className="mb-6">
            <h4 className="font-bold text-xs text-gray-700 mb-2 uppercase">Disponibilidad</h4>
            <label className="flex items-center gap-2 mb-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-mosqueta-primary border-gray-300 rounded-sm focus:ring-mosqueta-primary" />
              <span className="text-sm text-gray-700 font-medium">Envío Inmediato</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-mosqueta-primary border-gray-300 rounded-sm focus:ring-mosqueta-primary" />
              <span className="text-sm text-gray-700 font-medium">Recoger en Tienda</span>
            </label>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-xs text-gray-700 mb-2 uppercase">Categorías</h4>
            <ul className="space-y-1.5">
              <li>
                <label className="flex items-center text-gray-700 hover:text-mosqueta-primary cursor-pointer text-sm font-medium">
                  <input type="checkbox" className="w-4 h-4 rounded-sm border-gray-300 text-mosqueta-primary focus:ring-mosqueta-primary mr-2" defaultChecked />
                  Todas (5,204)
                </label>
              </li>
              <li>
                <label className="flex items-center text-gray-700 hover:text-mosqueta-primary cursor-pointer text-sm font-medium">
                  <input type="checkbox" className="w-4 h-4 rounded-sm border-gray-300 text-mosqueta-primary focus:ring-mosqueta-primary mr-2" />
                  Hogar (2,100)
                </label>
              </li>
              <li>
                <label className="flex items-center text-gray-700 hover:text-mosqueta-primary cursor-pointer text-sm font-medium">
                  <input type="checkbox" className="w-4 h-4 rounded-sm border-gray-300 text-mosqueta-primary focus:ring-mosqueta-primary mr-2" />
                  Corporativo (3,104)
                </label>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-xs text-gray-700 mb-2 uppercase">Precio</h4>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Mín" className="w-full border border-gray-300 p-1.5 text-xs rounded-sm focus:outline-none focus:border-mosqueta-primary" />
              <span className="text-gray-400">-</span>
              <input type="text" placeholder="Máx" className="w-full border border-gray-300 p-1.5 text-xs rounded-sm focus:outline-none focus:border-mosqueta-primary" />
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1.5 text-xs font-bold rounded-sm">→</button>
            </div>
          </div>
        </aside>

        {/* Product Grid (80%) */}
        <div className="w-full md:w-[80%]">
          <div className="bg-white border border-gray-300 p-3 flex justify-between items-center mb-4 rounded-sm shadow-sm">
            <span className="text-sm font-bold text-gray-700">Mostrando 1 - {catalogProducts.length} de 5,204 resultados</span>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Ordenar por:</span>
              <select className="border border-gray-300 rounded-sm p-1 text-sm bg-white focus:outline-none focus:border-mosqueta-primary font-bold text-gray-900">
                <option>Relevancia</option>
                <option>Menor Precio</option>
                <option>Mayor Precio</option>
                <option>Nuevos SKUs</option>
              </select>
            </div>
          </div>
          
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {catalogProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </StaggerContainer>
          
          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <div className="flex border border-gray-300 rounded-sm overflow-hidden bg-white shadow-sm">
              <button className="px-3 py-2 border-r border-gray-300 text-gray-400 cursor-not-allowed text-sm font-bold bg-gray-50">Anterior</button>
              <button className="px-4 py-2 border-r border-gray-300 text-white bg-mosqueta-primary font-bold text-sm">1</button>
              <button className="px-4 py-2 border-r border-gray-300 text-gray-700 hover:bg-gray-50 font-bold text-sm">2</button>
              <button className="px-4 py-2 border-r border-gray-300 text-gray-700 hover:bg-gray-50 font-bold text-sm">3</button>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 font-bold text-sm">Siguiente</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
