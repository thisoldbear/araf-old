import React from "react";
import wordmark from "../../assets/araf-logo-wordmark.svg";

import "./styles.scss";

type Logo = {
  linkTo?: string;
};

const Logo: React.FC<Logo> = ({ linkTo }: Logo) => {
  const logo = <img src={wordmark} alt="Araf logo" />;

  return linkTo ? (
    <a className="logo" href={linkTo}>
      {logo}
    </a>
  ) : (
    <div className="logo">{logo}</div>
  );
};

export default Logo;
