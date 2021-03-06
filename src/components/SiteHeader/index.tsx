import React from "react";

import Logo from "../Logo";
import IconLink, { EnumIcon } from "../IconLink";
import NavLink from "../NavLink";

import "./styles.scss";

const SiteHeader: React.FC = () => (
  <nav className="site-header">
    <div className="site-header__cell site-header__cell--logo">
      <Logo linkTo="/" />
    </div>
    <div className="site-header__cell">
      <IconLink icon={EnumIcon.Instagram} />
    </div>
    <div className="site-header__cell">
      <IconLink icon={EnumIcon.Komoot} />
    </div>
    <div className="site-header__cell">
      <IconLink icon={EnumIcon.Strava} />
    </div>
    <div className="site-header__cell">
      <NavLink label="Journal" />
    </div>
    <div className="site-header__cell">
      <NavLink label="Contact" />
    </div>
  </nav>
);

export default SiteHeader;
