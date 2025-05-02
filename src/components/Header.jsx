export const Header = () => {
    return (
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-3xl font-bold text-white drop-shadow">Kathy Contreras</div>
  
          {/* Navegación */}
          <nav className="space-x-6 hidden md:block">
            <a href="#esencia" className="text-white hover:text-ocre font-medium transition">Esencia</a>
            <a href="#maternidad" className="text-white hover:text-ocre font-medium transition">Maternidad</a>
            <a href="#movimiento" className="text-white hover:text-ocre font-medium transition">Movimiento</a>
            <a href="#tv" className="text-white hover:text-ocre font-medium transition">TV</a>
          </nav>
        </div>
      </header>
    );
  };