export const Bio = () => {
  return (
    <section id="bio" className="bg-fondo py-16 px-6">
      <div className="max-w-4xl mx-auto text-texto text-lg leading-relaxed">

        {/* Imagen flotante en desktop */}
        <img
          src="/assets/kathy-bio2.jpg"
          alt="Kathy Contreras"
          className="w-48 h-48 rounded-full shadow-lg float-left mr-6 mb-4 object-cover hidden md:block"
        />

        {/* Imagen centrada en mobile */}
        <div className="flex justify-center md:hidden mb-6">
          <img
            src="/assets/kathy-bio2.jpg"
            alt="Kathy Contreras"
            className="w-40 h-40 rounded-full shadow-lg object-cover"
          />
        </div>

        <h2 className="text-4xl font-bold text-petroleo mb-6 flex items-center gap-2">
          <span role="img" aria-label="hoja">🌿</span>
          Sobre Kathy Contreras
        </h2>

        <p className="mb-4">
          Soy <strong>Kathy Contreras</strong>, <strong>comunicadora</strong>, <strong>terapeuta integral</strong>, <strong>actriz</strong> y <strong>modelo</strong>. Desde <strong>2009</strong> animo eventos para empresas y marcas.
        </p>

        <p className="mb-4">
          Me formé en <em>teatro</em>, <em>locución</em>, <em>yoga infantil y familiar</em>, <em>psicología transpersonal</em> y como <em>facilitadora de círculos de mujeres</em> enfocados en el autoconocimiento. He trabajado en televisión, cine, cortometrajes y campañas publicitarias para redes sociales, retail y televisión.
        </p>

        <p className="mb-4">
          Mi pasión es cultivar y fomentar el <strong>amor propio</strong>, la <strong>conciencia corporal</strong> y una <strong>moda con sentido</strong>: habitar el cuerpo, conocerse y expresarse con autenticidad. Uno de los enfoques que marcó mi camino fue <em>Body-Mind Movement</em>, basado en la educación somática.
        </p>

        <p>
          Hoy integro todos mis aprendizajes para <strong>comunicar desde mis redes como influencer</strong>, <strong>crear proyectos con propósito</strong> y <strong>motivar a mi comunidad</strong>. Mi mayor maestra es mi hija <strong>Selva</strong>, quien me inspira a vivir con más <em>presencia</em> y <em>profundidad</em>.
        </p>
      </div>
    </section>
  );
};