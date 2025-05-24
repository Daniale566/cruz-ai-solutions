
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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-blue-900">
          Daniel Cruz
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('servicios')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('sobre-mi')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Sobre mí
          </button>
          <Button 
            onClick={() => scrollToSection('contacto')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Contactar
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-100 md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Sobre mí
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-blue-600 hover:bg-blue-700 w-fit"
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
