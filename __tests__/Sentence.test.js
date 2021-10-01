import React from "react";
import { shallow, mount } from "enzyme";
import Sentence from "../src/client/components/Sentence";

it("Sentence renders without crashing", () => {
    shallow(<Sentence />);
});

describe("Check if Sentence is Having Correct Props", () => {
    it("accepts sntnce props", () => {
        let sntnce = {
            segment_list: []
        };
        const sentence = mount(<Sentence sntnce={sntnce} />);
        expect(sentence.props().sntnce).toEqual(sntnce);
    });
});
