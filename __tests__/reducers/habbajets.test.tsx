import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';

describe('Habbajets Reducer', () => {
    it('sets the initial state', () => {
        const action = {type: 'test action'};
        const newState = habbajetsReducer(undefined, action);
        expect(newState).toEqual([]);
    });

    it('will not change state for unknown actions', () => {
        const action = {type: 'test action'};
        const state = createTestState(2, 0, 0).habbajets;
        const newState = habbajetsReducer(state, action);
        expect(newState).toEqual(state);
    });
});
