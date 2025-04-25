import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Arrière-plan avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50"></div>
      
      {/* Formes décoratives (cercles et lignes) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-300/20 to-blue-400/20 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-l from-cyan-300/20 to-blue-300/20 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-60 h-60 rounded-full bg-gradient-to-l from-blue-200/30 to-purple-200/30 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Contenu Hero - Côté gauche */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                Nouveau sur le campus
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Partagez vos trajets de <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">courses</span> entre étudiants
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-xl"
            >
              CampusCourses connecte les étudiants pour partager leurs trajets de courses. Gagnez du temps et de l'argent en faisant récupérer vos achats par d'autres étudiants qui font déjà le déplacement.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                Commencer maintenant
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 border border-blue-200 font-medium py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
              >
                <span>Comment ça marche</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-4 mt-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(id => (
                  <div key={id} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-800">
                    {id}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">+2500</span> étudiants utilisent déjà notre application
              </p>
            </motion.div>
          </motion.div>
          
          {/* Image Hero - Côté droit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-3 rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                {/* Placeholder pour l'image */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 flex items-center justify-center">
                    <div className="text-6xl text-blue-600/20">📱</div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 w-3/4 m-auto shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                          🛒
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Nouvelle demande de course</h3>
                          <p className="text-gray-600 text-sm">Martin va au Carrefour à 14h. Vous pouvez lui demander de récupérer vos courses.</p>
                          <div className="flex space-x-2 mt-3">
                            <button className="bg-blue-600 text-white text-xs rounded-full px-3 py-1">Accepter</button>
                            <button className="bg-gray-200 text-gray-700 text-xs rounded-full px-3 py-1">Refuser</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300 rounded-full opacity-30 blur-xl"></div>
            
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -left-8 top-1/4 bg-white rounded-lg shadow-lg p-2.5 flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                ✓
              </div>
              <div>
                <p className="text-xs font-medium text-gray-800">Course livrée</p>
                <p className="text-xs text-gray-500">il y a 3 min</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-lg shadow-lg p-2.5"
            >
              <div className="flex items-center space-x-1">
                <div className="text-yellow-500">★★★★★</div>
                <p className="text-xs font-medium text-gray-800">4.9/5</p>
              </div>
              <p className="text-xs text-gray-500">250 avis</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
