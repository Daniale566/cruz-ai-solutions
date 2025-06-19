
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/573133467034?text=Hola%20Daniel,%20quiero%20solicitar%20una%20demo%20personalizada", "_blank");
  };

  return (
    <>
      <header className="fixed top-0 w-full backdrop-blur-md z-50 bg-black/50 border-b border-yellow-500/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-gradient">
            EFICACIA
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Cómo funciona
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              Servicios
            </button>
            <Button 
              onClick={() => scrollToSection('cta-section')}
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black"
            >
              Solicitar demo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md border-b border-yellow-500/20 md:hidden">
              <nav className="flex flex-col space-y-4 p-4">
                <button 
                  onClick={() => scrollToSection('como-funciona')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
                >
                  Cómo funciona
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
                >
                  Servicios
                </button>
                <Button 
                  onClick={() => scrollToSection('cta-section')}
                  className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black w-fit"
                >
                  Solicitar demo
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Fixed WhatsApp Button for Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black shadow-lg"
          size="icon"
        >
          <MessageCircle size={24} />
        </Button>
      </div>
    </>
  );
};
