import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {resetHabbajetAction} from '../../app/actions';

describe('Reset Habbajet Action', () => {
    it('will reset the weekly state of the selected habbajet', () => {
        const toReset = createTestState(1, 0, 0, 0).habbajets[0];
        toReset.currentValue = 20;
        toReset.toClaim = true;
        toReset.results = [0, 0, 2, 0, 0, 0, 0];
        toReset.dangerDays = [3, 4, 6, 0, 2, 0, 1];
        toReset.totalSlack = 3;
        toReset.remainingSlack = 1;
        toReset.currentStreak = 2;
        const state = [toReset];
        const action = resetHabbajetAction();

        const newState = habbajetsReducer(state, action);
        const result = newState[0];
        expect(result.currentValue).toEqual(result.maxValue);
        expect(result.toClaim).toEqual(false);
        expect(result.results).toEqual([]);
        expect(result.remainingSlack).toEqual(3);
        expect(result.oldStreaks).toEqual([2, 5]);
        expect(result.dangerDays).toEqual([3, 4, 6, 0, 2, 0, 1]);
        expect(state).toEqual([toReset]);
    });

    it('will return state unchanged if nothing is selected', () => {
        const state = createTestState(5, 1, 10).habbajets;
        const action = resetHabbajetAction();

        const newState = habbajetsReducer(state, action);
        expect([...newState]).toEqual(createTestState(5, 1, 10).habbajets);
        expect(state).toEqual(createTestState(5, 1, 10).habbajets);
    });
});
