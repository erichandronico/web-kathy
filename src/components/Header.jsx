import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#bio', label: 'Biografía' },
    { href: '#modelo', label: 'Modelo' },
    { href: '#publicidad', label: 'Publicidad' },
    { href: '#animacion', label: 'Animación' },
    // { href: '#productos', label: 'Productos' },
    // { href: '#blog', label: 'Blog' },
  ];

  const nombre = "Kathy Contreras"

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Degradado superior */}
      <div className="absolute inset-0 h-24 bg-gradient-to-b from-black/70 via-black/50 to-transparent pointer-events-none z-[-1]" />

      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mt-2 font-nobel text-4xl drop-shadow text-[rgb(209,209,209)] hover:text-[rgb(235,235,235)] transition-colors duration-200">
          {/* {nombre.toUpperCase()} 
          { ' ' } */}
          {nombre}
        </div>

        {/* Desktop nav */}
        <nav className="mt-3 font-nobel text-xl space-x-6 hidden md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-ocre font-medium transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón menú mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-petroleo text-white px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-medium text-lg hover:text-ocre transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};