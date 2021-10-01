import React from "react";
import { shallow, mount } from "enzyme";
import Progress from "../src/client/components/Progress";

it("Progress renders without crashing", () => {
    shallow(<Progress />);
});

describe("Check if Progress is Having Correct Props", () => {
    it("accepts confidence props", () => {
        let confidence = 50;
        const progress = mount(<Progress confidence={confidence} />);
        expect(progress.props().confidence).toEqual(confidence);
    });
});
