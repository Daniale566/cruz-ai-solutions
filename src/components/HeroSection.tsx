
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Zap size={16} className="mr-2" />
            Automatización Empresarial con IA
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Integro <span className="text-blue-600">Inteligencia Artificial</span> en tu Empresa
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in">
            Optimiza procesos, reduce costos y aumenta la productividad con soluciones de IA personalizadas para tu negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              onClick={scrollToContact}
            >
              Comenzar Ahora
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-blue-200 hover:bg-blue-50"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
