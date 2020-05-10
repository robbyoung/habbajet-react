import {createTestState} from '../../app/state/testState';
import {getBudgetFormatted, getBudgetDeficit} from '../../app/selectors';

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

    describe('Get Budget Deficit', () => {
        it('will return false for positive budgets', () => {
            const state = createTestState(0, 0, 100);
            const result = getBudgetDeficit(state);

            expect(result).toEqual(false);
        });

        it('will return false for zero-value budgets', () => {
            const state = createTestState(0, 0, 0);
            const result = getBudgetDeficit(state);

            expect(result).toEqual(false);
        });

        it('will return true for negative budgets', () => {
            const state = createTestState(0, 0, -100);
            const result = getBudgetDeficit(state);

            expect(result).toEqual(true);
        });
    });
});
