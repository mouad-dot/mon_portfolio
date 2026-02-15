/**
 * Technology Badge Component - Atomic Design
 * @module components/atoms/TechBadge
 */

import React from 'react';
import { TechStack } from '../../types/project.types';

interface TechBadgeProps {
  tech: TechStack;
  variant?: 'default' | 'outlined' | 'solid';
  size?: 'sm' | 'md' | 'lg';
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  tech,
  variant = 'default',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  };

  const variantClasses = {
    default: 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600',
    outlined: 'bg-transparent text-gray-400 border border-gray-600 hover:border-gray-500',
    solid: 'bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:border-blue-500/50'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-medium transition-colors ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {tech.icon && <span>{tech.icon}</span>}
      {tech.name}
    </span>
  );
};

