
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ArrowRight, Calendar } from "lucide-react";

export const Footer = () => {
  const handleWhatsAppDemo = () => {
    window.open("https://wa.me/573133467034?text=Hola%20Daniel,%20quiero%20solicitar%20una%20demo%20personalizada%20para%20mi%20negocio.%20Me%20interesa%20saber%20cómo%20un%20asistente%20con%20IA%20puede%20ayudarme%20a%20no%20perder%20más%20clientes.", "_blank");
  };

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/dinobits56/30min", "_blank");
  };

  return (
    <footer className="bg-black py-12 border-t border-yellow-500/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="font-bold text-2xl text-gradient mb-4">
            EFICACIA
          </div>
          <p className="text-gray-400 mb-8">
            Especialista en Automatización con IA • Asistentes inteligentes que nunca duermen
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
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
          
          <div className="text-sm text-gray-500 space-y-2">
            <p>© 2024 Eficacia - Soluciones de IA para empresas</p>
            <div className="flex justify-center space-x-4">
              <button className="hover:text-yellow-400 transition-colors">
                Política de Privacidad
              </button>
              <span>•</span>
              <button className="hover:text-yellow-400 transition-colors">
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
