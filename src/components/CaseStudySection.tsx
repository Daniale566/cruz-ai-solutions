
import { Play } from "lucide-react";

export const CaseStudySection = () => {
  return (
    <section className="py-20 relative bg-gray-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ejemplo real: <span className="text-gradient">Clínica dental automatizada</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-10">
            Mira cómo este negocio agendó <span className="text-yellow-400 font-semibold">24 citas nuevas en menos de un mes</span> gracias a un asistente que nunca duerme.
          </p>
          
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl max-w-2xl mx-auto">
            <div className="aspect-video bg-gray-800 flex items-center justify-center relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="text-black ml-1" size={32} />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
                Video próximamente disponible
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};
