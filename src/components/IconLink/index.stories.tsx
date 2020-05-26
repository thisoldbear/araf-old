import React from "react";
import { storiesOf } from "@storybook/react";

import IconLink, { EnumIcon } from "./index";

for (let icon in EnumIcon) {
  storiesOf("Icon Link", module).add(icon, () => <IconLink icon={icon} />);
}
