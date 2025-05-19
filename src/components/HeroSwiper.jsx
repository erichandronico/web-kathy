import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';

const slides = [
    {
      imagen: '/assets/hero1.jpg',
      titulo: 'Conecta con tu esencia',
      subtitulo: 'Bienestar emocional, arte y consciencia',
      enlace: "#esencia"
    },
    {
      imagen: '/assets/hero2_c.jpg',
      titulo: 'Maternidad con propósito',
      subtitulo: 'Crianza, presencia y amor propio',
      enlace: "#maternidad"
    },
    {
      imagen: '/assets/hero3.jpg', // Reemplaza con una imagen de Kathy animando TV
      titulo: 'Rostro de Televisión',
      subtitulo: 'Conducción, presencia escénica y conexión con la audiencia',
      enlace: "#tv"
    },
    {
      imagen: '/assets/hero4.jpg',
      titulo: 'Movimiento y transformación',
      subtitulo: 'Yoga, danza y energía femenina',
      enlace: "#movimiento"
    },
  ];
  

// const slides = [
//   {
//     imagen: '/assets/hero1.jpg',
//     titulo: 'HEDÓNICA',
//     subtitulo: 'CONOCE LA COLECCIÓN',
//     enlace: '#coleccion',
//   },
//   {
//     imagen: '/assets/hero2.jpg',
//     titulo: 'VIBRA ALTA',
//     subtitulo: 'VESTIR CON PROPÓSITO',
//     enlace: '#vibra',
//   },
//   {
//     imagen: '/assets/hero3.jpg',
//     titulo: 'MOVIMIENTO',
//     subtitulo: 'ARTE · ENERGÍA · EXPRESIÓN',
//     enlace: '#movimiento',
//   },
// ];

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };
  

  export const HeroSwiper = () => {
    return (
      <section className="relative h-[90vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
                style={{ backgroundImage: `url(${slide.imagen})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
  
                <div className="relative z-10 text-center px-6 text-white">
                  <motion.h1
                    className="text-5xl md:text-6xl font-extrabold mb-3 text-fondo drop-shadow"
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    variants={containerVariants}
                  >
                    {slide.titulo}
                  </motion.h1>
  
                  <motion.p
                    className="text-2xl font-semibold mb-6 text-white drop-shadow"
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={containerVariants}
                  >
                    {slide.subtitulo}
                  </motion.p>
  
                  <motion.a
                    href={slide.enlace}
                    className="inline-block border-2 border-white text-white hover:bg-white hover:text-petroleo transition-colors px-6 py-3 rounded-full font-semibold"
                    initial="hidden"
                    animate="visible"
                    custom={3}
                    variants={containerVariants}
                  >
                    Ver más
                  </motion.a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
    {/* Corte decorativo inferior estilo ola */}
    {/* Corte decorativo inferior: guatita hacia abajo */}
    <div className="absolute bottom-0 w-full z-10 pointer-events-none">
        <svg
            viewBox="0 0 1440 320"
            className="w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
            fill="#F6F1EB"
            d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
            />
        </svg>
    </div>
      </section>
    );
  };