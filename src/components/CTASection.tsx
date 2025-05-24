
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export const CTASection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:daniel@tudominio.com?subject=Consulta sobre Automatización con IA";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hola%20Daniel,%20me%20interesa%20conocer%20más%20sobre%20tus%20servicios%20de%20automatización%20con%20IA", "_blank");
  };

  return (
    <section id="contacto" className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para Automatizar tu Empresa?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Conversemos sobre cómo la IA puede transformar tu negocio. 
            Te ayudo a identificar las mejores oportunidades de automatización.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Envíame un mensaje detallado</p>
                <Button 
                  onClick={handleEmailClick}
                  variant="outline" 
                  className="w-full border-blue-200 hover:bg-blue-50"
                >
                  Escribir Email
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <MessageCircle className="text-green-600 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Conversación directa e inmediata</p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Chatear Ahora
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-blue-100 text-sm">
            Respondo en menos de 24 horas • Consulta inicial gratuita
          </p>
        </div>
      </div>
    </section>
  );
};
