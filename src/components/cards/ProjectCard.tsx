import Card from "./Card";
import CardHeaderText from "./CardHeaderText";
import BodyText from "../typography/BodyText";
import Badge from "../Badge";

import ExternalLink from "../../assets/icons/external-link.svg?react";

import type { ProjectData } from "../sections/Projects";

const ProjectCard = ({ title, thumbnail, body, technologies, href }: ProjectData) => (
  <Card href={href}>
    <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded-lg mb-4" />
    <div className="w-full flex justify-between text-neutral-50 gap-8">
      <CardHeaderText>{title}</CardHeaderText>
      <ExternalLink className="shrink-0" />
    </div>
    <BodyText>{body}</BodyText>
    <div className="flex flex-wrap gap-2 mt-2">
      {technologies.map((technology) =>
        <Badge key={technology}>{technology}</Badge>
      )}
    </div>
  </Card>
);

export default ProjectCard;