
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface SuccessStory {
  comment: string;
  name: string;
  company: string;
}

const stories: SuccessStory[] = [
  {
    comment: "La implementación de automatizaciones transformó cómo gestionamos a nuestros clientes, ¡ahorramos horas cada semana!",
    name: "Carlos Méndez",
    company: "Consultora Alfa"
  },
  {
    comment: "Integrar nuestra plataforma con WhatsApp fue sencillo y nos ayudó a captar más oportunidades.",
    name: "María Torres",
    company: "Tienda Nova"
  }
  // Puedes agregar más casos fácilmente editando este array.
];

export const SuccessStoriesSection = () => (
  <section id="casos-exito" className="py-20 relative bg-gray-950">
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Casos de <span className="text-gradient">Éxito</span>
        </h2>
        <p className="text-lg text-gray-400">
          Empresas que ya avanzaron con ayuda de la automatización y tecnología.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {stories.map((story, idx) => (
          <Card key={idx} className="border-gray-800 bg-gray-900/60 shadow-lg backdrop-blur">
            <CardContent className="p-6 flex flex-col gap-4">
              <MessageCircle className="text-yellow-400 mb-2" size={28} />
              <p className="text-lg text-gray-100">&quot;{story.comment}&quot;</p>
              <div className="pt-2">
                <span className="text-yellow-300 font-semibold">{story.name}</span>
                <span className="text-gray-400 ml-2">| {story.company}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
  </section>
);
