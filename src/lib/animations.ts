/**
 * Framer Motion Animation Variants
 * @module lib/animations
 */

import { Variants } from 'framer-motion';

// Container animations with stagger
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Scale in
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Card hover effect
export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

// Header scroll animation
export const headerVariants: Variants = {
  top: {
    backgroundColor: 'rgba(17, 24, 39, 0)',
    backdropFilter: 'blur(0px)',
    borderBottomColor: 'rgba(55, 65, 81, 0)',
    transition: {
      duration: 0.3
    }
  },
  scrolled: {
    backgroundColor: 'rgba(17, 24, 39, 0.95)',
    backdropFilter: 'blur(16px)',
    borderBottomColor: 'rgba(55, 65, 81, 0.5)',
    transition: {
      duration: 0.3
    }
  }
};

// Professional subtle animations (no floating bubbles)
export const subtleFloat: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

