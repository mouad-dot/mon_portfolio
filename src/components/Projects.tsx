import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, FileText, Waves, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Outil de détection précoce d'Alzheimer",
      description: "Analyse de données cérébrales issues du dataset OASIS-3, extraction de caractéristiques et visualisation pour appuyer le diagnostic médical.",
      technologies: ["Python", "Pandas", "Matplotlib", "Machine Learning", "OASIS-3"],
      color: "from-blue-400 to-blue-600",
      category: "Intelligence Artificielle"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Générateur de rapports PDF intelligent",
      description: "Un outil Python permettant de charger des fichiers CSV, filtrer dynamiquement les données selon plusieurs critères, visualiser les résultats et générer un rapport PDF complet et propre.",
      technologies: ["Python", "Pandas", "Matplotlib", "ReportLab", "Tkinter"],
      color: "from-green-400 to-green-600",
      category: "Développement Python"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Projet Clean Beach",
      description: "Système utilisant des drones, l'IA et la vision par ordinateur pour détecter et cartographier les déchets sur les plages. Projet à visée environnementale et inclusive.",
      technologies: ["YOLOv8", "OpenCV", "Python", "Computer Vision", "Drones"],
      color: "from-purple-400 to-purple-600",
      category: "Vision par ordinateur",
      isTeam: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Flowcell Team",
      description: "Membre actif d'une équipe étudiante d'innovation technologique. Nous travaillons sur des solutions pratiques autour de l'intelligence artificielle et de l'informatique, en mettant l'accent sur la collaboration et l'impact réel.",
      technologies: ["IA", "Innovation", "Collaboration", "Recherche"],
      color: "from-indigo-400 to-indigo-600",
      category: "Équipe & Innovation",
      isTeam: true
    }
  ];

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
    <section id="projets" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Mes{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              projets
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  
                  {project.isTeam && (
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/30">
                      Équipe
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-400 font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-1 mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Détails</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/mouad-dot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Github size={20} />
              <span>Voir tous mes projets</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;