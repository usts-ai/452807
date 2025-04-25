import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Sections du footer
  const sections = [
    {
      title: "CampusCourses",
      links: [
        { name: "À propos", href: "#" },
        { name: "Carrières", href: "#" },
        { name: "Actualités", href: "#" },
        { name: "Centre d'aide", href: "#" }
      ]
    },
    {
      title: "Communauté",
      links: [
        { name: "Devenir coursier", href: "#" },
        { name: "Partenaires", href: "#" },
        { name: "Campus affiliés", href: "#" },
        { name: "Événements", href: "#" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Guides", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Sécurité", href: "#" }
      ]
    },
    {
      title: "Légal",
      links: [
        { name: "Conditions d'utilisation", href: "#" },
        { name: "Politique de confidentialité", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "Mentions légales", href: "#" }
      ]
    }
  ];

  // Médias sociaux
  const socialMedia = [
    { name: "Facebook", icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
    { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.029 10.029 0 01-3.127 1.191 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.907 4.907 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.892 9.892 0 01-6.102 2.105c-.39 0-.777-.023-1.157-.067a13.995 13.995 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63A9.964 9.964 0 0024 4.59z" },
    { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
    { name: "LinkedIn", icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      {/* Contenu principal du footer */}
      <div className="container mx-auto pt-16 pb-8 px-4 md:px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Logo et description */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Campus<span className="text-blue-400">Courses</span></h3>
              <p className="text-gray-300 text-sm">
                La plateforme qui connecte les étudiants pour partager leurs trajets de courses et économiser du temps.
              </p>
              <div className="flex space-x-4 mt-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={social.icon} />
                    </svg>
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sections de liens */}
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="flex flex-col space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-300 flex items-center"
                      whileHover={{ x: 4 }}
                    >
                      <span className="mr-1">›</span> {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 px-4 py-6 bg-gradient-to-r from-blue-700/30 to-blue-600/30 rounded-2xl backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">Restez informé</h3>
              <p className="text-gray-300 text-sm mt-1">Inscrivez-vous à notre newsletter pour recevoir nos actualités</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/10 backdrop-blur-lg text-white placeholder-gray-300 border border-white/20"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  S'abonner
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright et mentions légales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CampusCourses. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-300 text-xs transition-colors duration-300">
              Conditions générales
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-xs transition-colors duration-300">
              Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-xs transition-colors duration-300">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
