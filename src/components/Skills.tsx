import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Eye, Code, BarChart3, Cpu } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence Artificielle",
      description: "Classification, clustering, apprentissage automatique",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Analyse de données",
      description: "Pandas, NumPy, Matplotlib, traitement de données",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vision par ordinateur",
      description: "YOLOv8, traitement d'image, détection d'objets",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Python",
      description: "Scripts de traitement, génération PDF, manipulation CSV",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Développement Web",
      description: "HTML, CSS, JavaScript, bases de React",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Analyse médicale",
      description: "Exploitation du dataset OASIS-3 pour Alzheimer",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="competences" className="py-20">
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
              compétences
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-4`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {skill.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-white">Technologies & Outils</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Python', 'Java', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'YOLOv8', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Git', 'HTML/CSS', 'JavaScript', 'React'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-gray-300 border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;