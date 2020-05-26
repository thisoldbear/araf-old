import React from "react";

import Instagram from "../../assets/icon-instagram.svg";
import Komoot from "../../assets/icon-komoot.svg";
import Strava from "../../assets/icon-strava.svg";

import "./styles.scss";

export enum EnumIcon {
  Instagram = "Instagram",
  Komoot = "Komoot",
  Strava = "Strava",
}

type IconLink = {
  icon: string;
};

const IconLink: React.FC<IconLink> = ({ icon }: IconLink) => {
  let src: string = "";

  if (icon === EnumIcon.Instagram) {
    src = Instagram;
  }

  if (icon === EnumIcon.Komoot) {
    src = Komoot;
  }

  if (icon === EnumIcon.Strava) {
    src = Strava;
  }

  return (
    <a className="icon-link" href="/">
      <img className="icon-link__img" src={src} alt={icon} />
    </a>
  );
};

export default IconLink;
