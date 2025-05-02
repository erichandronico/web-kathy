export const Footer = () => {
    return (
      <footer className="bg-secundario text-white px-6 py-6 mt-12">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Kathy Contreras. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-4 text-lg">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocre">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocre">YouTube</a>
            <a href="mailto:contacto@kathycontreras.cl" className="hover:text-ocre">Contacto</a>
          </div>
        </div>
      </footer>
    );
  };