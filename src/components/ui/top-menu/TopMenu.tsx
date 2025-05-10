'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaCalendarAlt, FaBars, FaTimes, FaHome, FaChurch, FaPhotoVideo, FaHandsHelping } from 'react-icons/fa';
import Image from 'next/image';

export const TopMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '/', icon: <FaHome className="text-white" /> },
    { name: 'Quiénes Somos', href: '/quienessomos', icon: <FaChurch className="text-white" /> },
    { name: 'Eventos', href: '#events', icon: <FaCalendarAlt className="text-white" /> },
    { name: 'Galería', href: '#gallery', icon: <FaPhotoVideo className="text-white" /> },
    { name: 'Contacto', href: '#contact', icon: <FaHandsHelping className="text-white" /> },
  ];

  return (
    <>
      {/* Desktop Menu */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-gradient-to-r from-blue-400 to-teal-400 shadow-lg py-2 h-16' : 'bg-gradient-to-r from-blue-400 to-teal-400 py-4 h-20'}`}
        >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#inicio" className="flex items-center">
              <Image 
                src="https://jmvinter.org/wp-content/uploads/2021/03/JMV-Logo-ES-favicon.png"
                width={50}
                height={50}
                alt="JMV"
                className="hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className="relative px-5 py-2.5 flex items-center group"
                  >
                    <div className="flex items-center space-x-2">
                      <motion.span
                        animate={{
                          scale: hoveredItem === index ? 1.2 : 1,
                          rotate: hoveredItem === index ? 5 : 0
                        }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {item.icon}
                      </motion.span>
                      <motion.span
                        className="text-white font-medium text-sm tracking-wide"
                        initial={{ color: '#ffffff' }}
                        animate={{ 
                          color: hoveredItem === index ? '#fef3c7' : '#ffffff',
                          x: hoveredItem === index ? 3 : 0
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                    </div>
                    
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: hoveredItem === index ? 1 : 0,
                        originX: 0
                      }}
                      transition={{ 
                        type: 'spring',
                        stiffness: 300,
                        damping: 20
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-white focus:outline-none p-2 rounded-lg bg-white/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-20 left-0 right-0 bg-gradient-to-b from-blue-400 to-teal-500 z-40 md:hidden shadow-xl"
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-4 text-white hover:text-amber-100 transition-colors py-3 px-4 rounded-lg hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-xl">
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};