/**
 * Projects Data
 * @module data/projects
 */

import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'alzheimer-detection',
    title: {
      en: 'Early Alzheimer Detection System',
      fr: 'Système de Détection Précoce d\'Alzheimer'
    },
    description: {
      en: 'Deep learning pipeline for early Alzheimer\'s disease detection using brain MRI analysis from OASIS-3 dataset. Feature extraction, dimensionality reduction, and classification with medical-grade accuracy.',
      fr: 'Pipeline d\'apprentissage profond pour la détection précoce de la maladie d\'Alzheimer via analyse IRM cérébrale du dataset OASIS-3. Extraction de caractéristiques, réduction dimensionnelle et classification de précision médicale.'
    },
    category: 'deep-learning',
    status: 'completed',
    techStack: [
      { name: 'Python', category: 'language' },
      { name: 'TensorFlow', category: 'framework' },
      { name: 'Scikit-learn', category: 'library' },
      { name: 'Pandas', category: 'library' },
      { name: 'Matplotlib', category: 'tool' },
      { name: 'OASIS-3', category: 'platform' }
    ],
    metrics: [
      {
        label: { en: 'Classification Accuracy', fr: 'Précision de Classification' },
        value: '92.5',
        unit: '%'
      },
      {
        label: { en: 'Dataset Size', fr: 'Taille du Dataset' },
        value: '1000+',
        unit: 'samples'
      },
      {
        label: { en: 'Feature Dimensions', fr: 'Dimensions Caractéristiques' },
        value: '128',
        unit: 'features'
      }
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/mouad-dot',
        label: { en: 'View Code', fr: 'Voir le Code' }
      }
    ],
    featured: true,
    date: '2024-12',
    tags: ['Deep Learning', 'Medical AI', 'OASIS-3', 'Classification']
  },
  {
    id: 'clean-beach-ai',
    title: {
      en: 'Clean Beach - AI-Powered Waste Detection',
      fr: 'Clean Beach - Détection de Déchets par IA'
    },
    description: {
      en: 'Real-time waste detection and mapping system using YOLOv8 and drone imagery. Computer vision pipeline for environmental monitoring with multi-class object detection and geospatial analysis.',
      fr: 'Système de détection et cartographie de déchets en temps réel utilisant YOLOv8 et imagerie par drone. Pipeline de vision par ordinateur pour surveillance environnementale avec détection multi-classes et analyse géospatiale.'
    },
    category: 'computer-vision',
    status: 'in-progress',
    techStack: [
      { name: 'YOLOv8', category: 'framework' },
      { name: 'OpenCV', category: 'library' },
      { name: 'Python', category: 'language' },
      { name: 'PyTorch', category: 'framework' },
      { name: 'Drone SDK', category: 'platform' }
    ],
    metrics: [
      {
        label: { en: 'Detection mAP', fr: 'mAP de Détection' },
        value: '87.3',
        unit: '%'
      },
      {
        label: { en: 'Inference Speed', fr: 'Vitesse d\'Inférence' },
        value: '45',
        unit: 'FPS'
      },
      {
        label: { en: 'Object Classes', fr: 'Classes d\'Objets' },
        value: '8',
        unit: 'classes'
      }
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/mouad-dot',
        label: { en: 'Source Code', fr: 'Code Source' }
      }
    ],
    featured: true,
    date: '2024-ongoing',
    tags: ['YOLOv8', 'Computer Vision', 'Environmental AI', 'Drone Technology']
  },
  {
    id: 'intelligent-pdf-report-generator',
    title: {
      en: 'Intelligent PDF Report Generator',
      fr: 'Générateur Intelligent de Rapports PDF'
    },
    description: {
      en: 'Automated data analysis and reporting tool with dynamic filtering, statistical visualization, and professional PDF generation. Built for scalable data processing pipelines.',
      fr: 'Outil d\'analyse et de reporting automatisé avec filtrage dynamique, visualisation statistique et génération PDF professionnelle. Conçu pour pipelines de traitement de données évolutifs.'
    },
    category: 'data-science',
    status: 'completed',
    techStack: [
      { name: 'Python', category: 'language' },
      { name: 'Pandas', category: 'library' },
      { name: 'Matplotlib', category: 'library' },
      { name: 'ReportLab', category: 'library' },
      { name: 'Tkinter', category: 'framework' }
    ],
    metrics: [
      {
        label: { en: 'Processing Speed', fr: 'Vitesse de Traitement' },
        value: '10K',
        unit: 'rows/sec'
      },
      {
        label: { en: 'Report Generation', fr: 'Génération Rapports' },
        value: '<5',
        unit: 'seconds'
      }
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/mouad-dot',
        label: { en: 'Repository', fr: 'Dépôt' }
      }
    ],
    featured: false,
    date: '2024-08',
    tags: ['Data Science', 'Automation', 'Python', 'Visualization']
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(p => p.category === category);
};

