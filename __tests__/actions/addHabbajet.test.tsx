import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {addHabbajetAction} from '../../app/actions';
import {Habbajet} from '../../app/state';

describe('Add Habbajet Action', () => {
    it('can add a habbajet to the empty state', () => {
        const action = addHabbajetAction('Test Habbajet', 80);
        const state: Habbajet[] = [];
        const newState = habbajetsReducer(state, action);
        expect(newState).toEqual([action.newHabbajet]);
        expect(newState[0].name).toBe('Test Habbajet');
        expect(newState[0].value).toBe(80);
        expect(state).toEqual([]);
    });

    it('will add habbajets to the end of the list', () => {
        const action = addHabbajetAction('Test Habbajet', 80);
        const state = createTestState(10, 1, 20).habbajets;
        const newState = habbajetsReducer(state, action);
        expect(newState).toEqual([
            ...createTestState(10, 1, 20).habbajets,
            action.newHabbajet,
        ]);
        expect(state).toEqual(createTestState(10, 1, 20).habbajets);
    });
});
