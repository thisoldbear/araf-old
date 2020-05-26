import React from "react";

import "./styles.scss";

type NavLink = {
  label: string;
};

const NavLink: React.FC<NavLink> = ({ label }: NavLink) => (
  <a className="nav-link" href="/">
    {label}
  </a>
);

export default NavLink;
