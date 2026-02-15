/**
 * Internationalization (i18n) Utilities
 * @module lib/i18n
 */

import { Language, Translation } from '../types/common.types';

// Default language
export const DEFAULT_LANGUAGE: Language = 'en';

// Get browser language or default
export const getBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  const browserLang = window.navigator.language.split('-')[0];
  return (browserLang === 'fr' || browserLang === 'en') ? browserLang : DEFAULT_LANGUAGE;
};

// Translate helper
export const t = (translation: Translation, lang: Language): string => {
  return translation[lang] || translation[DEFAULT_LANGUAGE];
};

// Language context (can be expanded to React Context)
let currentLanguage: Language = DEFAULT_LANGUAGE;

export const setLanguage = (lang: Language): void => {
  currentLanguage = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', lang);
  }
};

export const getLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('preferred-language');
    if (stored === 'en' || stored === 'fr') return stored;
  }
  return currentLanguage;
};

// Navigation labels
export const navigationLabels = {
  home: { en: 'Home', fr: 'Accueil' },
  about: { en: 'About', fr: 'À propos' },
  skills: { en: 'Skills', fr: 'Compétences' },
  projects: { en: 'Projects', fr: 'Projets' },
  contact: { en: 'Contact', fr: 'Contact' }
};

// Common UI labels
export const uiLabels = {
  viewProject: { en: 'View Project', fr: 'Voir le Projet' },
  viewCode: { en: 'View Code', fr: 'Voir le Code' },
  readMore: { en: 'Read More', fr: 'Lire Plus' },
  downloadCV: { en: 'Download CV', fr: 'Télécharger CV' },
  getInTouch: { en: 'Get in Touch', fr: 'Me Contacter' },
  viewDemo: { en: 'View Demo', fr: 'Voir la Démo' },
  readPaper: { en: 'Read Paper', fr: 'Lire l\'Article' }
};

