import {createTestState} from '../../app/state/testState';
import {Tag} from '../../app/state';
import {addTagAction} from '../../app/actions';
import tagReducer from '../../app/reducers/tags';

describe('Add Tag Action', () => {
    it('can add a tag to the empty state', () => {
        const action = addTagAction('Test Tag', '#ffffff');
        const state: Tag[] = [];
        const newState = tagReducer(state, action);
        expect(newState).toEqual([
            {
                name: 'Test Tag',
                color: '#ffffff',
                id: action.newTag.id,
            },
        ]);
        expect(state).toEqual([]);
    });

    it('will add tags to the end of the list', () => {
        const action = addTagAction('Test Tag', '#000000');
        const state = createTestState(0, 20, 0).tags;
        const newState = tagReducer(state, action);
        expect(newState).toEqual([
            ...createTestState(0, 20, 0).tags,
            action.newTag,
        ]);
        expect(state).toEqual(createTestState(0, 20, 0).tags);
    });
});
