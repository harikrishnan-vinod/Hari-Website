import { Project } from "./types";
import Connect4Game from "./Connect4";

export const projectsInfo: Project [] = [
  {
    id: "1",
    title: "Connect 4 Game",
    subtitle: "AI-Powered Game",
    description: "Connect 4 bot made with alpha-beta pruning and Minimax algorithm made originally in Python but converted to TypeScript",
    detailedDescription: "An intelligent Connect 4 game featuring a sophisticated AI opponent built using the Minimax algorithm with alpha-beta pruning optimization. Originally developed in Python for an AI school module, then converted to TypeScript for web deployment with React.",
    technologies: ["Python", "MiniMax", "TypeScript", "React"],
    liveUrl: "",
    gameComponent: Connect4Game, 
    image: "/Connect4.webp",
    duration: "Apr 2024",
    team: "3 Members",
    challenges: [
      "Implementing efficient alpha-beta pruning for optimal performance",
      "Converting Python algorithms to TypeScript while maintaining accuracy",
      "Creating an intuitive game interface with smooth animations"
    ],
    learnings: [
      "Advanced game theory and AI algorithms",
      "Cross-language algorithm translation",
      "Performance optimization techniques"
    ],
    features: [
      "Intelligent AI opponent",
      "Smooth animations and responsive design",
      "Game state management and undo functionality"
    ],
    category: "AI Algorithms"
  },
  {
    id: "2",
    title: "CycleGoWhere!",
    subtitle: "Cycling Navigation Platform",
    description: "CycleGoWhere! is a navigation tool for cyclists that lets you plan safe, scenic routes using Singapore's park connector network while mapping and saving your routes and activities and displays nearby cycling related amenites on the map",
    detailedDescription: "A comprehensive cycling companion app designed specifically for Singapore&apos;s cycling community. Designed to provide real-time route planning using the extensive Singapore Park Connector network, while offering route saving and activity tracking.",
    technologies: ["React", "Python", "Flask", "Firestore", "Firebase Authentication", "OneMap API"],
    githubUrl: "https://github.com/harikrishnan-vinod/CycleGoWhere",
    image: "/cyclegowherelogo.png",
    duration: "May 2025",
    team: "5 members",
    challenges: [
      "Integrating OneMap APi for accurate mapping data",
      "Optimising routing algorithms for cycling-specific requirements",
      "Building features with Firebase"
    ],
    learnings: [
      "API integration and data processing",
      "Real-time database management",
      "User experience design for mobile applications"
    ],
    features: [
      "Real-time route planning with park connector integration",
      "Activity tracking and route history",
      "Nearby amenities mapping (bike shops, rest areas, etc.)"
    ],
    category: "Web Application"
  },
  {
    id: "3",
    title: "HardCoders",
    subtitle: "AI-Powered Learning Assistant",
    description: "An AI-powered tool that helps students learn programming in classrooms through flexible code checking and collaboration",
    detailedDescription: "An innovative educational platform that revolutionizes programming education by providing intelligent code analysis, automated feedback, and collaborative learning features. Designed to address the limitations of current online platforms that rely on strict pre-defined syntax checking to pass code evaluation.",
    technologies: ["TypeScript", "React", "SQL", "RESTful APIs"],
    githubUrl: "https://github.com/eyyt2309/NTUWIT-Hackathon",
    image: "/logo_purple.png",
    duration: "Feb 2025",
    team: "5 members",
    challenges: [
      "Building a robust code analysis engine within hackathon constraints",
      "Creating an intuitive interface for both students and educators",
      "Implementing real-time collaboration features"
    ],
    learnings: [
      "Rapid prototyping and development",
      "Team collaboration under pressure"
    ],
    features: [
      "Intelligent code checking with detailed feedback",
      "Real-time collaboration tools",
      "Progress tracking and analytics",
    ],
    category: "Hackathon Project"
  }
];