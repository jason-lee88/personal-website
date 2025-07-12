import type { PropsWithChildren } from "react";

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: PropsWithChildren<NavLinkProps>) => (
  <a className="text-neutral-50 select-none text-sm font-bold" href={href}><span className="mr-4 h-px w-8" />{label.toUpperCase()}</a>
);

export default NavLink;
