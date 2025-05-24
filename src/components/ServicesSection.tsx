
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, TrendingUp, Clock, Shield } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Asistentes Digitales",
      description: "Chatbots inteligentes que atienden a tus clientes 24/7, respondiendo preguntas y solucionando problemas como lo haría un humano."
    },
    {
      icon: TrendingUp,
      title: "Datos Inteligentes",
      description: "Convierte tus datos en información valiosa que te ayuda a entender tendencias, anticipar necesidades y tomar mejores decisiones de negocio."
    },
    {
      icon: Clock,
      title: "Automatización",
      description: "Libera tiempo valioso de tu equipo automatizando tareas repetitivas, permitiéndoles enfocarse en lo que realmente importa para tu negocio."
    },
    {
      icon: Shield,
      title: "Protección Avanzada",
      description: "Sistemas de seguridad inteligentes que protegen tu empresa detectando amenazas antes de que causen daño, manteniendo tus datos seguros."
    }
  ];

  return (
    <section id="servicios" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicios de <span className="text-gradient">Automatización con IA</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Transformo tu empresa con soluciones prácticas de inteligencia artificial que impulsan la eficiencia y el crecimiento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
