type BodyTextProps = {
  children: React.ReactNode;
}

const BodyText = ({ children }: BodyTextProps) => {
  return <b className={`text-neutral-50 text-lg font-semibold`}>{children}</b>;
};

export default BodyText;