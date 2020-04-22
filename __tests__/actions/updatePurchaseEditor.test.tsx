import {updatePurchaseEditorAction} from '../../app/actions';
import {createTestState} from '../../app/state/testState';
import purchaseEditorReducer from '../../app/reducers/purchaseEditor';

describe('Update Purchase Editor Action', () => {
    it('can update the name field', () => {
        const state = createTestState(0, 0, 0).purchaseEditor;
        const action = updatePurchaseEditorAction('Name', 'Test Text');
        const newState = purchaseEditorReducer(state, action);

        expect(newState.name.value).toEqual('Test Text');
        expect(state).toEqual(createTestState(0, 0, 0).purchaseEditor);
    });

    it('can update the cost field', () => {
        const state = createTestState(0, 0, 0).purchaseEditor;
        const action = updatePurchaseEditorAction('Cost', '1234');
        const newState = purchaseEditorReducer(state, action);

        expect(newState.cost.value).toEqual('1234');
        expect(state).toEqual(createTestState(0, 0, 0).purchaseEditor);
    });

    it('can update the tagId field', () => {
        const state = createTestState(0, 0, 0).purchaseEditor;
        const action = updatePurchaseEditorAction('TagId', '12');
        const newState = purchaseEditorReducer(state, action);

        expect(newState.tagId).toEqual('12');
        expect(state).toEqual(createTestState(0, 0, 0).purchaseEditor);
    });

    it('will return state unchanged for invalid field names', () => {
        const state = createTestState(0, 0, 0).purchaseEditor;
        const action = updatePurchaseEditorAction('Invalid Name', 'asdfasdf');
        const newState = purchaseEditorReducer(state, action);

        expect(newState).toEqual(state);
        expect(state).toEqual(createTestState(0, 0, 0).purchaseEditor);
    });
});
