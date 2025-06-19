
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ArrowRight, Calendar } from "lucide-react";

export const CTASection = () => {
  const handleWhatsAppDemo = () => {
    window.open("https://wa.me/573133467034?text=Hola%20Daniel,%20quiero%20solicitar%20una%20demo%20personalizada%20para%20mi%20negocio.%20Me%20interesa%20saber%20cómo%20un%20asistente%20con%20IA%20puede%20ayudarme%20a%20no%20perder%20más%20clientes.", "_blank");
  };

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/dinobits56/30min", "_blank");
  };

  return (
    <section id="cta-section" className="py-20 relative bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-gradient">dejar de perder clientes</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Solicita una demo personalizada. <br />
            <span className="text-yellow-400">Sin compromiso. Sin confusión.</span>
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur hover:border-yellow-500/30 transition-all hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <MessageCircle className="text-yellow-400 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-white mb-2 text-lg">Demo inmediata por WhatsApp</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Conversemos ahora mismo sobre cómo automatizar la atención de tu negocio.
                </p>
                <Button 
                  onClick={handleWhatsAppDemo}
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold"
                >
                  Solicitar demo por WhatsApp
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur hover:border-yellow-500/30 transition-all hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Calendar className="text-yellow-400 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-white mb-2 text-lg">Asesoría personalizada</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Agenda una videollamada para analizar tu caso específico.
                </p>
                <Button 
                  onClick={handleCalendlyClick}
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold"
                >
                  Agendar videollamada
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-gray-500 text-sm">
            Respuesta inmediata • Demo personalizada gratuita • Sin compromiso
          </p>
        </div>
      </div>
      
      <div className="absolute -top-5 left-1/4 w-1/2 h-24 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-10 right-0 w-40 h-40 bg-yellow-500/5 rounded-full filter blur-3xl animate-pulse-glow"></div>
    </section>
  );
};
