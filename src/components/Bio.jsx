export const Bio = () => {
    return (
      <section id="bio" className="bg-fondo py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Imagen (opcional) */}
          <div className="hidden md:block">
            <img
              src="/assets/kathy-bio.jpg" // Reemplaza con tu imagen real
              alt="Kathy Contreras"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>
  
          {/* Texto */}
          <div>
            <h2 className="text-4xl font-bold text-petroleo mb-4">Sobre Kathy Contreras</h2>
            <p className="text-lg leading-relaxed text-texto">
              Soy comunicadora, bailarina e influencer chilena con una profunda vocación por el bienestar integral. 
              Mi camino me ha llevado a explorar y compartir herramientas de sanación emocional, crianza respetuosa, yoga, arte y consciencia.
            </p>
            <p className="text-lg leading-relaxed text-texto mt-4">
              A través de cada proyecto busco inspirar autenticidad, empoderamiento y conexión con lo esencial.
            </p>
          </div>
  
        </div>
      </section>
    );
  };