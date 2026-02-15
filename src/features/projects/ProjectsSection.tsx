/**
 * Projects Section
 * @module features/projects/ProjectsSection
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../../types/common.types';
import { projects, getFeaturedProjects } from '../../data/projects.data';
import { ProjectCard } from '../../components/molecules/ProjectCard';
import { containerVariants, fadeInUp } from '../../lib/animations';

interface ProjectsSectionProps {
  language: Language;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'en' ? 'Featured' : 'Projets'}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {language === 'en' ? 'Projects' : 'Phares'}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {language === 'en'
                ? 'Production-grade AI systems with measurable impact and performance metrics'
                : 'Systèmes IA de niveau production avec impact mesurable et métriques de performance'
              }
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* All Projects */}
          {projects.length > featuredProjects.length && (
            <>
              <motion.h3
                variants={fadeInUp}
                className="text-2xl font-bold mb-8 text-center"
              >
                {language === 'en' ? 'Other Projects' : 'Autres Projets'}
              </motion.h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(p => !p.featured)
                  .map((project) => (
                    <motion.div key={project.id} variants={fadeInUp}>
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
              </div>
            </>
          )}

          {/* GitHub CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/mouad-dot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              {language === 'en' ? 'View All on GitHub →' : 'Voir Tout sur GitHub →'}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
