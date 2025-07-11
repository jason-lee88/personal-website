import Card from "./Card";
import CardHeaderText from "./CardHeaderText";
import BodyText from "../typography/BodyText";
import Badge from "../Badge";

type ExperienceCardProps = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  body: string;
  technologies: string[];
}

const ExperienceCard = ({ company, title, startDate, endDate, body, technologies }: ExperienceCardProps) => (
  <Card>
    <div className="w-full flex items-center gap-3">
      <CardHeaderText>{company}</CardHeaderText>
      <div className="h-1 w-1 bg-white rounded-full top-1/2 transform -translate-y-1/2" />
      <CardHeaderText>{title}</CardHeaderText>
    </div>
    <div className="w-full">
      <h5 className="text-neutral-50 text-sm">{startDate} - {endDate}</h5>
    </div>
    <BodyText>{body}</BodyText>
    <div className="flex flex-wrap gap-2 mt-2">
      {technologies.map((technology) =>
        <Badge key={technology}>{technology}</Badge>
      )}
    </div>
  </Card>
);

export default ExperienceCard;