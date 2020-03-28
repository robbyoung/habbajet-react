import {updateBudgetAction} from '../../app/actions';
import budgetReducer from '../../app/reducers/budget';

describe('Update Budget Action', () => {
    it('can update the budget', () => {
        const state = 10;
        const action = updateBudgetAction(100);
        const newState = budgetReducer(state, action);

        expect(newState).toEqual(110);
        expect(state).toEqual(10);
    });
});
