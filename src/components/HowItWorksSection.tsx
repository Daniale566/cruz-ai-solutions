
export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "El cliente te escribe o llama",
      description: "Cualquier persona interesada en tus servicios hace contacto contigo"
    },
    {
      number: "2", 
      title: "La IA responde, agenda o da información",
      description: "Tu asistente inteligente atiende inmediatamente con información personalizada"
    },
    {
      number: "3",
      title: "Tú te enfocas en operar y vender más",
      description: "Mientras la IA se encarga de la atención inicial, tú te dedicas a lo importante"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Así funciona tu <span className="text-gradient">nuevo asistente</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/8358133e-5d20-4b17-a447-3a0159599e2a.png" 
              alt="Conversación de WhatsApp mostrando automatización"
              className="rounded-lg shadow-2xl w-full max-w-sm mx-auto"
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 w-40 h-40 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};
