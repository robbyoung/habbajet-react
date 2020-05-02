import {createTestState} from '../../app/state/testState';
import {
    getHabbajets,
    getSelectedHabbajet,
    getHabbajetNames,
    getUnselectedHabbajetNames,
    checkHabbajetEquality,
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

        it('will return false if either habbajet is undefined', () => {
            const left = createTestState(1, 0, 0).habbajets[0];
            const right = undefined;
            const result = checkHabbajetEquality(left, right);
            expect(result).toEqual(false);
        });
    });
});
