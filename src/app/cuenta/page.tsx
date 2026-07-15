import { User, Lock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Mi Cuenta | Mosqueta',
  description: 'Inicia sesión en tu cuenta de Mosqueta.',
};

export default function CuentaPage() {
  return (
    <div className="bg-gray-100 min-h-[80vh] font-inter flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white border border-gray-300 shadow-sm">
        
        <div className="bg-gray-900 text-white p-6 border-b-4 border-mosqueta-primary text-center">
          <User className="w-8 h-8 mx-auto mb-3 text-white" />
          <h1 className="text-xl font-black font-montserrat uppercase tracking-widest">
            Mi Cuenta
          </h1>
        </div>

        <div className="p-6 md:p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Correo Electrónico</label>
              <input type="email" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium" placeholder="tucorreo@ejemplo.com" />
            </div>
            
            <div>
              <div className="flex justify-between items-end mb-1">
                <label className="block text-[10px] font-bold text-gray-700 uppercase">Contraseña</label>
              </div>
              <input type="password" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium" placeholder="••••••••" />
            </div>

            <button type="button" className="w-full bg-gray-900 text-white font-black py-3 px-4 rounded-none shadow-sm hover:bg-black transition-colors active:bg-gray-800 text-sm uppercase tracking-widest border-b-4 border-gray-700">
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-6">
            <a href="#" className="text-xs text-center font-bold text-gray-600 hover:text-mosqueta-primary uppercase tracking-wide">
              ¿Olvidaste tu contraseña?
            </a>
            <Link href="/b2b" className="text-xs text-center font-black text-mosqueta-primary hover:text-[#b0164e] uppercase tracking-widest flex items-center justify-center">
              Soy Cliente Corporativo (B2B) <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
