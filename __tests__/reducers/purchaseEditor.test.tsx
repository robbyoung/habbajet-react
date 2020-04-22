import {createTestState} from '../../app/state/testState';
import purchaseEditorReducer, {
    DEFAULT_PURCHASE_EDITOR_STATE,
} from '../../app/reducers/purchaseEditor';

describe('Purchase Editor Reducer', () => {
    it('sets the initial state', () => {
        const action = {type: 'test action'};
        const newState = purchaseEditorReducer(undefined, action);
        expect(newState).toEqual(DEFAULT_PURCHASE_EDITOR_STATE);
    });

    it('will not change state for unknown actions', () => {
        const action = {type: 'test action'};
        const state = createTestState(2, 0, 0).purchaseEditor;
        state.name.value = 'Filled in value';
        state.cost.errorMessage = 'Error message';

        const newState = purchaseEditorReducer(state, action);
        expect(newState).toEqual(state);
    });
});
