import React from "react";
import { storiesOf } from "@storybook/react";

import IconLink, { EnumIcon } from "./index";

Object.keys(EnumIcon).map((key: string) =>
  storiesOf("Icon Link", module).add(key, () => (
    <IconLink icon={EnumIcon[key as keyof typeof EnumIcon]} />
  ))
);
