import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, Languages } from 'lucide-react';

const About = () => {
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
    <section id="apropos" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            À propos de{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              moi
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Je suis un étudiant passionné en Intelligence Artificielle, actuellement en deuxième année 
                dans la filière Informatique Décisionnelle et Apprentissage Automatique. Basé au Maroc, 
                originaire d'Oujda, je construis petit à petit un parcours autour de l'analyse de données, 
                du machine learning, de la vision par ordinateur, et du développement Python.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Ce que je cherche aujourd'hui, ce ne sont pas des stages, mais des{' '}
                <span className="text-blue-400 font-semibold">projets concrets, innovants et collaboratifs</span>{' '}
                sur lesquels m'investir, apprendre, et créer un vrai impact.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="text-blue-400" size={20} />
                  <span>Oujda, Maroc</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="text-purple-400" size={20} />
                  <span>20/04/2005</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <GraduationCap className="text-green-400" size={20} />
                  <span>2ème année IDAA</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Languages className="text-yellow-400" size={20} />
                  <span>Trilingue</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Formation</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-white">Informatique Décisionnelle et Apprentissage Automatique</h4>
                    <p className="text-gray-400">École Supérieure de Technologie Oujda</p>
                    <p className="text-sm text-gray-500">2023 - 2025</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Langues</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Arabe</span>
                    <span className="text-gray-400">Maternelle</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Français</span>
                    <span className="text-gray-400">Bien</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Anglais</span>
                    <span className="text-gray-400">Intermédiaire</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;