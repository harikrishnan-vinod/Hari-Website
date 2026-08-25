export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  projectUrl?: string;
  subtitle: string;
  detailedDescription: string;
  image: string;
  duration: string;
  team: string;
  challenges: string[];
  learnings: string[];
  features: string[];
  category: string;
}
