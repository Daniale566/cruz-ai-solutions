
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Zap, Calendar, BarChart3, Users } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Agente de WhatsApp con IA",
      description: "Respuestas automáticas inteligentes que suenan naturales y atienden consultas las 24 horas del día."
    },
    {
      icon: Phone,
      title: "Agente de voz con IA",
      description: "Recepción telefónica automatizada que habla naturalmente y puede agendar citas o dar información."
    },
    {
      icon: Zap,
      title: "Automatización de respuestas",
      description: "Respuestas instantáneas y personalizadas para las preguntas más frecuentes de tus clientes."
    },
    {
      icon: Calendar,
      title: "Integración con calendarios y sistemas",
      description: "Conectamos tu asistente con tu agenda y sistemas existentes para agendar automáticamente."
    },
    {
      icon: BarChart3,
      title: "Paneles de control",
      description: "Monitorea en tiempo real todas las conversaciones, citas agendadas y métricas de conversión."
    },
    {
      icon: Users,
      title: "Acompañamiento personalizado",
      description: "Te guiamos paso a paso en la implementación y optimización continua de tu asistente."
    }
  ];

  return (
    <section id="servicios" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicios de <span className="text-gradient">atención automatizada</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Soluciones completas para que nunca más pierdas un cliente por no responder a tiempo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-gray-800 bg-gray-900/50 backdrop-blur hover:border-yellow-500/50 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 bg-yellow-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 border border-yellow-500/20">
                  <service.icon className="text-yellow-400" size={28} />
                </div>
                <CardTitle className="text-lg font-semibold text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};
