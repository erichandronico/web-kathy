export const Servicios = () => {
    const servicios = [
      {
        titulo: "Animación de Eventos",
        descripcion:
          "Presencia y conducción de eventos con cercanía, alegría y estilo. Experiencia en marcas, ferias, lanzamientos y celebraciones.",
        icono: "🎤",
      },
      {
        titulo: "Terapia Transpersonal",
        descripcion:
          "Sesiones de sanación emocional y acompañamiento con enfoque holístico y espiritual. Presencial o en línea.",
        icono: "🧘‍♀️",
      },
      {
        titulo: "Influencer y Colaboraciones",
        descripcion:
          "Contenido para marcas en áreas como maternidad, wellness, yoga, fitness, moda consciente y espiritualidad.",
        icono: "📸",
      },
    ];
  
    return (
      <section id="servicios" className="bg-white scroll-mt-24 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-vino text-center mb-12">Servicios</h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-fondo rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{servicio.icono}</div>
                <h3 className="text-xl font-semibold text-petroleo mb-2">{servicio.titulo}</h3>
                <p className="text-texto text-base leading-relaxed">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };