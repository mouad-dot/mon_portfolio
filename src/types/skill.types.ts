/**
 * Skill types
 * @module types/skill
 */

import { Translation } from './common.types';

export type SkillCategory =
  | 'ai-ml'
  | 'computer-vision'
  | 'deep-learning'
  | 'data-engineering'
  | 'full-stack'
  | 'devops'
  | 'research';

export type ProficiencyLevel = 'advanced' | 'intermediate' | 'familiar';

export interface SkillTechnology {
  name: string;
  proficiency: ProficiencyLevel;
  yearsOfExperience?: number;
  icon?: string;
}

export interface Skill {
  id: string;
  title: Translation;
  category: SkillCategory;
  description: Translation;
  technologies: SkillTechnology[];
  icon: string;
  color: string; // Tailwind gradient classes
}

export interface SkillMatrixData {
  category: SkillCategory;
  skills: Skill[];
}

