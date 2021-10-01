import React from "react";
import { shallow, mount } from "enzyme";
import Layout from "../src/client/components/Layout";
import { MemoryRouter } from 'react-router-dom';

it("Layout renders without crashing", () => {
    shallow(<Layout />);
});

describe("Check if Layout is Having Correct Props", () => {
    it("accepts element props", () => {
        let element = <div></div>;
        const layout = mount(<MemoryRouter><Layout>{element}</Layout></MemoryRouter>);
        expect(typeof layout.props().children.props).toEqual(typeof element);
    });
});