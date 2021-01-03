import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {reorderHabbajetListAction} from '../../app/actions';

describe('Reorder Habbajet List Action', () => {
    it('will reorder the list of habbajets in the state', () => {
        let state = createTestState(4, 0, 0, 1).habbajets;
        let modified = [state[3], state[0], state[2], state[1]];

        const action = reorderHabbajetListAction(modified);

        const newState = habbajetsReducer(state, action);
        expect(newState).toEqual(modified);
        expect(state).toEqual(createTestState(4, 0, 0, 1).habbajets);
    });
});
