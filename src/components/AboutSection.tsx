
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const achievements = [
    "Ingeniero de Sistemas especializado en IA y automatización",
    "He organizado hackathons de innovación",
    "Experiencia con IA en procesos empresariales",
    "Más de 50 proyectos exitosos de integración",
    "Siempre dispuesto a ayudar personalmente a cada empresa"
  ];

  return (
    <section id="sobre-mi" className="py-20 relative bg-gray-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-gradient">EFICANCIA</span>
            </h2>
            <p className="text-lg text-gray-400">
              Potenciando negocios con Inteligencia Artificial y automatización de procesos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Foto y datos personales */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-40 h-40 mb-6 relative">
                <img
                  src="/lovable-uploads/735f2191-b211-480c-b0cb-07ca4c6288d6.png"
                  alt="Foto de Daniel Cruz"
                  className="w-40 h-40 rounded-full border-4 border-purple-600 object-cover shadow-lg"
                  style={{ background: "linear-gradient(135deg,#ffe066 40%,#fffbe6 100%)" }}
                />
              </div>
              <span className="text-yellow-400 font-bold text-lg">Daniel Cruz</span>
              <span className="text-gray-400 text-sm font-semibold text-center">Fundador y Consultor Principal</span>
            </div>
            {/* Descripción y logros */}
            <div>
              <Card className="border-gray-800 bg-gray-900/50 backdrop-blur shadow-lg">
                <CardContent className="p-8">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Soy ingeniero de sistemas, apasionado por la IA y la automatización. He organizado hackathons, y llevo más de 50 proyectos exitosos ayudando a empresas a incorporar inteligencia artificial de manera práctica y realista. 
                    Siempre estoy dispuesto a ayudar y, personalmente, acompaño a cada empresa para que saque el máximo provecho a sus procesos y haga la transición digital con éxito.
                  </p>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-dots absolute inset-0 opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
    </section>
  );
};
