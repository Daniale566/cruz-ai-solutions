
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, TrendingUp, Clock, Shield } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Chatbots Inteligentes",
      description: "Automatiza la atención al cliente 24/7 con chatbots que entienden y responden como humanos."
    },
    {
      icon: TrendingUp,
      title: "Análisis Predictivo",
      description: "Toma decisiones informadas con análisis de datos impulsados por IA que predicen tendencias."
    },
    {
      icon: Clock,
      title: "Automatización de Procesos",
      description: "Elimina tareas repetitivas y libera tiempo valioso automatizando flujos de trabajo complejos."
    },
    {
      icon: Shield,
      title: "Seguridad Inteligente",
      description: "Protege tu empresa con sistemas de IA que detectan amenazas y anomalías en tiempo real."
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios de Automatización con IA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformo tu empresa con soluciones de inteligencia artificial que impulsan la eficiencia y el crecimiento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-100">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-blue-600" size={24} />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
