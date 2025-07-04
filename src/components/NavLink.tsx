import type { PropsWithChildren } from "react";

type NavLinkProps = {
  href: string;
};

const NavLink = ({ href, children }: PropsWithChildren<NavLinkProps>) => (
  <a href={href}>{children}</a>
);

export default NavLink;
