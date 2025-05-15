import { Skill } from '../types';
import { 
  Code, Database, Figma, 
  Globe, Layers, PaintBucket, 
  ServerCog, Smartphone, FileCode
} from 'lucide-react';

export const skills: Skill[] = [
  {
    name: "Figma",
    icon: Figma,
    category: "design",
    level: 5
  },
  {
    name: "HTML",
    icon: Code,
    category: "frontend",
    level: 4
  },
  {
    name: "CSS",
    icon: PaintBucket,
    category: "frontend",
    level: 4
  },
  {
    name: "Tailwind",
    icon: PaintBucket,
    category: "frontend",
    level: 4
  },
  {
    name: "Visual Studio Code",
    icon: FileCode,
    category: "other",
    level: 4
  },
  {
    name: "Microsoft 365",
    icon: Globe,
    category: "other",
    level: 5
  },
  {
    name: "System Management",
    icon: ServerCog,
    category: "other",
    level: 4
  },
  {
    name: "UI/UX Design",
    icon: Layers,
    category: "design",
    level: 4
  },
  {
    name: "MySQL",
    icon: Database,
    category: "backend",
    level: 3
  },
  {
    name: "Photoshop",
    icon: PaintBucket,
    category: "design",
    level: 3
  },
  {
    name: "Canva",
    icon: Layers,
    category: "design",
    level: 4
  }
];