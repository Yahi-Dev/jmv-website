"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MediaGallery from "../media/MediaGallery";

export const HomeJMV = () => {
  // Frases motivadoras mejoradas
  const motivationalPhrases = [
    {
      text: "Tu fe puede mover montañas, tu amor puede cambiar el mundo",
      reference: "Mateo 17:20",
    },
    {
      text: "María nos muestra el camino: servir con humildad y amor",
      reference: "Lucas 1:38",
    },
    {
      text: "Juntos somos más fuertes, juntos podemos más",
      reference: "Eclesiastés 4:9",
    },
    {
      text: "En cada pobre, encontramos el rostro de Cristo",
      reference: "Mateo 25:40",
    },
    {
      text: "La juventud es el ahora de Dios en tu vida",
      reference: "1 Timoteo 4:12",
    },
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % motivationalPhrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white pt-20 md:pt-24">
      {/* Sección de Frases Motivadoras - Diseño Premium */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl">
        {/* Fondo sutil con textura */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/cross-pattern-light.svg')] bg-repeat bg-[size:80px]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Título con más espacio */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-serif">
              Inspiración para tu camino
            </h2>
            <div className="w-20 h-1 bg-teal-400/50 mx-auto rounded-full"></div>
          </motion.div>

          {/* Contenedor de frases con más altura y espacio */}
          <div className="min-h-[220px] flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhrase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                {/* Contenedor de frase con bordes redondeados y sombra suave */}
                <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  {/* Comillas decorativas más sutiles */}
                  <svg
                    className="w-8 h-8 text-blue-300 absolute left-2 top-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                    />
                  </svg>

                  {/* Texto principal con color más suave */}
                  <p className="text-xl md:text-2xl text-gray-700 font-medium px-6 leading-relaxed">
                    "{motivationalPhrases[currentPhrase].text}"
                  </p>

                  <svg
                    className="w-8 h-8 text-blue-300 absolute right-2 bottom-2 transform rotate-180"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                    />
                  </svg>
                </div>

                {/* Referencia bíblica con estilo más discreto */}
                <p className="text-blue-500/80 mt-4 text-sm font-medium">
                  {motivationalPhrases[currentPhrase].reference}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicadores de navegación más sutiles */}
          <div className="flex justify-center space-x-2">
            {motivationalPhrases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhrase(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPhrase === index ? "bg-teal-500 w-4" : "bg-blue-200"
                }`}
                aria-label={`Ir a frase ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección Quiénes Somos - Diseño Elegante */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <MediaGallery/>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="mb-6">
                <span className="text-blue-600 font-semibold tracking-wider">
                  SOBRE NOSOTROS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
                  Quiénes Somos
                </h2>
                <div className="w-16 h-1 bg-blue-500 mt-4"></div>
              </div>

              <div className="prose prose-lg text-gray-600">
                <p className="text-lg leading-relaxed">
                  La{" "}
                  <strong className="text-blue-700">
                    Asociación Internacional de Juventud Mariana Vicenciana
                    (JMV)
                  </strong>{" "}
                  es la renovación de la Asociación de Hijas e Hijos de María
                  que tuvo su origen en las apariciones de la Virgen María a
                  santa Catalina Labouré el 18 de julio de 1830.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Somos una asociación juvenil internacional comprometida con
                  los jóvenes, el mundo, la Iglesia y los pobres. En la
                  actualidad estamos presentes en{" "}
                  <strong className="text-blue-700">78 países</strong>, con más
                  de <strong className="text-blue-700">30.000 miembros</strong>{" "}
                  repartidos por los cinco continentes.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-blue-600 font-bold text-2xl">78</div>
                  <div className="text-gray-600 text-sm">Países</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-blue-600 font-bold text-2xl">30K+</div>
                  <div className="text-gray-600 text-sm">Miembros</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección Nuestra Identidad - Diseño de Tarjetas Premium */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold tracking-wider">
              NUESTRA ESENCIA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Nuestra Identidad
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Eclesial */}
            <motion.div
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-blue-600 p-6 text-center">
                <div className="text-white text-4xl mb-2">⛪</div>
                <h3 className="text-xl font-bold text-white">ECLESIAL</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Los miembros de la Asociación se comprometen a vivir y
                  trabajar activa y responsablemente en comunión con los
                  miembros de la Iglesia y sus pastores desde el ámbito mundial
                  y local.
                </p>
              </div>
            </motion.div>

            {/* Laical */}
            <motion.div
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-teal-500 p-6 text-center">
                <div className="text-white text-4xl mb-2">🙋‍♂️</div>
                <h3 className="text-xl font-bold text-white">LAICAL</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Es una Asociación formada por jóvenes laicos, dentro del marco
                  de las Asociaciones Laicas Internacionales de fieles (cf. Can.
                  298-329).
                </p>
              </div>
            </motion.div>

            {/* Mariana */}
            <motion.div
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-purple-500 p-6 text-center">
                <div className="text-white text-4xl mb-2">🌹</div>
                <h3 className="text-xl font-bold text-white">MARIANA</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Los miembros de JMV se comprometen a seguir a Cristo.
                  Descubren en el Evangelio a María como modelo de todo
                  creyente, que acoge la fe, escucha la Palabra de Dios y vive
                  de acuerdo con ella.
                </p>
              </div>
            </motion.div>

            {/* Vicenciana */}
            <motion.div
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-amber-500 p-6 text-center">
                <div className="text-white text-4xl mb-2">✝️</div>
                <h3 className="text-xl font-bold text-white">VICENCIANA</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Por su nacimiento en el seno de la Familia de San Vicente de
                  Paúl, nos inspiramos en el carisma Vicenciano y hacemos de la
                  evangelización y del servicio a los pobres una característica
                  distintiva de su presencia en la Iglesia.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
