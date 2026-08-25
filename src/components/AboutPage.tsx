import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  GraduationCap,
  Brain,
  Medal,
  File,
  Award,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const internshipHighlights = [
  "Enhanced national healthcare systems, including ACC and CCPS.",
  "Refactored frontend components and form workflows to better match Figma designs.",
  "Kept frontend applications, backend APIs, and healthcare data endpoints aligned.",
  "Diagnosed complex NEHR data submission issues across integration layers.",
  "Managed data structure and field mapping refactors independently.",
  "Validated JSON-to-XML transformations for national healthcare integrations.",
];

const internshipTech = [
  "React",
  ".NET/C#",
  "PostgreSQL",
  "Azure DevOps",
  "CI/CD",
];

const AboutPage = () => (
  <div className="min-h-screen bg-slate-900 space-y-8 sm:space-y-16">
    <section className="py-8 sm:py-16 mx-0">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 items-start">
          <div className="flex flex-col items-center text-center lg:text-left lg:sticky lg:top-8">
            <img
              src="/Hari.png"
              alt="Harikrishnan Vinod"
              className="w-64 h-64 sm:w-50 sm:h-50 lg:w-90 lg:h-90 rounded-full mb-6 sm:mb-8 object-cover shadow-2xl"
            />
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-200 mb-3 sm:mb-4">
                Harikrishnan Vinod
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 mb-4 sm:mb-6">
                Computer Science Student
              </p>
              <div className="flex items-center justify-center text-slate-400 mb-6 sm:mb-8">
                <MapPin size={18} className="mr-2" />
                <span className="text-base sm:text-lg">Singapore</span>
              </div>

              <div className="flex justify-center mb-6 sm:mb-8">
                <a
                  href="/Resume_Harikrishnan Vinod (NTU).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-500/25"
                >
                  <File size={16} />
                  <span className="font-medium text-sm sm:text-base">
                    View Resume
                  </span>
                </a>
              </div>

              <div className="flex justify-center space-x-4 sm:space-x-6">
                <a
                  href="https://github.com/harikrishnan-vinod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/harikrishnan-vinod-901b1774/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:harikrishnan1@hotmail.com"
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:ml-30 space-y-8 sm:space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-slate-200">
                About Me
              </h2>
              <div className="text-slate-300 leading-relaxed space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg">
                  I&apos;m a passionate Computer Science student in my final
                  year, with a deep interest in full-stack development and
                  artificial intelligence. My journey in these fields started
                  with the curiosity to learn how the technology around me
                  really works. This curiosity has now blossomed into a desire
                  to leverage my tech knowledge to create dynamic solutions to
                  problems around me.
                </p>
                <p className="text-base sm:text-lg">
                  When I&apos;m not coding, I enjoy exploring new technologies,
                  and connecting with my friends and professors. I believe in
                  continuous learning and staying up-to-date with industry
                  trends.
                </p>
                <p className="text-base sm:text-lg">
                  I&apos;m actively seeking internship opportunities where I can
                  apply my skills, learn from experienced professionals, and
                  contribute to meaningful projects.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-slate-200">
                Education
              </h2>
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full shadow-lg flex-shrink-0">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mb-2">
                    Bachelor of Computer Science (Honours)
                  </h3>
                  <p className="text-lg sm:text-xl text-slate-300 mb-3">
                    Nanyang Technological University
                  </p>
                  <div className="flex items-center text-slate-400 mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span className="text-sm sm:text-base">2023 - 2027</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-300 text-sm sm:text-base">
                      <span className="font-semibold">Current GPA:</span>{" "}
                      4.31/5.0
                    </p>
                    <p className="text-slate-300 text-sm sm:text-base">
                      <span className="font-semibold">FYP Topic:</span> Markov
                      chain Monte Carlo methods for advanced models
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-slate-200">
                Internship Experience
              </h2>
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg flex-shrink-0">
                  <Briefcase className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mb-2">
                    Software Engineering Intern
                  </h3>
                  <p className="text-lg sm:text-xl text-slate-300 mb-3">
                    Synapxe
                  </p>
                  <div className="flex items-center text-slate-400 mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span className="text-sm sm:text-base">
                      Jan 2026 - Jul 2026
                    </span>
                  </div>

                  <div className="space-y-5">
                    <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-slate-300">
                      Built and improved healthcare product workflows across
                      frontend interfaces, backend contracts, and national data
                      integrations.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {internshipHighlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-800/40 p-3"
                        >
                          <CheckCircle2
                            className="mt-0.5 flex-shrink-0 text-cyan-400"
                            size={16}
                          />
                          <span className="text-sm leading-relaxed text-slate-300">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {internshipTech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-slate-200">
                Achievements & Activities
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex-shrink-0">
                    <Medal className="text-white" size={16} />
                  </div>
                  <span className="text-base sm:text-lg text-slate-300">
                    NTU-WIT Hackathon Top 5 (2025)
                  </span>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex-shrink-0">
                    <Brain className="text-white" size={16} />
                  </div>
                  <span className="text-base sm:text-lg text-slate-300">
                    DSTA TIL-AI BrainHack Semi-Finals (2024)
                  </span>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex-shrink-0">
                    <Award className="text-white" size={16} />
                  </div>
                  <span className="text-base sm:text-lg text-slate-300">
                    TMJC Gold Book Prize (2021)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
