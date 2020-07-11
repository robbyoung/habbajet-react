import {createTestState} from '../../app/state/testState';
import {Tag} from '../../app/state';
import {deleteTagAction} from '../../app/actions';
import tagReducer from '../../app/reducers/tags';

describe('Delete Tag Action', () => {
    it('can delete a tag from the tag list', () => {
        const state = createTestState(3, 10, 100).tags;
        const action = deleteTagAction(state[1].id);
        const newState = tagReducer(state, action);
        expect(newState.length).toEqual(state.length - 1);
        expect(newState.find(tag => tag.id === action.id)).toBeUndefined();
    });

    it('can handle an empty tag list', () => {
        const state: Tag[] = [];
        const action = deleteTagAction('bad id');
        const newState = tagReducer(state, action);
        expect(newState).toEqual([]);
    });
});
