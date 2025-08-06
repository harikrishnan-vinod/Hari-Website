import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Linkedin,
  BriefcaseBusiness,
  Play,
  X,
} from "lucide-react";
import Image from "next/image";

// Mock Project interface and data since we can't import them
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gameComponent?: React.ComponentType;
}

interface HomePageProps {
  projects: Project[];
  skills: string[];
  setActiveTab: React.Dispatch<
    React.SetStateAction<"home" | "about" | "projects">
  >;
}

const HomePage: React.FC<HomePageProps> = ({
  projects,
  skills,
  setActiveTab,
}) => {
  const [selectedGame, setSelectedGame] = useState<React.ComponentType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openGameModal = (GameComponent: React.ComponentType) => {
    setSelectedGame(() => GameComponent);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeGameModal = () => {
    setSelectedGame(null);
    setIsModalOpen(false);
    // Restore body scroll when modal is closed
    document.body.style.overflow = "unset";
  };

  // Cleanup effect to restore scroll if component unmounts with modal open
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        closeGameModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <div className="space-y-8 sm:space-y-16">
      {/* Indigo Part */}
      <section className="text-center pt-16 sm:pt-20 lg:pt-32 mt-4 sm:mt-6 pb-12 sm:pb-20 bg-gradient-to-br from-indigo-800 to-indigo-300 rounded-xl sm:rounded-2xl mx-0 sm:mx-0 lg:mx-[-5rem] xl:mx-[-10rem] 2xl:mx-[-20rem]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            👋Hi, I&apos;m{" "}
            <span className="text-teal-900">Harikrishnan Vinod</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-6 sm:mb-8 leading-relaxed">
            A passionate Computer Science student specializing in full-stack
            development and artificial intelligence. I love building innovative
            solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setActiveTab("projects")}
              className="group flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 border border-white/40 rounded-full -ml-1 sm:-ml-2 mr-2">
                  <BriefcaseBusiness size={16} />
                </div>
                <span className="font-medium text-white text-sm sm:text-base">
                  View My Work
                </span>
              </div>
            </button>
            <a
              href="https://www.linkedin.com/in/harikrishnan-vinod-901b1774/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-200 hover:shadow-md no-underline"
            >
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 border border-white/40 rounded-full -ml-1 sm:-ml-2 mr-2">
                  <Linkedin size={16} />
                </div>
                <span className="font-medium text-white text-sm sm:text-base">
                  Get in Touch
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projectsDisplay" className="py-8 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-slate-200">
            Featured Projects
          </h2>
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {projects.map((project) => (
              <div key={project.id} className="space-y-4 sm:space-y-6">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-700/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-48 sm:h-64 lg:h-80 object-contain bg-slate-100 hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-20 pt-4 sm:pt-8 pb-8 sm:pb-16 px-2 sm:px-4">
                  {/* Title Section */}
                  <div className="flex-[5]">
                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-200 leading-tight mb-3 sm:mb-5">
                      {project.title}
                    </h3>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white px-2 sm:px-3 py-1 rounded-full shadow-sm font-medium text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="flex-[7] space-y-4 sm:space-y-8">
                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap items-end gap-3 sm:gap-6">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs sm:text-sm font-medium"
                        >
                          <Github size={14} className="sm:w-4 sm:h-4" />
                          View Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm font-medium"
                        >
                          <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.gameComponent && (
                        <button
                          onClick={() => openGameModal(project.gameComponent!)}
                          className="inline-flex items-center gap-2 bg-gradient-to-br from-green-500 to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:from-green-600 hover:to-green-700 cursor-pointer transition-all duration-200 text-xs sm:text-sm font-medium shadow-lg shadow-green-500/25"
                        >
                          <Play size={14} className="sm:w-4 sm:h-4" />
                          Play Game
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Modal */}
      {isModalOpen && selectedGame && (
        <div
          className="fixed inset-0 w-full h-full bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            minHeight: "100vh",
          }}
          onClick={(e) => {
            // Close modal if clicking the backdrop
            if (e.target === e.currentTarget) {
              closeGameModal();
            }
          }}
        >
          <div
            className="bg-slate-900 rounded-xl sm:rounded-2xl max-w-xs sm:max-w-2xl lg:max-w-4xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-auto relative border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeGameModal}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-1.5 sm:p-2 rounded-full transition-colors"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>

            {/* Game Content */}
            <div className="p-4 sm:p-6">
              {React.createElement(selectedGame)}
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section className="pt-8 sm:pt-10 pb-12 sm:pb-20 bg-slate-800 rounded-xl sm:rounded-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-slate-200">
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm font-medium text-sm sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
