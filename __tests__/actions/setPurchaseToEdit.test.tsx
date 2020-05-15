import {createTestPurchaseEditor} from '../../app/state/testState';
import purchaseEditorReducer from '../../app/reducers/purchaseEditor';
import {Purchase} from '../../app/state';
import {setPurchaseToEditAction} from '../../app/actions';

describe('Set Purchase To Edit Action', () => {
    it('will set the editor up to edit a given purchase', () => {
        const state = createTestPurchaseEditor('Old Name', 'Old Cost', false);
        const purchase: Purchase = {
            name: 'New Name',
            cost: 100,
            date: 'New Date',
            tagId: 'New Tag',
        };
        const action = setPurchaseToEditAction(purchase);
        const newState = purchaseEditorReducer(state, action);

        expect(newState).toEqual({
            name: {
                value: 'New Name',
                errorMessage: '',
            },
            cost: {
                value: '100',
                errorMessage: '',
            },
            tagId: 'New Tag',
            validated: false,
        });
        expect(state).toEqual(
            createTestPurchaseEditor('Old Name', 'Old Cost', false),
        );
    });

    it('will reset error messages and validation', () => {
        const state = createTestPurchaseEditor('Old Name', 'Old Cost', true);
        state.name.errorMessage = 'Error';
        state.cost.errorMessage = 'Error';

        const purchase: Purchase = {
            name: 'New Name',
            cost: 100,
            date: 'New Date',
            tagId: 'New Tag',
        };
        const action = setPurchaseToEditAction(purchase);
        const newState = purchaseEditorReducer(state, action);

        expect(newState).toEqual({
            name: {
                value: 'New Name',
                errorMessage: '',
            },
            cost: {
                value: '100',
                errorMessage: '',
            },
            tagId: 'New Tag',
            validated: false,
        });
    });
});
