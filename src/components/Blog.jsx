export const Blog = () => {
    const posts = [
      {
        titulo: 'La maternidad consciente',
        resumen: 'Reflexiones sobre el vínculo emocional, el autocuidado y la presencia en la crianza actual.',
        imagen: '/assets/blog2.jpg',
        enlace: '#',
      },
      {
        titulo: 'Yoga como medicina emocional',
        resumen: 'Cómo la práctica del yoga puede ayudarte a gestionar el estrés, la ansiedad y las emociones acumuladas.',
        imagen: '/assets/blog2.jpg',
        enlace: '#',
      },
      {
        titulo: 'Bienestar con propósito',
        resumen: 'Más allá del cuerpo: cómo integrar mente, espíritu y energía en tu vida cotidiana.',
        imagen: '/assets/blog2.jpg',
        enlace: '#',
      },
    ];
  
    return (
      <section id="blog" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-vino mb-12">Blog</h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-fondo rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img src={post.imagen} alt={post.titulo} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-petroleo mb-2">{post.titulo}</h3>
                  <p className="text-texto text-sm mb-4">{post.resumen}</p>
                  <a
                    href={post.enlace}
                    className="text-primario hover:text-secundario font-medium transition-colors"
                  >
                    Leer más →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };