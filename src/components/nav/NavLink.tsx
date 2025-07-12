import type { PropsWithChildren } from "react";

type NavLinkProps = {
  href: string;
};

const NavLink = ({ href, children }: PropsWithChildren<NavLinkProps>) => (
  <a className="text-neutral-50" href={href}><span className="mr-4 h-px w-8" />{children}</a>
);

export default NavLink;
