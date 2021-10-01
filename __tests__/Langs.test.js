import React from "react";
import { shallow } from "enzyme";
import Langs from "../src/client/components/Langs";

it("Langs renders without crashing", () => {
    shallow(<Langs />);
});
