
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  const scrollToDemo = () => {
    const element = document.querySelector('#cta-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const element = document.querySelector('#como-funciona');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in leading-tight">
            <span className="block text-white mb-4">¿Pierdes clientes por</span>
            <span className="block text-yellow-400">no responder a tiempo?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Creamos asistentes con inteligencia artificial que responden por WhatsApp o por voz de forma automática, 
            <span className="text-yellow-400 font-semibold"> para que no dejes pasar ni una venta más.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-lg px-8 py-4 text-black font-semibold"
              onClick={scrollToHowItWorks}
            >
              <Play className="mr-2" size={20} />
              Ver cómo funciona
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-lg px-8 py-4 text-black font-semibold"
              onClick={scrollToDemo}
            >
              Solicita tu demo gratis
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-grid absolute inset-0 opacity-20"></div>
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-yellow-500/10 rounded-full filter blur-3xl animate-pulse-glow delay-700"></div>
      
      <div className="absolute top-1/4 right-[10%] w-8 h-8 bg-yellow-500/80 rounded-full filter blur-sm animate-float"></div>
      <div className="absolute bottom-1/3 left-[15%] w-4 h-4 bg-yellow-400/70 rounded-full filter blur-sm animate-float"></div>
      <div className="absolute top-1/2 left-[70%] w-6 h-6 bg-amber-500/60 rounded-full filter blur-sm animate-float"></div>
    </section>
  );
};
