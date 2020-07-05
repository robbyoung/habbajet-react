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

    it('will add new tags to the end of the list', () => {
        const action = addTagAction('Test Tag', '#000000');
        const state = createTestState(0, 20, 0).tags;
        const newState = tagReducer(state, action);
        expect(newState).toEqual([
            ...createTestState(0, 20, 0).tags,
            action.newTag,
        ]);
        expect(state).toEqual(createTestState(0, 20, 0).tags);
    });

    it('will replace an existing tag if the id matches', () => {
        const state = createTestState(0, 20, 0).tags;
        const action = addTagAction('Test Tag', '#000000', state[1].id);
        const newState = tagReducer(state, action);

        const expected = createTestState(0, 20, 0).tags;
        expected[1].name = 'Test Tag';
        expected[1].color = '#000000';
        expect(newState).toEqual(expected);
        expect(state).toEqual(createTestState(0, 20, 0).tags);
    });
});
