import {createTestState} from '../../app/state/testState';
import {
    getPurchaseStatsForAllTime,
    getPurchaseStatsForPastTwoWeeks,
    getPurchaseStatsForThisWeek,
    getWeeklyPurchaseStats,
} from '../../app/selectors/stats';
import {grey} from '../../app/colors';
import moment from 'moment';

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

    describe('Get Purchase Stats For Past Two Weeks', () => {
        it('will return sorted purchase stats for the past 14 days', () => {
            const state = createTestState(3, 0, 100);
            state.purchases = [
                {
                    id: '0',
                    cost: 30,
                    date: moment()
                        .subtract(10, 'days')
                        .toISOString(),
                    name: '10 Days Ago',
                    tagId: state.tags[0].id,
                },
                {
                    id: '1',
                    cost: 70,
                    date: moment()
                        .subtract(2, 'days')
                        .toISOString(),
                    name: '2 Days Ago',
                    tagId: state.tags[1].id,
                },
                {
                    id: '2',
                    cost: 20,
                    date: moment()
                        .subtract(15, 'days')
                        .toISOString(),
                    name: '15 Days Ago',
                    tagId: state.tags[1].id,
                },
            ];

            const results = getPurchaseStatsForPastTwoWeeks(state);
            expect(results).toEqual([
                {
                    tagName: state.tags[1].name,
                    total: 70,
                    percentage: 0.7,
                    color: state.tags[1].color,
                },
                {
                    tagName: state.tags[0].name,
                    total: 30,
                    percentage: 0.3,
                    color: state.tags[0].color,
                },
            ]);
        });

        it('will ignore future weeks', () => {
            const state = createTestState(3, 0, 100);
            state.purchases = [
                {
                    id: '0',
                    cost: 20,
                    date: moment()
                        .add(1, 'week')
                        .toISOString(),
                    name: 'Next Week',
                    tagId: state.tags[1].id,
                },
            ];

            const results = getPurchaseStatsForThisWeek(state);
            expect(results).toEqual([]);
        });
    });

    describe('Get Purchase Stats For Past Week', () => {
        it('will return sorted purchase stats since the previous Monday', () => {
            const state = createTestState(3, 0, 100);
            state.purchases = [
                {
                    id: '0',
                    cost: 30,
                    date: moment()
                        .startOf('day')
                        .toISOString(),
                    name: 'Today',
                    tagId: state.tags[0].id,
                },
                {
                    id: '1',
                    cost: 70,
                    date: moment()
                        .startOf('isoWeek')
                        .toISOString(),
                    name: 'Monday',
                    tagId: state.tags[1].id,
                },
                {
                    id: '2',
                    cost: 20,
                    date: moment()
                        .startOf('isoWeek')
                        .subtract(1, 'hour')
                        .toISOString(),
                    name: 'Last Sunday',
                    tagId: state.tags[1].id,
                },
            ];

            const results = getPurchaseStatsForThisWeek(state);
            expect(results).toEqual([
                {
                    tagName: state.tags[1].name,
                    total: 70,
                    percentage: 0.7,
                    color: state.tags[1].color,
                },
                {
                    tagName: state.tags[0].name,
                    total: 30,
                    percentage: 0.3,
                    color: state.tags[0].color,
                },
            ]);
        });

        it('will ignore future weeks', () => {
            const state = createTestState(3, 0, 100);
            state.purchases = [
                {
                    id: '0',
                    cost: 20,
                    date: moment()
                        .add(1, 'week')
                        .toISOString(),
                    name: 'Next Week',
                    tagId: state.tags[1].id,
                },
            ];

            const results = getPurchaseStatsForThisWeek(state);
            expect(results).toEqual([]);
        });
    });

    describe('Get Weekly Purchase Stats', () => {
        it('can get a list of purchase stats by week', () => {
            const state = createTestState(3, 0, 100);
            state.purchases = [
                {
                    id: '0',
                    cost: 30,
                    date: moment()
                        .startOf('day')
                        .toISOString(),
                    name: 'Today',
                    tagId: state.tags[0].id,
                },
                {
                    id: '1',
                    cost: 70,
                    date: moment()
                        .startOf('isoWeek')
                        .toISOString(),
                    name: 'Monday',
                    tagId: state.tags[1].id,
                },
                {
                    id: '2',
                    cost: 20,
                    date: moment()
                        .startOf('isoWeek')
                        .subtract(1, 'hour')
                        .toISOString(),
                    name: 'Last Sunday',
                    tagId: state.tags[1].id,
                },
                {
                    id: '3',
                    cost: 60,
                    date: moment()
                        .startOf('isoWeek')
                        .subtract(12, 'days')
                        .toISOString(),
                    name: 'Two Wednesdays Ago',
                    tagId: state.tags[0].id,
                },
                {
                    id: '4',
                    cost: 40,
                    date: moment()
                        .startOf('isoWeek')
                        .subtract(13, 'days')
                        .toISOString(),
                    name: 'Two Tuesdays Ago',
                    tagId: state.tags[1].id,
                },
            ];

            const results = getWeeklyPurchaseStats(state);
            expect(results).toEqual([
                [
                    {
                        tagName: state.tags[1].name,
                        total: 70,
                        percentage: 0.7,
                        color: state.tags[1].color,
                    },
                    {
                        tagName: state.tags[0].name,
                        total: 30,
                        percentage: 0.3,
                        color: state.tags[0].color,
                    },
                ],
                [
                    {
                        tagName: state.tags[1].name,
                        total: 20,
                        percentage: 1,
                        color: state.tags[1].color,
                    },
                ],
                [
                    {
                        tagName: state.tags[0].name,
                        total: 60,
                        percentage: 0.6,
                        color: state.tags[0].color,
                    },
                    {
                        tagName: state.tags[1].name,
                        total: 40,
                        percentage: 0.4,
                        color: state.tags[1].color,
                    },
                ],
            ]);
        });
    });
});
