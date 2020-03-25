import { createTestState } from '../../app/state/testState';
import { getHabbajets } from '../../app/selector/habbajets';

describe('Habbajet Selectors', () => {
    describe('Get Habbajets', () => {
        it('will return all habbajets in the state', () => {
            const state = createTestState(3, 10, 100);
            const result = getHabbajets(state);

            expect(result).toEqual(state.habbajets);
        });
    });
});
