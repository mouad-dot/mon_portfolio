/**
 * Project Card Component
 * @module components/molecules/ProjectCard
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText, Zap, TrendingUp } from 'lucide-react';
import { Project } from '../../types';
import { t, getLanguage } from '../../lib/i18n';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const lang = getLanguage();

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'computer-vision': 'from-purple-500 to-pink-500',
      'deep-learning': 'from-blue-500 to-cyan-500',
      'nlp': 'from-green-500 to-emerald-500',
      'data-science': 'from-orange-500 to-red-500',
      'full-stack-ai': 'from-indigo-500 to-violet-500',
      'research': 'from-yellow-500 to-amber-500'
    };
    return colors[category] || 'from-gray-500 to-gray-700';
  };

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { label: string; color: string }> = {
      completed: { label: 'Completed', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
      'in-progress': { label: 'In Progress', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
      research: { label: 'Research', color: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
      published: { label: 'Published', color: 'bg-purple-500/10 text-purple-400 border-purple-500/30' }
    };
    return badges[status] || badges.completed;
  };

  const statusBadge = getStatusBadge(project.status);

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 h-full flex flex-col overflow-hidden"
    >
      {/* Gradient Border Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />

      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${getCategoryColor(project.category)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Header with Icon and Badges */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(project.category)} shadow-lg`}>
          <Zap className="w-6 h-6 text-white" />
        </div>

        {project.featured && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold shadow-glow-sm"
          >
            ⭐ Featured
          </motion.div>
        )}
      </div>

      {/* Title & Description */}
      <div className="relative z-10 mb-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
          {t(project.title, lang)}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {t(project.description, lang)}
        </p>
      </div>

      {/* Performance Metrics - Premium Display */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="relative z-10 grid grid-cols-3 gap-2 mb-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/5">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-center group/metric">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp className="w-3 h-3 text-blue-400 opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {metric.value}{metric.unit || ''}
                </div>
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                {t(metric.label, lang)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack Badges - Modern Pills */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 5).map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium rounded-full border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            {tech.name}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span className="px-3 py-1 text-gray-500 text-xs font-medium">
            +{project.techStack.length - 5}
          </span>
        )}
      </div>

      {/* Status Badge */}
      <div className="relative z-10 mb-4">
        <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${statusBadge.color}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse" />
          {statusBadge.label}
        </span>
      </div>

      {/* Links - Premium Buttons */}
      <div className="relative z-10 flex gap-2 mt-auto pt-4 border-t border-white/5">
        {project.links.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            {link.type === 'github' && <Github size={16} />}
            {link.type === 'demo' && <ExternalLink size={16} />}
            {link.type === 'paper' && <FileText size={16} />}
            <span className="hidden sm:inline">{t(link.label, lang)}</span>
          </motion.a>
        ))}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl shadow-premium" />
      </div>
    </motion.article>
  );
};

