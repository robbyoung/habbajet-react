import {invalidateEditorAction} from '../../app/actions';
import {createTestEditor} from '../../app/state/testState';
import habbajetEditorReducer from '../../app/reducers/habbajetEditor';

describe('Invalidate Editor Action', () => {
    it('Will change a validated habbajet editor to invalidated', () => {
        const state = createTestEditor('Edited', '200', '4', '2', true);
        const action = invalidateEditorAction();
        const newState = habbajetEditorReducer(state, action);

        expect(newState).toEqual(
            createTestEditor('Edited', '200', '4', '2', false),
        );
        expect(state).toEqual(
            createTestEditor('Edited', '200', '4', '2', true),
        );
    });

    it('Will leave an invalidated habbajet editor unchanged', () => {
        const state = createTestEditor('Edited', '200', '4', '2', false);
        const action = invalidateEditorAction();
        const newState = habbajetEditorReducer(state, action);

        expect(newState).toEqual(
            createTestEditor('Edited', '200', '4', '2', false),
        );
        expect(state).toEqual(
            createTestEditor('Edited', '200', '4', '2', false),
        );
    });
});
