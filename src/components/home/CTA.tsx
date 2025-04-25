import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Arrière-plan avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      
      {/* Formes décoratives */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/5 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-blue-300/20 to-cyan-300/20 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl border border-white/20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Prêt à rejoindre la communauté CampusCourses ?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
            >
              Inscrivez-vous dès maintenant et commencez à partager vos trajets de courses avec d'autres étudiants de votre campus. Économisez du temps, de l'argent et créez des liens !
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 font-medium py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Créer un compte
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-700/30 text-white border border-white/30 font-medium py-3.5 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-blue-700/40 transition-all duration-300"
              >
                En savoir plus
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 text-blue-100 text-sm flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4"
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Installation rapide</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sans engagement</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Support communautaire</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <div className="inline-flex items-center space-x-8">
              <span className="text-white/80 text-sm">Disponible sur</span>
              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 12.323C17.5 14.1 16.369 15.678 14.85 16.438C14.841 16.5 14.7 16.729 14.952 17.09C15.1 17.318 15.6 17.959 15.137 18.481C14.844 18.812 14.3 18.89 13.5 18.488C12.765 18.116 12.17 18.19 11.743 18.305C11.18 18.453 10.6 18.85 9.627 18.492C8.825 18.19 8.168 17.38 7.746 16.5C6.679 14.46 6.55 12.215 7.198 10.643C7.675 9.478 8.503 8.748 9.424 8.737C10.098 8.729 10.615 9.135 11.026 9.441C11.332 9.674 11.588 9.853 11.816 9.853C12.044 9.853 12.278 9.685 12.581 9.462C13.059 9.101 13.688 8.651 14.52 8.716C15.213 8.765 15.775 9.064 16.189 9.524C16.603 9.982 16.858 10.586 16.95 11.321C16.966 11.445 16.971 11.573 16.983 11.704C17.064 11.95 17.5 12.022 17.5 12.323M13 5.5C13 4.748 13.231 4.04 13.645 3.52C14.089 2.981 14.716 2.655 15.382 2.652C15.496 3.283 15.385 3.916 15.073 4.454C14.786 4.95 14.242 5.43 13.511 5.499C13.499 5.5 13.35 5.5 13 5.5Z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-white/80 text-xs">Télécharger sur l'</p>
                    <p className="text-white font-medium">App Store</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 20.82C3.53 21.59 4.28 22 5.13 22C5.7 22 6.33 21.82 7.03 21.47L12 18.85L16.97 21.47C17.67 21.82 18.3 22 18.87 22C19.72 22 20.47 21.59 20.82 20.82C21.17 20.05 21.07 19.07 20.55 18.06L18.96 15.18C19.25 14.06 19.83 12.59 20.53 11.34C21.3 9.94 21.75 8.53 21.86 7.46C21.93 6.84 21.84 6.31 21.58 5.91C21.32 5.5 20.92 5.29 20.42 5.29H15.64C16.37 4.19 16.85 3.38 16.85 2.94C16.85 2.82 16.85 2.82 16.81 2.65C16.67 1.93 16.12 1.5 15.29 1.5C15.15 1.5 15 1.53 14.84 1.58C13.85 1.96 12.92 2.93 12.08 4.46C11.94 4.73 11.81 5 11.7 5.29H3.58C3.07 5.29 2.68 5.5 2.42 5.91C2.16 6.31 2.07 6.84 2.14 7.46C2.25 8.53 2.7 9.94 3.47 11.34C4.17 12.59 4.75 14.06 5.04 15.18L3.45 18.06C2.93 19.07 2.83 20.05 3.18 20.82M4.4 6.29H10.87C11.06 5.83 11.31 5.05 12.03 3.75C12.57 2.76 13.12 2.14 13.6 1.93C13.65 1.91 13.69 1.9 13.73 1.9C13.78 1.9 13.83 1.92 13.88 1.97C13.93 2.04 13.95 2.25 13.86 2.58C13.81 2.8 13.77 2.82 13.71 2.92C13.28 3.58 12.68 4.77 12.5 5H20.42C20.64 5 20.73 5.11 20.75 5.14C20.78 5.2 20.8 5.33 20.8 5.56C20.71 6.45 20.31 7.69 19.62 8.93C18.86 10.29 18.21 11.9 17.91 13.25L17.83 13.62L18.15 14.19L19.84 17.27C20.18 17.96 20.29 18.56 20.13 18.9C19.96 19.26 19.5 19.5 18.87 19.5C18.48 19.5 18.06 19.36 17.55 19.13L12 16.2L6.45 19.13C5.94 19.36 5.52 19.5 5.13 19.5C4.5 19.5 4.04 19.26 3.87 18.9C3.71 18.56 3.82 17.96 4.16 17.27L5.85 14.19L6.17 13.62L6.09 13.25C5.79 11.9 5.14 10.29 4.38 8.93C3.69 7.69 3.29 6.45 3.2 5.56C3.2 5.33 3.22 5.2 3.25 5.14C3.27 5.11 3.36 5 3.58 5H4.4V6.29Z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-white/80 text-xs">Disponible sur</p>
                    <p className="text-white font-medium">Google Play</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
