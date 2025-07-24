import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

export const CTASection = () => {
  const handleCalendlyClick = () => {
    window.open("https://calendly.com/dinobits56/30min", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/573133467034?text=Hola%20Daniel,%20quiero%20hablar%20contigo%20directamente%20sobre%20automatización%20para%20mi%20empresa", "_blank");
  };

  return (
    <section id="cta-section" className="py-20 relative bg-gray-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para <span className="text-gradient">Automatizar tu Empresa</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Conversemos sobre cómo la IA puede transformar tu negocio. 
            Te ayudo a identificar las mejores oportunidades de automatización.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur hover:border-yellow-500/30 transition-all hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <MessageCircle className="text-yellow-400 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-white mb-2">Cotización de Proyectos</h3>
                <p className="text-gray-400 mb-2 text-sm">¿Tienes un proyecto en mente? Contáctame por WhatsApp para discutir tus necesidades y recibir una cotización personalizada.</p>
                <ul className="text-left text-sm text-gray-500 mb-4 space-y-1">
                  <li>• Evaluación de necesidades</li>
                  <li>• Discusión de posibles soluciones</li>
                  <li>• Cotización personalizada</li>
                </ul>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black"
                >
                  Cotizar por WhatsApp
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur hover:border-yellow-500/30 transition-all hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Calendar className="text-yellow-400 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-white mb-2">Asesoría Personalizada</h3>
                <p className="text-gray-400 mb-2 text-sm">¿Necesitas orientación profesional? Agenda una sesión de asesoría para resolver dudas específicas sobre automatización e IA.</p>
                <ul className="text-left text-sm text-gray-500 mb-4 space-y-1">
                  <li>• 1 hora de consulta</li>
                  <li>• Soluciones a problemas específicos</li>
                  <li>• Recomendaciones personalizadas</li>
                </ul>
                <Button 
                  onClick={handleCalendlyClick}
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black"
                >
                  Agendar asesoría
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-gray-500 text-sm">
            Respondo en menos de 24 horas • Consulta inicial gratuita
          </p>
        </div>
      </div>
      
      <div className="absolute -top-5 left-1/4 w-1/2 h-24 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-10 right-0 w-40 h-40 bg-yellow-500/5 rounded-full filter blur-3xl animate-pulse-glow"></div>
    </section>
  );
};
