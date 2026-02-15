/**
 * Main Application Component - Professional AI Engineering Portfolio
 * @author Mouad Maafi - Engineering Student & AI Researcher
 *
 * Architecture: Feature-based + Atomic Design
 * Tech Stack: React 18, TypeScript, Tailwind CSS, Framer Motion
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Feature Sections (code-splitting)
const HeroSection = lazy(() => import('./features/hero/HeroSection'));
const ProjectsSection = lazy(() => import('./features/projects/ProjectsSection'));
const SkillsSection = lazy(() => import('./features/skills/SkillsSection'));
const ContactSection = lazy(() => import('./features/contact/ContactSection'));

// Utilities
import { Language } from './types';
import { getBrowserLanguage } from './lib/i18n';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set language from browser or localStorage
    const savedLang = localStorage.getItem('preferred-language') as Language;
    const initialLang = savedLang || getBrowserLanguage();
    setLanguage(initialLang);

    // Simulate initial load (can be replaced with actual data fetching)
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
    localStorage.setItem('preferred-language', newLang);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading Portfolio...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with Language Switcher */}
      <Header language={language} onLanguageToggle={toggleLanguage} />

      {/* Main Content */}
      <main>
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <HeroSection key={`hero-${language}`} language={language} />
            <SkillsSection key={`skills-${language}`} language={language} />
            <ProjectsSection key={`projects-${language}`} language={language} />
            <ContactSection key={`contact-${language}`} language={language} />
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}

export default App;
