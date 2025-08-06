import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Play,
  X,
  Calendar,
  Users,
  Target,
  Code,
  Lightbulb,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import { Project } from "./types";

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  const [selectedGame, setSelectedGame] = useState<React.ComponentType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{
    [key: number]: string[];
  }>({});

  const openGameModal = (GameComponent: React.ComponentType) => {
    setSelectedGame(() => GameComponent);
    setIsModalOpen(true);
  };

  const closeGameModal = () => {
    setSelectedGame(null);
    setIsModalOpen(false);
  };

  const toggleSection = (projectId: number, section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [projectId]: prev[projectId]?.includes(section)
        ? prev[projectId].filter((s) => s !== section)
        : [...(prev[projectId] || []), section],
    }));
  };

  const isExpanded = (projectId: number, section: string) => {
    return expandedSections[projectId]?.includes(section) || false;
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-200 mb-4">
          My Projects
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-6">
          A collection of projects showcasing my journey in software
          development, from AI algorithms to full-stack applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-24">
          {projects.map((project) => (
            <div key={project.id} className="space-y-8">
              {/* Bigggggg Project Image */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 group">
                <div className="aspect-video w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={600}
                    className="w-full h-full object-contain bg-slate-100 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Image Overlay with Category on the top left */}
                <div className="absolute top-6 left-6">
                  <span className="bg-slate-900/80 backdrop-blur-sm text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-slate-700">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="grid lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Title & Subtitle */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    {/* Desktop Layout: Title and buttons side by side */}
                    <div className="hidden xl:flex gap-24 items-center">
                      <h2 className="text-5xl font-bold text-slate-200 leading-tight">
                        {project.title}
                      </h2>
                      {/* Action Links */}
                      <div className="flex items-center gap-10 py-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
                          >
                            <Github size={20} />
                            View Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </a>
                        )}
                        {project.gameComponent && (
                          <button
                            onClick={() =>
                              openGameModal(project.gameComponent!)
                            }
                            className="inline-flex items-center gap-2 bg-gradient-to-br from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 cursor-pointer transition-all duration-200 font-medium shadow-lg shadow-green-500/25"
                          >
                            <Play size={20} />
                            Play Game
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Mobile/Tablet Layout: Title and buttons stacked */}
                    <div className="xl:hidden space-y-6">
                      <h2 className="text-3xl md:text-5xl font-bold text-slate-200 leading-tight">
                        {project.title}
                      </h2>
                      {/* Action Links - Mobile Layout */}
                      <div className="flex flex-wrap items-center gap-4 md:gap-6">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
                          >
                            <Github size={20} />
                            View Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </a>
                        )}
                        {project.gameComponent && (
                          <button
                            onClick={() =>
                              openGameModal(project.gameComponent!)
                            }
                            className="inline-flex items-center gap-2 bg-gradient-to-br from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 cursor-pointer transition-all duration-200 font-medium shadow-lg shadow-green-500/25"
                          >
                            <Play size={20} />
                            Play Game
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="text-lg md:text-xl text-cyan-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="space-y-6">
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                      {project.detailedDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow-sm font-medium text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar with Details */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Key Features */}
                  {project.features.length > 0 && (
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                      <button
                        onClick={() =>
                          toggleSection(Number(project.id), "features")
                        }
                        className="flex items-center justify-between w-full text-left"
                      >
                        <div className="flex items-center gap-3">
                          <Target className="text-cyan-400" size={20} />
                          <h3 className="font-semibold text-slate-200">
                            Key Features
                          </h3>
                        </div>
                        {isExpanded(Number(project.id), "features") ? (
                          <ChevronUp className="text-slate-400" size={18} />
                        ) : (
                          <ChevronDown className="text-slate-400" size={18} />
                        )}
                      </button>

                      {isExpanded(Number(project.id), "features") && (
                        <div className="mt-4 space-y-3">
                          {project.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <ArrowRight
                                className="text-cyan-400 mt-0.5 flex-shrink-0"
                                size={16}
                              />
                              <span className="text-slate-300 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Technical Challenges */}
                  {project.challenges.length > 0 && (
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                      <button
                        onClick={() =>
                          toggleSection(Number(project.id), "challenges")
                        }
                        className="flex items-center justify-between w-full text-left"
                      >
                        <div className="flex items-center gap-3">
                          <Code className="text-orange-400" size={20} />
                          <h3 className="font-semibold text-slate-200">
                            Technical Challenges
                          </h3>
                        </div>
                        {isExpanded(Number(project.id), "challenges") ? (
                          <ChevronUp className="text-slate-400" size={18} />
                        ) : (
                          <ChevronDown className="text-slate-400" size={18} />
                        )}
                      </button>

                      {isExpanded(Number(project.id), "challenges") && (
                        <div className="mt-4 space-y-3">
                          {project.challenges.map((challenge, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <ArrowRight
                                className="text-orange-400 mt-0.5 flex-shrink-0"
                                size={16}
                              />
                              <span className="text-slate-300 text-sm">
                                {challenge}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Key Learnings */}
                  {project.learnings.length > 0 && (
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                      <button
                        onClick={() =>
                          toggleSection(Number(project.id), "learnings")
                        }
                        className="flex items-center justify-between w-full text-left"
                      >
                        <div className="flex items-center gap-3">
                          <Lightbulb className="text-yellow-400" size={20} />
                          <h3 className="font-semibold text-slate-200">
                            Key Learnings
                          </h3>
                        </div>
                        {isExpanded(Number(project.id), "learnings") ? (
                          <ChevronUp className="text-slate-400" size={18} />
                        ) : (
                          <ChevronDown className="text-slate-400" size={18} />
                        )}
                      </button>

                      {isExpanded(Number(project.id), "learnings") && (
                        <div className="mt-4 space-y-3">
                          {project.learnings.map((learning, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <ArrowRight
                                className="text-yellow-400 mt-0.5 flex-shrink-0"
                                size={16}
                              />
                              <span className="text-slate-300 text-sm">
                                {learning}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Divider */}
              {Number(project.id) !== projects.length && (
                <div className="border-t border-slate-700/50 pt-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Game Modal */}
      {isModalOpen && selectedGame && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative border border-slate-700">
            {/* Close Button */}
            <button
              onClick={closeGameModal}
              className="absolute top-4 right-4 z-10 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Game Content */}
            <div className="p-6">{React.createElement(selectedGame)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
