import React from "react";
import { shallow } from "enzyme";
import Home from "../src/client/components/Home";

it("Home renders without crashing", () => {
    shallow(<Home />);
});