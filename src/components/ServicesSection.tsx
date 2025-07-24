
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Layers, Zap, Settings, Link as LinkIcon, BrainCog } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: BrainCog,
      title: "Infraestructura con Inteligencia Artificial",
      description: "Implemento agentes de IA en tu empresa y los conecto a plataformas como WhatsApp, n8n y sistemas de gestión para entrar al mundo de la automatización avanzada."
    },
    {
      icon: Zap,
      title: "Automatización de Flujos con n8n",
      description: "Diseño y creo flujos inteligentes que conectan tus aplicaciones favoritas, facilitando tareas automáticas y eliminando procesos repetitivos."
    },
    {
      icon: Settings,
      title: "Desarrollo Personalizado",
      description: "Construyo soluciones tecnológicas a medida para satisfacer exactamente lo que tu negocio requiere y potenciar su crecimiento."
    },
    {
      icon: Layers,
      title: "Optimización de Procesos Empresariales",
      description: "Analizo cómo trabajas y te ayudo a mejorar cada paso, haciendo que tu empresa sea más eficiente, rentable y fluida."
    },
    {
      icon: LinkIcon,
      title: "Integración de Plataformas",
      description: "Uno todos tus sistemas y herramientas tecnológicas para que funcionen en armonía y puedas tener el control de tu operación desde un solo lugar."
    },
    {
      icon: Bot,
      title: "Consultoría en Innovación Digital",
      description: "Te acompaño con asesoría experta para que adoptes e implementes tecnología de manera efectiva, asegurando resultados reales y sostenibles."
    }
  ];

  return (
    <section id="servicios" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicios <span className="text-gradient">tecnológicos y de automatización</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Llevo la digitalización y la inteligencia artificial a tu empresa con soluciones claras, prácticas y fáciles de entender.
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
