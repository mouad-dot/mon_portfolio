import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Mouad Maafi
            </h3>
            <p className="text-gray-400">
              Étudiant en Intelligence Artificielle
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            <motion.a
              href="https://github.com/mouad-dot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mouad-m-370814310/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:mouadmaafi1@gmail.com"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} Mouad Maafi. Créé avec</span>
            <Heart size={16} className="text-red-400" />
            <span>et beaucoup de café ☕</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;