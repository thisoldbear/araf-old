import React from "react";

import Logo from "../Logo";
import IconLink, { EnumIcon } from "../IconLink";

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
  </nav>
);

export default SiteHeader;
