import {createTestState} from '../../app/state/testState';
import tagEditorReducer from '../../app/reducers/tagEditor';
import {DEFAULT_TAG_EDITOR_STATE} from '../../app/state/defaults';

describe('Tag Editor Reducer', () => {
    it('sets the initial state', () => {
        const action = {type: 'test action'};
        const newState = tagEditorReducer(undefined, action);
        expect(newState).toEqual(DEFAULT_TAG_EDITOR_STATE);
    });

    it('will not change state for unknown actions', () => {
        const action = {type: 'test action'};
        const state = createTestState(2, 0, 0).tagEditor;
        state.name.value = 'Filled in value';
        state.color = '#000000';

        const newState = tagEditorReducer(state, action);
        expect(newState).toEqual(state);
    });
});
