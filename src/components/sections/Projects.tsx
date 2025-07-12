import Section from "../Section";
import ProjectCard from "../cards/ProjectCard";

import MerchantMathTutoring from "../../assets/projects-thumbnails/merchant-math-tutoring.jpg";

export type ProjectData = {
  title: string;
  thumbnail: string;
  body: string;
  technologies: string[];
}

const projectsData: ProjectData[] = [
  {
    title: "Merchant Math Tutoring",
    thumbnail: MerchantMathTutoring,
    body: "A tutoring platform for math students.",
    technologies: ["React", "Node.js"],
  },
];

const Projects = () => (
  <Section id="projects" header="Projects">
    <ul className="w-full flex flex-col gap-4">
      {projectsData.map((project) => (
        <li key={project.title}>
          <ProjectCard
            title={project.title}
            thumbnail={project.thumbnail}
            body={project.body}
            technologies={project.technologies}
          />
        </li>
      ))}
    </ul>
  </Section>
);

export default Projects;
