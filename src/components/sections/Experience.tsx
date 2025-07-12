import Section from "../Section";

import ExperienceCard from "../cards/ExperienceCard";

const experienceData = [
  {
    company: "Lutron Electronics",
    title: "Senior Project Software Engineer",
    startDate: "January 2024",
    endDate: "Present",
    body: "What I did at Lutron",
    technologies: ["React.js"],
  },
  {
    company: "Lutron Electronics",
    title: "Project Software Engineer",
    startDate: "July 2022",
    endDate: "January 2024",
    body: "What I did at Lutron",
    technologies: ["JavaScript", "TypeScript"],
  },
  {
    company: "Aptima",
    title: "Software Engineer Intern",
    startDate: "June 2021",
    endDate: "August 2021",
    body: "What I did at Aptima",
    technologies: ["Python"],
  },
];

const Experience = () => (
  <Section id="experience" header="Experience">
    <ul className="flex flex-col gap-2">
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
