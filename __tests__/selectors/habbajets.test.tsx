import {createTestState} from '../../app/state/testState';
import {
    getHabbajets,
    getSelectedHabbajet,
    getHabbajetNames,
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
});
