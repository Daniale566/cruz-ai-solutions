
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-900/30 text-yellow-400 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Zap size={16} className="mr-2" />
            Automatización Empresarial con IA
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Integro <span className="text-gradient">Inteligencia Artificial</span> en tu Empresa
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in">
            Optimiza procesos, reduce costos y aumenta la productividad con soluciones de IA personalizadas para tu negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-lg px-8 py-3 text-black"
              onClick={scrollToContact}
            >
              Comenzar Ahora
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-yellow-500/50 text-yellow-400 hover:bg-yellow-950/30"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
      
      {/* Efectos de fondo futuristas */}
      <div className="bg-grid absolute inset-0 opacity-20"></div>
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-yellow-500/10 rounded-full filter blur-3xl animate-pulse-glow delay-700"></div>
      
      {/* Elementos flotantes */}
      <div className="absolute top-1/4 right-[10%] w-8 h-8 bg-yellow-500/80 rounded-full filter blur-sm animate-float"></div>
      <div className="absolute bottom-1/3 left-[15%] w-4 h-4 bg-yellow-400/70 rounded-full filter blur-sm animate-float"></div>
      <div className="absolute top-1/2 left-[70%] w-6 h-6 bg-amber-500/60 rounded-full filter blur-sm animate-float"></div>
    </section>
  );
};
