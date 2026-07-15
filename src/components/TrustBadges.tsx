import { ShieldCheck, Truck, Tags } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      name: 'Logística Propia',
      description: 'Entregas seguras con nuestra flotilla en CDMX.',
      icon: Truck,
    },
    {
      name: 'Garantía Institucional',
      description: 'Respaldo total en todos nuestros productos y marcas.',
      icon: ShieldCheck,
    },
    {
      name: 'Precios de Fábrica',
      description: 'Condiciones de mayoreo y trato directo sin intermediarios.',
      icon: Tags,
    }
  ];

  return (
    <div className="bg-white py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {badges.map((badge) => (
            <div key={badge.name} className="flex flex-col items-center text-center bg-gray-100 rounded-sm shadow-md border border-gray-300 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center text-mosqueta-secondary mb-6">
                <badge.icon className="h-20 w-20" aria-hidden="true" fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-montserrat uppercase tracking-wide">{badge.name}</h3>
              <p className="mt-3 text-base text-gray-700 font-inter font-medium">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
