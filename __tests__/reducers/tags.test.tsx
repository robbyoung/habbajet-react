import tagsReducer, {DEFAULT_TAGS} from '../../app/reducers/tags';
import {createTestState} from '../../app/state/testState';

describe('Tags Reducer', () => {
    it('sets the initial state', () => {
        const action = {type: 'test action'};
        const newState = tagsReducer(undefined, action);
        expect(newState).toEqual(DEFAULT_TAGS);
    });

    it('will not change state for unknown actions', () => {
        const action = {type: 'test action'};
        const state = createTestState(2, 0, 40).tags;
        const newState = tagsReducer(state, action);
        expect(newState).toEqual(state);
    });
});
