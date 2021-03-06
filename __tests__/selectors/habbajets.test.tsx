import {createTestState} from '../../app/state/testState';
import {
    getHabbajets,
    getSelectedHabbajet,
    getHabbajetNames,
    getUnselectedHabbajetNames,
    checkHabbajetEquality,
    getHabbajetDangerDays,
} from '../../app/selectors';

describe('Habbajet Selectors', () => {
    describe('Get Habbajets', () => {
        it('will return all habbajets in the state', () => {
            const state = createTestState(3, 10, 100);
            const result = getHabbajets(state);

            expect(result).toEqual(state.habbajets);
        });
    });

    describe('Get Selected Habbajet', () => {
        it('will return the selected habbajet', () => {
            const state = createTestState(3, 10, 100, 2);
            const result = getSelectedHabbajet(state);

            expect(result).toEqual(state.habbajets[2]);
        });

        it('will return undefined if nothing is selected', () => {
            const state = createTestState(3, 10, 100);
            const result = getSelectedHabbajet(state);

            expect(result).toBeUndefined();
        });

        it('will decrease current value if budget is negative', () => {
            const state = createTestState(3, 10, -10, 2);
            state.habbajets[2].currentValue = 100;
            const result = getSelectedHabbajet(state);

            expect(result!.currentValue).toBe(90);
        });
    });

    describe('Get Habbajet Names', () => {
        it('will return a list of habbajet names', () => {
            const state = createTestState(4, 1, 100);
            const result = getHabbajetNames(state);

            expect(result).toEqual([
                'Habbajet 0',
                'Habbajet 1',
                'Habbajet 2',
                'Habbajet 3',
            ]);
        });

        it('will return an empty list for no habbajets', () => {
            const state = createTestState(0, 1, 100);
            const result = getHabbajetNames(state);

            expect(result).toEqual([]);
        });
    });

    describe('Get Unselected Habbajet Names', () => {
        it('will return a list of unselected habbajet names', () => {
            const state = createTestState(4, 1, 100, 1);
            const result = getUnselectedHabbajetNames(state);

            expect(result).toEqual(['Habbajet 0', 'Habbajet 2', 'Habbajet 3']);
        });

        it('will return all names if nothing is selected', () => {
            const state = createTestState(4, 1, 100);
            const result = getUnselectedHabbajetNames(state);

            expect(result).toEqual([
                'Habbajet 0',
                'Habbajet 1',
                'Habbajet 2',
                'Habbajet 3',
            ]);
        });

        it('will return an empty list for no habbajets', () => {
            const state = createTestState(0, 1, 100);
            const result = getHabbajetNames(state);

            expect(result).toEqual([]);
        });
    });

    describe('Check Habbajet Equality', () => {
        it('will equate two identical habbajet objects', () => {
            const left = createTestState(1, 0, 0).habbajets[0];
            const right = createTestState(1, 0, 0).habbajets[0];
            const result = checkHabbajetEquality(left, right);
            expect(result).toEqual(true);
        });

        it('can detect important differences between habbajet objects', () => {
            const habbajets = createTestState(2, 0, 0).habbajets;
            const left = habbajets[0];
            const right = habbajets[1];
            const result = checkHabbajetEquality(left, right);
            expect(result).toEqual(false);
        });

        it('will return false if habbajets have different descriptions', () => {
            const habbajets = createTestState(2, 0, 0).habbajets;
            const left = habbajets[0];
            const right = {...left, description: 'different description'};
            const result = checkHabbajetEquality(left, right);
            expect(result).toEqual(false);
        });

        it('will return false if either habbajet is undefined', () => {
            const left = createTestState(1, 0, 0).habbajets[0];
            const right = undefined;
            const result = checkHabbajetEquality(left, right);
            expect(result).toEqual(false);
        });
    });

    describe('Get Habbajet Danger Days', () => {
        it('will parse danger days for the selected habbajet', () => {
            const state = createTestState(1, 0, 0, 0);
            state.habbajets[0].dangerDays = [2, 10, 3, 4, 14, 0, 2];
            const result = getHabbajetDangerDays(state);

            expect(result).toEqual({
                bestDay: 'Saturday',
                worstDay: 'Friday',
                color: state.habbajets[0].color,
            });
        });

        it('will return undefined if no habbajet is selected', () => {
            const state = createTestState(1, 0, 0);
            state.habbajets[0].dangerDays = [2, 10, 3, 4, 14, 0, 2];
            const result = getHabbajetDangerDays(state);

            expect(result).toBeUndefined();
        });

        it('will return NA results if no days have been processed', () => {
            const state = createTestState(1, 0, 0, 0);
            const result = getHabbajetDangerDays(state);

            expect(result).toEqual({
                bestDay: 'N/A',
                worstDay: 'N/A',
                color: state.habbajets[0].color,
            });
        });
    });
});
