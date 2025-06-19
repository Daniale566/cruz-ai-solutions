
import { MessageCircle, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/573133467034", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/dinobits56", "_blank");
  };

  const handleMailClick = () => {
    window.open("mailto:contacto@danielcruz.co", "_blank");
  };

  return (
    <footer className="bg-black py-12 border-t border-yellow-500/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="font-bold text-2xl text-gradient mb-4">
            Daniel Cruz
          </div>
          <p className="text-gray-400 mb-6">
            Especialista en Automatización con IA • Asistentes inteligentes que nunca duermen
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <button 
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </button>
            <button 
              onClick={handleInstagramClick}
              className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </button>
            <button 
              onClick={handleMailClick}
              className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <Mail size={20} />
              <span>Contacto</span>
            </button>
          </div>
          
          <div className="text-sm text-gray-500 space-y-2">
            <p>© 2024 Daniel Cruz - Soluciones de IA para empresas</p>
            <div className="flex justify-center space-x-4">
              <button className="hover:text-yellow-400 transition-colors">
                Política de Privacidad
              </button>
              <span>•</span>
              <button className="hover:text-yellow-400 transition-colors">
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
