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
                id: action.newPurchase.id,
                name: 'Test Purchase',
                cost: 80,
                tagId: 'tagId',
                date: newState[0].date,
            },
        ]);
        expect(state).toEqual([]);
    });

    it('will add purchases to the front of the list', () => {
        const action = addPurchaseAction('Test Purchase', 80, 'tagId');
        const state = createTestState(0, 20, 0).purchases;
        const newState = purchasesReducer(state, action);
        expect(newState).toEqual([
            action.newPurchase,
            ...createTestState(0, 20, 0).purchases,
        ]);
        expect(state).toEqual(createTestState(0, 20, 0).purchases);
    });

    it('will replaces purchase a purchase if the id matches', () => {
        const state = createTestState(0, 20, 0).purchases;
        const action = addPurchaseAction(
            'Test Purchase',
            80,
            'tagId',
            state[3].id,
        );
        const newState = purchasesReducer(state, action);
        expect(newState.length).toEqual(20);
        expect(newState[3]).toEqual({
            name: 'Test Purchase',
            cost: 80,
            tagId: 'tagId',
            id: state[3].id,
            date: state[3].date,
        });
        expect(state).toEqual(createTestState(0, 20, 0).purchases);
    });

    it('will ignore the id paramater if it matches nothing', () => {
        const action = addPurchaseAction(
            'Test Purchase',
            80,
            'tagId',
            'invalid',
        );
        const state = createTestState(0, 20, 0).purchases;
        const newState = purchasesReducer(state, action);
        expect(newState).toEqual([
            action.newPurchase,
            ...createTestState(0, 20, 0).purchases,
        ]);
        expect(state).toEqual(createTestState(0, 20, 0).purchases);
    });
});
