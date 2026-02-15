/**
 * Project types
 * @module types/project
 */

import { Translation, PerformanceMetric } from './common.types';

export type ProjectCategory =
  | 'computer-vision'
  | 'deep-learning'
  | 'nlp'
  | 'data-science'
  | 'full-stack-ai'
  | 'research';

export type ProjectStatus = 'completed' | 'in-progress' | 'research' | 'published';

export interface TechStack {
  name: string;
  category: 'language' | 'framework' | 'library' | 'tool' | 'platform';
  icon?: string;
}

export interface ProjectLink {
  type: 'github' | 'demo' | 'paper' | 'docs' | 'article';
  url: string;
  label: Translation;
}

export interface Project {
  id: string;
  title: Translation;
  description: Translation;
  category: ProjectCategory;
  status: ProjectStatus;

  // Technical details
  techStack: TechStack[];
  metrics?: PerformanceMetric[];

  // Links
  links: ProjectLink[];

  // Metadata
  featured?: boolean;
  date: string;
  thumbnail?: string;
  tags: string[];
}

export interface ProjectFilterOptions {
  category?: ProjectCategory;
  status?: ProjectStatus;
  featured?: boolean;
}

