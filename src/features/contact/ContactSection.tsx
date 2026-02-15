/**
 * Contact Section
 * @module features/contact/ContactSection
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Github, Linkedin } from 'lucide-react';
import { Language } from '../../types/common.types';
import { personalInfo, socialLinks } from '../../data/personal.data';
import { containerVariants, fadeInUp } from '../../lib/animations';

interface ContactSectionProps {
  language: Language;
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [copied, setCopied] = useState<string>('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'en' ? 'Get In' : 'Me'}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {language === 'en' ? 'Touch' : 'Contacter'}
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              {language === 'en'
                ? 'Open to collaborate on innovative AI projects and research initiatives'
                : 'Ouvert à collaborer sur projets IA innovants et initiatives de recherche'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">
                {language === 'en' ? 'Contact Information' : 'Informations de Contact'}
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.contact.email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(personalInfo.contact.email, 'email')}
                    className="ml-3 text-gray-400 hover:text-white transition-colors"
                  >
                    {copied === 'email' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">
                    {language === 'en' ? 'Location' : 'Localisation'}
                  </p>
                  <p className="text-white">
                    {personalInfo.location.city}, {personalInfo.location.country}
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/30">
                <p className="text-green-400 font-medium mb-2">
                  {language === 'en' ? '🟢 Open to Collaborate' : '🟢 Ouvert à Collaboration'}
                </p>
                <p className="text-sm text-gray-400">
                  {language === 'en'
                    ? 'Interested in: Research Projects, AI Startups, Open Source Contributions'
                    : 'Intéressé par : Projets de Recherche, Startups IA, Contributions Open Source'
                  }
                </p>
              </div>
            </motion.div>

            {/* Social Links & Additional Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">
                {language === 'en' ? 'Connect with Me' : 'Connectez-vous'}
              </h3>

              {/* Social Cards */}
              {socialLinks.map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all group"
                >
                  <div className="p-3 bg-gray-800 group-hover:bg-blue-500/20 rounded-lg transition-colors">
                    {link.platform === 'github' && <Github className="w-5 h-5" />}
                    {link.platform === 'linkedin' && <Linkedin className="w-5 h-5 text-blue-400" />}
                    {link.platform === 'email' && <Mail className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-gray-400">
                      {link.platform === 'github' && '@mouad-dot'}
                      {link.platform === 'linkedin' && 'Mouad Maafi'}
                      {link.platform === 'email' && personalInfo.contact.email}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Response Time */}
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-sm text-gray-400">
                  {language === 'en'
                    ? '⚡ Typical response time: 24-48 hours'
                    : '⚡ Temps de réponse typique : 24-48 heures'
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
