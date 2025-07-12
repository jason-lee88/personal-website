import NavLink from "./NavLink";

const linkData = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const NavList = () => {
  return <nav className="hidden xl:flex">
    <ul className="flex flex-col gap-6">
      {linkData.map(({ id, label }) =>
        <li key={id} >
          <NavLink href={`/#${id}`} label={label} />
        </li>
      )}
    </ul>
  </nav>
};

export default NavList;
