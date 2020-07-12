import {createTestState} from '../../app/state/testState';
import {getAllTags, getUnavailableTagNames} from '../../app/selectors/tags';

describe('Tags Selectors', () => {
    describe('Get All Tags', () => {
        it('will return a list of tags in the state', () => {
            const state = createTestState(3, 1, 100);
            const result = getAllTags(state);

            expect(result).toEqual(state.tags);
        });
    });

    describe('Get unavailable Tag Names', () => {
        it('will return a list of existing tag names', () => {
            const state = createTestState(3, 1, 100);
            const result = getUnavailableTagNames(state);

            expect(result).toEqual([
                'Tag 0',
                'Tag 1',
                'Tag 2',
                'Tag 3',
                'Tag 4',
                'Tag 5',
                'Tag 6',
                'Tag 7',
                'Tag 8',
                'Tag 9',
            ]);
        });

        it('will exclude the tag currently being edited', () => {
            const state = createTestState(3, 1, 100);
            state.tagEditor.id = '2';
            const result = getUnavailableTagNames(state);

            expect(result).toEqual([
                'Tag 0',
                'Tag 1',
                'Tag 3',
                'Tag 4',
                'Tag 5',
                'Tag 6',
                'Tag 7',
                'Tag 8',
                'Tag 9',
            ]);
        });
    });
});
