import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() * 0.5 + 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/me.jpeg" 
                  alt="Mouad Maafi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6"
          >
            👋 Salut, je suis{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mouad
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-4"
          >
            Passionné d'<span className="text-blue-400 font-semibold">intelligence artificielle</span>, 
            explorateur d'idées et créateur de solutions concrètes.
            <br className="hidden md:block" />
            Je construis des projets autour de la donnée, de l'IA et de la technologie intelligente.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 px-4"
          >
            Ensemble, transformons des idées en actions.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12 px-4"
          >
            <motion.a
              href="#projets"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-center"
            >
              Découvrir mes projets
            </motion.a>
            
            <motion.a
              href="/CV_Mouad_MAAFI.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border border-gray-600 text-gray-300 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Télécharger CV
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/mouad-dot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mouad-m-370814310/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:mouadmaafi1@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;