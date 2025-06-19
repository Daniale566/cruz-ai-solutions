
export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-yellow-500/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="font-bold text-2xl text-gradient mb-4">
            EFICANCIA
          </div>
          <p className="text-gray-400 mb-8">
            Especialista en Automatización con IA • Asistentes inteligentes que nunca duermen
          </p>
          
          <div className="text-sm text-gray-500 space-y-2">
            <p>© 2024 Eficancia - Soluciones de IA para empresas</p>
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
