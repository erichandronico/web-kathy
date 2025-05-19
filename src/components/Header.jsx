export const Header = () => {
    return (
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-3xl font-bold text-white drop-shadow">Kathy Contreras</div>
  
          {/* Navegación */}
          <nav className="space-x-6 hidden md:block">
            <a href="#bio" className="text-white hover:text-ocre font-medium transition">Biografía</a>
            <a href="#publicidad" className="text-white hover:text-ocre font-medium transition">Publicidad</a>
            <a href="#Modelo" className="text-white hover:text-ocre font-medium transition">Modelo</a>
            <a href="#animacion" className="text-white hover:text-ocre font-medium transition">Animación</a>
            <a href="#productos" className="text-white hover:text-ocre font-medium transition">Productos</a>
            <a href="#blog" className="text-white hover:text-ocre font-medium transition">Blog</a>
          </nav>
        </div>
      </header>
    );
  };