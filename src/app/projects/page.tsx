import ProjectsPage from "@/components/ProjectsPage";
import { projectsInfo } from "@/components/data";

export const metadata = {
  title: "My Projects",
};

export default function Projects() {
  return <ProjectsPage projects={projectsInfo} />;
}
