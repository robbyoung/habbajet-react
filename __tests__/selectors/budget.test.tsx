import {createTestState} from '../../app/state/testState';
import {getBudgetFormatted} from '../../app/selectors';

describe('Budget Selectors', () => {
    describe('Get Budget Formatted', () => {
        it('will return the budget in currency format', () => {
            const state = createTestState(3, 10, 100);
            const result = getBudgetFormatted(state);

            expect(result).toEqual('$100.00');
        });

        it('will format a negative budget correctly', () => {
            const state = createTestState(3, 10, -80);
            const result = getBudgetFormatted(state);

            expect(result).toEqual('-$80.00');
        });
    });
});
