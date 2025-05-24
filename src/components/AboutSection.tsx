
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const achievements = [
    "Especialista en Inteligencia Artificial empresarial",
    "Más de 50 proyectos de automatización exitosos",
    "Reducción promedio del 40% en costos operativos",
    "Implementaciones en múltiples industrias"
  ];

  return (
    <section id="sobre-mi" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre Daniel Cruz
            </h2>
            <p className="text-lg text-gray-600">
              Experto en automatización empresarial con IA
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Ayudo a empresas a transformar sus operaciones mediante la integración estratégica de Inteligencia Artificial. 
                    Mi enfoque se centra en crear soluciones prácticas que generen resultados measurables.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Cada proyecto lo desarrollo con un enfoque personalizado, asegurando que la tecnología se adapte 
                    perfectamente a las necesidades específicas de tu negocio.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                ¿Por qué elegir mis servicios?
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
