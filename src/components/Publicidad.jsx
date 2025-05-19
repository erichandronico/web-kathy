import { InstagramEmbed } from "./InstagramEmbed";

export const Publicidad = () => {
    return (
      <section id="publicidad" className="scroll-mt-24 bg-white py-16 px-6 text-texto">
        <div className="max-w-5xl mx-auto">
  
          <h2 className="text-4xl font-bold text-vino mb-8 text-center">Publicidad & Contenido</h2>
  
          <p className="text-lg leading-relaxed mb-6">
            Ofrecemos servicios integrales de <strong>publicidad en redes sociales</strong>, tanto desde la mirada de <strong>influencer</strong> como desde una <em>productora creativa & audiovisual</em>.
          </p>
  
          <ul className="list-disc pl-5 space-y-4 text-lg mb-10">
            <li>
              <strong>Historias de Instagram</strong>: creativas, orgánicas, alineadas con tu marca.
            </li>
            <li>
              <strong>Reels de Instagram</strong>: podemos crear el guión, filmar con cámaras, lentes y micrófonos profesionales, y realizar una edición de alto nivel.
            </li>
            <li>
              <strong>Publicaciones tipo carrusel</strong>: fotografía profesional con composición, estética y mensaje claro.
            </li>
          </ul>
  
          <p className="text-lg mb-8">
            Puedes solicitar <strong>solo la creación del contenido</strong>, <strong>solo la difusión en redes</strong> o un servicio completo de <strong>producción + promoción</strong> en los canales de Kathy y los tuyos.
          </p>
        </div>
  
        {/* Placeholder para media embebida */}
        <div className="max-w-5xl mx-auto mt-12 space-y-12 px-4">
          <h3 className="text-2xl font-semibold text-petroleo mb-2">Algunas publicaciones</h3>
  
          {/* Reemplaza con tus URLs reales */}
          <div className="grid md:grid-cols-2 gap-4">
          <div className="mt-4">
            <InstagramEmbed url="https://www.instagram.com/reel/DIhlCF7tPuJ/" />
          </div>
          <div className="mt-4">
            <InstagramEmbed url="https://www.instagram.com/reel/DJXx6qUtQja/" />
          </div>
          </div>
        </div>
      </section>
    );
  };