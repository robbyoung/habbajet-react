import {createTestTagEditor} from '../../app/state/testState';
import tagEditorReducer from '../../app/reducers/tagEditor';
import {Tag} from '../../app/state';
import {setTagToEditAction} from '../../app/actions';

describe('Set Tag To Edit Action', () => {
    it('will set the editor up to edit a given tag', () => {
        const state = createTestTagEditor('Old Name');
        const tag: Tag = {
            id: '0',
            name: 'New Name',
            color: '#000000',
        };
        const action = setTagToEditAction(tag);
        const newState = tagEditorReducer(state, action);

        expect(newState).toEqual({
            id: '0',
            name: {
                value: 'New Name',
                errorMessage: '',
            },
            color: '#000000',
            validated: false,
        });
        expect(state).toEqual(createTestTagEditor('Old Name'));
    });

    it('will reset error messages and validation', () => {
        const state = createTestTagEditor('Old Name', true);
        state.name.errorMessage = 'Invalid name';

        const tag: Tag = {
            id: '0',
            name: 'New Name',
            color: '#000000',
        };
        const action = setTagToEditAction(tag);
        const newState = tagEditorReducer(state, action);

        expect(newState).toEqual({
            id: '0',
            name: {
                value: 'New Name',
                errorMessage: '',
            },
            color: '#000000',
            validated: false,
        });
        expect(state.name.errorMessage).toEqual('Invalid name');
    });
});
