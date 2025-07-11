import Section from "../Section";
import ProjectCard from "../cards/ProjectCard";

import MerchantMathTutoring from "../../assets/projects-thumbnails/merchant-math-tutoring.jpg";

const Projects = () => (
  <Section header="Projects">
    <div className="flex flex-col gap-2">
      <ProjectCard title="Merchant Math Tutoring" thumbnail={MerchantMathTutoring} body="A tutoring platform for math students." technologies={["React", "Node.js"]} />
    </div>
  </Section>
);

export default Projects;
