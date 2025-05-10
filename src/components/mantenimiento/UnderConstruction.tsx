'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTools, FaHome } from 'react-icons/fa'

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden text-center"
      >
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6">
          <motion.div
            animate={{ rotate: 10, scale: 1.1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5
            }}
            className="inline-block"
          >
            <FaTools className="text-white text-5xl mx-auto" />
          </motion.div>
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Página en Remodelación!</h2>
          <p className="text-gray-600 mb-6">
            Estamos trabajando para mejorar esta sección y ofrecerte una mejor experiencia. 
            Vuelve pronto para descubrir las novedades.
          </p>
          
          <Link href="/" legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors"
            >
              <FaHome className="mr-2" />
              Volver al Inicio
            </motion.a>
          </Link>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            ¿Necesitas ayuda? <a href="mailto:contacto@jmv.org" className="text-blue-600 hover:underline">Contáctanos</a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}