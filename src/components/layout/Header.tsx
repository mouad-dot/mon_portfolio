/**
 * Premium Header Component - Ultra-Modern Design
 * Features: Dynamic glassmorphism, smooth blur, language switcher
 * @module components/layout/Header
 */

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../../types/common.types';
import { navigationLabels, t } from '../../lib/i18n';

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Dynamic opacity based on scroll
  const headerOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [10, 20]);

  const navItems = [
    { href: '#home', label: navigationLabels.home },
    { href: '#skills', label: navigationLabels.skills },
    { href: '#projects', label: navigationLabels.projects },
    { href: '#contact', label: navigationLabels.contact }
  ];

  return (
    <motion.header
      style={{
        backdropFilter: useTransform(headerBlur, (blur) => `blur(${blur}px)`),
      }}
      className="fixed top-0 w-full z-50 border-b border-white/10 transition-all duration-300"
    >
      <motion.div
        style={{ opacity: headerOpacity }}
        className="absolute inset-0 bg-dark-950/80"
      />

      <nav className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo with Gradient */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <a
              href="#home"
              className="text-xl font-bold"
            >
              <span className="gradient-text">Mouad Maafi</span>
            </a>
          </motion.div>

          {/* Desktop Navigation - Premium Style */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors group"
              >
                {t(item.label, language)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}

            {/* Language Switcher - Premium Button */}
            <motion.button
              onClick={onLanguageToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200 backdrop-blur-sm"
            >
              <Globe size={16} className="text-blue-400" />
              <span className="text-sm font-semibold">{language.toUpperCase()}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              onClick={onLanguageToggle}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm"
            >
              <Globe size={18} className="text-blue-400" />
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Premium Glass Panel */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 4 }}
                className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border border-transparent hover:border-white/10"
              >
                {t(item.label, language)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
