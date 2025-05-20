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
          Puedes contratar los siguientes servicios:
        </p>

        <ul className="list-disc pl-5 space-y-4 text-lg">
          <li>Difusión del contenido en el perfil de Kathy</li>
          <li>
            Creación de contenido original:
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Guión creativo</li>
              <li>Grabación con cámaras, lentes y micrófonos profesionales</li>
              <li>Edición de video profesional incluyendo colorgrading / post de audio</li>
              <li>Fotografía profesional</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Publicaciones embebidas */}
      <div className="max-w-5xl mx-auto mt-12 space-y-12 px-4">
        <h3 className="text-2xl font-semibold text-petroleo mb-1">Algunos trabajos realizados en forma íntegra</h3>

        <div className="grid mt-0 md:grid-cols-3 gap-2">
          <div className="mt-0">
            <InstagramEmbed url="https://www.instagram.com/reel/DJXx6qUtQja/" />
            <p className="text-sm text-center text-petroleo mt-2">
                📽️ Idea original, Guión, Filmación y Edición por nuestro equipo.
            </p>
          </div>
          <div className="mt-0">
            <InstagramEmbed url="https://www.instagram.com/reel/DIhlCF7tPuJ/" />
            <p className="text-sm text-center text-petroleo mt-2">
                📽️ Idea original, Guión, Filmación y Edición por nuestro equipo.
            </p>
          </div>
          <div className="mt-0">
            <InstagramEmbed url="https://www.instagram.com/reel/C8M3a_DRnL1/?igsh=Z2F5NzZhMXBzaHpq" />
            <p className="text-sm text-center text-petroleo mt-2">
                📽️ Idea original, Guión, Filmación y Edición por nuestro equipo.
            </p>
          </div>
        </div>
        
        <div className="grid mt-0 md:grid-cols-3 gap-2">
          <div className="mt-0">
            <InstagramEmbed url="https://www.instagram.com/reel/C5ep3hfOXdx/?igsh=MXFxeG1ubWRncnVkMQ==" />
            <p className="text-sm text-center text-petroleo mt-2">
                📽️ Filmación, Edición y After Effects por nuestro equipo.
            </p>
          </div>
          <div className="mt-0">
            <InstagramEmbed url="https://www.instagram.com/reel/DCU5pulJ8Tf/?igsh=MWQxb2xnd2Zxb2VrOQ==" />
            <p className="text-sm text-center text-petroleo mt-2">
                📽️ Filmación y Edición por nuestro equipo.
            </p>
          </div>
          <div className="mt-0">
            <InstagramEmbed url="https://www.instagram.com/reel/DJFpeeQt0KM/?igsh=MTdnMTY0d3B2cmNmaA==" />
            <p className="text-sm text-center text-petroleo mt-2">
                📽️ Idea original, Guión, Filmación y Edición por nuestro equipo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};