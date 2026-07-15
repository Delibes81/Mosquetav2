import { Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Portal B2B | Mosqueta',
  description: 'Accede a tu cuenta empresarial de Mosqueta.',
};

export default function B2BPage() {
  return (
    <div className="bg-gray-100 min-h-[80vh] font-inter flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white border border-gray-300 shadow-sm flex flex-col md:flex-row">
        
        {/* Left Side - Info */}
        <div className="w-full md:w-1/2 bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-[#b0164e]">
          <div className="relative z-10">
            <Building2 className="w-12 h-12 text-mosqueta-primary mb-6" />
            <h1 className="text-3xl font-black font-montserrat uppercase tracking-tight mb-4 leading-tight">
              Portal Empresarial B2B
            </h1>
            <p className="text-sm text-gray-300 font-medium leading-relaxed mb-8">
              Accede a tus precios de mayoreo, historial de facturación, seguimiento de entregas por volumen y contacta directamente a tu ejecutivo de cuenta.
            </p>
            <div className="bg-white/10 p-4 border border-white/20">
              <p className="text-[10px] font-bold uppercase tracking-widest text-mosqueta-primary">¿No tienes cuenta?</p>
              <p className="text-xs text-gray-200 mt-1">Regístrate para obtener beneficios exclusivos para tu negocio.</p>
              <Link href="/corporativo#contacto-b2b" className="mt-3 inline-flex items-center text-xs font-bold text-white hover:text-mosqueta-primary uppercase tracking-widest">
                Solicitar Acceso <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-widest mb-6">Iniciar Sesión</h2>
          
          <form className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Correo Electrónico Corporativo</label>
              <input type="email" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium" placeholder="usuario@empresa.com" />
            </div>
            
            <div>
              <div className="flex justify-between items-end mb-1">
                <label className="block text-[10px] font-bold text-gray-700 uppercase">Contraseña</label>
                <a href="#" className="text-[10px] text-mosqueta-primary font-bold uppercase tracking-wider hover:underline">¿Olvidaste tu contraseña?</a>
              </div>
              <input type="password" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm bg-white focus:outline-none focus:border-mosqueta-primary text-gray-900 font-medium" placeholder="••••••••" />
            </div>

            <button type="button" className="w-full bg-mosqueta-primary text-white font-black py-3 px-4 rounded-none shadow-sm hover:bg-[#b0164e] transition-colors active:bg-[#8f1240] text-sm uppercase tracking-widest mt-4 border-b-4 border-[#8f1240]">
              Ingresar al Portal
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              Acceso seguro y cifrado (SSL 256-bit)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
