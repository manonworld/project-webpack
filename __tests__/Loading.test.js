import React from "react";
import { shallow } from "enzyme";
import Loading from "../src/client/components/Loading";

it("Loading renders without crashing", () => {
    shallow(<Loading />);
});