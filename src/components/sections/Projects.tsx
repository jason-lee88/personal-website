import Section from "../Section";
import ProjectCard from "../cards/ProjectCard";

import MerchantMathTutoring from "../../assets/projects-thumbnails/merchant-math-tutoring.jpg";

export type ProjectData = {
  title: string;
  thumbnail: string;
  body: string;
  technologies: string[];
  href: string;
}

const projectsData: ProjectData[] = [
  {
    title: "Merchant Math Tutoring",
    thumbnail: MerchantMathTutoring,
    body: "A tutoring platform for math students.",
    technologies: ["React", "Node.js"],
    href: "https://merchantmathtutor.com"
  },
];

const Projects = () => (
  <Section id="projects" header="Projects">
    <ul className="w-full flex flex-col gap-4">
      {projectsData.map(({ title, thumbnail, body, technologies, href }) => (
        <li key={title}>
          <ProjectCard
            title={title}
            thumbnail={thumbnail}
            body={body}
            technologies={technologies}
            href={href}
          />
        </li>
      ))}
    </ul>
  </Section>
);

export default Projects;
