import {clearPurchaseEditorAction} from '../../app/actions';
import {createTestState} from '../../app/state/testState';
import purchaseEditorReducer, {
    DEFAULT_PURCHASE_EDITOR_STATE,
} from '../../app/reducers/purchaseEditor';

describe('Clear Purchase Editor Action', () => {
    it('will reset the editor to its default state', () => {
        const state = createTestState(0, 0, 0).purchaseEditor;
        state.name.value = 'Test Name';
        state.validated = true;

        const action = clearPurchaseEditorAction();
        const newState = purchaseEditorReducer(state, action);

        expect(newState).toEqual(DEFAULT_PURCHASE_EDITOR_STATE);
        expect(state.validated).toEqual(true);
        expect(state.id).toBeUndefined();
        expect(state.name.value).toEqual('Test Name');
    });
});
