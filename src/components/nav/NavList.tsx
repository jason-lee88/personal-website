import NavLink from "./NavLink";

const linkData = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const NavList = () => {
  return <nav>
    <ul className="flex flex-col gap-2">
      {linkData.map(({ id, label }) =>
        <li key={id} >
          <NavLink href={`/#${id}`}>{label}</NavLink>
        </li>
      )}
    </ul>
  </nav>
};

export default NavList;
