import Card from "./Card";
import CardHeaderText from "./CardHeaderText";
import BodyText from "../typography/BodyText";
import Badge from "../Badge";
import ExternalLink from "../../assets/icons/external-link.svg?react";

import type { ExperienceData } from "../sections/Experience";

const ExperienceCard = ({ company, title, startDate, endDate, body, technologies, href }: ExperienceData) => (
  <Card href={href}>
    <div className="w-full inline-flex justify-between text-neutral-50 gap-8">
      <CardHeaderText>{`${company} · ${title}`}</CardHeaderText>
      <ExternalLink className="shrink-0" />
    </div>
    <div className="w-full">
      <h5 className="text-neutral-50 text-sm">{startDate} - {endDate}</h5>
    </div>
    <div className="w-full flex flex-col my-6">
      <BodyText>{body}</BodyText>
    </div>
    <div className="flex flex-wrap gap-2 mt-2">
      {technologies.map((technology) =>
        <Badge key={technology}>{technology}</Badge>
      )}
    </div>
  </Card >
);

export default ExperienceCard;