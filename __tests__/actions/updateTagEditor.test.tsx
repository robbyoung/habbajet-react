import {updateTagEditorAction} from '../../app/actions';
import {createTestState} from '../../app/state/testState';
import tagEditorReducer from '../../app/reducers/tagEditor';

describe('Update Tag Editor Action', () => {
    it('can update the name field', () => {
        const state = createTestState(0, 0, 0).tagEditor;
        const action = updateTagEditorAction('Name', 'Test Text');
        const newState = tagEditorReducer(state, action);

        expect(newState.name.value).toEqual('Test Text');
        expect(state).toEqual(createTestState(0, 0, 0).tagEditor);
    });

    it('can update the color field', () => {
        const state = createTestState(0, 0, 0).tagEditor;
        const action = updateTagEditorAction('Color', '#ffffff');
        const newState = tagEditorReducer(state, action);

        expect(newState.color).toEqual('#ffffff');
        expect(state).toEqual(createTestState(0, 0, 0).tagEditor);
    });

    it('will return state unchanged for invalid field names', () => {
        const state = createTestState(0, 0, 0).tagEditor;
        const action = updateTagEditorAction('Invalid Name', 'asdfasdf');
        const newState = tagEditorReducer(state, action);

        expect(newState).toEqual(state);
        expect(state).toEqual(createTestState(0, 0, 0).tagEditor);
    });
});
