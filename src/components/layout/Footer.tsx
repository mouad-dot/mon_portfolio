/**
 * Professional Footer Component
 * @module components/layout/Footer
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Language } from '../../types/common.types';
import { socialLinks, personalInfo } from '../../data/personal.data';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (platform: string) => {
    const icons: Record<string, React.ReactNode> = {
      github: <Github size={20} />,
      linkedin: <Linkedin size={20} />,
      email: <Mail size={20} />
    };
    return icons[platform] || <Mail size={20} />;
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {language === 'en' ? personalInfo.title.en : personalInfo.title.fr}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={link.label}
              >
                {getSocialIcon(link.platform)}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-sm flex items-center gap-2"
          >
            <span>© {currentYear}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              {language === 'en' ? 'Built with' : 'Créé avec'}
              <Heart size={14} className="text-red-500 fill-current" />
              {language === 'en' ? 'using React & TypeScript' : 'avec React & TypeScript'}
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
