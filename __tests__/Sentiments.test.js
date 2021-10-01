import React from "react";
import { shallow, mount } from "enzyme";
import Sentiments from "../src/client/components/Sentiments";

it("Sentiments renders without crashing", () => {
    shallow(<Sentiments />);
});

describe("Check if Sentiments is Having Correct Props", () => {
    it("accepts results props", () => {
        let results = {
            response: {
                sentence_list: [],
                sentimented_concept_list: []
            }
        };
        const sentiments = mount(<Sentiments results={results} />);
        expect(sentiments.props().results).toEqual(results);
    });
});