type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) =>
  <div className="flex flex-col bg-neutral-800/50 rounded-lg p-6 shadow-lg">{children}</div>

export default Card;