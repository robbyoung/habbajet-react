import budgetReducer from '../../app/reducers/budget';
import {createTestState} from '../../app/state/testState';

describe('Budget Reducer', () => {
    it('sets the initial state', () => {
        const action = {type: 'test action'};
        const newState = budgetReducer(undefined, action);
        expect(newState).toEqual(0);
    });

    it('will not change state for unknown actions', () => {
        const action = {type: 'test action'};
        const state = createTestState(2, 0, 40).budget;
        const newState = budgetReducer(state, action);
        expect(newState).toEqual(state);
    });
});
