import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from  'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

describe('setSearchField', () => {
    it('should create an action to search robots', () => {
        const text = 'hi'
        expect(actions.setSearchField(text)).toEqual({
            payload: 'hi',
            type: CHANGE_SEARCHFIELD
        })
    })
})

describe('requestRobots', () => {
    it("should creat a Pending action on request Robots", () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots())
        const action = store.getActions();
        expect(action[0]).toEqual({type: "REQUEST_ROBOTS_PENDING"});
    });
})