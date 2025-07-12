type SectionProps = {
  children: React.ReactNode;
  header: string;
  id: string;
};

const Section = ({ children, header, id }: SectionProps) => (
  <div className="w-full h-full flex flex-col items-start mb-30 pt-20" id={id}>
    <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-blue-400 to-blue-300 text-7xl font-bold mb-10">{header}</h3>
    {children}
  </div>
);

export default Section;
