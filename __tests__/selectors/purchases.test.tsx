import {createTestState} from '../../app/state/testState';
import {getPurchaseListFormatted} from '../../app/selectors';

describe('Purchase Selectors', () => {
    describe('Get Purchase List Formatted', () => {
        it('will return the purchase list with date and cost formatted', () => {
            const state = createTestState(3, 1, 100);
            const result = getPurchaseListFormatted(state);

            expect(result[0]).toEqual({
                name: 'Purchase 0',
                cost: '$0.00',
                date: '23/03/2020',
            });
        });
    });
});
