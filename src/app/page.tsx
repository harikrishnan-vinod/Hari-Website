import HomePage from "@/components/HomePage";
import { projectsInfo } from "@/components/data";

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

export default function Home() {
  return <HomePage projects={projectsInfo} skills={skills} />;
}
