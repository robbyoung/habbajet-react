import {createTestState} from '../../app/state/testState';
import {getPurchaseListFormatted} from '../../app/selectors';
import {habbajetColors} from '../../app/colors';

describe('Purchase Selectors', () => {
    describe('Get Purchase List Formatted', () => {
        it('will return the purchase list with date and cost formatted', () => {
            const state = createTestState(3, 1, 100);
            const result = getPurchaseListFormatted(state);

            expect(result[0]).toEqual({
                name: 'Purchase 0',
                cost: '$0.00',
                date: '23/03/2020',
                tagText: 'Tag 0',
                tagColor: habbajetColors[0],
                unformatted: state.purchases[0],
            });
        });

        it('can handle purchases with invalid tags', () => {
            const state = createTestState(3, 1, 100);
            state.purchases[0].tagId = 'invalid';
            const result = getPurchaseListFormatted(state);

            expect(result[0]).toEqual({
                name: 'Purchase 0',
                cost: '$0.00',
                date: '23/03/2020',
                tagText: '',
                tagColor: '',
                unformatted: state.purchases[0],
            });
        });
    });
});
