
import { Play } from "lucide-react";
import { useState } from "react";

export const CaseStudySection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <section className="py-20 relative bg-gray-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ejemplo real: <span className="text-gradient">Clínica dental automatizada</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-10">
            Mira cómo este negocio agendó <span className="text-yellow-400 font-semibold">24 citas nuevas en menos de un mes</span> gracias a un asistente que nunca duerme.
          </p>
          
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl max-w-2xl mx-auto">
            {!showVideo ? (
              <div 
                className="aspect-video bg-gray-800 flex items-center justify-center relative group cursor-pointer"
                onClick={handlePlayVideo}
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/u8DT3pJCN00/maxresdefault.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                  <Play className="text-black ml-1" size={32} />
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/u8DT3pJCN00?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};
