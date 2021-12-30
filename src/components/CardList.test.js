import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it('expect to render Card component', () => {
    const mockRobots = [
        {
            id: 2,
            name: 'John',
            uerName: 'JJ',
            email: 'john@email.com',
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})