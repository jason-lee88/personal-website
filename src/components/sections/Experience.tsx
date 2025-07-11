import Section from "../Section";

import ExperienceCard from "../cards/ExperienceCard";

const Experience = () => (
  <Section header="Experience">
    <div className="flex flex-col gap-2">
      <ExperienceCard company="Lutron Electronics" title="Senior Project Software Engineer" startDate="January 2024" endDate="Present" body="What I did at Lutron" technologies={["React.js"]} />
      <ExperienceCard company="Lutron Electronics" title="Project Software Engineer" startDate="July 2022" endDate="January 2024" body="What I did at Lutron" technologies={["JavaScript", "TypeScript"]} />
      <ExperienceCard company="Aptima" title="Software Engineer Intern" startDate="June 2021" endDate="August 2021" body="What I did at Aptima" technologies={["Python"]} />
    </div>
  </Section>
);

export default Experience;
