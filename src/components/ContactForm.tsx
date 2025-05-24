
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Sparkles } from "lucide-react";

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  telefono: z.string().min(6, {
    message: "Ingresa un número de teléfono válido.",
  }),
  correo: z.string().email({
    message: "Ingresa un correo electrónico válido.",
  }),
  negocio: z.string().min(2, {
    message: "El nombre del negocio debe tener al menos 2 caracteres.",
  }),
  actividad: z.string().min(2, {
    message: "Ingresa a qué se dedica tu negocio.",
  }),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
      correo: "",
      negocio: "",
      actividad: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // En el futuro, aquí se enviará a Supabase
    console.log(values);
    alert("¡Formulario enviado! Pronto conectaremos con Supabase.");
  }

  return (
    <section id="contacto" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-900/30 text-yellow-400 rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} className="mr-2 text-yellow-400" />
              Comienza Tu Transformación Digital
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Contáctame</span> Para Integrar IA En Tu Empresa
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Completa el formulario y me pondré en contacto contigo para discutir cómo la IA puede potenciar tu negocio.
            </p>
          </div>

          <Card className="border-gray-800 bg-gray-900/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Formulario de Contacto</CardTitle>
              <CardDescription>Comparte los detalles de tu empresa para una consulta personalizada.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Nombre</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Tu nombre completo" 
                              {...field} 
                              className="bg-gray-800 border-gray-700 text-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Teléfono</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Tu número de contacto" 
                              {...field} 
                              className="bg-gray-800 border-gray-700 text-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="correo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">Correo electrónico</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="tucorreo@ejemplo.com" 
                            type="email" 
                            {...field} 
                            className="bg-gray-800 border-gray-700 text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="negocio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">Nombre del negocio</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Nombre de tu empresa" 
                            {...field} 
                            className="bg-gray-800 border-gray-700 text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="actividad"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">¿A qué se dedica tu negocio?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe brevemente la actividad de tu empresa" 
                            {...field} 
                            className="bg-gray-800 border-gray-700 text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-medium"
                  >
                    Enviar Solicitud
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-yellow-500/10 to-transparent"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
    </section>
  );
};
