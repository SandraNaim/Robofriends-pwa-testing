import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('rendering Main Page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            id:2,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'John',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps} />)

    // expect(wrapper2.instance().filteredRobots()).toEqual([]);
    expect(wrapper2.instance().filteredRobots()).toEqual([{
        id:2,
        name: 'John',
        email: 'john@gmail.com'
    }]);
})

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id:2,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredRobots = []
    const wrapper3 = shallow(<MainPage {...mockProps3} />)

    // expect(wrapper2.instance().filteredRobots()).toEqual([]);
    expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
})