import purchasesReducer from '../../app/reducers/purchases';
import {createTestState} from '../../app/state/testState';

describe('Purchases Reducer', () => {
    it('sets the initial state', () => {
        const action = {type: 'test action'};
        const newState = purchasesReducer(undefined, action);
        expect(newState).toEqual([]);
    });

    it('will not change state for unknown actions', () => {
        const action = {type: 'test action'};
        const state = createTestState(2, 0, 0).purchases;
        const newState = purchasesReducer(state, action);
        expect(newState).toEqual(state);
    });
});
