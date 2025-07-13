import { useState, useEffect } from "react";

import NavLink from "./NavLink";

const linkData = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const NavList = () => {
  const [activeLink, setActiveLink] = useState<string>("about");

  const onScroll = () => {
    linkData.forEach(({ id }) => {
      const section = document.querySelector(`#${id}`);
      if (section) {
        const dimensions = section.getBoundingClientRect();
        if (dimensions.top <= 1 && dimensions.bottom > 1) {
          setActiveLink(id);
        }
      }
    });
  };

  useEffect(() => {
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <nav className="hidden xl:flex">
    <ul className="flex flex-col gap-4">
      {linkData.map(({ id, label }) =>
        <li key={id} >
          <NavLink href={`/#${id}`} label={label} active={activeLink === id} />
        </li>
      )}
    </ul>
  </nav>
};

export default NavList;
