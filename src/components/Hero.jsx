export const Hero = () => {
    return (
      <section
        className="relative h-[85vh] bg-center bg-cover flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/assets/hero1.jpg')", // Reemplaza con la ruta real de tu imagen
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-fondo drop-shadow">
            Bienvenida al Universo de Kathy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-ocre drop-shadow">
            Inspiración, bienestar, arte y maternidad consciente
          </p>
          <a
            href="#bio"
            className="bg-primario text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-secundario transition-colors"
          >
            Conóceme
          </a>
        </div>
      </section>
    );
  };