export const Galeria = () => {
    const imagenes = [
      '/assets/galeria1.jpg',
      '/assets/galeria2.jpg',
      '/assets/galeria3.jpg',
      '/assets/galeria4.jpg',
      '/assets/galeria5.jpg',
      '/assets/galeria6.jpg',
    ];
  
    return (
      <section id="galeria" className="bg-fondo scroll-mt-24 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-petroleo mb-12">Galería</h2>
  
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {imagenes.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Galería ${index + 1}`}
                className="w-full rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };