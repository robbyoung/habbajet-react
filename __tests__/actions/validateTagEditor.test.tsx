import {validateTagEditorAction} from '../../app/actions';
import tagEditorReducer from '../../app/reducers/tagEditor';
import {createTestTagEditor} from '../../app/state/testState';

describe('Validate Tag Editor Action', () => {
    it('will pass valid purchase editor values', () => {
        const state = createTestTagEditor('Valid');

        const action = validateTagEditorAction(['Test ID']);
        const newState = tagEditorReducer(state, action);

        expect(newState).toEqual(createTestTagEditor('Valid', true));
        expect(state).toEqual(createTestTagEditor('Valid'));
    });

    it('will reject empty name fields', () => {
        const state = createTestTagEditor('');
        const action = validateTagEditorAction(['Test ID']);
        const newState = tagEditorReducer(state, action);

        expect(newState.name.errorMessage).toEqual(
            'Must be between 1 and 20 characters long',
        );
        expect(newState.validated).toEqual(true);
        expect(state).toEqual(createTestTagEditor(''));
    });

    it('will reject a name if it is in the unavailable names list', () => {
        const state = createTestTagEditor('Test ID');
        const action = validateTagEditorAction(['Test ID', 'Test ID 2']);
        const newState = tagEditorReducer(state, action);

        expect(newState.name.errorMessage).toEqual(
            'There is already a tag with that name',
        );
        expect(newState.validated).toEqual(true);
        expect(state).toEqual(createTestTagEditor('Test ID'));
    });

    it('will reject overly long name fields', () => {
        const state = createTestTagEditor(
            'This is a very long tag name, way too long actually',
        );
        const action = validateTagEditorAction(['Test ID']);
        const newState = tagEditorReducer(state, action);

        expect(newState.name.errorMessage).toEqual(
            'Must be between 1 and 20 characters long',
        );
        expect(newState.validated).toEqual(true);
        expect(state).toEqual(
            createTestTagEditor(
                'This is a very long tag name, way too long actually',
            ),
        );
    });
});
