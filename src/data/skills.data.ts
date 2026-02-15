/**
 * Skills Data
 * @module data/skills
 */

import { Skill } from '../types';

export const skills: Skill[] = [
  {
    id: 'deep-learning',
    title: {
      en: 'Deep Learning & Neural Networks',
      fr: 'Apprentissage Profond & Réseaux de Neurones'
    },
    category: 'deep-learning',
    description: {
      en: 'Advanced neural network architectures, model optimization, and production deployment',
      fr: 'Architectures neuronales avancées, optimisation de modèles et déploiement production'
    },
    technologies: [
      { name: 'PyTorch', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'TensorFlow', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'Keras', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'ONNX', proficiency: 'intermediate', yearsOfExperience: 1 }
    ],
    icon: 'Brain',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'computer-vision',
    title: {
      en: 'Computer Vision',
      fr: 'Vision par Ordinateur'
    },
    category: 'computer-vision',
    description: {
      en: 'Object detection, image segmentation, and real-time video analysis',
      fr: 'Détection d\'objets, segmentation d\'images et analyse vidéo temps réel'
    },
    technologies: [
      { name: 'YOLOv8', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'OpenCV', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'Detectron2', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'Albumentations', proficiency: 'advanced', yearsOfExperience: 1 }
    ],
    icon: 'Eye',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'data-engineering',
    title: {
      en: 'Data Engineering & Analytics',
      fr: 'Ingénierie & Analyse de Données'
    },
    category: 'data-engineering',
    description: {
      en: 'Large-scale data processing, ETL pipelines, and statistical analysis',
      fr: 'Traitement de données massives, pipelines ETL et analyse statistique'
    },
    technologies: [
      { name: 'Pandas', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'NumPy', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'Scikit-learn', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'SQL', proficiency: 'advanced', yearsOfExperience: 2 }
    ],
    icon: 'Database',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'ml-ops',
    title: {
      en: 'MLOps & Model Deployment',
      fr: 'MLOps & Déploiement de Modèles'
    },
    category: 'devops',
    description: {
      en: 'Model versioning, deployment automation, and production monitoring',
      fr: 'Versioning de modèles, automatisation déploiement et monitoring production'
    },
    technologies: [
      { name: 'Docker', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'Git', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'FastAPI', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'Linux', proficiency: 'intermediate', yearsOfExperience: 2 }
    ],
    icon: 'Server',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'full-stack-dev',
    title: {
      en: 'Full-Stack Development',
      fr: 'Développement Full-Stack'
    },
    category: 'full-stack',
    description: {
      en: 'Modern web applications with React, TypeScript, and Python backends',
      fr: 'Applications web modernes avec React, TypeScript et backends Python'
    },
    technologies: [
      { name: 'React', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'TypeScript', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'Python', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'Tailwind CSS', proficiency: 'advanced', yearsOfExperience: 1 }
    ],
    icon: 'Code',
    color: 'from-indigo-500 to-violet-500'
  },
  {
    id: 'research',
    title: {
      en: 'AI Research & Innovation',
      fr: 'Recherche & Innovation IA'
    },
    category: 'research',
    description: {
      en: 'Experimental design, paper implementation, and novel algorithm development',
      fr: 'Conception expérimentale, implémentation d\'articles et développement d\'algorithmes'
    },
    technologies: [
      { name: 'Research Papers', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'Jupyter', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'LaTeX', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'Weights & Biases', proficiency: 'intermediate', yearsOfExperience: 1 }
    ],
    icon: 'GraduationCap',
    color: 'from-yellow-500 to-amber-500'
  }
];

export const getCoreSkills = () => {
  return skills.filter((skill) =>
    ['deep-learning', 'computer-vision', 'data-engineering'].includes(skill.id)
  );
};
