type IconProps = {
  children: React.ReactNode;
  href: string;
}

const Link = ({ children, href }: IconProps) => (
  <a className="text-neutral-50 font-semibold" href={href} target="_blank">
    {children}
  </a>
);

export default Link;
