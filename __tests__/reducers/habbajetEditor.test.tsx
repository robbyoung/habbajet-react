import habbajetEditorReducer, {
    DEFAULT_EDITOR_STATE,
} from '../../app/reducers/habbajetEditor';
import {createTestState} from '../../app/state/testState';

describe('Habbajet Editor Reducer', () => {
    it('sets the initial state', () => {
        const action = {type: 'test action'};
        const newState = habbajetEditorReducer(undefined, action);
        expect(newState).toEqual(DEFAULT_EDITOR_STATE);
    });

    it('will not change state for unknown actions', () => {
        const action = {type: 'test action'};
        const state = createTestState(2, 0, 0).habbajetEditor;
        state.name.value = 'Filled in value';
        state.value.errorMessage = 'Error message';

        const newState = habbajetEditorReducer(state, action);
        expect(newState).toEqual(state);
    });
});
