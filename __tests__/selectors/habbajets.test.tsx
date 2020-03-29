import {createTestState} from '../../app/state/testState';
import {getHabbajets, getSelectedHabbajet} from '../../app/selectors';

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
    });
});
