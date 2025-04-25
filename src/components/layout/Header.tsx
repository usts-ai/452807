import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Comment ça marche', href: '#comment-ca-marche' },
    { name: 'Avantages', href: '#avantages' },
    { name: 'Témoignages', href: '#temoignages' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Campus<span className="text-blue-600">Courses</span></span>
        </motion.div>
        
        {/* Navigation sur desktop */}
        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex space-x-8"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className={`text-sm font-medium transition duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>
        
        {/* Boutons d'action */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Connexion
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            S'inscrire
          </motion.button>
        </motion.div>
        
        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md p-2"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 py-2 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 mt-2">
                <button className="text-blue-600 font-medium py-2">
                  Connexion
                </button>
                <button className="bg-blue-600 text-white font-medium py-2.5 rounded-full shadow-md">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
