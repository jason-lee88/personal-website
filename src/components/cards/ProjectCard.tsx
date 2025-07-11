import Card from "./Card";
import CardHeaderText from "./CardHeaderText";
import BodyText from "../typography/BodyText";
import Badge from "../Badge";

import ExternalLink from "../../assets/icons/external-link.svg?react";

type ProjectCardProps = {
  title: string;
  thumbnail: string;
  body: string;
  technologies: string[];
}

const ProjectCard = ({ title, thumbnail, body, technologies }: ProjectCardProps) => (
  <Card>
    <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded-lg mb-4" />
    <div className="w-full flex items-center text-neutral-50 gap-2">
      <CardHeaderText>{title}</CardHeaderText>
      <ExternalLink />
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