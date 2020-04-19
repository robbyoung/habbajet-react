import {createTestState} from '../../app/state/testState';
import {Purchase} from '../../app/state';
import purchasesReducer from '../../app/reducers/purchases';
import {addPurchaseAction} from '../../app/actions';

describe('Add Purchase Action', () => {
    it('can add a purchase to the empty state', () => {
        const action = addPurchaseAction('Test Purchase', 80, 'tagId');
        const state: Purchase[] = [];
        const newState = purchasesReducer(state, action);
        expect(newState).toEqual([
            {
                name: 'Test Purchase',
                cost: 80,
                tagId: 'tagId',
                date: newState[0].date,
            },
        ]);
        expect(state).toEqual([]);
    });

    it('will add purchases to the end of the list', () => {
        const action = addPurchaseAction('Test Purchase', 80, 'tagId');
        const state = createTestState(0, 20, 0).purchases;
        const newState = purchasesReducer(state, action);
        expect(newState).toEqual([
            ...createTestState(0, 20, 0).purchases,
            action.newPurchase,
        ]);
        expect(state).toEqual(createTestState(0, 20, 0).purchases);
    });
});
