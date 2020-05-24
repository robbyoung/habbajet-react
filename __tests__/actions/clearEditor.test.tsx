import {clearEditorAction} from '../../app/actions';
import {createTestState} from '../../app/state/testState';
import habbajetEditorReducer from '../../app/reducers/habbajetEditor';
import {DEFAULT_EDITOR_STATE} from '../../app/state/defaults';

describe('Clear Editor Action', () => {
    it('will reset the editor to its default state', () => {
        const state = createTestState(0, 0, 0).habbajetEditor;
        state.name.value = 'Test Name';
        state.validated = true;

        const action = clearEditorAction();
        const newState = habbajetEditorReducer(state, action);

        expect(newState).toEqual(DEFAULT_EDITOR_STATE);
        expect(state.validated).toEqual(true);
        expect(state.name.value).toEqual('Test Name');
    });
});
