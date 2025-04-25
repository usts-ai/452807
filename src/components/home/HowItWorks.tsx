import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: '🧑‍🎓',
      title: 'Créez votre profil',
      description: 'Inscrivez-vous en quelques clics et créez votre profil étudiant. Indiquez vos préférences et informations de contact.'
    },
    {
      icon: '📍',
      title: 'Planifiez vos courses',
      description: 'Indiquez quand et où vous allez faire vos courses. Précisez l\'heure et le magasin que vous comptez visiter.'
    },
    {
      icon: '📝',
      title: 'Recevez des demandes',
      description: 'D\'autres étudiants peuvent vous demander de récupérer leurs achats lors de votre trajet au magasin.'
    },
    {
      icon: '🛍️',
      title: 'Faites les courses',
      description: 'Effectuez vos propres courses ainsi que celles de vos camarades selon les listes qu\'ils vous ont fournies.'
    },
    {
      icon: '🤝',
      title: 'Livrez et recevez',
      description: 'Retrouvez l\'étudiant sur le campus pour lui remettre ses achats. Simple, rapide et pratique !'
    }
  ];

  return (
    <section id="comment-ca-marche" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute top-40 -right-10 w-40 h-40 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-cyan-200/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4"
          >
            Simple et intuitif
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Comment fonctionne CampusCourses
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Un processus simple en 5 étapes pour partager vos trajets et faire récupérer vos courses.
          </motion.p>
        </div>
        
        {/* Timeline Desktop */}
        <div className="hidden lg:block relative">
          {/* Ligne centrale */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 top-16 h-1 w-4/5 bg-gradient-to-r from-blue-300 to-blue-600 origin-left"
          />
          
          <div className="grid grid-cols-5 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center ${index % 2 === 0 ? 'mt-0 mb-32' : 'mt-32 mb-0'}`}
              >
                {/* Point sur la timeline */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg mb-4">
                  {index + 1}
                </div>
                
                {/* Contenu */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 w-full hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Timeline Mobile & Tablet */}
        <div className="lg:hidden">
          <div className="flex flex-col space-y-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-lg shadow-md">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="h-full w-0.5 bg-blue-200 my-2"></div>
                  )}
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 flex-1 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl mb-3">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Commencer maintenant
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
