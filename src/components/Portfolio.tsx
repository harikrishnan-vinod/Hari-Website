"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/components/types";
import { projectsInfo } from "@/components/data";
import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import ProjectsPage from "@/components/ProjectsPage";
import { House, FolderOpenDot, CircleUser } from "lucide-react";
import Connect4Game from "./Connect4";

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"home" | "about" | "projects">(
    "home"
  );

  const projects: Project[] = projectsInfo;

  const skills = [
    "JavaScript/TypeScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    "HTML/CSS",
    "Git",
    "C/C++",
    "RESTful APIs",
    "Machine Learning",
    "Artificial Intelligence",
    "Web Development",
    "Pandas",
    "Numpy",
    "GCP",
    "Firebase",
    "AWS",
    "Firebase/Firestore",
    "Data Analytics",
  ];

  useEffect(() => {
    if (activeTab === "home") {
      document.title = "Harikrishnan Vinod&apos;s Portfolio";
    } else if (activeTab === "about") {
      document.title = "About Me";
    } else if (activeTab === "projects") {
      document.title = "My Projects";
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-3 sm:py-4">
            <div className="flex bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-1 shadow-lg">
              <button
                onClick={() => setActiveTab("home")}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === "home"
                    ? "bg-slate-700 text-white shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <House size={16} />
                <span className="hidden sm:inline">Home</span>
              </button>
              <button
                onClick={() => setActiveTab("about")}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === "about"
                    ? "bg-slate-700 text-white shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <CircleUser size={16} />
                <span className="hidden sm:inline">About</span>
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === "projects"
                    ? "bg-slate-700 text-white shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <FolderOpenDot size={16} />
                <span className="hidden sm:inline">Projects</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {activeTab === "home" ? (
            <HomePage
              projects={projects}
              skills={skills}
              setActiveTab={setActiveTab}
            />
          ) : activeTab === "about" ? (
            <AboutPage />
          ) : (
            <ProjectsPage projects={projects} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-900 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center text-slate-300">
            <p className="text-sm sm:text-base">
              &copy; 2025 Harikrishnan Vinod. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
