import Section from "../Section";
import ProjectCard from "../cards/ProjectCard";

import MerchantMathTutoring from "../../assets/projects-thumbnails/merchant-math-tutoring.jpg";
import PersonalWebsite from "../../assets/projects-thumbnails/personal-website.jpg";
import BeatBuddy from "../../assets/projects-thumbnails/beat-buddy.jpg";

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
    body: "A place for students to learn more about our tutoring platform start-up. View our team of tutors, course offerings, and testimonials from our students.",
    technologies: ["React", "TypeScript", "Node"],
    href: "https://www.merchantmathtutor.com"
  },
  {
    title: "Personal Website",
    thumbnail: PersonalWebsite,
    body: "My personal portfolio for others (like you!) to learn more about my work as a software engineer.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node"],
    href: "https://www.jsnlee.com"
  },
  {
    title: "Beat Buddy",
    thumbnail: BeatBuddy,
    body: "A full-stack platform for avid concert-goers to discover new events and meet new friends with similar interests. Create a user account, search for upcoming concerts, and connect with other users who are also interested.",
    technologies: ["PugJS", "Node", "Express", "Ticketmaster API", "MongoDB"],
    href: "https://beat-buddy-rg8w.onrender.com/"
  }
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
