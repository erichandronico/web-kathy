import React, { useState } from 'react';

const imageModules = import.meta.glob('/src/assets/modelo/*.{jpg,jpeg,png,webp}', { eager: true });
const localImages = Object.values(imageModules).map(mod => mod.default);

export const Modelo = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const closeModal = () => setCurrentIndex(null);
  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % localImages.length);
  };
  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + localImages.length) % localImages.length);
  };

  return (
    <section id="modelo" className="bg-gray-100 py-16 px-6 text-texto">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-vino mb-6 text-center">Modelo</h2>
        <p className="text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
        Modelo desde 2008, con experiencia en televisión, fotografía para moda, catálogos, retail, editoriales, marcas deportivas, de belleza y cosmética, y contenido para redes sociales.
        </p>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {localImages.map((url, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md break-inside-avoid cursor-pointer opacity-0 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
              onClick={() => setCurrentIndex(idx)}
            >
              <img
                src={url}
                alt={`Foto de book ${idx + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-125"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center animate-fade-modal"
          onClick={closeModal}
        >
            <div className="relative w-screen h-screen flex items-center justify-center" onClick={(e) => e.stopPropagation()} >
                <img  key={currentIndex}  src={localImages[currentIndex]} alt={`Kathy Contreras Foto ${currentIndex}`} className="w-screen h-screen object-contain animate-fade-image transition-all duration-500" />

                {/* Botón cerrar */}
                <button onClick={closeModal} className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-gray-300">
                    &times;
                </button>

                {/* Botón anterior */}
                <button onClick={showPrev} className="absolute top-1/2 left-0 -translate-y-1/2 px-3 py-2 text-white text-3xl font-bold hover:text-gray-300" >
                    ‹
                </button>

                {/* Botón siguiente */}
                <button onClick={showNext} className="absolute top-1/2 right-0 -translate-y-1/2 px-3 py-2 text-white text-3xl font-bold hover:text-gray-300" >
                    ›
                </button>
            </div>
        </div>
      )}
    </section>
  );
};