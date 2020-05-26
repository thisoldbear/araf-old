import React from "react";
import { storiesOf } from "@storybook/react";

import NavLink from "./index";

storiesOf("Nav Link", module).add("Default", () => <NavLink label="Journal" />);
