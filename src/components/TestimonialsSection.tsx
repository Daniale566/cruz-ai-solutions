
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface Testimonial {
  comment: string;
  name: string;
  company: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    comment: "Ahora respondemos en segundos sin estar pegados al celular. Subimos un 30% nuestras conversiones.",
    name: "Carlos Méndez",
    company: "Clínica Dental Sonrisas",
    result: "+30% conversiones"
  },
  {
    comment: "Nuestro asistente agenda citas automáticamente mientras dormimos. Es como tener un empleado que nunca descansa.",
    name: "Ana Rodriguez",
    company: "Centro Médico Integral",
    result: "24/7 disponible"
  }
];

export const TestimonialsSection = () => (
  <section className="py-20 relative bg-gray-950">
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Resultados <span className="text-gradient">comprobados</span>
        </h2>
        <p className="text-lg text-gray-400">
          Empresas que ya no pierden clientes gracias a la atención automatizada.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <Card key={idx} className="border-gray-800 bg-gray-900/60 shadow-lg backdrop-blur hover:border-yellow-500/30 transition-all">
            <CardContent className="p-6">
              <MessageCircle className="text-yellow-400 mb-4" size={28} />
              <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                &quot;{testimonial.comment}&quot;
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-yellow-300 font-semibold">{testimonial.name}</span>
                  <span className="text-gray-400 block text-sm">{testimonial.company}</span>
                </div>
                <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.result}
                </div>
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
