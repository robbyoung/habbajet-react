import {updateEditorFieldAction} from '../../app/actions';
import {createTestState} from '../../app/state/testState';
import habbajetEditorReducer from '../../app/reducers/habbajetEditor';

describe('Update Editor Field Action', () => {
    it('can update the name field', () => {
        const state = createTestState(0, 0, 0).habbajetEditor;
        const action = updateEditorFieldAction('Name', 'Test Text');
        const newState = habbajetEditorReducer(state, action);

        expect(newState.name.value).toEqual('Test Text');
        expect(state).toEqual(createTestState(0, 0, 0).habbajetEditor);
    });

    it('can update the description field', () => {
        const state = createTestState(0, 0, 0).habbajetEditor;
        const action = updateEditorFieldAction(
            'Description',
            'This is a description',
        );
        const newState = habbajetEditorReducer(state, action);

        expect(newState.description.value).toEqual('This is a description');
        expect(state).toEqual(createTestState(0, 0, 0).habbajetEditor);
    });

    it('can update the value field', () => {
        const state = createTestState(0, 0, 0).habbajetEditor;
        const action = updateEditorFieldAction('Value', '1234');
        const newState = habbajetEditorReducer(state, action);

        expect(newState.value.value).toEqual('1234');
        expect(state).toEqual(createTestState(0, 0, 0).habbajetEditor);
    });

    it('can update the modifier field', () => {
        const state = createTestState(0, 0, 0).habbajetEditor;
        const action = updateEditorFieldAction('Modifier', '5678');
        const newState = habbajetEditorReducer(state, action);

        expect(newState.modifier.value).toEqual('5678');
        expect(state).toEqual(createTestState(0, 0, 0).habbajetEditor);
    });

    it('can update the slack field', () => {
        const state = createTestState(0, 0, 0).habbajetEditor;
        const action = updateEditorFieldAction('Slack', '2');
        const newState = habbajetEditorReducer(state, action);

        expect(newState.slack.value).toEqual('2');
        expect(state).toEqual(createTestState(0, 0, 0).habbajetEditor);
    });

    it('can update the color field', () => {
        const state = createTestState(0, 0, 0).habbajetEditor;
        const action = updateEditorFieldAction('Color', '#000000');
        const newState = habbajetEditorReducer(state, action);

        expect(newState.color).toEqual('#000000');
        expect(state).toEqual(createTestState(0, 0, 0).habbajetEditor);
    });

    it('reset the validated field and any error messages', () => {
        const state = createTestState(0, 0, 0).habbajetEditor;
        state.validated = true;
        state.name.errorMessage = 'Invalid';

        const action = updateEditorFieldAction('Name', 'Test Text');
        const newState = habbajetEditorReducer(state, action);

        expect(newState.name.errorMessage).toEqual('');
        expect(newState.validated).toBe(false);
    });

    it('will return state unchanged for invalid field names', () => {
        const state = createTestState(0, 0, 0).habbajetEditor;
        const action = updateEditorFieldAction('Invalid Name', 'asdfasdf');
        const newState = habbajetEditorReducer(state, action);

        expect(newState).toEqual(state);
        expect(state).toEqual(createTestState(0, 0, 0).habbajetEditor);
    });
});
