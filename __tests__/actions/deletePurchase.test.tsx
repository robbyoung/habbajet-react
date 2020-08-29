import {createTestState} from '../../app/state/testState';
import {Purchase} from '../../app/state';
import {deletePurchaseAction} from '../../app/actions';
import purchasesReducer from '../../app/reducers/purchases';

describe('Delete Purchase Action', () => {
    it('can delete a purchase from the purchase list', () => {
        const state = createTestState(3, 10, 100).purchases;
        const action = deletePurchaseAction(state[1].id);
        const newState = purchasesReducer(state, action);
        expect(newState.length).toEqual(state.length - 1);
        expect(
            newState.find(purchase => purchase.id === action.purchaseId),
        ).toBeUndefined();
    });

    it('can handle an empty purchase list', () => {
        const state: Purchase[] = [];
        const action = deletePurchaseAction('bad id');
        const newState = purchasesReducer(state, action);
        expect(newState).toEqual([]);
    });
});
