/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
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