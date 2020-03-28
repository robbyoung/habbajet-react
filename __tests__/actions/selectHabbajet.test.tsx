import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {selectHabbajetAction} from '../../app/actions';

describe('Select Habbajet Action', () => {
    it('can select a habbajet from the list', () => {
        const state = createTestState(10, 0, 0).habbajets;
        const action = selectHabbajetAction(state[2].name);
        const newState = habbajetsReducer(state, action);

        expect([...newState]).toEqual(createTestState(10, 0, 0, 2).habbajets);
        expect(state).toEqual(createTestState(10, 0, 0).habbajets);
    });

    it('will deselect a previously selected habbajet', () => {
        const state = createTestState(10, 0, 0, 1).habbajets;
        const action = selectHabbajetAction(state[2].name);
        const newState = habbajetsReducer(state, action);

        expect(newState).toEqual(createTestState(10, 0, 0, 2).habbajets);
        expect(state).toEqual(createTestState(10, 0, 0, 1).habbajets);
    });

    it('will return state unchanged for redundant selections', () => {
        const state = createTestState(10, 0, 0, 1).habbajets;
        const action = selectHabbajetAction(state[1].name);
        const newState = habbajetsReducer(state, action);

        expect(newState).toEqual(createTestState(10, 0, 0, 1).habbajets);
    });

    it('will deselect everything for invalid habbajet names', () => {
        const state = createTestState(10, 0, 0, 1).habbajets;
        const action = selectHabbajetAction('invalid');
        const newState = habbajetsReducer(state, action);

        expect([...newState]).toEqual(createTestState(10, 0, 0).habbajets);
    });
});
