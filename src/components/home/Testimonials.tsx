import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Étudiante en droit",
      avatar: "👩‍🎓",
      content: "CampusCourses m'a fait gagner un temps précieux ! Plus besoin de m'absenter de la bibliothèque pendant mes révisions, un autre étudiant m'a ramené mes courses. Génial !",
      rating: 5
    },
    {
      id: 2,
      name: "Thomas Lefèvre",
      role: "Étudiant en informatique",
      avatar: "👨‍💻",
      content: "En tant qu'étudiant qui aime aider, j'arrondis mes fins de mois en faisant les courses pour d'autres. Je me déplace de toute façon, alors pourquoi ne pas en faire profiter mes camarades ?",
      rating: 5
    },
    {
      id: 3,
      name: "Sophie Moreau",
      role: "Étudiante en médecine",
      avatar: "👩‍⚕️",
      content: "Avec mes horaires chargés, faire les courses était une vraie corvée. Maintenant je demande à un étudiant qui s'y rend déjà. Cela me fait gagner plus d'une heure chaque semaine !",
      rating: 4
    },
    {
      id: 4,
      name: "Lucas Bernard",
      role: "Étudiant en architecture",
      avatar: "👨‍🎨",
      content: "J'ai rencontré plein d'autres étudiants grâce à CampusCourses. Au-delà du service pratique, ça crée vraiment du lien social sur le campus !",
      rating: 5
    },
    {
      id: 5,
      name: "Emma Laurent",
      role: "Étudiante en biologie",
      avatar: "👩‍🔬",
      content: "Le système de vérification des profils est vraiment rassurant. Je n'hésite pas à confier ma liste de courses, sachant que je peux faire confiance à l'autre étudiant.",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  // Affichage des étoiles de notation
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
    ));
  };

  return (
    <section id="temoignages" className="py-20 bg-white relative overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Ce que disent nos utilisateurs
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Découvrez les expériences des étudiants qui utilisent CampusCourses au quotidien.
          </motion.p>
        </div>
        
        {/* Carousel pour écrans moyens et grands */}
        <div className="hidden md:block">
          <div className="relative mx-auto max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 shadow-lg border border-blue-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                  {/* Avatar et infos */}
                  <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl mb-4 shadow-md">
                      {testimonials[activeIndex].avatar}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{testimonials[activeIndex].name}</h3>
                    <p className="text-blue-600 text-sm">{testimonials[activeIndex].role}</p>
                    <div className="flex mt-2">
                      {renderStars(testimonials[activeIndex].rating)}
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="lg:col-span-4">
                    <svg className="text-blue-500 w-12 h-12 mb-4 opacity-30" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8v6a4 4 0 0 1-8 0V8.8A7.8 7.8 0 0 1 9.8 1l.2 1A6.8 6.8 0 0 0 3.2 8H6a2 2 0 0 1 4 0zm18 0v6a4 4 0 0 1-8 0V8.8A7.8 7.8 0 0 1 27.8 1l.2 1A6.8 6.8 0 0 0 21.2 8H24a2 2 0 0 1 4 0z" />
                    </svg>
                    <p className="text-lg md:text-xl text-gray-700 italic">"{testimonials[activeIndex].content}"</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation */}
            <div className="flex justify-center md:justify-between items-center mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden md:flex w-12 h-12 rounded-full bg-white shadow-md items-center justify-center text-blue-600 border border-gray-200 hover:bg-blue-50 transition-colors duration-300"
                onClick={prevTestimonial}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'
                    }`}
                    onClick={() => goToTestimonial(index)}
                    aria-label={`Témoignage ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden md:flex w-12 h-12 rounded-full bg-white shadow-md items-center justify-center text-blue-600 border border-gray-200 hover:bg-blue-50 transition-colors duration-300"
                onClick={nextTestimonial}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Version mobile */}
        <div className="md:hidden">
          <div className="space-y-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 shadow-md border border-blue-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl">
                      {testimonial.avatar}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-blue-600 text-xs">{testimonial.role}</p>
                    <div className="flex mt-1 mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-700 text-sm">"{testimonial.content}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <button className="text-blue-600 font-medium text-sm flex items-center mx-auto hover:text-blue-800 transition-colors duration-300">
              <span>Voir plus de témoignages</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
