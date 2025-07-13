type CardHeaderTextProps = {
  children: React.ReactNode;
};

const CardHeaderText = ({ children }: CardHeaderTextProps) => (
  <h4 className="text-neutral-50 font-bold text-xl">
    {children}
  </h4>
);

export default CardHeaderText;