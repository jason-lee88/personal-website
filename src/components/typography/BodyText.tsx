type BodyTextProps = {
  children: React.ReactNode;
}

const BodyText = ({ children }: BodyTextProps) => {
  return <p className={`text-neutral-400 text-lg`}>{children}</p>;
};

export default BodyText;