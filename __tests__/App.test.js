import React from "react";
import { shallow } from "enzyme";
import App from "../src/client/components/App";

it("App renders without crashing", () => {
    shallow(<App />);
});