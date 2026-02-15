/**
 * Common types
 * @module types/common
 */

export type Language = 'en' | 'fr';

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter' | 'scholar';
  url: string;
  label: string;
  icon?: string;
}

export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
}

export interface Translation {
  en: string;
  fr: string;
}

export interface PerformanceMetric {
  label: Translation;
  value: string | number;
  unit?: string;
  icon?: string;
}

