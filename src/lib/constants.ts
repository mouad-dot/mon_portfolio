/**
 * Application Constants & Configuration
 * @module lib/constants
 */

export const APP_CONFIG = {
  name: 'Mouad Maafi - AI Engineer',
  domain: 'mouadmaafi-portfolio.vercel.app',
  url: 'https://mouadmaafi-portfolio.vercel.app',
  author: 'Mouad Maafi',
  keywords: [
    'AI Engineer',
    'Computer Vision',
    'Deep Learning',
    'Machine Learning',
    'Python Developer',
    'YOLOv8',
    'TensorFlow',
    'PyTorch'
  ],
  social: {
    github: 'mouad-dot',
    linkedin: 'mouad-m-370814310'
  }
} as const;

export const THEME = {
  colors: {
    primary: '#3B82F6', // blue-500
    secondary: '#8B5CF6', // purple-500
    accent: '#10B981', // green-500
    background: '#111827', // gray-900
    surface: '#1F2937', // gray-800
    text: '#F9FAFB' // gray-50
  },
  gradients: {
    primary: 'from-blue-500 to-purple-500',
    secondary: 'from-purple-500 to-pink-500',
    accent: 'from-green-500 to-emerald-500'
  }
} as const;

export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.5,
    slow: 0.8
  },
  ease: 'easeOut'
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

export const GOOGLE_ANALYTICS_ID = 'G-2YB205L5YP';

