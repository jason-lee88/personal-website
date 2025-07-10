import type { PropsWithChildren } from "react";

type NavLinkProps = {
  href: string;
};

const NavLink = ({ href, children }: PropsWithChildren<NavLinkProps>) => (
  <a href={href}><span className="mr-4 h-px w-8" />{children}</a>
);

export default NavLink;
