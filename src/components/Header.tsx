
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full backdrop-blur-md z-50 bg-black/50 border-b border-yellow-500/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-gradient">
          EFICANCIA
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('servicios')}
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('sobre-mi')}
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Sobre mí
          </button>
          <Button 
            onClick={() => scrollToSection('contacto')}
            className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black"
          >
            Contactar
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
                onClick={() => scrollToSection('servicios')}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
              >
                Sobre mí
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black w-fit"
              >
                Contactar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
