/**
 * Skill Card Component
 * @module components/molecules/SkillCard
 */

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Skill } from '../../types';
import { cardHover } from '../../lib/animations';
import { t, getLanguage } from '../../lib/i18n';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const lang = getLanguage();

  // Dynamically get icon from lucide-react
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[skill.icon] || Icons.Code;

  const getProficiencyColor = (level: string): string => {
    const colors: Record<string, string> = {
      advanced: 'text-blue-400',
      intermediate: 'text-yellow-400',
      familiar: 'text-gray-400'
    };
    return colors[level] || 'text-gray-400';
  };

  const getProficiencyWidth = (level: string): string => {
    const widths: Record<string, string> = {
      advanced: 'w-full',
      intermediate: 'w-3/4',
      familiar: 'w-1/2'
    };
    return widths[level] || 'w-1/2';
  };

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-300 h-full"
    >
      {/* Icon Header */}
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-4`}>
        <IconComponent className="w-6 h-6 text-white" />
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-bold text-white mb-2">
        {t(skill.title, lang)}
      </h3>

      <p className="text-sm text-gray-400 mb-4">
        {t(skill.description, lang)}
      </p>

      {/* Technologies with Proficiency */}
      <div className="space-y-3">
        {skill.technologies.map((tech, idx) => (
          <div key={idx}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-300">{tech.name}</span>
              <span className={`text-xs font-medium ${getProficiencyColor(tech.proficiency)}`}>
                {tech.proficiency}
              </span>
            </div>
            {/* Proficiency Bar */}
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} ${getProficiencyWidth(tech.proficiency)}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

