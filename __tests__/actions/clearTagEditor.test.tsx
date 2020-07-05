import {clearTagEditorAction} from '../../app/actions';
import {createTestTagEditor} from '../../app/state/testState';
import tagEditorReducer from '../../app/reducers/tagEditor';
import {DEFAULT_TAG_EDITOR_STATE} from '../../app/state/defaults';

describe('Clear Tag Editor Action', () => {
    it('will reset the editor to its default state', () => {
        const state = createTestTagEditor('Tag Name', true);

        const action = clearTagEditorAction();
        const newState = tagEditorReducer(state, action);

        expect(newState).toEqual(DEFAULT_TAG_EDITOR_STATE);
        expect(state).toEqual(createTestTagEditor('Tag Name', true));
    });
});
