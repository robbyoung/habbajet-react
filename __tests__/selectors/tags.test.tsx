import {createTestState} from '../../app/state/testState';
import {getAllTags} from '../../app/selectors/tags';

describe('Tags Selectors', () => {
    describe('Get All Tags', () => {
        it('will return a list of tags in the state', () => {
            const state = createTestState(3, 1, 100);
            const result = getAllTags(state);

            expect(result).toEqual(state.tags);
        });
    });
});
