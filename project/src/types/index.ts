export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: React.FC;
  category: 'frontend' | 'backend' | 'design' | 'other';
  level: number; // 1-5
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  icon: React.FC;
  href: string;
}