/**
 * Hero Section
 * @module features/hero/HeroSection
 */

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Language } from '../../types';
import { personalInfo, socialLinks, resume } from '../../data/personal.data';
import { containerVariants, fadeInUp } from '../../lib/animations';
import { uiLabels } from '../../lib/i18n';

interface HeroSectionProps {
  language: Language;
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const title = language === 'en' ? personalInfo.title.en : personalInfo.title.fr;
  const tagline = language === 'en' ? personalInfo.tagline.en : personalInfo.tagline.fr;
  const bio = language === 'en' ? personalInfo.bio.en : personalInfo.bio.fr;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div variants={fadeInUp} className="mb-8 inline-flex">
            <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-300">
                  {language === 'en' ? 'Open to opportunities' : 'Ouvert aux opportunités'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Professional Avatar */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="relative inline-block">
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-gray-800">
                <img
                  src="/me.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-[140%] object-cover object-[center_15%]"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl font-medium text-gray-400 mb-4"
          >
            {title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-blue-400 mb-6 font-medium"
          >
            {tagline}
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href={resume.url}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
            >
              <Download size={18} />
              {language === 'en' ? uiLabels.downloadCV.en : uiLabels.downloadCV.fr}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-colors"
            >
              <Mail size={18} />
              {language === 'en' ? uiLabels.getInTouch.en : uiLabels.getInTouch.fr}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-4 mb-16"
          >
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                {link.platform === 'github' && <Github size={20} className="text-gray-400 hover:text-white" />}
                {link.platform === 'linkedin' && <Linkedin size={20} className="text-gray-400 hover:text-blue-400" />}
                {link.platform === 'email' && <Mail size={20} className="text-gray-400 hover:text-purple-400" />}
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={fadeInUp}>
            <motion.a
              href="#skills"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors"
            >
              <span className="text-sm">{language === 'en' ? 'Scroll' : 'Défiler'}</span>
              <ArrowDown size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
