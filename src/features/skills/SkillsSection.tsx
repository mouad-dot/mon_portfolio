/**
 * Skills Section
 * @module features/skills/SkillsSection
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../../types/common.types';
import { skills, getCoreSkills } from '../../data/skills.data';
import { SkillCard } from '../../components/molecules/SkillCard';
import { containerVariants, fadeInUp } from '../../lib/animations';

interface SkillsSectionProps {
  language: Language;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ language }) => {
  const coreSkills = getCoreSkills();

  return (
    <section id="skills" className="py-20">
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
              {language === 'en' ? 'Technical' : 'Expertise'}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {language === 'en' ? 'Expertise' : 'Technique'}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {language === 'en'
                ? 'Deep expertise in Computer Vision, Deep Learning, and Full-Stack AI Development'
                : 'Expertise approfondie en Vision par Ordinateur, Deep Learning et Développement IA Full-Stack'
              }
            </p>
          </motion.div>

          {/* Core Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {coreSkills.map((skill) => (
              <motion.div key={skill.id} variants={fadeInUp}>
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          {skills.length > coreSkills.length && (
            <>
              <motion.h3
                variants={fadeInUp}
                className="text-2xl font-bold mb-8 text-center"
              >
                {language === 'en' ? 'Additional Skills' : 'Compétences Complémentaires'}
              </motion.h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(s => !coreSkills.includes(s))
                  .map((skill) => (
                    <motion.div key={skill.id} variants={fadeInUp}>
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
