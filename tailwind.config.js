/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 0.6s ease-out',
          'fade-modal': 'fadeModal 0.3s ease-out forwards',
          'fade-image': 'fadeImage 0.4s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(150px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          fadeModal: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          fadeImage: {
            '0%': { opacity: 0, transform: 'translateX(30px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
          },
        },
        colors: {
          fondo: '#F6F1EB',
          texto: '#3B3A36',
          primario: '#9EAE9F',
          secundario: '#C4A69F',
          ocre: '#D2B48C',
          petroleo: '#4A6A6D',
          vino: '#5C3A3A',
        },
        fontFamily: {
          sans: ['"Poppins"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }