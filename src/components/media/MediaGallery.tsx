'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import type { Swiper as SwiperClass } from 'swiper';

const MediaGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  
  const mediaFiles = [
    { name: '/Imagen de WhatsApp 2025-05-09 a las 22.58.15_0ab137e2.jpg', type: 'image', year: '2011' },
    { name: '/Imagen de WhatsApp 2025-05-09 a las 22.58.16_90fc055c.jpg', type: 'image', year: '2020' },
    { name: '/Imagen de WhatsApp 2025-05-09 a las 22.58.169_4bdfda27.jpg', type: 'image', year: '2021' },
    { name: '/Imagen de WhatsApp 2025-05-10 a las 00.31.47_a01f1edb.jpg', type: 'image', year: '2022' },
    { name: '/Imagen de WhatsApp 2025-05-10 a las 00.31.47_c103f9d3.jpg', type: 'image', year: '2023' },
    { name: '/Imagen de WhatsApp 2025-05-10 a las 00.31.47_d99aac49.jpg', type: 'image', year: '2024' },
    { name: '/Imagen de WhatsApp 2025-05-10 a las 00.31.48_7027b94b.jpg', type: 'image', year: '2025' },
    { name: '/Imagen de WhatsApp 2025-05-10 a las 00.31.48_b5bb65bb.jpg', type: 'image', year: '2026' },
    { name: '/Video de WhatsApp 2025-05-09 a las 22.58.17_20be4958.mp4', type: 'video', year: '2027' }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-3xl"> {/* Contenedor más estrecho */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-bold text-blue-800 font-serif">
            Nuestra Comunidad
          </h2>
          <div className="w-12 h-0.5 bg-teal-400 mx-auto mt-2 rounded-full"></div>
        </motion.div>

        {/* Swiper principal compacto */}
        <div className="mb-2 rounded-lg overflow-hidden shadow-md">
          <Swiper
            style={{
              '--swiper-navigation-color': '#3b82f6',
              '--swiper-pagination-color': '#3b82f6',
            } as React.CSSProperties}
            spaceBetween={8}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-48 md:h-80" // Altura reducida
          >
            {mediaFiles.map((file, index) => (
              <SwiperSlide key={index} className="relative bg-gray-100">
                {file.type === 'image' ? (
                  <Image
                    src={encodeURI(file.name)}
                    alt={`Actividad JMV ${file.year}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <video
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src={encodeURI(file.name)} type="video/mp4" />
                  </video>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Miniaturas más pequeñas */}
        <div className="mt-1">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={6}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-16" // Altura reducida
          >
            {mediaFiles.map((file, index) => (
              <SwiperSlide key={index} className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                {file.type === 'image' ? (
                  <Image
                    src={encodeURI(file.name)}
                    alt={`Miniatura ${file.year}`}
                    fill
                    className="object-cover rounded-sm"
                    unoptimized
                  />
                ) : (
                  <div className="relative w-full h-full bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;