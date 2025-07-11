type IconProps = {
  icon: React.ReactNode;
  href: string;
}

const LinkIcon = ({ icon, href }: IconProps) => (
  <a className="w-10 h-10 bg-neutral-500/40 rounded-xl flex justify-center items-center text-neutral-50" href={href} target="_blank">
    {icon}
  </a>
);

export default LinkIcon;
