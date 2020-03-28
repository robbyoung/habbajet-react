import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {resetHabbajetAction} from '../../app/actions';

describe('Reset Habbajet Action', () => {
    it('will reset the weekly state of a habbajet', () => {
        const toReset = createTestState(1, 0, 0).habbajets[0];
        toReset.currentValue = 20;
        toReset.toClaim = true;
        toReset.successes = 7;
        const state = [toReset];
        const action = resetHabbajetAction(toReset.name);

        const newState = habbajetsReducer(state, action);
        const result = newState[0];
        expect(result.currentValue).toEqual(
            result.maxValue / Math.pow(result.factor, 7),
        );
        expect(result.toClaim).toEqual(false);
        expect(result.successes).toEqual(0);
        expect(state).toEqual([toReset]);
    });

    it('will return state unchanged for invalid habbajet names', () => {
        const state = createTestState(5, 1, 10).habbajets;
        const action = resetHabbajetAction('invalid');

        const newState = habbajetsReducer(state, action);
        expect([...newState]).toEqual(createTestState(5, 1, 10).habbajets);
        expect(state).toEqual(createTestState(5, 1, 10).habbajets);
    });
});
