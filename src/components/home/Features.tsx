import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🛒',
      title: 'Partage de trajets',
      description: 'Indiquez quand vous allez faire vos courses et permettez à d\'autres étudiants de vous confier leurs listes d\'achats.'
    },
    {
      icon: '⏱️',
      title: 'Économisez du temps',
      description: 'Plus besoin de vous déplacer pour chaque achat. Un autre étudiant peut récupérer vos courses lors de son trajet.'
    },
    {
      icon: '💰',
      title: 'Économisez de l\'argent',
      description: 'Partagez les frais de transport et optimisez vos dépenses communes avec d\'autres étudiants.'
    },
    {
      icon: '🌿',
      title: 'Écologique',
      description: 'Moins de trajets individuels, c\'est moins d\'émissions de CO2. Participez à la réduction de l\'empreinte carbone du campus.'
    },
    {
      icon: '🤝',
      title: 'Entraide communautaire',
      description: 'Renforcez les liens entre étudiants grâce à un système basé sur l\'entraide et la collaboration.'
    },
    {
      icon: '🔒',
      title: 'Sécurisé et fiable',
      description: 'Système de notation et vérification des profils pour garantir des échanges en toute confiance.'
    }
  ];

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="avantages" className="py-20 bg-white relative overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="absolute -top-10 left-1/4 w-64 h-64 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-cyan-100/40 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Pourquoi utiliser <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">CampusCourses</span> ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Découvrez les avantages de notre plateforme conçue spécialement pour les étudiants.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
              }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
            <span>Voir plus d'avantages</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
