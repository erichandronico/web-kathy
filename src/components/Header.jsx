import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#bio', label: 'Biografía' },
    { href: '#publicidad', label: 'Publicidad' },
    { href: '#modelo', label: 'Modelo' },
    { href: '#animacion', label: 'Animación' },
    { href: '#productos', label: 'Productos' },
    { href: '#blog', label: 'Blog' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-3xl font-bold text-white drop-shadow">Kathy Contreras</div>

        {/* Desktop nav */}
        <nav className="space-x-6 hidden md:flex">
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

        {/* Hamburger menu button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-petroleo text-white px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)} // Cierra al hacer clic
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