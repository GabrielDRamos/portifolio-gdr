export type SocialIcon = 'github' | 'linkedin';

export interface SocialLink {
  label: string;
  url: string;
  icon: SocialIcon;
}

/** One layer of the main stack shown in the hero card (e.g. Angular / Spring / Flutter). */
export interface CoreTech {
  layer: string;
  name: string;
  language: string;
}

export interface ProfileFact {
  label: string;
  value: string;
}

export interface Profile {
  fullName: string;
  brand: string;
  brandSuffix: string;
  role: string;
  /** Hero intro; technology names listed in `coreStack` are highlighted when rendered. */
  intro: string;
  coreStack: CoreTech[];
  aboutTitle: string;
  bio: string[];
  facts: ProfileFact[];
  availability: string;
  contactMessage: string;
  email: string;
  socials: SocialLink[];
}

export type ProjectKind = 'Fullstack' | 'Web' | 'API' | 'Mobile';

export interface Project {
  slug: string;
  title: string;
  kind: ProjectKind;
  year: string;
  description: string;
  highlights: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export type SkillCategory ='frontend' | 'backend' | 'mobile' | 'tools';

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  title: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
  stack: string[];
}
