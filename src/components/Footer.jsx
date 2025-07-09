import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-secundario text-white px-6 py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <p className="text-base font-semibold">Mis Canales de Contacto</p>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.instagram.com/kathy_co11/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ocre"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@Kathy_Contreras"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ocre"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="mailto:katherinaluz11@gmail.com"
            className="hover:text-ocre"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <hr className="border-white/20 my-4 w-1/3 mx-auto" />
        <p className="text-xs text-white/70">
          © {new Date().getFullYear()} Kathy Contreras. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};