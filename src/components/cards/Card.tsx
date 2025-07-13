type CardProps = {
  href: string;
  children: React.ReactNode;
};

const Card = ({ href, children }: CardProps) =>
  <a href={href} target="_blank" className="flex flex-col transition ease-out hover:scale-103 bg-transparent hover:bg-neutral-800/20 rounded-lg p-6 shadow-lg">{children}</a>

export default Card;