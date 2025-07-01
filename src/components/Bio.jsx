export const Bio = () => {
  return (
    <section id="bio" className="bg-fondo py-16 px-6 font-nobel">
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

        <h2 className="text-4xl font-bold text-black mb-6 flex items-center gap-2">
          Sobre Kathy Contreras
        </h2>

        <p className="mb-4 text-xl">
          Soy <strong>Kathy Contreras</strong>, <strong>comunicadora</strong>, <strong>terapeuta integral</strong>, <strong>actriz</strong> y <strong>modelo</strong>. Desde <strong>2009</strong> animo eventos para <strong>marcas</strong> y <strong>empresas</strong>, y he trabajado en <strong>televisión</strong>, <strong>cine</strong>, <strong>cortometrajes</strong> y <strong>campañas publicitarias</strong> para redes sociales, retail y televisión.
        </p>

        <p className="mb-4 text-xl">
          Me formé en <em>teatro</em>, <em>locución</em>, <em>yoga infantil y familiar</em>, <em>psicología transpersonal</em> y como <em>facilitadora de círculos de mujeres</em> enfocados en el autoconocimiento. Actualmente, me encuentro en formación como <em>educadora de movimiento somático</em>. A lo largo de los años, he integrado todo ese camino en una forma de <strong>comunicar con propósito y sentido</strong>.
        </p>

        <p className="mb-4 text-xl">
          Mi <strong>propósito de vida</strong> es participar en <strong>proyectos que promuevan el autoconocimiento del ser</strong>. Creo profundamente que, así como se enseña matemáticas o historia, desde pequeños deberíamos aprender sobre <em>autoconocimiento</em>, <em>regulación emocional</em> y <em>vinculación consciente</em> con nosotros mismos, con los demás y con nuestro hábitat. Desde ahí, siento que pueden cambiar muchas cosas en el mundo.
        </p>

        <p className="mb-4 text-xl">
          La <strong>moda</strong> también ha sido parte de mi <em>lenguaje expresivo</em>. Hoy impulso una <strong>moda con sentido</strong>, como una forma de proyectar desde dentro hacia afuera, del ser hacia el vestir. <strong>Habitar el cuerpo con conciencia</strong>, <strong>conocerse</strong> y <strong>expresarse con autenticidad</strong>.
        </p>

        <p>
          Actualmente, integro todas estas dimensiones desde mi rol como <strong>comunicadora en redes</strong>, <strong>creando proyectos con propósito</strong> y <strong>compartiendo contenido desde mi ser auténtico</strong>. Mi mayor maestra es mi hija <strong>Selva</strong>, quien me recuerda cada día lo esencial: <em>vivir con presencia y profundidad</em>.
        </p>
      </div>
    </section>
  );
};