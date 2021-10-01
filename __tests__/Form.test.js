import React from "react";
import { shallow, mount } from "enzyme";
import Form from "../src/client/components/Form";

it("Form renders without crashing", () => {
    shallow(<Form />);
});

describe("Check if Form is Having Correct Props", () => {
    it("accepts update props", () => {
        let update = () => {};
        const form = mount(<Form update={update} />);
        expect(form.props().update).toEqual(update);
    });
});
