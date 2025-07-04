type SectionHeaderProps = {
  label: string;
};

const SectionHeader = ({ label }: SectionHeaderProps) => (
  <h3 className="text-white">{label}</h3>
);

export default SectionHeader;
