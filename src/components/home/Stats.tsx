import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Stats: React.FC = () => {
  const stats = [
    {
      value: 2500,
      label: 'Utilisateurs',
      icon: '🧑‍🎓',
      suffix: '+',
      color: 'from-blue-400 to-blue-600'
    },
    {
      value: 15000,
      label: 'Courses partagées',
      icon: '🛒',
      suffix: '+',
      color: 'from-green-400 to-green-600'
    },
    {
      value: 1250,
      label: 'Heures économisées',
      icon: '⏱️',
      suffix: 'h',
      color: 'from-purple-400 to-purple-600'
    },
    {
      value: 98,
      label: 'Satisfaction',
      icon: '😃',
      suffix: '%',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute -top-10 right-0 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-60 h-60 rounded-full bg-cyan-100/30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            CampusCourses en chiffres
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Notre communauté d'étudiants n'attend plus que vous !
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <CounterCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatProps {
  value: number;
  label: string;
  icon: string;
  suffix: string;
  color: string;
}

interface CounterCardProps {
  stat: StatProps;
  index: number;
}

const CounterCard: React.FC<CounterCardProps> = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // ms
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      const easeOutQuad = (t: number) => t * (2 - t);
      
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        setCount(Math.floor(progress * stat.value));
        
        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(stat.value);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    }
  }, [isInView, stat.value]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col items-center"
    >
      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-2xl mb-4 shadow-md`}>
        {stat.icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-baseline">
        <span>{isInView ? count : 0}</span>
        <span className="text-lg font-medium text-gray-600 ml-1">{stat.suffix}</span>
      </h3>
      <p className="text-gray-600 mt-2 text-center">{stat.label}</p>
    </motion.div>
  );
};

export default Stats;
