import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {rewindHabbajetAction} from '../../app/actions';
import {Habbajet} from '../../app/state';

function testRewind(
    habbajet: Habbajet,
    expectedResults: number[],
    expectedDate: string,
) {
    const state: Habbajet[] = [
        ...createTestState(4, 0, 0).habbajets,
        {...habbajet},
    ];

    const action = rewindHabbajetAction();
    const rewinded = habbajetsReducer(state, action)[4];
    expect(rewinded).toEqual({
        ...habbajet,
        results: expectedResults,
        date: expectedDate,
        currentValue: habbajet.maxValue,
        remainingSlack: habbajet.totalSlack,
        currentStreak: habbajet.oldStreaks[0],
        bestStreak: habbajet.oldStreaks[1],
        toClaim: false,
    });
    expect(state).toEqual([
        ...createTestState(4, 0, 0).habbajets,
        {...habbajet},
    ]);
}

describe('Rewind Habbajet Action', () => {
    it('will undo a single day for the selected habbajet', () => {
        const habbajet: Habbajet = {
            id: 'testID',
            name: 'Test Habbajet',
            maxValue: 100,
            currentValue: 50,
            modifier: 2,
            results: [2],
            color: '#ffffff',
            date: '2020-03-23T11:00:00.000Z',
            toClaim: false,
            selected: true,
            currentStreak: 14,
            bestStreak: 14,
            oldStreaks: [10, 11],
            totalSlack: 2,
            remainingSlack: 1,
        };

        testRewind(habbajet, [], '2020-03-22T11:00:00.000Z');
    });

    it('will undo a claimable week of results for the selected habbajet', () => {
        const habbajet: Habbajet = {
            id: 'testID',
            name: 'Test Habbajet',
            maxValue: 200,
            currentValue: 70,
            modifier: 5,
            results: [2, 1, 1, 0, 0, 0, 1, 2, 0, 0, 2, 1, 1, 1],
            color: '#ffffff',
            date: '2020-03-29T11:00:00.000Z',
            toClaim: true,
            selected: true,
            currentStreak: 14,
            bestStreak: 14,
            oldStreaks: [10, 11],
            totalSlack: 4,
            remainingSlack: 0,
        };

        testRewind(habbajet, [2, 1, 1, 0, 0, 0, 1], '2020-03-22T11:00:00.000Z');
    });

    it('will return state unchanged if nothing is selected', () => {
        const state = createTestState(5, 1, 10).habbajets;
        const action = rewindHabbajetAction();

        const newState = habbajetsReducer(state, action);
        expect([...newState]).toEqual(createTestState(5, 1, 10).habbajets);
        expect(state).toEqual(createTestState(5, 1, 10).habbajets);
    });
});
