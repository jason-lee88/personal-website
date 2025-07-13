import type { PropsWithChildren } from "react";

type NavLinkProps = {
  href: string;
  label: string;
  active: boolean;
};

const NavLink = ({ href, label, active }: PropsWithChildren<NavLinkProps>) => (
  <a className={`${active ? "text-neutral-50" : "text-neutral-500"} hover:text-neutral-50 transition ease-in-out select-none text-lg font-bold`} href={href}><span className="mr-4 h-px w-8" />{label.toUpperCase()}</a>
);

export default NavLink;
