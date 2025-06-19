
import { Phone, MessageCircle, Brain } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Phone,
      title: "Atención inmediata 24/7",
      description: "Tu asistente nunca duerme. Responde llamadas y mensajes al instante, cualquier día y hora."
    },
    {
      icon: MessageCircle,
      title: "Más leads convertidos sin esfuerzo",
      description: "Cada contacto es atendido de inmediato. No más clientes perdidos por demoras en responder."
    },
    {
      icon: Brain,
      title: "IA personalizada para tu negocio",
      description: "Entrenamos la inteligencia artificial específicamente con información de tu empresa y servicios."
    }
  ];

  return (
    <section className="py-20 relative bg-gray-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-500/20 group-hover:bg-yellow-900/50 transition-all">
                <benefit.icon className="text-yellow-400" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};
