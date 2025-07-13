type CardProps = {
  href: string;
  children: React.ReactNode;
};

const Card = ({ href, children }: CardProps) =>
  <a href={href} target="_blank" className="flex flex-col bg-neutral-800/50 rounded-lg p-6 shadow-lg">{children}</a>

export default Card;