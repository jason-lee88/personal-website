type BodyTextProps = {
  children: React.ReactNode;
}

const BodyText = ({ children }: BodyTextProps) => {
  return <p className={`text-neutral-400 font-medium text-lg`}>{children}</p>;
};

export default BodyText;