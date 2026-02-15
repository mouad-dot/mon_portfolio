/**
 * Personal Information
 * @module data/personal
 */

import { SocialLink } from '../types/common.types';

export const personalInfo = {
  name: 'Mouad Maafi',
  title: {
    en: 'Engineering Student & AI Researcher',
    fr: 'Étudiant Ingénieur & Chercheur IA'
  },
  tagline: {
    en: 'Specializing in Computer Vision, Deep Learning, and Full-Stack AI Applications',
    fr: 'Spécialisé en Vision par Ordinateur, Deep Learning et Applications IA Full-Stack'
  },
  bio: {
    en: 'Third-year AI Engineering student with hands-on experience in computer vision, deep learning, and production-grade AI systems. Currently researching medical imaging applications and environmental AI solutions. Member of Flowcell Innovation Team.',
    fr: 'Étudiant ingénieur IA en 3ème année avec expérience pratique en vision par ordinateur, deep learning et systèmes IA de production. Recherche actuelle sur applications d\'imagerie médicale et solutions IA environnementales. Membre de l\'équipe Flowcell Innovation.'
  },
  location: {
    city: 'Oujda',
    country: 'Morocco',
    coordinates: { lat: 34.6814, lng: -1.9086 }
  },
  education: {
    degree: {
      en: 'AI Engineering & Data Science',
      fr: 'Ingénierie IA & Science des Données'
    },
    institution: 'École Supérieure de Technologie Oujda',
    program: 'IDAA (Informatique Décisionnelle et Apprentissage Automatique)',
    year: '2023-2025',
    level: 'Year 3'
  },
  contact: {
    email: 'mouadmaafi1@gmail.com',
    phone: '+212 615541393'
  },
  languages: [
    { name: 'Arabic', proficiency: 'Native' },
    { name: 'French', proficiency: 'Fluent (C1)' },
    { name: 'English', proficiency: 'Professional (B2)' }
  ],
  availability: {
    status: 'open-to-collaborate',
    interests: ['Research Projects', 'AI Startups', 'Open Source Contributions']
  }
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/mouad-dot',
    label: 'GitHub'
  },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/mouad-m-370814310/',
    label: 'LinkedIn'
  },
  {
    platform: 'email',
    url: 'mailto:mouadmaafi1@gmail.com',
    label: 'Email'
  }
];

export const resume = {
  url: '/CV_Mouad_MAAFI.pdf',
  lastUpdated: '2024-12'
};

