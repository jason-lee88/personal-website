import Section from "../Section";

import ExperienceCard from "../cards/ExperienceCard";

export type ExperienceData = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  body: string;
  technologies: string[];
};

const experienceData: ExperienceData[] = [
  {
    company: "Lutron Electronics",
    title: "Senior Project Software Engineer",
    startDate: "January 2024",
    endDate: "Present",
    body: "Developing, maintaining, and shipping features for a modern, customer-facing web portal enabling cloud-based management of lighting systems. Advised and trained junior frontend engineers on best practices when contributing to the web portal. Implemented and maintained backend services and integrated with the frontend via RESTful APIs for full end-to-end functionality.",
    technologies: ["React", "TypeScript", "JavaScript", "HTML & CSS", "Jest", "Cypress", "AWS", "Go"],
  },
  {
    company: "Lutron Electronics",
    title: "Project Software Engineer",
    startDate: "July 2022",
    endDate: "January 2024",
    body: "Created the company's web-based design system containing 20+ reusable UI components, 100+ icons, and dark mode support used across all web applications. Collaborated closely with UX designers to implement best practices and ensure a cohesive user experience.",
    technologies: ["React", "TypeScript", "JavaScript", "HTML & CSS", "Jest", "Cypress", "Jenkins CI/CD", "TanStack Query"],
  },
  {
    company: "Merchant Math Tutoring LLC",
    title: "Founder and Engineer",
    startDate: "May 2023",
    endDate: "Present",
    body: "Developing a STEM tutoring platform for my start-up with my friend. Managing project requirements with business initiatives, successfully growing the platform.",
    technologies: ["React", "TypeScript", "HTML & CSS", "Node.js"],
  },
  {
    company: "Aptima",
    title: "Software Engineer Intern",
    startDate: "June 2021",
    endDate: "August 2021",
    body: "Developed a JavaScript scraper to ingest Microsoft Teams chat message data using Microsoft Graph API, enabling automated analysis of communication patterns within the organization. Containerized the scraper to be deployed in an existing Kubernetes cluster.",
    technologies: ["JavaScript", "Docker", "RESTful APIs", "Git"],
  },
];

const Experience = () => (
  <Section id="experience" header="Experience">
    <ul className="w-full flex flex-col gap-4">
      {experienceData.map((experience) => (
        <li key={`${experience.company}-${experience.title}`}>
          <ExperienceCard
            company={experience.company}
            title={experience.title}
            startDate={experience.startDate}
            endDate={experience.endDate}
            body={experience.body}
            technologies={experience.technologies}
          />
        </li>
      ))}
    </ul>
  </Section>
);

export default Experience;
