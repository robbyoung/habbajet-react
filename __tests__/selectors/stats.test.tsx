import {createTestState} from '../../app/state/testState';
import {getPurchaseStatsForAllTime} from '../../app/selectors/stats';
import {grey} from '../../app/colors';

describe('Stats Selectors', () => {
    describe('Get Purchase Stats For All Time', () => {
        it('will return sorted purchase stats for the given state', () => {
            const state = createTestState(3, 5, 100);
            const results = getPurchaseStatsForAllTime(state);

            expect(results.length).toEqual(5);
            results.forEach((result, index) => {
                expect(result).toEqual({
                    tagName: state.tags[4 - index].name,
                    total: state.purchases[4 - index].cost,
                    percentage: state.purchases[4 - index].cost / 10,
                    color: state.tags[4 - index].color,
                });
            });
        });

        it('can aggregate multiple purchases under one tag', () => {
            const state = createTestState(3, 5, 100);
            state.purchases[1].tagId = state.tags[0].id;
            state.purchases[2].tagId = state.tags[0].id;
            state.purchases[3].tagId = state.tags[0].id;

            const results = getPurchaseStatsForAllTime(state);
            expect(results).toEqual([
                {
                    tagName: state.tags[0].name,
                    total: 6,
                    percentage: 0.6,
                    color: state.tags[0].color,
                },
                {
                    tagName: state.tags[4].name,
                    total: 4,
                    percentage: 0.4,
                    color: state.tags[4].color,
                },
            ]);
        });

        it('will create an entry for purchases with no tag', () => {
            const state = createTestState(3, 5, 100);
            state.purchases[0].tagId = '';
            state.purchases[1].tagId = '';
            state.purchases[2].tagId = '';
            state.purchases[3].tagId = '';

            const results = getPurchaseStatsForAllTime(state);
            expect(results).toEqual([
                {
                    tagName: 'Untagged',
                    total: 6,
                    percentage: 0.6,
                    color: grey,
                },
                {
                    tagName: state.tags[4].name,
                    total: 4,
                    percentage: 0.4,
                    color: state.tags[4].color,
                },
            ]);
        });

        it('returns an empty array if there are no purchases', () => {
            const state = createTestState(3, 0, 100);

            const results = getPurchaseStatsForAllTime(state);
            expect(results).toEqual([]);
        });
    });
});
