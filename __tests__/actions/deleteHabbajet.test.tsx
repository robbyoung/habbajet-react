import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {deleteHabbajetAction} from '../../app/actions';

describe('Delete Habbajet Action', () => {
    it('can delete a habbajet from the list', () => {
        const state = createTestState(3, 0, 0).habbajets;
        const action = deleteHabbajetAction(state[1].id);

        const newState = habbajetsReducer(state, action);
        expect(newState).toEqual([state[0], state[2]]);
        expect(state).toEqual(createTestState(3, 0, 0).habbajets);
    });

    it('will return state unchanged for invalid habbajet ids', () => {
        const state = createTestState(5, 1, 10).habbajets;
        const action = deleteHabbajetAction('invalid');

        const newState = habbajetsReducer(state, action);
        expect([...newState]).toEqual(createTestState(5, 1, 10).habbajets);
        expect(state).toEqual(createTestState(5, 1, 10).habbajets);
    });
});
