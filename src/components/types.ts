export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  subtitle: string;
  detailedDescription: string;
  gameComponent?: React.ComponentType;
  image: string;
  duration: string;
  team: string;
  challenges: string[];
  learnings: string[];
  features: string[];
  category: string;
}