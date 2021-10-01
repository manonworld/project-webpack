import React from "react";
import { shallow } from "enzyme";
import NoMatch from "../src/client/components/NoMatch";

it("NoMatch renders without crashing", () => {
    shallow(<NoMatch />);
});
